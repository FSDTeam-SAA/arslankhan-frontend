import { CarDescription } from "../_components/CarDescription"
import { DealerCard } from "../_components/DealerCard"
import { ImageCarousel } from "../_components/ImageCarousel"
import { SpecificationsGrid } from "../_components/SpecificationsGrid"


export default function Car_detailspage() {
const carImages = [
  '/image/car2.png',     
  '/image/car2.png',
  '/image/car2.png',
  '/image/car2.png',
  '/image/car2.png',
  '/image/car2.png',
]

  const specifications = [
    { label: 'Model year', value: '2022' },
    { label: 'Mileage', value: '117' },
    { label: 'WiFi', value: 'Check' },
    { label: 'Top Speed', value: '240(KMPH)' },
    { label: 'Transmission Type', value: 'Triptonic' },
    { label: 'Brand', value: 'Honda' },
    { label: 'Fuel Type', value: 'Petrol' },
    { label: 'Model', value: 'Camry' },
  ]

  const features = [
    {
      title: 'Bold Exterior Styling',
      description:
        'The Toyota Corolla features a refined yet sporty exterior design that instantly draws attention. Clean lines, sculpted body panels, and a confident front fascia give the car a premium look that feels both modern and timeless.',
    },
    {
      title: 'Efficient Performance Options',
      description:
        'Designed for everyday efficiency, the Corolla offers powertrain options that balance performance and fuel economy. Whether you prefer a smooth gasoline engine or an eco-friendly hybrid variant, each option delivers reliable and responsive driving.',
    },
    {
      title: 'Smart Safety Systems',
      description:
        'Safety is at the core of the Corolla\'s design. Advanced driver-assistance features help monitor the road, assist in avoiding collisions, and support safer lane keeping, providing added confidence during every drive.',
    },
    {
      title: 'Comfort-Focused Interior',
      description:
        'Inside, the Corolla offers a spacious and well-crafted cabin with quality materials and smart layout. Comfortable seating and generous legroom make both short trips and long journeys relaxing for drivers and passengers alike.',
    },
    {
      title: 'User-Friendly Entertainment',
      description:
        'The central touchscreen infotainment system is designed for ease of use. Offering quick access to navigation, audio, and vehicle settings. Controls are intuitive, allowing drivers to stay focused on the road.',
    },
    {
      title: 'Seamless Smartphone Integration',
      description:
        'Stay connected wherever you go with built-in smartphone compatibility. Access calls, messages, music, and apps directly through the vehicle\'s display for a smooth and connected driving experience.',
    },
    {
      title: 'Smooth & Confident Handling',
      description:
        'The Corolla delivers a balanced driving feel with precise steering and stable suspension. It handles city traffic with ease and remains composed on highways for a comfortable and confident ride.',
    },
    {
      title: 'Everyday Convenience Features',
      description:
        'Thoughtful details like adjustable seating, climate control, and smart storage spaces enhance daily comfort and utility. These features make both short trips and long journeys more enjoyable and convenient.',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16  space-y-16 md:space-y-20">
        {/* Carousel Section */}
        <ImageCarousel images={carImages} title="Honda Civic" />

        {/* Specifications Section */}
        <SpecificationsGrid specifications={specifications} />

        {/* Dealer Card Section */}
        <DealerCard
          dealerName="John Carter"
          dealerCompany="Prime Auto Hub"
          dealerImage="/image/man.png"
          memberSince="2025"
          totalCars={48}
          email="robertc11@gmail.com"
          phone="+1 (555) 742-8391"
          address="742 Greenfield Ave, Downtown City"
        />

        {/* Car Description Section */}
        <CarDescription features={features} />
      </div>
    </main>
  )
}
