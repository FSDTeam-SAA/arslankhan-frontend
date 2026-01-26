'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { AuthLayout } from '../_components/AuthLayout'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Password reset requested for:', email)
  }

  // ✅ Same style like other auth pages
  const labelClass = 'block text-base font-medium text-[#14406E]'
  const inputClass = 'w-full h-[48px] border-[#969696]'
  const buttonClass = 'w-full bg-[#DC2033] hover:bg-red-700 text-white h-[48px]'

  return (
    <AuthLayout backgroundImage="/image/redcar.jpg">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl md:text-4xl font-bold text-[#14406E]">
            Forget Password
          </h1>
          <p className="text-gray-600 text-sm">
            Please enter the email address linked to your account. We&apos;ll send an one-time
            password (OTP) to your email for verification.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div className="space-y-1">
            <label className={labelClass}>
              Email <span className="text-red-600">*</span>
            </label>
            <Input
              type="email"
              placeholder="Enter your email address.."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={inputClass}
            />
          </div>

          {/* Send OTP Button */}
          <Button type="submit" className={buttonClass}>
            Send OTP
          </Button>
        </form>

        {/* Back to Login */}
        <div className="text-center text-sm">
          <span className="text-gray-600">Back to </span>
          <Link href="/sign-in" className="text-[#DC2033] hover:text-red-700 font-semibold">
            log in
          </Link>
        </div>
      </div>
    </AuthLayout>
  )
}
