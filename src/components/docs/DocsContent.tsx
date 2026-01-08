"use client"

import { motion } from "framer-motion"
import { Zap, Shield, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Zap,
    title: "Fast Response",
    description: "< 100ms average latency"
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "99.9% uptime guarantee"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Always here to help"
  }
]

interface DocsContentProps {
  onMenuClick: () => void
}

export function DocsContent({ onMenuClick }: DocsContentProps) {
  return (
    <div className="flex-1 bg-[#0f1218] overflow-y-auto">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#16a34a]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#16a34a]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative flex flex-col items-center justify-center min-h-screen p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl w-full"
        >
          {/* Title */}
          <motion.h1 
            className="text-3xl md:text-6xl font-bold text-white mb-3 md:mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            API Documentation
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            className="text-base md:text-xl text-gray-400 mb-8 md:mb-12 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Select an endpoint from the menu to get started.
          </motion.p>

          {/* Feature Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="bg-[#1a1f2e]/50 border-[#2d3748] backdrop-blur-sm p-4 md:p-6 hover:border-[#16a34a]/50 transition-all text-center">
                  <div className="flex justify-center mb-3 md:mb-4">
                    <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-[#16a34a]" />
                  </div>
                  <h3 className="text-white font-semibold mb-1 md:mb-2 text-sm md:text-base">{feature.title}</h3>
                  <p className="text-xs md:text-sm text-gray-400">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Status Badge */}
          <motion.div
            className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-8 py-3 md:py-4 bg-[#1a1f2e]/80 border border-[#2d3748] rounded-lg md:rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="relative">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-[#16a34a] rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-2 h-2 md:w-3 md:h-3 bg-[#16a34a] rounded-full animate-ping"></div>
            </div>
            <span className="text-xs md:text-sm text-gray-300 font-medium">All systems operational • Ready to explore</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
