"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export function StatusHero() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6"
        >
          System Health
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-gray-400 mb-8"
        >
          Real-time performance initialization.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-600/20 border border-green-600/50 rounded-lg"
        >
          <CheckCircle2 className="w-5 h-5 text-green-500" />
          <span className="text-green-500 font-semibold">All Systems Operational</span>
        </motion.div>
      </div>
    </section>
  )
}
