import DealersSection from "@/components/Home/DealersSection";
import FAQ from "@/components/Home/FAQ";
import Hero from "@/components/Home/Hero";
import RecentlyAddedCars from "@/components/Home/RecentlyAddedCars";
import SellYourCar from "@/components/Home/SellYourCar";


export default function Home() {
  return (
    <main className="">
   
      <Hero />
      <RecentlyAddedCars />
      <SellYourCar />
      <DealersSection />
      <FAQ />
    </main>
  );
}
