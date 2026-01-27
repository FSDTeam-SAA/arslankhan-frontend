'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function DealerShowcase() {
  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=400&fit=crop',
      alt: 'Car dealer meeting'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
      alt: 'Mechanic working'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1549399542-7e3f8b83ad38?w=500&h=400&fit=crop',
      alt: 'Red car'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1494976866556-6812c9d1c72e?w=500&h=400&fit=crop',
      alt: 'Car details'
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        {/* Header section with gallery and dealer info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Image Gallery Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {/* Large image top left */}
              <div className="col-span-1 row-span-2">
                <div className="relative w-full h-80 rounded-lg overflow-hidden">
                  <Image
                    src={images[0].src || "/placeholder.svg"}
                    alt={images[0].alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Top right with play button */}
              <div className="col-span-1">
                <div className="relative w-full h-[180px] rounded-lg overflow-hidden group cursor-pointer">
                  <Image
                    src={images[1].src || "/placeholder.svg"}
                    alt={images[1].alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 flex items-center justify-center transition-all">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-6 border-l-transparent border-r-0 border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"
                        style={{
                          borderLeft: '8px solid rgba(0,0,0,0.8)',
                          borderTop: '5px solid transparent',
                          borderBottom: '5px solid transparent'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom left */}
              <div className="col-span-1">
                <div className="relative w-full h-[180px] rounded-lg overflow-hidden">
                  <Image
                    src={images[2].src || "/placeholder.svg"}
                    alt={images[2].alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Bottom right with more overlay */}
              <div className="col-span-1">
                <Link href="/gallery">
                  <div className="relative w-full h-[180px] rounded-lg overflow-hidden group cursor-pointer">
                    <Image
                      src={images[3].src || "/placeholder.svg"}
                      alt={images[3].alt}
                      fill
                      className="object-cover group-hover:brightness-75 transition-all"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 flex items-center justify-center transition-all">
                      <span className="text-white text-2xl md:text-3xl font-bold">+ 5 More</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Dealer Info Card */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-b from-blue-900 to-blue-800 rounded-lg p-6 md:p-8 text-white sticky top-8">
              {/* Profile Image */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
                    alt="Dealer profile"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Dealer Info */}
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Dealers Name</h2>
              
              <div className="space-y-2 mb-6 text-sm md:text-base">
                <div className="flex items-start gap-2">
                  <span className="font-semibold min-w-fit">Member since 2025</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-semibold min-w-fit">Total Cars:</span>
                  <span>45 vehicles</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-semibold min-w-fit">Phone:</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-semibold min-w-fit">Email:</span>
                  <span>info@dealer.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-semibold min-w-fit">Location:</span>
                  <span>New York, USA</span>
                </div>
              </div>

              {/* Call Now Button */}
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded text-base">
                Call Now
              </Button>
            </div>
          </div>
        </div>

        {/* Business Description Section */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Business Description</h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-4xl">
            We are a forward-thinking business dedicated to delivering high-quality solutions tailored to our clients' needs. Our focus is on innovation, reliability, and customer satisfaction, ensuring every project is handled with professionalism and attention to detail. By combining expertise, creativity, and modern technology, we help individuals and organizations achieve their goals efficiently and effectively. We are a forward-thinking business dedicated to delivering high-quality solutions tailored to our clients' needs. Our focus is on innovation, reliability, and customer satisfaction, ensuring every project is handled with professionalism and attention to detail. By combining expertise, creativity, and modern technology, we help individuals and organizations achieve their goals efficiently and effectively.
          </p>
        </div>
      </div>
    </main>
  )
}
