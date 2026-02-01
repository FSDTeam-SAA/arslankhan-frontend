'use client'

import { Button } from '@/components/ui/button'
import { CarFront, Tag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface DealerCardProps {
  name: string
  carsListed: number
  salesThisMonth: number
  badge: string
  image: string
}

export default function DealerCard({
  name,
  carsListed,
  salesThisMonth,
  badge,
  image,
}: DealerCardProps) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
      <div className="flex flex-col sm:flex-row h-auto sm:h-[275px]">
        {/* Left Content */}
        <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between relative">
          {/* Badge */}
          <div
            className="
    flex items-center gap-2 w-fit mb-4
    bg-[url('/image/tag.png')]
    bg-no-repeat bg-center bg-cover
     py-2 text-[#F3F3F3] text-base px-10 absolute top-2 left-0
  "
          >
            #{badge}
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-bold text-[#000000] mb-5 pt-7">{name}</h3>

          {/* Stats */}
          <div className="space-y-0 mb-6">
            <div className="flex items-center gap-3 text-foreground">
              <CarFront className="w-5 h-5 text-[#14406E]" />
              <span className="text-[#000000] font-normal text-[24px] "> <span className='font-bold'>{carsListed}</span> Cars listed</span>
            </div>
            <div className="flex items-center gap-3 text-foreground">
              <Tag className="w-5 h-5 text-[#14406E]" />
              <span className="text-[#000000] font-normal text-[24px]"><span className='font-bold'>{salesThisMonth}</span>  Sales this month</span>
            </div>
          </div>

          {/* Button */}
          <Link href="/dealer-details/1">
          <Button className="w-full bg-[#DC2033] hover:bg-red-700 text-white font-bold h-[49px] rounded-[8px]">
            View Details
          </Button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative h-[275px] sm:h-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}
