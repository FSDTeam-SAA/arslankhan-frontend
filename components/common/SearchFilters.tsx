'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function SearchFilters() {
  const [activeTab, setActiveTab] = useState('all')

  return (
    <section className="bg-primary py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex gap-4 mb-6 bg-white rounded-lg p-2 w-fit">
          {['All', 'New Car', 'Old/Used Car'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === tab.toLowerCase()
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Filter Row */}
        <div className="bg-primary border-4 border-white rounded-2xl p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {/* Postcode */}
            <div>
              <label className="text-white text-sm font-medium block mb-2">Postcode</label>
              <input
                type="text"
                placeholder="Enter postcode"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-primary"
              />
            </div>

            {/* Make */}
            <div>
              <label className="text-white text-sm font-medium block mb-2">Make</label>
              <select className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-primary">
                <option>All Makes</option>
                <option>Toyota</option>
                <option>BMW</option>
                <option>Audi</option>
              </select>
            </div>

            {/* Model */}
            <div>
              <label className="text-white text-sm font-medium block mb-2">Model</label>
              <select className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-primary">
                <option>All Models</option>
                <option>Model 1</option>
                <option>Model 2</option>
              </select>
            </div>

            {/* Advance Filter */}
            <div>
              <label className="text-white text-sm font-medium block mb-2">Advance Filter</label>
              <select className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-primary">
                <option>Select Filter</option>
                <option>Price</option>
                <option>Year</option>
              </select>
            </div>

            {/* Advance Search */}
            <div>
              <label className="text-white text-sm font-medium block mb-2">Advance Search</label>
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-primary"
              />
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
