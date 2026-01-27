'use client'

import React, { useState } from "react"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Plus } from 'lucide-react'

export function EditFrom() {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    variant: '',
    price: '',
    numberPlate: '',
    carType: '',
    fuelType: '',
    mileage: '',
    location: '',
    year: '',
    description: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({
      make: '',
      model: '',
      variant: '',
      price: '',
      numberPlate: '',
      carType: '',
      fuelType: '',
      mileage: '',
      location: '',
      year: '',
      description: '',
    })
  }

  // ✅ Same style for every label
  const labelClass =
    "block text-[18px] sm:text-[20px] md:text-[22px] font-medium text-[#000000] mb-2"

  // ✅ Same style for every input
  const inputClass =
    "w-full border border-[#767676] rounded-[8px] h-[48px] sm:h-[50px] px-4 text-[#000000] " +
    "placeholder:text-[#767676] focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-[#14406E]"

  // ✅ Same style for textarea
  const textareaClass =
    "w-full border border-[#767676] rounded-[8px] px-4 py-3 text-[#000000] " +
    "placeholder:text-[#767676] min-h-[120px] sm:min-h-[140px] resize-none " +
    "focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-[#14406E]"

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-10 py-8">
      <div className="bg-white p-4 sm:p-6 md:p-8">

        {/* Image Upload Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
          <div className="bg-secondary h-44 sm:h-48 flex items-center justify-center border-2 border-dashed border-border">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-muted rounded-full p-3">
                <Plus className="w-6 h-6 text-muted-foreground" />
              </div>
              <span className="text-muted-foreground font-medium">Photos</span>
            </div>
          </div>
          <div className="bg-secondary h-44 sm:h-48 flex items-center justify-center border-2 border-dashed border-border">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-muted rounded-full p-3">
                <Plus className="w-6 h-6 text-muted-foreground" />
              </div>
              <span className="text-muted-foreground font-medium">Videos</span>
            </div>
          </div>
        </div>

        {/* Car Details Form */}
        <div className="mt-10 sm:mt-12 md:mt-[60px]">
          <h2 className="text-[26px] sm:text-[32px] md:text-[40px] font-bold mb-6">
            Car Details
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            {/* Make and Model */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className={labelClass}>Make</label>
                <Input
                  type="text"
                  name="make"
                  value={formData.make}
                  onChange={handleChange}
                  placeholder="Select Make"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Model</label>
                <Input
                  type="text"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  placeholder="Select Model"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Model Variant and Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className={labelClass}>Model Variant</label>
                <Input
                  type="text"
                  name="variant"
                  value={formData.variant}
                  onChange={handleChange}
                  placeholder="Select Variant"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Price</label>
                <Input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Enter Price"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Number Plate and Car Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className={labelClass}>Number Plate</label>
                <Input
                  type="text"
                  name="numberPlate"
                  value={formData.numberPlate}
                  onChange={handleChange}
                  placeholder="Enter Number Plate"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Car Type</label>
                <Input
                  type="text"
                  name="carType"
                  value={formData.carType}
                  onChange={handleChange}
                  placeholder="Select Car Type"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Fuel Type and Mileage */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className={labelClass}>Fuel Type</label>
                <Input
                  type="text"
                  name="fuelType"
                  value={formData.fuelType}
                  onChange={handleChange}
                  placeholder="Select Fuel Type"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Mileage</label>
                <Input
                  type="text"
                  name="mileage"
                  value={formData.mileage}
                  onChange={handleChange}
                  placeholder="Enter Mileage"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Location and Year */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className={labelClass}>Location</label>
                <Input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter Location"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Year</label>
                <Input
                  type="text"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  placeholder="Select Year"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className={labelClass}>Description about Car</label>
              <Textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter car description"
                className={textareaClass}
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col md:flex-row justify-center gap-x-10 gap-y-2">
          
             <div className="pt-2 sm:pt-4">
              <Button
                type="submit"
                className="w-full bg-transparent hover:bg-[#DC2033]/90 bg-[#DC2033] px-[100px] h-[44px]   text-white font-medium py-3 rounded-[8px]"
              >
                Save Changes
              </Button>
            </div>

            </div>
          </form>
        </div>

      </div>
    </div>
  )
}
