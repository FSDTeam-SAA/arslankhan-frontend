'use client'

import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'
import { useState } from 'react'
import { ListingCard } from './Listingcard'

export function YourCars() {
  const [cars] = useState([
    {
      id: 1,
      image: '/image/car1.png',
      title: '2020 Audi A4',
      specs: '45 TFSI S Line',
      price: '$29,750',
    },
    {
      id: 2,
       image: '/image/car1.png',
      title: '2020 Audi A4',
      specs: '45 TFSI S Line',
      price: '$29,750',
    },
    {
      id: 3,
      image: '/image/car1.png',
      title: '2020 Audi A4',
      specs: '45 TFSI S Line',
      price: '$29,750',
    },
  ])

  const handleManageList = () => {
    console.log('Navigate to manage list')
  }

  const handleSellCar = () => {
    console.log('Sell car')
  }

  const handleLogout = () => {
    console.log('User logged out')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Your Cars Section */}
      <div className="bg-white rounded-lg border border-border p-6 md:p-8 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">Your Cars</h1>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          {cars.map((car) => (
            <ListingCard
              key={car.id}
              image={car.image}
              title={car.title}
              specs={car.specs}
              price={car.price}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleManageList}
            className="flex-1 sm:flex-none sm:min-w-[200px] bg-transparent hover:bg-transparent  border-2 border-[#DC2033] text-[#DC2033] test-base font-medium py-3 rounded-[8px] h-[43px] transition-colors"
          >
            Manage List
          </Button>
          <Button
            onClick={handleSellCar}
            className="flex-1 sm:flex-none sm:min-w-[200px] bg-[#DC2033] hover:bg-[#DC2033]/90 text-white text-base font-medium h-[42px] rounded-lg transition-colors"
          >
            Sell Car
          </Button>
        </div>
      </div>

      {/* Logout Button */}
      <div className="flex justify-center">
        <Button
          onClick={handleLogout}
          className="w-full sm:w-auto bg-[#DC2033] hover:bg-[#DC2033]/90 text-primary-foreground font-medium h-[43px] px-8 rounded-lg flex items-center justify-center gap-2 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Log out</span>
        </Button>
      </div>
    </div>
  )
}
