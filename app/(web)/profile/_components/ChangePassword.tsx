'use client'

import React, { useState } from "react"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function ChangePassword() {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.newPassword !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }

    console.log('Password changed:', formData)

    setFormData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    })
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-[108px]">
      <div className="bg-white rounded-lg border-2 border-[#E4E4E4] p-8">
        
        <h1 className="text-[32px] font-semibold text-[#000000] text-center mb-8">
          Change Password
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Current Password */}
          <div>
            <Input
              id="currentPassword"
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              placeholder="Current Password"
              className="w-full border border-[#929292] h-[50px]"
            />
          </div>

          {/* New Password */}
          <div>
            <Input
              id="newPassword"
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              placeholder="New Password"
              className="w-full border border-[#929292] h-[50px]"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <Input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
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
