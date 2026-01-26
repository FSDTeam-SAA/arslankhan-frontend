// 'use client'

// import React from "react"

// import { useState } from 'react'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import Link from 'next/link'
// import { AuthLayout } from "../_components/AuthLayout"

// export default function SignIn() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [rememberMe, setRememberMe] = useState(false)
//   const [showPassword, setShowPassword] = useState(false)

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log('Sign in attempt:', { email, password, rememberMe })
//   }

//   return (
//     <AuthLayout backgroundImage="/image/redcar.jpg">
//       <div className="space-y-6">
//         <div className="text-center space-y-2">
//           <h1 className="text-4xl font-bold text-blue-900">Sign in</h1>
//           <p className="text-gray-600">Enter to get unlimited data & information</p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Email Input */}
//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <Input
//               type="email"
//               placeholder="Enter your email address.."
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full border-gray-300"
//             />
//           </div>

//           {/* Password Input */}
//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <div className="relative">
//               <Input
//                 type={showPassword ? 'text' : 'password'}
//                 placeholder="Enter password.."
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full border-gray-300 pr-10"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
//               >
//                 {showPassword ? '👁' : '👁‍🗨'}
//               </button>
//             </div>
//           </div>

//           {/* Remember Me & Forgot Password */}
//           <div className="flex items-center justify-between text-sm">
//             <label className="flex items-center gap-2 cursor-pointer">
//               <input
//                 type="checkbox"
//                 checked={rememberMe}
//                 onChange={(e) => setRememberMe(e.target.checked)}
//                 className="w-4 h-4 text-blue-600"
//               />
//               <span className="text-gray-700">Remember Me</span>
//             </label>
//             <Link href="/forgot-password" className="text-red-600 hover:text-red-700">
//               Forgot Password?
//             </Link>
//           </div>

//           {/* Sign In Button */}
//           <Button
//             type="submit"
//             className="w-full bg-red-600 hover:bg-red-700 text-white py-2"
//           >
//             Sign In
//           </Button>
//         </form>

//         {/* Divider */}
//         <div className="flex items-center gap-4">
//           <div className="flex-1 border-t border-gray-300" />
//           <span className="text-gray-500 text-sm">Or</span>
//           <div className="flex-1 border-t border-gray-300" />
//         </div>

//         {/* Social Login */}
//         <div className="flex gap-4 justify-center">
//           <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
//             <span className="text-blue-600">f</span>
//           </button>
//           <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
//             <span className="text-red-600">G</span>
//           </button>
//           <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
//             <span className="text-black">𝕏</span>
//           </button>
//         </div>

//         {/* Register Link */}
//         <div className="text-center text-sm">
//           <span className="text-gray-600">Don't have an account?{' '}</span>
//           <Link href="/" className="text-red-600 hover:text-red-700 font-semibold">
//             Register Here
//           </Link>
//         </div>
//       </div>
//     </AuthLayout>
//   )
// }



'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { AuthLayout } from '../_components/AuthLayout'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Sign in attempt:', { email, password, rememberMe })
  }

  return (
    <AuthLayout backgroundImage="/image/redcar.jpg">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-[#14406E]">Sign in</h1>
          <p className="text-gray-600">Enter to get unlimited data & information</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div className="space-y-1">
            <label className="block text-base font-medium text-[#14406E]">
              Email <span className="text-red-600">*</span>
            </label>
            <Input
              type="email"
              placeholder="Enter your email address.."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[48px] border-[#969696]"
              required
            />
          </div>

          {/* Password Input */}
          <div className="space-y-1">
            <label className="block text-base font-medium text-[#14406E]">
              Password <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password.."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-[48px] border-[#969696] pr-10"
                required
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

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm pt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 accent-[#DC2033]"
              />
              <span className="text-gray-700">Remember Me</span>
            </label>
            <Link href="/forgot-password" className="text-[#DC2033] hover:text-red-700">
              Forgot Password?
            </Link>
          </div>

          {/* Sign In Button */}
          <Button type="submit" className="w-full bg-[#DC2033] hover:bg-red-700 text-white h-[48px]">
            Sign In
          </Button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 border-t border-gray-300" />
          <span className="text-gray-500 text-sm">Or</span>
          <div className="flex-1 border-t border-gray-300" />
        </div>

        {/* Social Login */}
        <div className="flex gap-4 justify-center">
          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
            <span className="text-blue-600">f</span>
          </button>
          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
            <span className="text-red-600">G</span>
          </button>
          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
            <span className="text-black">𝕏</span>
          </button>
        </div>

        {/* Register Link */}
        <div className="text-center text-sm">
          <span className="text-gray-600">Don&apos;t have an account? </span>
          <Link href="/" className="text-[#DC2033] hover:text-red-700 font-semibold">
            Register Here
          </Link>
        </div>
      </div>
    </AuthLayout>
  )
}
