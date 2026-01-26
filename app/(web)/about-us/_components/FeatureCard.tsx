import { Card } from '@/components/ui/card'
import Image from 'next/image'

interface FeatureCard {
  title: string
  description: string
  image: string
}

const features: FeatureCard[] = [
  {
    title: 'Best Market Value',
    description: 'Get fair pricing with smart comparisons and real-time market insights.',
    image: '/image/choose1.png',
  },
  {
    title: 'Easy & Fast Listing',
    description: 'Post your car in minutes with photos, details, and instant visibility.',
    image: '/image/choose2.png',
  },
  {
    title: 'Secure Payments',
    description: 'Post your car in minutes with photos, details, and instant visibility.',
    image: '/image/choose3.png',
  },
  {
    title: 'Wide Buyer Reach',
    description: 'Safe and reliable payment handling for peace of mind.',
    image: '/image/choose4.png',
  },
]

export function WhyChooseUs() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#000000] mb-4">
            Why Choose Us?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-video overflow-hidden bg-gray-100">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-center text-[#000000] mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-[#575757] text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}



