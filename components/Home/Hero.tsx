'use client'

import Image from 'next/image'

interface HeroProps {
  image: string
  title?: string
  description?: string
  height?: string
}

export default function Hero({image,title,description,height}: HeroProps) {
  return (
 <section
  className={`relative w-full overflow-hidden ${
    height ? height : 'h-96 md:h-[680px]'
  }`}
>
      {/* Background car image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title || 'Hero Image'}
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex  justify-start container mx-auto  pt-[140px]">
        <div className="text-white max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            {title}
          </h1>
          <p className="text-lg md:text-2xl text-[#FFFFFF] mt-10">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
