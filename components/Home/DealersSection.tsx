'use client'
import { Button } from '@/components/ui/button'
import DealerCard from '../cards/DealerCard'

const dealersData = [
  {
    id: 1,
    name: 'UK Dealer',
    carsListed: 234,
    salesThisMonth: 14,
    badge: '1 Monthly',
    image: '/image/man.png',
  },
  {
    id: 2,
    name: 'UK Dealer',
    carsListed: 234,
    salesThisMonth: 14,
    badge: '1 Monthly',
    image: '/image/man.png',
  },
  {
    id: 3,
    name: 'UK Dealer',
    carsListed: 234,
    salesThisMonth: 14,
    badge: '1 Monthly',
    image: '/image/man.png',
  },
  {
    id: 4,
    name: 'UK Dealer',
    carsListed: 234,
    salesThisMonth: 14,
    badge: '1 Monthly',
    image: '/image/man.png',
  },
]

export default function DealersSection() {
  return (
    <section className="bg-[#14406E] py-12 md:py-10 px-1 sm:px-4 lg:px-0">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-white mb-3 font-semibold">
            Trusted Car Dealers In UK
          </h2>
          <p className="text-lg text-[#FFFFFF]">
            Find the best car dealers near you
          </p>
        </div>

        {/* Dealers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12">
          {dealersData.map((dealer) => (
            <DealerCard
              key={dealer.id}
              name={dealer.name}
              carsListed={dealer.carsListed}
              salesThisMonth={dealer.salesThisMonth}
              badge={dealer.badge}
              image={dealer.image}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-10 h-[52px] text-lg rounded-lg">
            View Details
          </Button>
        </div>
      </div>
    </section>
  )
}
