import React from 'react'
import Car_detailspage from '../_components/Car_detailspage'
import Related_cars from '../_components/Related_cars'
import Hero from '@/components/Home/Hero'

const page = () => {
  return (
    <div>
        <Hero image="/image/cardetais2.png" title="We make buying cars a joy" description="We are a trusted car marketplace that connects buyers, sellers, and dealers on one simple platform. Our goal is to make buying and selling cars easy" height='h-[400px]' />
      <Car_detailspage/>
      <Related_cars/>
    </div>
  )
}

export default page
