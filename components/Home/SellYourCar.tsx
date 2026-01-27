'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function SellYourCar() {
  return (
    <section className="bg-white py-12 md:py-20 px-1 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content - Dark Blue Box */}
          <div className="flex-1 bg-[#14406EE5] text-white p-8 md:p-12 ">
            <div className=" space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">
                Sell your car,<br />
                It&apos;s easy!
              </h2>
              <p className="text-lg text-gray-100">
                We Are A Trusted Car Marketplace That Connects Buyers, Sellers, And Dealers On One Simple Platform.
              </p>
              <div>
              <Link href="/sell-your-car">
              <Button className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg">
                Sell Your Car
              </Button>
              </Link>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex-1 relative w-full h-80 md:h-96">
            <Image
              src="/image/car2.png"
              alt="Red car"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
