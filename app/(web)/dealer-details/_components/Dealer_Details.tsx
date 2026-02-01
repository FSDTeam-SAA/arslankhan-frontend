
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

type MediaItem =
  | {
      id: number
      type: 'image'
      src: string
      alt: string
    }
  | {
      id: number
      type: 'video'
      src: string
      poster?: string
      alt: string
    }

function MediaCard({ item, showPlayButton = false }: { item: MediaItem; showPlayButton?: boolean }) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-gray-200">
      {item.type === 'image' ? (
        <Image
          src={item.src || "/placeholder.svg"}
          alt={item.alt}
          fill
          className="object-cover"
        />
      ) : (
        <>
          <video
            src={item.src}
            poster={item.poster}
            className="absolute inset-0 w-full h-full object-cover"
            muted
            playsInline
            preload="metadata"
          />
          {showPlayButton && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div
                  className="ml-1"
                  style={{
                    borderLeft: '8px solid black',
                    borderTop: '5px solid transparent',
                    borderBottom: '5px solid transparent',
                  }}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default function DealerDetails() {
  const media: MediaItem[] = [
    {
      id: 1,
      type: 'image',
      src: '/image/man2.png',
      alt: 'Dealer meeting',
    },
    {
      id: 2,
      type: 'video',
      src: '/image/video.mp4',
      poster: '/images/image.png',
      alt: 'Dealer video',
    },
    {
      id: 3,
      type: 'image',
      src: '/image/man3.png',
      alt: 'Car image',
    },
    {
      id: 4,
      type: 'image',
      src: '/images/image.png',
      alt: 'Car details',
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* ================= Media Grid ================= */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">

              {/* Large */}
              <div className="col-span-1 row-span-1">
                <div className="relative w-full h-[222px] rounded-lg overflow-hidden">
                  <MediaCard item={media[0]} />
                </div>
              </div>

              {/* Top Right */}
              <div className="col-span-1">
                <div className="relative w-full h-[222px] rounded-lg overflow-hidden">
                  <MediaCard item={media[1]} showPlayButton={media[1].type === 'video'} />
                </div>
              </div>

              {/* Bottom Left */}
              <div className="col-span-1">
                <div className="relative w-full h-[222px] rounded-lg overflow-hidden">
                  <MediaCard item={media[2]} />
                </div>
              </div>

              {/* Bottom Right */}
              <div className="col-span-1">
                <Link href="/gallery">
                  <div className="relative w-full h-[222px]   rounded-lg overflow-hidden cursor-pointer">
                    <MediaCard item={media[3]} />

                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">
                        + 5 More
                      </span>
                    </div>
                  </div>
                </Link>
              </div>

            </div>
          </div>

          {/* ================= Dealer Info ================= */}
          <div className="lg:col-span-1">
            <div className="bg-[#14406EFA] rounded-lg p-6 md:p-8 text-white sticky top-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Dealers Name
              </h2>

              <div className="space-y-2 mb-6 text-sm md:text-base">
                <p><strong>Member since:</strong> 2025</p>
                <p><strong>Total Cars:</strong> 45 vehicles</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Email:</strong> info@dealer.com</p>
                <p><strong>Location:</strong> New York, USA</p>
              </div>

              <Button className="w-full bg-[#DC2033] hover:bg-red-700 h-[48px] rounded-[8px]">
                Call Now
              </Button>
            </div>
          </div>
        </div>

        {/* ================= Description ================= */}
        <div className="mt-12 md:mt-[108px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Business Description
          </h2>
          <p className="text-[#4A4A4A] text-[24px] leading-[150%]">
            We are a forward-thinking business dedicated to delivering high-quality solutions tailored to our clients’ needs. Our focus is on innovation, reliability, and customer satisfaction, ensuring every project is handled with professionalism and attention to detail. By combining expertise, creativity, and modern technology, we help individuals and organizations achieve their goals efficiently and effectively.We are a forward-thinking business dedicated to delivering high-quality solutions tailored to our clients’ needs. Our focus is on innovation, reliability, and customer satisfaction, ensuring every project is handled with professionalism and attention to detail. By combining expertise, creativity, and modern technology, we help individuals and organizations achieve their goals efficiently and effectively.
          </p>
        </div>
      </div>
    </main>
  )
}
