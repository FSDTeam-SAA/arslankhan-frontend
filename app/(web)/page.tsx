// import SearchFilters from "@/components/common/SearchFilters";
// import DealersSection from "@/components/Home/DealersSection";
// import FAQ from "@/components/Home/FAQ";
// import Hero from "@/components/Home/Hero";
// import RecentlyAddedCars from "@/components/Home/RecentlyAddedCars";
// import SellYourCar from "@/components/Home/SellYourCar";


// export default function Home() {
//   return (
//     <main className="">
//       <div className="relative">
//       <Hero image="/image/hero3.jpg" title="Find your perfect car" description="Search Over 50,000 New And Used Cars From Trusted Dealers" />
//       <div className=" absolute bottom-[-120px] left-[50%] translate-x-[-50%] w-full ">
//         <SearchFilters />
//       </div>
//       </div>
//       <RecentlyAddedCars />
//       <SellYourCar />
//       <DealersSection />
//       <FAQ />
//     </main>
//   );
// }



import SearchFilters from "@/components/common/SearchFilters";
import DealersSection from "@/components/Home/DealersSection";
import FAQ from "@/components/Home/FAQ";
import Hero from "@/components/Home/Hero";
import RecentlyAddedCars from "@/components/Home/RecentlyAddedCars";
import SellYourCar from "@/components/Home/SellYourCar";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <Hero
          image="/image/hero3.jpg"
          title="Find your perfect car"
          description="Search Over 50,000 New And Used Cars From Trusted Dealers"
        />

        {/* Search Filter */}
        <div
          className="
            w-full
            px-4
            mt-6
            lg:mt-0
            lg:absolute
            lg:bottom-[-120px]
            lg:left-1/2
            lg:-translate-x-1/2
          "
        >
          <SearchFilters />
        </div>
      </div>

      <RecentlyAddedCars />
      <SellYourCar />
      <DealersSection />
      <FAQ />
    </main>
  );
}
