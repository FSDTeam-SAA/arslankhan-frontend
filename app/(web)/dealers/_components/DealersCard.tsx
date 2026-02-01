'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

interface CarCardProps {
  id: number
  name: string
 location: string
  image: string
}

export default function DealersCard({
 
  name,
  location,
  image,
}: CarCardProps) {
  

  return (
    <div className="bg-white rounded-2xl overflow-hidden  h-full flex flex-col">
      {/* Image Container */}
   <div className="relative w-[306px] h-[306px] mx-auto rounded-full overflow-hidden">
  <Image
    src={image || "/placeholder.svg"}
    alt={name}
    fill
    className="object-cover"
  />
</div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-xl font-bold text-[#000000] mb-1 text-center">
         {name} 
        </h3>
        <h4 className="text-lg font-semibold text-[#000000] mb-5 text-center">{location}</h4>

      

        {/* Button */}
        <Link href={`/dealer-details/1`}>
        <Button className="w-full bg-[#DC2033] hover:bg-red-700 text-white font-bold py-3 rounded-lg mt-auto">
          View Details
        </Button>
        </Link>
      </div>
    </div>
  )
}
