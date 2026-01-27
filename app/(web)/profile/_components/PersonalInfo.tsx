'use client'

import React from "react"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Camera } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export function PersonalInfo() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className=" container mx-auto px-4 py-8 mt-[108px] ">
      <div className="bg-white rounded-lg border-2 border-[#E4E4E4] p-8 relative">
        {/* Profile Avatar */}
        <div className="flex flex-col items-center mb-8 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative mb-4">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-300 to-amber-200 flex items-center justify-center overflow-hidden">
              <Image
                src="/placeholder-profile.png"
                alt="Profile"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 bg-white border-2 border-border rounded-full p-2 hover:bg-secondary transition-colors">
              <Camera className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
          <h1 className="text-[32px] font-semibold text-[#000000] text-center mt-10 mb-8">Personal Information</h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full border border-[#929292] h-[50px]"
              />
            </div>
            <div>
              <Input
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full border border-[#929292] h-[50px]"
              />
            </div>
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                 className="w-full border border-[#929292] h-[50px]"
              />
            </div>
            <div>
              <Input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                 className="w-full border border-[#929292] h-[50px]"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <Input
              id="address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full border border-[#929292] h-[50px]"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4 flex justify-center">
            <Button
              type="submit"
              className="w-[322px] bg-[#DC2033] hover:bg-[#DC2033]/90 text-primary-foreground font-medium h-[44px] rounded-lg"
            >
              save changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
