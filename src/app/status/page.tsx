import { Header, Footer } from "@/components/layout"
import { StatusHero, StatusMetrics } from "@/components/sections"
import { SystemLog } from "@/components/features"

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-[#0f1218]">
      <Header />
      <main>
        <StatusHero />
        <StatusMetrics />
        <div className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <SystemLog />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
