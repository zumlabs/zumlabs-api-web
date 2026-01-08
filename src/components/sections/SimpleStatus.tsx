"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle2, Clock, Activity } from "lucide-react"
import Link from "next/link"
import { Card } from "@/components/ui/card"

interface SystemStatus {
  status: string
  uptime: string
  memory_mb: number
  goroutines: number
  timestamp: number
}

export function SimpleStatus() {
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
    <section className="max-w-7xl mx-auto px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card className="bg-[#1a1f2e] border-[#2d3748] p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-green-600/20 border border-green-600/50 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-green-500 font-semibold">All Systems Operational</span>
            </div>
            
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-500 uppercase">Uptime</p>
                  <p className="text-white font-semibold">
                    {status ? status.uptime : 'Loading...'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-500 uppercase">Latency</p>
                  <p className="text-white font-semibold">
                    {latency > 0 ? `${latency} ms` : 'Measuring...'}
                  </p>
                </div>
              </div>
              
              <Link 
                href="/status"
                className="px-4 py-2 bg-[#1f2937] hover:bg-[#374151] border border-[#2d3748] rounded-lg text-sm text-gray-300 hover:text-white transition-colors"
              >
                View Details →
              </Link>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  )
}
