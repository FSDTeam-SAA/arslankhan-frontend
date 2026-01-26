

'use client'

import * as React from "react"
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu } from "lucide-react" 
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"

// Menu items – feel free to add real paths
const navItems = [
  { name: 'Home',    href: '/' },
  { name: 'Cars',    href: '/cars' },
  { name: 'Dealers', href: '/dealers' },
  { name: 'About us',href: '/about-us' },
]

export default function Navbar() {
  const pathname = usePathname()

  // Helper to check if link is active
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="bg-[#FFFFFF] sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-xl font-bold text-foreground border-2 border-foreground px-4 py-2">
              Logo
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const active = isActive(item.href)
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`
                    text-[24px] font-medium transition-all duration-200
                    ${active 
                      ? 'text-[#14406E] relative after:absolute after:left-0 after:bottom-[-6px] after:h-[3px] after:w-full after:bg-[#14406E] after:rounded-full' 
                      : 'text-[#333333] hover:text-[#14406E]'
                    }
                  `}
                >
                  {item.name}
                </a>
              )
            })}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/sign-in">
            <Button 
              variant="outline" 
              className="text-[24px] text-[#14406E] border-[#14406E] h-[49px] px-5 rounded-[8px]"
            >
              Sign in
            </Button>
            </Link>
            <Link href="/main">
            <Button 
              className="bg-red-600 hover:bg-red-700 text-[24px] text-[#FFFFFF] h-[49px] px-5 rounded-[8px]"
            >
              Register
            </Button>
            </Link>
          </div>

          {/* Mobile Navigation (Sheet) */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left">Navigation</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => {
                    const active = isActive(item.href)
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`
                          text-xl font-medium transition-colors pb-2 border-b
                          ${active 
                            ? 'text-[#14406E] border-[#14406E]' 
                            : 'text-gray-700 hover:text-red-600 border-transparent hover:border-red-600'
                          }
                        `}
                      >
                        {item.name}
                      </a>
                    )
                  })}

                  <div className="flex flex-col gap-3 pt-6">
                    <Link href="/sign-in">
                    <Button variant="outline" className="w-full text-[#14406E] border-[#14406E]">
                      Sign in
                    </Button>
                    </Link>
                    <link href="/main">
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      Register
                    </Button>
                    </link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  )
}