import DealersSection from "@/components/Home/DealersSection";
import FAQ from "@/components/Home/FAQ";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
import RecentlyAddedCars from "@/components/Home/RecentlyAddedCars";
import SellYourCar from "@/components/Home/SellYourCar";


export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <RecentlyAddedCars />
      <SellYourCar />
      <DealersSection />
      <FAQ />
      <Footer />
    </main>
  );
}
