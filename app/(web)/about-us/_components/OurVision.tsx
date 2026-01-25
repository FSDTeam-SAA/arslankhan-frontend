// import Image from "next/image";

// export function OurVision() {
//   return (
//     <section className="w-full py-12 sm:py-16 lg:py-24 bg-white">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//           {/* Left Image */}
//           <div className="order-2 lg:order-1 flex justify-center">
//             <Image
//               src="/image/vision.jpg"
//               alt="Our Vision"
//               width={1000}
//               height={1000}
//               className="w-full max-w-md lg:max-w-full h-[382px] rounded-2xl object-cover shadow-lg"
//             />
//           </div>

//           {/* Right Content */}
//           <div className="order-1 lg:order-2 flex flex-col justify-center space-y-6 lg:space-y-8">
//             <div className="space-y-4">
//               <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#000000] leading-tight text-right">
//                 Our Vision
//               </h2>
//               <p className="text-xl text-[#000000] flex justify-end  text-right pt-[70px] leading-relaxed w-[650px]">
//                 We Are A Trusted Car Marketplace That Connects Buyers, Sellers, And Dealers On One Simple Platform. Our Goal Is To Make Buying And Selling Cars Easy, Transparent, And Secure. From Verified Listings And Trusted Dealers To Smooth Communication And Fair Pricing, We Help Users Find The Right Car Or Sell With Confidence.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


import Image from "next/image";

export function OurVision() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
            grid grid-cols-1 lg:grid-cols-2
            gap-10 lg:gap-12
            items-center
          "
        >
          {/* Left Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            <Image
              src="/image/vision.jpg"
              alt="Our Vision"
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

          {/* Right Content */}
          <div className="order-1 lg:order-2 flex flex-col justify-center space-y-6 lg:space-y-8">
            <div className="space-y-4 text-center sm:text-left lg:text-right">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#000000] leading-tight">
                Our Vision
              </h2>

              <p
                className="
                  text-base sm:text-lg lg:text-xl
                  text-[#000000]
                  leading-relaxed
                  max-w-xl lg:max-w-[650px]
                  mx-auto sm:mx-0 lg:ml-auto
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
        </div>
      </div>
    </section>
  );
}
