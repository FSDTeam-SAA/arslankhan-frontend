import { WhyChooseUs } from "./_components/FeatureCard";
import { AboutHero } from "./_components/Hero";
import { OurMission } from "./_components/OurMission";
import { OurVision } from "./_components/OurVision";
import { WhatWeDo } from "./_components/WhatWeDo";

export default function Home() {
  return (
    <main className="w-full">
      <AboutHero />
      <OurMission />
      <WhatWeDo />
      <OurVision />
      <WhyChooseUs />
    </main>
  )
}
