import CarCard from '@/components/cards/CarCard'
import React from 'react'

const Recentcar = () => {
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

  return (
    <div className=' container mx-auto my-20 px-1 sm:px-6 lg:px-0'>
        <h3 className='text-[40px] font-semibold text-[#000000]'>Recent Cars</h3>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-[50px]">
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
  )
}

export default Recentcar
