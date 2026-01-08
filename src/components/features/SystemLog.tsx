"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface ActivityEvent {
  time: string
  message: string
  type: string
}

interface ActivityResponse {
  events: ActivityEvent[]
}

export function SystemLog() {
  const [events, setEvents] = useState<ActivityEvent[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchActivity = async () => {
    try {
      const baseUrl = process.env.NODE_ENV === 'development' 
        ? 'http://localhost:8080' 
        : ''
      
      const response = await fetch(`${baseUrl}/v1/activity`)
      const data: ActivityResponse = await response.json()
      
      setEvents(data.events)
      setIsLoading(false)
    } catch (error) {
      console.error('Failed to fetch activity:', error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    // Initial fetch
    fetchActivity()

    // Poll every 30 seconds
    const interval = setInterval(fetchActivity, 30000)

    return () => clearInterval(interval)
  }, [])

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'text-[#16a34a]'
      case 'info':
        return 'text-[#3b82f6]'
      case 'warning':
        return 'text-[#f59e0b]'
      default:
        return 'text-[#9ca3af]'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mt-8"
    >
      <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-lg overflow-hidden">
        <div className="bg-[#0f1218] px-4 py-2 border-b border-[#2d3748]">
          <code className="text-sm text-[#9ca3af]">syslog -f /var/log/api</code>
        </div>
        <div className="p-4 space-y-2 max-h-64 overflow-y-auto font-mono text-sm">
          {isLoading ? (
            <div className="text-[#9ca3af]">Loading activity...</div>
          ) : (
            events.map((event, index) => (
              <div key={index} className="text-[#9ca3af]">
                <span className="text-[#6b7280]">[{event.time}]</span>{" "}
                <span className={getTypeColor(event.type)}>{event.message}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </motion.div>
  )
}
