import { FeatureCard } from "@/components/features/FeatureCard"
import { Clock, Download, MessageCircle } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "High Performance",
    description: "Engineered in Go for sub-millisecond latency. Auto-scaling architecture handles millions of requests.",
    delay: 0.1
  },
  {
    icon: Download,
    title: "Media Tools",
    description: "Download video and audio from TikTok, Pinterest, Instagram, and more without watermarks.",
    delay: 0.2
  },
  {
    icon: MessageCircle,
    title: "Advanced AI",
    description: "Integrate DeepSeek, GPT-4, and Flux models directly into your workflows with simple REST endpoints.",
    delay: 0.3
  }
]

export function FeaturesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-32">
      <div className="grid md:grid-cols-3 gap-5">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={feature.delay}
          />
        ))}
      </div>
    </section>
  )
}
