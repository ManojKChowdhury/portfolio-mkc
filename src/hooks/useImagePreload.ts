import { useEffect, useState } from 'react'

/**
 * Custom hook to preload a sequence of images for the ScrollyCanvas component.
 * @param totalFrames Number of frames in the sequence.
 * @returns An object containing the array of preloaded images and a loading status.
 */
export function useImagePreload(totalFrames: number) {
  const [images, setImages] = useState<HTMLImageElement[]>([])
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = []
    let loadedCount = 0
    let isMounted = true

    const checkAllLoaded = () => {
      if (loadedCount === totalFrames && isMounted) {
        setImages([...loadedImages])
        setImagesLoaded(true)
      }
    }

    const onImageLoad = () => {
      loadedCount++
      checkAllLoaded()
    }

    const onImageError = (e: Event | string) => {
      console.error('Failed to load image in sequence', e)
      loadedCount++ // Increment anyway to prevent getting stuck
      checkAllLoaded()
    }

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image()
      const frameNum = i.toString().padStart(2, '0')
      img.src = `/sequence/frame_${frameNum}.webp`
      img.onload = onImageLoad
      img.onerror = onImageError
      loadedImages[i] = img
    }

    return () => {
      isMounted = false
      loadedImages.forEach((img) => {
        img.onload = null
        img.onerror = null
      })
    }
  }, [totalFrames])

  return { images, imagesLoaded }
}
