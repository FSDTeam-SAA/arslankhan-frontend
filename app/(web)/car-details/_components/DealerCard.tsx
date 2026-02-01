'use client'

import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface DealerCardProps {
  dealerName: string
  dealerCompany: string
  dealerImage: string
  memberSince: string
  totalCars: number
  email: string
  phone: string
  address: string
}

export function DealerCard({
  dealerName,
  dealerCompany,
  dealerImage,
  memberSince,
  totalCars,
  email,
  phone,
  address,
}: DealerCardProps) {
  return (
    <div className="w-full bg-[#14406E] border border-primary/20 rounded-xl p-6 md:p-8">
    

      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Dealer Avatar */}
        <div className="flex-shrink-0">
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/30">
            <Image
              src={dealerImage || "/placeholder.svg"}
              alt={dealerName}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Dealer Info */}
        <div className="flex-1">
          <div className="mb-4">
              <p className="text-xs md:text-sm text-white font-semibold uppercase tracking-wide mb-2">
        Dealer Details
      </p>
            <h3 className="text-xl md:text-4xl font-bold text-white mb-1">
              {dealerName}
            </h3>
            <p className="text-sm md:text-base text-white">{dealerCompany}</p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
            <div className="bg-white border border-primary/40 rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-semibold text-white">
              Member since {memberSince}
            </div>
            <div className=" px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-semibold text-white">
              Total Cars {totalCars}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row justify-between space-y-2 mb-6">
            <div className="flex items-center gap-3 text-sm md:text-base text-white">
              <Mail className="w-4 h-4 md:w-5 md:h-5 text-white flex-shrink-0" />
              <span>{email}</span>
            </div>
            <div className="flex items-center gap-3 text-sm md:text-base text-white">
              <Phone className="w-4 h-4 md:w-5 md:h-5 text-white flex-shrink-0" />
              <span>{phone}</span>
            </div>
            <div className="flex items-start gap-3 text-sm md:text-base text-white">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-white flex-shrink-0 mt-0.5" />
              <span>{address}</span>
            </div>
          </div>

          {/* View Details Button */}
          <Button
            className="w-full md:w-auto bg-[#DC2033] hover:bg-[#DC2033]/90 text-white font-semibold"
            size="lg"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  )
}
