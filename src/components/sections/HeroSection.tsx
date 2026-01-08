"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Spotlight } from "@/components/ui/spotlight"
import Link from "next/link"

interface SystemStatus {
  status: string
  uptime: string
  memory_mb: number
  goroutines: number
  timestamp: number
}

export function HeroSection() {
  const [status, setStatus] = useState<SystemStatus | null>(null)
  const [latency, setLatency] = useState<number>(0)

  const fetchStatus = async () => {
    const startTime = performance.now()
    try {
      const baseUrl = process.env.NODE_ENV === 'development' 
        ? 'http://localhost:8080' 
        : ''
      
      const response = await fetch(`${baseUrl}/v1/status`)
      const endTime = performance.now()
      const data = await response.json()
      
      setStatus(data)
      setLatency(Math.round(endTime - startTime))
    } catch (error) {
      console.error('Failed to fetch status:', error)
    }
  }

  useEffect(() => {
    fetchStatus()
    const interval = setInterval(fetchStatus, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="max-w-7xl mx-auto px-6 pt-32 pb-12 text-center relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#1e40af"
      />
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[56px] leading-[1.1] font-bold mb-8 tracking-tight relative z-10"
      >
        Build faster with<br />Intelligent APIs.
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-[19px] leading-relaxed text-[#9ca3af] mb-10 max-w-2xl mx-auto relative z-10"
      >
        A unified platform for AI, Media Processing, and Open Source Intelligence. 
        Seamlessly integrate powerful capabilities into your applications.
      </motion.p>

      {/* Animated Go Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex justify-center mb-10 relative z-10"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative px-8 py-5 bg-gradient-to-br from-[#1a1f2e]/90 via-[#141821]/80 to-[#0f1218]/90 backdrop-blur-sm border border-[#00acd7]/20 rounded-xl overflow-hidden group"
        >
          {/* Animated Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00acd7]/10 to-transparent"
            animate={{ 
              x: [-300, 300],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "linear",
              repeatDelay: 0.5
            }}
          />
          
          {/* Pulse Background */}
          <motion.div
            className="absolute inset-0 bg-[#00acd7]/5"
            animate={{ opacity: [0.03, 0.08, 0.03] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Top Accent Line */}
          <motion.div 
            className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00acd7]/50 to-transparent"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 flex items-center gap-4">
            {/* Animated Go Logo */}
            <motion.div
              whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Rotating Glow Ring */}
              <motion.div
                className="absolute inset-0 rounded-xl"
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(0, 172, 215, 0.3)",
                    "0 0 30px rgba(0, 172, 215, 0.5)",
                    "0 0 20px rgba(0, 172, 215, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#00acd7] to-[#0088a8] rounded-xl shadow-lg">
                <motion.svg 
                  className="w-8 h-8" 
                  viewBox="0 0 256 256" 
                  fill="none"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <path d="M108 80.4C114.4 77.6 120.8 77.6 126 80.4C131.2 83.2 134.4 88.8 134.4 96V128C140.8 128 147.2 128 153.6 128C160 128 166.4 128 172.8 128C172.8 115.2 168 104 158.4 96C148.8 88 136 84 120 84C104 84 91.2 88 81.6 96C72 104 67.2 115.2 67.2 128C67.2 140.8 72 152 81.6 160C91.2 168 104 172 120 172C136 172 148.8 168 158.4 160C168 152 172.8 140.8 172.8 128H134.4V160C134.4 167.2 131.2 172.8 126 175.6C120.8 178.4 114.4 178.4 108 175.6C101.6 172.8 98.4 167.2 98.4 160V96C98.4 88.8 101.6 83.2 108 80.4Z" fill="white"/>
                </motion.svg>
              </div>
            </motion.div>
            
            {/* Text Content with Gradient */}
            <div>
              <motion.h3 
                className="text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                animate={{ opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Powered by Go
              </motion.h3>
              <p className="text-sm text-gray-400 flex items-center gap-1.5">
                High-performance REST API
                <motion.span
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                  className="inline-block"
                >
                  ⚡
                </motion.span>
              </p>
            </div>
          </div>

          {/* Floating Particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#00acd7]/40 rounded-full"
              style={{
                left: `${15 + i * 20}%`,
                top: `${20 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [-8, 8, -8],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Corner Accents */}
          <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-[#00acd7]/30" />
          <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-[#00acd7]/30" />
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-center justify-center gap-4 relative z-10"
      >
        <Link href="/docs">
          <Button size="lg" className="bg-[#16a34a] hover:bg-[#15803d] text-white font-medium">
            Read Documentation
          </Button>
        </Link>
        <Link href="/status">
          <Button size="lg" variant="outline" className="bg-[#1f2937] hover:bg-[#374151] text-white border-[#2d3748] font-medium">
            Check Status
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}
