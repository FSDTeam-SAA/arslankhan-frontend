'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useState } from 'react'

interface CarCardProps {
  id: number
  year: number
  make: string
  model: string
  specs: string
  price: string
  image: string
}

export default function CarCard({
 
  year,
  make,
  model,
  specs,
  price,
  image,
}: CarCardProps) {
  const [isFavorited, setIsFavorited] = useState(false)

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow h-full flex flex-col">
      {/* Image Container */}
      <div className="relative h-48 md:h-56 bg-black">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${year} ${make} ${model}`}
          fill
          className="object-cover"
        />

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorited(!isFavorited)}
          className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
        >
          <svg
            className={`w-5 h-5 ${isFavorited ? 'fill-red-600' : 'text-gray-400'}`}
            fill={isFavorited ? 'currentColor' : 'none'}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-xl font-bold text-[#000000] mb-2 text-center">
          {year} {make} {model}
        </h3>

        {/* Specs */}
        <p className="text-sm text-gray-600 mb-4 text-center">
          {specs}
        </p>

        {/* Price */}
        <p className="text-lg font-bold text-foreground mb-6 text-center">
          {price}
        </p>

        {/* Button */}
        <Button className="w-full bg-[#DC2033] hover:bg-red-700 text-white font-bold py-3 rounded-lg mt-auto">
          View Details
        </Button>
      </div>
    </div>
  )
}
