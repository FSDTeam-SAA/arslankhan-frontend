'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function GalleryPage() {
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=800&h=600&fit=crop',
      alt: 'Car dealer meeting'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      alt: 'Mechanic working'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1549399542-7e3f8b83ad38?w=800&h=600&fit=crop',
      alt: 'Red car'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1494976866556-6812c9d1c72e?w=800&h=600&fit=crop',
      alt: 'Car details'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1527365828892-1fbb3f1aa912?w=800&h=600&fit=crop',
      alt: 'Sports car'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      alt: 'Car interior'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop',
      alt: 'Car wash'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=800&h=600&fit=crop',
      alt: 'Car showroom'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1494976866556-6812c9d1c72e?w=800&h=600&fit=crop',
      alt: 'Luxury car'
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        {/* Header with Back Button */}
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <Link href="/">
            <Button variant="outline" size="icon" className="rounded-lg bg-transparent">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Gallery</h1>
        </div>

        {/* Masonry Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-lg group cursor-pointer ${
                index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
            >
              <div
                className={`relative bg-gray-200 ${
                  index === 0 ? 'h-96 sm:h-full' : 'h-64'
                }`}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12 md:mt-16">
          <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded text-base">
            Load More Images
          </Button>
        </div>

        {/* Back to Dealer Link */}
        <div className="flex justify-center mt-8">
          <Link href="/">
            <button className="text-blue-900 hover:text-blue-700 font-semibold underline">
              Back to Dealer Profile
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
