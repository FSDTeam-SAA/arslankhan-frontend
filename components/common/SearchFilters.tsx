'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function SearchFilters() {
  const [activeTab, setActiveTab] = useState('all')

  const inputBase =
    'w-full h-[47px] px-4 rounded-lg border-2 border-gray-300 bg-white outline-none focus:border-primary focus:ring-0'
  const selectBase =
    'w-full h-[47px] px-4 rounded-lg border-2 border-gray-300 bg-white outline-none focus:border-primary focus:ring-0'
  const labelBase = 'text-white text-sm font-medium block mb-2'

  const tabs = [
    { label: 'All', value: 'all' },
    { label: 'New Car', value: 'new car' },
    { label: 'Old/Used Car', value: 'old/used car' },
  ]

  return (
    <section className="container mx-auto px-0 sm:px-0">
      <div className="bg-[#14406E] rounded-3xl p-4 sm:p-6">
        {/* Tabs */}
        <div className="bg-white w-full rounded-[12px] p-2">
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-4 py-2 font-medium transition-colors border-b-2 ${
                  activeTab === tab.value
                    ? 'text-primary border-primary'
                    : 'text-foreground border-transparent hover:text-primary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Row */}
        <div className="rounded-2xl pt-4 sm:pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {/* Postcode */}
            <div>
              <label className={labelBase}>Postcode</label>
              <input type="text" placeholder="Enter postcode" className={inputBase} />
            </div>

            {/* Make */}
            <div>
              <label className={labelBase}>Make</label>
              <select className={selectBase} defaultValue="all">
                <option value="all">All Makes</option>
                <option value="toyota">Toyota</option>
                <option value="bmw">BMW</option>
                <option value="audi">Audi</option>
              </select>
            </div>

            {/* Model */}
            <div>
              <label className={labelBase}>Model</label>
              <select className={selectBase} defaultValue="all">
                <option value="all">All Models</option>
                <option value="model1">Model 1</option>
                <option value="model2">Model 2</option>
              </select>
            </div>

            {/* Advance Filter */}
            <div>
              <label className={labelBase}>Advance Filter</label>
              <select className={selectBase} defaultValue="select">
                <option value="select">Select Filter</option>
                <option value="price">Price</option>
                <option value="year">Year</option>
              </select>
            </div>

            {/* Advance Search */}
            <div>
              <label className={labelBase}>Advance Search</label>
              <input type="text" placeholder="Search..." className={inputBase} />
            </div>

            {/* Search Button */}
            <div className="sm:col-span-2 lg:col-span-1 flex items-end">
              <Button className="w-full h-[47px] bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
