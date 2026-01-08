"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

interface MetricCardProps {
  label: string
  value: string
  subtitle?: string
  delay: number
}

export function MetricCard({ label, value, subtitle, delay }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="bg-[#1a1f2e] border-[#2d3748] p-6">
        <div className="text-xs text-[#9ca3af] uppercase tracking-wider mb-3">
          {label}
        </div>
        <div className="text-3xl font-bold text-white mb-2">
          {value}
        </div>
        {subtitle && (
          <div className="text-sm text-[#6b7280]">
            {subtitle}
          </div>
        )}
      </Card>
    </motion.div>
  )
}
