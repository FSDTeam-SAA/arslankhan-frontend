'use client'

import * as React from "react"
import { Button } from '@/components/ui/button'
import { Menu } from "lucide-react" 
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

// 1. Define the menu data
const navItems = [
  { name: 'Home', href: '#' },
  { name: 'Cars', href: '#' },
  { name: 'Dealers', href: '#' },
  { name: 'About us', href: '#' },
]

export default function Navbar() {
  return (
    <header className="bg-[#FFFFFF] border-b-4 sticky top-0 z-50 ">
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
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className="text-[24px] text-[#333333] hover:text-[#14406E] font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" className="text-[24px] text-[#14406E] border-[#14406E] h-[49px] px-5 rounded-[8px]">
              Sign in
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-[24px] text-[#FFFFFF] border-[#14406E] h-[49px] px-5 rounded-[8px]">
              Register
            </Button>
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
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium hover:text-red-600 transition-colors border-b pb-2"
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="flex flex-col gap-3 pt-4">
                    <Button variant="outline" className="w-full">Sign in</Button>
                    <Button className="w-full bg-red-600 hover:bg-red-700">Register</Button>
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