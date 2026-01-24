'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full h-96 md:h-[680px]  overflow-hidden">
      {/* Background car image */}
      <div className="absolute inset-0">
        <Image
          src="/image/hero2.jpg"
          alt="Hero car"
          fill
          className="object-cover "
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex  justify-start container mx-auto  pt-[140px]">
        <div className="text-white max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Find your perfect car
          </h1>
          <p className="text-lg md:text-2xl text-[#FFFFFF] mt-10">
            Search Over 50,000 New And Used Cars From Trusted Dealers
          </p>
        </div>
      </div>
    </section>
  )
}
