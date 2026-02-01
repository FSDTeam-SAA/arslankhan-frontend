'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative text-white pt-[180px] px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/image/footer.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto bg-[#14406E] rounded-tl-[12px] rounded-tr-[12px] py-8 px-4 sm:px-6 lg:px-10">
        {/* Top Row: Contact + Newsletter */}
        <div className="grid grid-cols-1 gap-6 lg:flex lg:items-center lg:justify-between lg:gap-8">
          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:flex lg:gap-12">
            <div>
              <p className="font-semibold mb-1">Toll free customer care</p>
              <p className="text-gray-100">+00000000000</p>
            </div>

            <div>
              <p className="font-semibold mb-1">Need live support?</p>
              <p className="text-gray-100 break-all sm:break-normal">asdf@gmail.com</p>
            </div>
          </div>

          {/* Newsletter (same as lg, responsive for small) */}
          <div className="w-full lg:max-w-[520px]">
            <h3 className="text-lg font-bold mb-3">Get Updates and more</h3>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none"
              />
              <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 pt-10">
          {/* Social Media */}
          <div>
            <h4 className="font-bold mb-4">Follow us on social media</h4>
            <div className="flex flex-wrap gap-3 sm:gap-4">
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
                  aria-label={social.label}
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
              {['Services', 'About Us', 'Contact Us', 'Blogs', 'Press'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-100">
              {['Contact', 'Legal Notice', 'Privacy Policy', 'Terms and Conditions', 'Sitemap'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Services */}
          <div>
            <h4 className="font-bold mb-4">Other Services</h4>
            <ul className="space-y-2 text-sm text-gray-100">
              {['Tour List', 'Holiday Rental', 'Flight Finder', 'Travel Agents', 'Visa'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-white/20 pt-6 sm:pt-8 text-center text-sm text-gray-100">
          <p>@ 2025, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
