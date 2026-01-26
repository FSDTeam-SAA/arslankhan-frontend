'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { AuthLayout } from '../_components/AuthLayout'

export default function RegisterSeller() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Seller registration:', formData)
  }

  // ✅ Same theme like other auth pages
  const labelClass = 'block text-base font-medium text-[#14406E]'
  const inputClass = 'w-full h-[48px] border-[#969696]'
  const buttonClass = 'w-full bg-[#DC2033] hover:bg-red-700 text-white h-[48px]'

  return (
    <AuthLayout backgroundImage="/image/redcar.jpg">
      <div className="space-y-4">
        <div className="text-center space-y-1">
          <h1 className="text-2xl md:text-4xl font-bold text-[#14406E]">
            Create an account
          </h1>
          <h2 className="text-xl md:text-3xl font-bold text-[#14406E]">
            for Seller or Buyer
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* First Name */}
          <div className="space-y-1">
            <label className={labelClass}>
              First Name <span className="text-red-600">*</span>
            </label>
            <Input
              type="text"
              name="firstName"
              placeholder="Enter your name.."
              value={formData.firstName}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          {/* Last Name */}
          <div className="space-y-1">
            <label className={labelClass}>
              Last Name <span className="text-red-600">*</span>
            </label>
            <Input
              type="text"
              name="lastName"
              placeholder="Enter your name.."
              value={formData.lastName}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className={labelClass}>
              Email <span className="text-red-600">*</span>
            </label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email address.."
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          {/* Phone */}
          <div className="space-y-1">
            <label className={labelClass}>
              Phone No <span className="text-red-600">*</span>
            </label>
            <Input
              type="tel"
              name="phone"
              placeholder="Enter your number.."
              value={formData.phone}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          {/* Address */}
          <div className="space-y-1">
            <label className={labelClass}>
              Address <span className="text-red-600">*</span>
            </label>
            <Input
              type="text"
              name="address"
              placeholder="Enter your address.."
              value={formData.address}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className={labelClass}>
              Password <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter Password.."
                value={formData.password}
                onChange={handleChange}
                required
                className={`${inputClass} pr-10`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? '👁' : '👁‍🗨'}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-1">
            <label className={labelClass}>
              Confirm Password <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <Input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Enter Password.."
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className={`${inputClass} pr-10`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showConfirmPassword ? '👁' : '👁‍🗨'}
              </button>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-start gap-2 pt-2">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              required
              className="w-4 h-4 mt-0.5 accent-[#DC2033]"
            />
            <label className="text-sm text-gray-700">
              I agree to the{' '}
              <Link href="#" className="text-[#DC2033] hover:text-red-700">
                terms & conditions
              </Link>
            </label>
          </div>

          {/* Continue Button */}
          <Button type="submit" className={buttonClass}>
            Continue
          </Button>
        </form>

        {/* Login Link */}
        <div className="text-center text-sm">
          <span className="text-gray-600">Have an account? </span>
          <Link href="/sign-in" className="text-[#DC2033] hover:text-red-700 font-semibold">
            Log in
          </Link>
        </div>
      </div>
    </AuthLayout>
  )
}
