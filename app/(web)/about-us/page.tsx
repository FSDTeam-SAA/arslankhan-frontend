import { WhyChooseUs } from "./_components/FeatureCard";
import { Hero } from "./_components/Hero";
import { OurMission } from "./_components/OurMission";
import { OurVision } from "./_components/OurVision";
import { WhatWeDo } from "./_components/WhatWeDo";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <OurMission />
      <WhatWeDo />
      <OurVision />
      <WhyChooseUs />
    </main>
  )
}
