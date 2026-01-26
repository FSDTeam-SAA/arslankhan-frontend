'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AuthLayout } from '../_components/AuthLayout'

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Password reset:', { newPassword, confirmPassword })
  }

  // Same style like other auth pages
  const labelClass = 'block text-base font-medium text-[#14406E]'
  const inputClass = 'w-full h-[48px] border-[#969696]'
  const buttonClass = 'w-full bg-[#DC2033] hover:bg-red-700 text-white h-[48px]'

  return (
    <AuthLayout backgroundImage="/image/redcar.jpg">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl md:text-4xl font-bold text-[#14406E]">
            New Password
          </h1>
          <p className="text-gray-600 text-sm">Please create your new password</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* New Password Input */}
          <div className="space-y-1">
            <label className={labelClass}>
              New Password <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <Input
                type={showNewPassword ? 'text' : 'password'}
                placeholder="Enter Password.."
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className={`${inputClass} pr-10`}
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showNewPassword ? '👁' : '👁‍🗨'}
              </button>
            </div>
          </div>

          {/* Confirm Password Input */}
          <div className="space-y-1">
            <label className={labelClass}>
              Re-enter Password <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <Input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Enter Password.."
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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

          {/* Continue Button */}
          <Button type="submit" className={buttonClass}>
            Continue
          </Button>
        </form>
      </div>
    </AuthLayout>
  )
}
