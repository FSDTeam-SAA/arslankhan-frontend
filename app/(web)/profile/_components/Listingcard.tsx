'use client';

import {  Edit, Trash } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';

interface CarCardProps {
  image: string
  title: string
  specs: string
  price: string
  onEdit?: () => void
  onDelete?: () => void
  editButton?: boolean
}

export function ListingCard({ image, title, specs, price, onEdit, onDelete, editButton }: CarCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow">
      {/* Image Section */}
      <div className="relative w-full h-48 md:h-56 bg-gradient-to-b from-slate-800 to-slate-600">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover w-full h-full"
          crossOrigin="anonymous"
        />
      </div>

      {/* Content Section */}
      <div className="p-5 md:p-6">
        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-foreground text-center mb-2">{title}</h3>

        {/* Specs */}
        <p className="text-sm md:text-base text-muted-foreground text-center mb-1">{specs}</p>

        {/* Price */}
        <p className="text-lg font-semibold text-foreground text-center mb-6">{price}</p>

        {/* Buttons */}
        {editButton ? (
        <div className="flex gap-3">
  {/* Edit */}
  <Link href="/edit-my-listing/1" className="flex-1">
    <button
      onClick={onEdit}
      className="w-full flex items-center justify-center gap-2 border-2 border-[#B5B5B5] text-[#838383] hover:bg-primary/5 font-medium h-[44px] rounded-[8px] transition-colors"
    >
      <Edit className="w-4 h-4" />
      <span>Edit</span>
    </button>
  </Link>

  {/* Delete */}
  <button
    onClick={onDelete}
    className="flex-1 w-full bg-[#DC2033] hover:bg-[#DC2033]/90 text-primary-foreground font-medium h-[44px] rounded-[8px] transition-colors flex items-center justify-center gap-2"
  >
    <Trash className="w-4 h-4" />
    <span>Delete</span>
  </button>
</div>

        ) : null}
      </div>
    </div>
  )
}
