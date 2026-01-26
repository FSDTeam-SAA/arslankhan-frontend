import React from 'react'
import DealersCard from './DealersCard'

const Dealers = () => {
    const carsData = [
        {
            id: 1,
            name: 'Audi',
            location: 'New York',
            image: '/image/location1.png',
        },
        {
            id: 2,
            name: 'Audi',
            location: 'Los Angeles',
            image: '/image/car1.png',
        },
        {
            id: 3,
            name: 'Audi',
            location: 'Chicago',
            image: '/image/car1.png',
        },
        {
            id: 4,
            name: 'Audi',
            location: 'Houston',
            image: '/image/car1.png',
        },
        {
            id: 1,
            name: 'Audi',
            location: 'New York',
            image: '/image/car1.png',
        },
        {
            id: 2,
            name: 'Audi',
            location: 'Los Angeles',
            image: '/image/car1.png',
        },
        {
            id: 3,
            name: 'Audi',
            location: 'Chicago',
            image: '/image/car1.png',
        },
        {
            id: 4,
            name: 'Audi',
            location: 'Houston',
            image: '/image/car1.png',
        },
    ]
    return (
        <div className=' container mx-auto py-16'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {carsData.map((car) => (
                    <DealersCard
                        key={car.id}
                        id={car.id}
                        name={car.name}
                        location={car.location}
                        image={car.image}
                    />
                ))}
            </div>
        </div>
    )
}

Dealers.propTypes = {

}

export default Dealers
