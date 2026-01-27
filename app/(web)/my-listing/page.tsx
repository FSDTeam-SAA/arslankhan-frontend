'use client'

import { useState } from 'react'
import { ListingCard } from '../profile/_components/Listingcard'

export default function ManageListing() {
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
  ])

  const handleEdit = (carId: number) => {
    console.log('Edit car:', carId)
  }

  const handleDelete = (carId: number) => {
    console.log('Delete car:', carId)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">Manage Listing</h1>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {cars.map((car) => (
            <ListingCard
              key={car.id}
              image={car.image}
              title={car.title}
              specs={car.specs}
              price={car.price}
              editButton={true}
              onEdit={() => handleEdit(car.id)}
              onDelete={() => handleDelete(car.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
