import { useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const TOTAL_FRAMES = 75 // frames 0-74

// Get scroll height based on viewport width
const getScrollHeight = () => {
  if (typeof window === 'undefined') return '500vh'
  const width = window.innerWidth
  if (width < 640) return '350vh' // Mobile
  if (width < 768) return '400vh' // Small tablet
  if (width < 1024) return '450vh' // Tablet
  return '500vh' // Desktop
}

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [images, setImages] = useState<HTMLImageElement[]>([])
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [scrollHeight, setScrollHeight] = useState(getScrollHeight())

  // Update scroll height on resize
  useEffect(() => {
    const updateScrollHeight = () => {
      setScrollHeight(getScrollHeight())
    }

    window.addEventListener('resize', updateScrollHeight)
    return () => window.removeEventListener('resize', updateScrollHeight)
  }, [])

  // Track scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Map scroll progress (0-1) to frame index (0-74)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1])

  // Preload all images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = []
    let loadedCount = 0

    const onImageLoad = () => {
      loadedCount++
      if (loadedCount === TOTAL_FRAMES) {
        setImages(loadedImages)
        setImagesLoaded(true)
      }
    }

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image()
      const frameNum = i.toString().padStart(2, '0')
      img.src = `/sequence/frame_${frameNum}.webp`
      img.onload = onImageLoad
      loadedImages[i] = img
    }

    return () => {
      loadedImages.forEach((img) => {
        img.onload = null
        img.onerror = null
      })
    }
  }, [])

  // Render canvas when frame changes
  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current) return

    const unsubscribe = frameIndex.on('change', (latest) => {
      const canvas = canvasRef.current
      if (!canvas) return

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const index = Math.round(latest)
      const img = images[index]

      if (img && img.complete) {
        const rect = canvas.getBoundingClientRect()
        const cssWidth = rect.width
        const cssHeight = rect.height

        ctx.clearRect(0, 0, cssWidth, cssHeight)

        // Calculate dimensions for object-fit: cover behavior
        const canvasAspect = cssWidth / cssHeight
        const imgAspect = img.width / img.height

        let drawWidth, drawHeight, offsetX, offsetY

        if (imgAspect > canvasAspect) {
          drawHeight = cssHeight
          drawWidth = img.width * (cssHeight / img.height)
          offsetX = (cssWidth - drawWidth) / 2
          offsetY = 0
        } else {
          drawWidth = cssWidth
          drawHeight = img.height * (cssWidth / img.width)
          offsetX = 0
          offsetY = (cssHeight - drawHeight) / 2
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)
      }
    })

    return () => unsubscribe()
  }, [frameIndex, images, imagesLoaded])

  // Handle canvas resize
  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()

      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr

      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.scale(dpr, dpr)
      }

      // Force re-render current frame
      const currentFrame = Math.round(frameIndex.get())
      const img = images[currentFrame]
      if (img && img.complete && ctx) {
        const cssWidth = rect.width
        const cssHeight = rect.height

        ctx.clearRect(0, 0, cssWidth, cssHeight)
        const canvasAspect = cssWidth / cssHeight
        const imgAspect = img.width / img.height

        let drawWidth, drawHeight, offsetX, offsetY

        if (imgAspect > canvasAspect) {
          drawHeight = cssHeight
          drawWidth = img.width * (cssHeight / img.height)
          offsetX = (cssWidth - drawWidth) / 2
          offsetY = 0
        } else {
          drawWidth = cssWidth
          drawHeight = img.height * (cssWidth / img.width)
          offsetX = 0
          offsetY = (cssHeight - drawHeight) / 2
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)
      }
    }

    resize()
    window.addEventListener('resize', resize)

    return () => window.removeEventListener('resize', resize)
  }, [images, frameIndex])

  return (
    <div ref={containerRef} className="relative scrolly-container" style={{ height: scrollHeight }}>
      <div className="sticky top-0 h-screen w-full">
        <canvas
          ref={canvasRef}
          className="h-full w-full"
          style={{ display: imagesLoaded ? 'block' : 'none' }}
        />
        {!imagesLoaded && (
          <div className="flex h-full w-full items-center justify-center px-4">
            <div className="text-lg font-light text-white/50 sm:text-xl md:text-2xl">Loading experience...</div>
          </div>
        )}
      </div>
    </div>
  )
}
