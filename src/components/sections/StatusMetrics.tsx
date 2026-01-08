"use client"

import { useEffect, useState } from "react"
import { MetricCard } from "@/components/features"

interface SystemStatus {
  status: string
  uptime: string
  memory_mb: number
  goroutines: number
  timestamp: number
}

export function StatusMetrics() {
  const [status, setStatus] = useState<SystemStatus | null>(null)
  const [latency, setLatency] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(true)

  const fetchStatus = async () => {
    const startTime = performance.now()
    try {
      // Use full URL for development, relative path for production
      const baseUrl = process.env.NODE_ENV === 'development' 
        ? 'http://localhost:8080' 
        : ''
      
      const response = await fetch(`${baseUrl}/v1/status`)
      const endTime = performance.now()
      const data = await response.json()
      
      setStatus(data)
      setLatency(Math.round(endTime - startTime))
      setIsLoading(false)
    } catch (error) {
      console.error('Failed to fetch status:', error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    // Initial fetch
    fetchStatus()

    // Poll every 10 seconds
    const interval = setInterval(fetchStatus, 10000)

    return () => clearInterval(interval)
  }, [])

  const getLatencyStatus = (ms: number) => {
    if (ms < 150) return "Excellent"
    if (ms < 200) return "Normal"
    if (ms < 250) return "Elevated"
    return "High"
  }

  if (isLoading || !status) {
    return (
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MetricCard label="UPTIME" value="Loading..." subtitle="Checking..." delay={0} />
            <MetricCard label="MEMORY" value="Loading..." subtitle="Heap Allocation" delay={0.1} />
            <MetricCard label="LATENCY" value="Loading..." subtitle="Measuring..." delay={0.2} />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard
            label="UPTIME"
            value={status.uptime}
            subtitle="Checking..."
            delay={0}
          />
          <MetricCard
            label="MEMORY"
            value={`${status.memory_mb.toFixed(2)} MB`}
            subtitle="Heap Allocation"
            delay={0.1}
          />
          <MetricCard
            label="LATENCY"
            value={`${latency} ms`}
            subtitle={getLatencyStatus(latency)}
            delay={0.2}
          />
        </div>
      </div>
    </section>
  )
}
