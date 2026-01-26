import Hero from '@/components/Home/Hero'
import React from 'react'
import Dealers from './_components/Dealers'

const page = () => {
  return (
    <div>
      <div>
        <Hero image="/image/dealer.png" height='h-[400px]'/>
      </div>
      <Dealers/>
    </div>
  )
}

export default page
