// import { Card } from '@/components/ui/card'
// import Image from 'next/image'

// interface ServiceCard {
//   title: string
//   subtitle: string
//   description: string
//   image: string
// }

// const services: ServiceCard[] = [
//   {
//     title: 'Make Opportunities',
//     subtitle: 'For Private Sellers',
//     description: 'Ple Platform. Our Goal Is To Make Buying And Selling Cars Easy, Transparent, And Secure. From Verified Listings',
//     image: '/image/wedo.jpg',
//   },
//   {
//     title: 'Make Opportunities',
//     subtitle: 'For Car Dealers',
//     description: 'Ple Platform. Our Goal Is To Make Buying And Selling Cars Easy, Transparent, And Secure. From Verified Listings',
//     image: '/image/wedo2.jpg',
//   },
//   {
//     title: 'Make Opportunities',
//     subtitle: 'For Buyers',
//     description: 'Ple Platform. Our Goal Is To Make Buying And Selling Cars Easy, Transparent, And Secure. From Verified Listings',
//    image: '/image/wedo3.jpg',
//   },
// ]

// export function WhatWeDo() {
//   return (
//     <section className="w-full py-12 sm:py-16 lg:py-24 bg-white">
//       <div className="container mx-auto px-4 sm:px-0 lg:px-8">
//         <div className="text-center mb-12 lg:mb-[70px]">
//           <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#000000] mb-4">
//             What We Do
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//           {services.map((service, index) => (
//             <Card
//               key={index}
//               className="overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
//             >
//               <div className="aspect-video overflow-hidden bg-gray-100">
//                 <Image
//                   src={service.image || "/placeholder.svg"}
//                   alt={service.subtitle}
//                   width={1000}
//                   height={1000}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-6 sm:p-8">
//                 <h3 className="text-lg sm:text-[32px] font-semibold text-[#000000] text-center mb-2">
//                   {service.title}
//                 </h3>
//                 <h4 className="ttext-lg sm:text-[32px] font-semibold text-[#000000] text-center  mb-4">
//                   {service.subtitle}
//                 </h4>
//                 <p className="text-sm sm:text-base text-[#333333] leading-[150%] text-center">
//                   {service.description}
//                 </p>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }






import { Card } from '@/components/ui/card'
import Image from 'next/image'

interface ServiceCard {
  title: string
  subtitle: string
  description: string
  image: string
}

const services: ServiceCard[] = [
  {
    title: 'Make Opportunities',
    subtitle: 'For Private Sellers',
    description:
      'Ple Platform. Our Goal Is To Make Buying And Selling Cars Easy, Transparent, And Secure. From Verified Listings',
    image: '/image/wedo.jpg',
  },
  {
    title: 'Make Opportunities',
    subtitle: 'For Car Dealers',
    description:
      'Ple Platform. Our Goal Is To Make Buying And Selling Cars Easy, Transparent, And Secure. From Verified Listings',
    image: '/image/wedo2.jpg',
  },
  {
    title: 'Make Opportunities',
    subtitle: 'For Buyers',
    description:
      'Ple Platform. Our Goal Is To Make Buying And Selling Cars Easy, Transparent, And Secure. From Verified Listings',
    image: '/image/wedo3.jpg',
  },
]

export function WhatWeDo() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-[70px]">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#000000]">
            What We Do
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="
                group overflow-hidden
                bg-white border border-gray-200
                rounded-2xl
                shadow-md hover:shadow-xl
                transition-all duration-300
              "
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden bg-gray-100">
                <Image
                  src={service.image}
                  alt={service.subtitle}
                  width={1200}
                  height={800}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 lg:p-8 text-center">
                <h3 className="text-lg sm:text-xl lg:text-[32px] font-semibold text-[#000000] mb-1">
                  {service.title}
                </h3>

                <h4 className="text-base sm:text-lg lg:text-[32px] font-semibold text-[#000000] mb-3">
                  {service.subtitle}
                </h4>

                <p className="text-sm sm:text-base text-[#333333] leading-[150%]">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
 
