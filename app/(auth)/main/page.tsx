'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4 md:p-8">
      {/* Vertical Stripes Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(0,0,0,0.3) 80px, rgba(0,0,0,0.3) 160px)'
        }}></div>
      </div>

      {/* Main Content Card */}
      <div className="relative w-full max-w-4xl">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 lg:p-16">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8 md:mb-12">
            Sign in as a..
          </h1>

          {/* Two Column Grid - Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Dealer Option */}
            <div className="flex flex-col items-center space-y-6">
              <div className="w-full flex justify-center">
                <div className="relative w-48 h-24 md:w-56 md:h-32">
                  <Image
                    src="/image/login1.png"
                    alt="Dealer with cars"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <div className="w-full space-y-3">
                <Link href="/sign-in" className="block">
                  <Button
                    variant="outline"
                    className="w-full text-red-500 border-red-500 border-2 hover:bg-red-50 bg-white font-semibold text-base md:text-lg h-12 md:h-14"
                  >
                    Sign in as Dealer
                  </Button>
                </Link>
                <Link href="/register-dealer" className="block">
                  <Button
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold text-base md:text-lg h-12 md:h-14"
                  >
                    Register as Dealer
                  </Button>
                </Link>
              </div>
            </div>

            {/* Seller/Buyer Option */}
            <div className="flex flex-col items-center space-y-6">
              <div className="w-full flex justify-center">
                <div className="relative w-48 h-24 md:w-56 md:h-32">
                  <Image
                    src="/image/login2.png"
                    alt="Seller or Buyer with car"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <div className="w-full space-y-3">
                <Link href="/sign-in" className="block">
                  <Button
                    variant="outline"
                    className="w-full text-red-500 border-red-500 border-2 hover:bg-red-50 bg-white font-semibold text-base md:text-lg h-12 md:h-14"
                  >
                    Sign in as Private seller or Buyer
                  </Button>
                </Link>
                <Link href="/register-seller" className="block">
                  <Button
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold text-base md:text-lg h-12 md:h-14"
                  >
                    Register as Private seller or Buyer
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
