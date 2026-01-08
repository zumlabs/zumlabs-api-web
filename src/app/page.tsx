"use client"

import { Header, Footer } from "@/components/layout"
import { HeroSection, FeaturesSection, SimpleStatus } from "@/components/sections"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f1218] text-white">
      <Header />
      <HeroSection />
      <SimpleStatus />
      <FeaturesSection />
      <Footer />
    </div>
  )
}
