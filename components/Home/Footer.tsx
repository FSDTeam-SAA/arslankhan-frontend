'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative  text-white pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/image/footer.png"
          alt="Background"
          fill
          className="object-cover "
        />
      
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto bg-[#14406E] rounded-tl-[12px] rounded-tr-[12px] ">
        {/* Top Section - Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 pb-8 ">
          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">Get Updates and more</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div>
              <p className="font-semibold mb-1">Toll free customer care</p>
              <p className="text-gray-100">+00000000000</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Need live support?</p>
              <p className="text-gray-100">asdf@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Middle Section - Social and Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Social Media */}
          <div>
            <h4 className="font-bold mb-4">Follow us on social media</h4>
            <div className="flex gap-4">
              {[
                { icon: 'f', label: 'Facebook' },
                { icon: 'in', label: 'LinkedIn' },
                { icon: 't', label: 'Twitter' },
                { icon: 'ig', label: 'Instagram' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 rounded-full border-2 border-white text-white flex items-center justify-center hover:bg-white hover:text-primary transition-colors"
                >
                  <span className="text-sm font-bold">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-100">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-100">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Legal Notice
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Other Services */}
          <div>
            <h4 className="font-bold mb-4">Other Services</h4>
            <ul className="space-y-2 text-sm text-gray-100">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tour List
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Holiday Rental
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Flight Finder
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Travel Agents
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  visa
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-white/20 pt-8 text-center text-sm text-gray-100">
          <p>@ 2025, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
