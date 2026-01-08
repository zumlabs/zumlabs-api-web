"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Header, Footer } from "@/components/layout"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Book, Zap, Server } from "lucide-react"

export default function V1Page() {
  return (
    <div className="min-h-screen bg-[#0f1218] text-white">
      <Header />
      
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            🚀 ZUMLABS API
          </h1>
          <p className="text-lg text-gray-400">REST API Information</p>
        </motion.div>

        {/* Version Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-16"
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#00acd7]/30 to-[#0088a8]/30 rounded-2xl blur-xl"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="relative bg-gradient-to-r from-[#00acd7] to-[#0088a8] text-white px-12 py-8 rounded-2xl shadow-xl border border-[#00acd7]/30">
              <h2 className="text-4xl font-bold mb-2">Version 1.0.0</h2>
              <p className="text-sm uppercase tracking-widest opacity-90">Production</p>
            </div>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-[#1a1f2e] border-[#2d3748] p-8 hover:border-[#00acd7]/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full group">
              <CheckCircle2 className="w-10 h-10 text-[#00acd7] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">Status</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                All systems operational. Real-time monitoring available at /v1/status endpoint.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/docs">
              <Card className="bg-[#1a1f2e] border-[#2d3748] p-8 hover:border-[#00acd7]/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full group">
                <Book className="w-10 h-10 text-[#00acd7] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-3">Documentation</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Complete API documentation and examples available.
                </p>
              </Card>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-[#1a1f2e] border-[#2d3748] p-8 hover:border-[#00acd7]/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full group">
              <Server className="w-10 h-10 text-[#00acd7] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">Endpoints</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                RESTful API with health checks, media processing, and AI capabilities.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="bg-[#1a1f2e] border-[#2d3748] p-8 hover:border-[#00acd7]/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full group">
              <Zap className="w-10 h-10 text-[#00acd7] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">Performance</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                High-speed processing with sub-millisecond latency and auto-scaling.
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Tech Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <span className="px-4 py-2 bg-[#00acd7]/10 border border-[#00acd7]/30 text-[#00acd7] rounded-full text-sm font-semibold">
              Go 1.24
            </span>
            <span className="px-4 py-2 bg-[#00acd7]/10 border border-[#00acd7]/30 text-[#00acd7] rounded-full text-sm font-semibold">
              Gin Framework
            </span>
            <span className="px-4 py-2 bg-[#00acd7]/10 border border-[#00acd7]/30 text-[#00acd7] rounded-full text-sm font-semibold">
              Docker
            </span>
            <span className="px-4 py-2 bg-[#00acd7]/10 border border-[#00acd7]/30 text-[#00acd7] rounded-full text-sm font-semibold">
              REST API
            </span>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
