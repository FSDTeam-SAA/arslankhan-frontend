import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="w-full   overflow-hidden flex items-center h-[600px]  bg-cover bg-center bg-no-repeat"
     style={{
    backgroundImage: "url('/image/aboutbg.jpg')",
  }}
    >
      <div className="container mx-auto px-4 sm:px-0 lg:px-8 py-12 sm:py-20 lg:py-[100px]">
        <div className="flex  lex-col-reverselg:flex-row  gap-8 lg:gap-10 ">
          {/* Left Content */}
          <div className="flex flex-col  space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-[40px] lg:text-[40px] font-semibold text-[#000000] leading-tight">
                We Make Buying Cars A Joy
              </h1>
              <p className="text-base sm:text-lg text-[#000000] leading-[150%] max-w-lg">
                We Are A Trusted Car Marketplace That Connects Buyers, Sellers, And Dealers On One Simple Platform. Our Goal Is To Make Buying And Selling Cars Easy
              </p>
            </div>
         <div className='pt-[191px]'>
               <Button className="w-fit  bg-[#DC2033] hover:bg-red-700 text-white text-base sm:text-lg px-6 sm:px-8 h-[44px] rounded-md flex items-center gap-2 shadow-lg">
              Learn more about our website
              <ChevronDown className="w-5 h-5" />
            </Button>
         </div>
          </div>


          {/* Right Image */}
          <div className="flex justify-center items-center lg:justify-end">
            <Image
              src="/image/herocar.png"
              alt="Silver luxury car"
                width={1000}
                height={1000}
              className="w-full h-[430px] object-cover "
            />
          </div>
        </div>
      </div>

      {/* Decorative wave shape at bottom */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-white clip-path-wave"></div> */}
    </section>
  )
}
