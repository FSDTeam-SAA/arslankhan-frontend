// import Image from "next/image";

// export function OurMission() {
//   return (
//     <section className="w-full py-12 sm:py-16 lg:py-24 bg-white border-t border-gray-200">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-0">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//           {/* Left Content */}
//           <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
//             <div className="space-y-4">
//               <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#000000] leading-tight">
//                 Our mission
//               </h2>
//               <p className="text-xl text-[#000000] leading-[150%] w-[579px] pt-[70px]">
//                 We Are A Trusted Car Marketplace That Connects Buyers, Sellers, And Dealers On One Simple Platform. Our Goal Is To Make Buying And Selling Cars Easy, Transparent, And Secure. From Verified Listings And Trusted Dealers To Smooth Communication And Fair Pricing, We Help Users Find The Right Car Or Sell With Confidence.
//               </p>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="flex justify-center lg:justify-end">
//             <Image
//               src="/image/mission.jpg"
//               alt="Our Mission"
//                 width={1000}
//                 height={1000}
//               className="w-full h-[382px] max-w-md lg:max-w-full  rounded-2xl object-cover shadow-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }



import Image from "next/image";

export function OurMission() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-24 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
            grid grid-cols-1 lg:grid-cols-2
            gap-10 lg:gap-12
            items-center
          "
        >
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#000000] leading-tight">
                Our mission
              </h2>

              <p
                className="
                  text-base sm:text-lg lg:text-xl
                  text-[#000000]
                  leading-[150%]
                  max-w-xl
                  mx-auto lg:mx-0
                  pt-4 sm:pt-6 lg:pt-[70px]
                "
              >
                We Are A Trusted Car Marketplace That Connects Buyers, Sellers,
                And Dealers On One Simple Platform. Our Goal Is To Make Buying
                And Selling Cars Easy, Transparent, And Secure. From Verified
                Listings And Trusted Dealers To Smooth Communication And Fair
                Pricing, We Help Users Find The Right Car Or Sell With Confidence.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/image/mission.jpg"
              alt="Our Mission"
              width={1200}
              height={900}
              className="
                w-full
                max-w-[520px] lg:max-w-full
                h-[240px] sm:h-[300px] lg:h-[382px]
                rounded-2xl
                object-cover
                shadow-lg
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
