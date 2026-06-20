import { useScroll, useTransform } from 'framer-motion'
import { useCallback, useEffect, useRef } from 'react'
import { useImagePreload } from '../hooks/useImagePreload'

const TOTAL_FRAMES = 75 // frames 0-74

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dimensionsRef = useRef({ width: 0, height: 0 })

  const { images, imagesLoaded } = useImagePreload(TOTAL_FRAMES)

  // Track scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Map scroll progress (0-1) to frame index (0-74)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1])

  /**
   * Renders a specific frame to the canvas.
   * Logic handles 'object-fit: cover' behavior.
   */
  const renderFrame = useCallback(
    (index: number) => {
      const canvas = canvasRef.current
      if (!canvas || !imagesLoaded) return

      const img = images[index]
      if (!img || !img.complete) return

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const { width, height } = dimensionsRef.current
      if (width === 0 || height === 0) return

      ctx.clearRect(0, 0, width, height)

      // Calculate dimensions for object-fit: cover behavior
      const canvasAspect = width / height
      const imgAspect = img.width / img.height

      let drawWidth, drawHeight, offsetX, offsetY

      if (imgAspect > canvasAspect) {
        drawHeight = height
        drawWidth = img.width * (height / img.height)
        offsetX = (width - drawWidth) / 2
        offsetY = 0
      } else {
        drawWidth = width
        drawHeight = img.height * (width / img.width)
        offsetX = 0
        offsetY = (height - drawHeight) / 2
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)
    },
    [images, imagesLoaded]
  )

  // Render canvas when frame changes
  useEffect(() => {
    if (!imagesLoaded) return

    const unsubscribe = frameIndex.on('change', (latest) => {
      renderFrame(Math.round(latest))
    })

    return () => unsubscribe()
  }, [frameIndex, imagesLoaded, renderFrame])

  // Handle canvas resize and initial dimension setup
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()

      // Update cached dimensions
      dimensionsRef.current = { width: rect.width, height: rect.height }

      // Update internal buffer size for high DPI
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr

      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.scale(dpr, dpr)
      }

      // Re-render current frame after resize
      renderFrame(Math.round(frameIndex.get()))
    }

    resize()
    window.addEventListener('resize', resize)

    return () => window.removeEventListener('resize', resize)
  }, [frameIndex, renderFrame])

  return (
    <div ref={containerRef} className="relative h-[500vh] scrolly-container">
      <div className="sticky top-0 h-screen w-full">
        <canvas
          ref={canvasRef}
          className="h-full w-full"
          aria-label="Animated background showing experience sequence"
          role="img"
          style={{ display: imagesLoaded ? 'block' : 'none' }}
        />
        {!imagesLoaded && (
          <div className="flex h-full w-full items-center justify-center">
            <div className="text-2xl font-light text-white/50">Loading experience...</div>
          </div>
        )}
      </div>
    </div>
  )
}
