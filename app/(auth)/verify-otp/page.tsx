'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { AuthLayout } from '../_components/AuthLayout'

export default function VerifyOTP() {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.querySelector(
        `input[data-index="${index + 1}"]`
      ) as HTMLInputElement
      nextInput?.focus()
    }
  }

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.querySelector(
        `input[data-index="${index - 1}"]`
      ) as HTMLInputElement
      prevInput?.focus()
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const otpCode = otp.join('')
    console.log('OTP verification:', otpCode)
  }

  // ✅ Same theme classes
  const buttonClass = 'w-full bg-[#DC2033] hover:bg-red-700 text-white h-[48px]'

  return (
    <AuthLayout backgroundImage="/image/redcar.jpg">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl md:text-4xl font-bold text-[#14406E]">
            Enter OTP
          </h1>
          <p className="text-gray-600 text-sm">
            An OTP has been sent to your email address please verify it below
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* OTP Input Fields */}
          <div className="flex gap-2 sm:gap-3 justify-center">
            {otp.map((digit, index) => (
              <input
                key={index}
                data-index={index}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="
                  w-11 h-11 sm:w-12 sm:h-12
                  text-center text-xl sm:text-2xl font-semibold
                  border border-[#969696] rounded-lg
                  focus:outline-none focus:border-[#DC2033]
                  focus:ring-2 focus:ring-red-200
                "
              />
            ))}
          </div>

          {/* Resend OTP */}
          <div className="text-center text-sm">
            <span className="text-gray-600">Didn&apos;t Receive OTP? </span>
            <button
              type="button"
              className="text-[#DC2033] hover:text-red-700 font-semibold"
            >
              Resend OTP
            </button>
          </div>

          {/* Verify Button */}
          <Button type="submit" className={buttonClass}>
            Verify
          </Button>
        </form>
      </div>
    </AuthLayout>
  )
}
