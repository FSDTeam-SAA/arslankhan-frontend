// import SearchFilters from '@/components/common/SearchFilters'
// import Hero from '@/components/Home/Hero'
// import React from 'react'
// import Recentcar from './_components/Recentcar'

// const page = () => {
//   return (
//     <div>    <div className=' relative mb-[120px]'>
//       <Hero image="/image/carpage.jpg" title="Cars" description="Find the right car with confidence. Browse verified listings from trusted sellers and dealers, complete with detailed specs, real photos, and transparent pricing. " />

//       <div className="absolute bottom-[-100px] left-[50%] translate-x-[-50%] w-full ">
//         <SearchFilters/>
//       </div>
//     </div>
//      <Recentcar/>
//     </div>

//   )
// }

// export default page




import SearchFilters from '@/components/common/SearchFilters'
import Hero from '@/components/Home/Hero'
import React from 'react'
import Recentcar from './_components/Recentcar'

const page = () => {
  return (
    <div>
      <div className="relative">
        <Hero
          image="/image/carpage.jpg"
          title="Cars"
          description="Find the right car with confidence. Browse verified listings from trusted sellers and dealers, complete with detailed specs, real photos, and transparent pricing."
        />

        {/* Search Filters */}
        <div
          className="
            w-full
            px-4
            mt-6
            lg:mt-0
            lg:absolute
            lg:bottom-[-100px]
            lg:left-1/2
            lg:-translate-x-1/2
          "
        >
          <SearchFilters />
        </div>
      </div>

      {/* Space for desktop overlap */}
      <div className="hidden lg:block h-[120px]" />

      <Recentcar />
    </div>
  )
}

export default page
