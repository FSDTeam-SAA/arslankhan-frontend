'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageCarouselProps {
  images: string[]
  title: string
}

export function ImageCarousel({ images, title }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(Math.floor(images.length / 2))
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay || images.length === 0) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [autoPlay, images.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    setAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
    setAutoPlay(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setAutoPlay(false)
  }

  const getImagePosition = (index: number) => {
    const distance = ((index - currentIndex + images.length) % images.length)
    
    if (distance > images.length / 2) {
      return distance - images.length
    }
    return distance
  }

  const getImageStyle = (index: number) => {
    const position = getImagePosition(index)
    const distance = Math.abs(position)
    const isCenter = index === currentIndex

    if (isCenter) {
      return {
        zIndex: 50,
        scale: 1,
        opacity: 1,
        offset: 0,
      }
    }

    return {
      zIndex: 40 - Math.abs(distance) * 10,
      scale: 1 - Math.abs(distance) * 0.15,
      opacity: Math.max(0.3, 1 - Math.abs(distance) * 0.25),
      offset: position * 140,
    }
  }

  if (!images || images.length === 0) {
    return (
      <div className="w-full space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground">
          {title}
        </h1>
        <div className="relative h-96 md:h-[500px] lg:h-[600px] flex items-center justify-center bg-muted rounded-lg">
          <p className="text-muted-foreground">No images available</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full space-y-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground">
        {title}
      </h1>

      {/* Carousel Container */}
      <div className="relative h-64 md:h-96 lg:h-[500px] w-full perspective" style={{ perspective: '1000px' }}>
        {/* Background blur effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-full h-full " />
        </div>

        {/* Images Container */}
        <div className="absolute inset-0 flex items-center justify-center overflow-visible">
          {images.map((image, index) => {
            const style = getImageStyle(index)
            const isCenter = index === currentIndex

            return (
              <div
                key={index}
                className="absolute transition-all duration-700 ease-out"
                style={{
                  transform: `translateX(${style.offset}px) scale(${style.scale})`,
                  opacity: style.opacity,
                  zIndex: style.zIndex,
                  willChange: 'transform, opacity',
                }}
              >
                <div className={`relative rounded-xl overflow-hidden shadow-2xl ${isCenter ? 'ring-4 ring-primary' : ''}`}>
                  {/* Image wrapper with fixed dimensions */}
                  <div className="relative w-56 h-64 md:w-72 md:h-80 lg:w-96 lg:h-96">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${title} view ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={isCenter}
                      sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, 384px"
                    />
                  </div>
                  {/* Overlay for non-center images */}
                  {!isCenter && (
                    <div className="absolute inset-0 bg-black/20" />
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-50 p-2 md:p-3 rounded-full bg-primary/80 hover:bg-primary transition-all duration-300 group"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-50 p-2 md:p-3 rounded-full bg-primary/80 hover:bg-primary transition-all duration-300 group"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-3 flex-wrap">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-primary w-2 h-2 md:w-3 md:h-3'
                : 'bg-primary/40 hover:bg-primary/60 w-2 h-2 md:w-2 md:h-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
