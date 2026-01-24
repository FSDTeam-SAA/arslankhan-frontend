'use client'

import CarCard from "../cards/CarCard"

const carsData = [
  {
    id: 1,
    year: 2020,
    make: 'Audi',
    model: 'A4',
    specs: '45 TFSI S Line',
    price: '$29,750',
    image: '/image/car1.png',
  },
  {
    id: 2,
    year: 2020,
    make: 'Audi',
    model: 'A4',
    specs: '45 TFSI S Line',
    price: '$29,750',
    image: '/image/car1.png',
  },
  {
    id: 3,
    year: 2020,
    make: 'Audi',
    model: 'A4',
    specs: '45 TFSI S Line',
    price: '$29,750',
    image: '/image/car1.png',
  },
  {
    id: 4,
    year: 2020,
    make: 'Audi',
    model: 'A4',
    specs: '45 TFSI S Line',
    price: '$29,750',
    image: '/image/car1.png',
  },
]

export default function RecentlyAddedCars() {
  return (
    <section className="bg-white py-12 md:py-20 px-1 sm:px-6 lg:px-0">
      <div className="container mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#000000] mb-12 text-center text-balance">
          Recently Added Cars
        </h2>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {carsData.map((car) => (
            <CarCard
              key={car.id}
              id={car.id}
              year={car.year}
              make={car.make}
              model={car.model}
              specs={car.specs}
              price={car.price}
              image={car.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
