import React from 'react'
import { PersonalInfo } from './_components/PersonalInfo'
import { ChangePassword } from './_components/ChangePassword'
import { YourCars } from './_components/Yourcar'

const page = () => {
  return (
    <div>
      <PersonalInfo/>
      <ChangePassword/>
      <YourCars/>
    </div>
  )
}

export default page
