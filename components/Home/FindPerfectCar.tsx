'use client'

import Image from 'next/image'

export default function FindPerfectCar() {
  return (
    <section className="relative w-full h-96 md:h-[500px] bg-gradient-to-r from-dark-900 via-dark-800 to-dark-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1550355291-bbee04a92027?w=1200&h=600&fit=crop"
          alt="Hero car"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 to-dark-800/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-white text-center max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Find Your Perfect Car
          </h2>
          <p className="text-lg md:text-xl text-gray-100">
            Search Over 50,000 New And Used Cars From Trusted Dealers
          </p>
        </div>
      </div>
    </section>
  )
}
