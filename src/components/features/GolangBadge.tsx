"use client"

import { motion } from "framer-motion"
import { Zap, Cpu, Gauge } from "lucide-react"

export function GolangBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="relative inline-flex items-center gap-6 px-8 py-6 bg-gradient-to-br from-[#1a1f2e] to-[#0f1218] border border-[#00acd7]/30 rounded-2xl overflow-hidden group"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00acd7]/0 via-[#00acd7]/10 to-[#00acd7]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Pulse animation background */}
      <motion.div
        className="absolute inset-0 bg-[#00acd7]/5"
        animate={{
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Go Logo */}
      <motion.div 
        className="relative z-10"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="flex items-center justify-center w-16 h-16 bg-[#00acd7]/10 border-2 border-[#00acd7] rounded-xl">
          <svg className="w-10 h-10" viewBox="0 0 256 256" fill="none">
            <path d="M40.8 127.2C40.8 127.2 36 127.2 36 132C36 136.8 40.8 136.8 40.8 136.8H96C96 136.8 100.8 136.8 100.8 132C100.8 127.2 96 127.2 96 127.2H40.8Z" fill="#00acd7"/>
            <path d="M40.8 156C40.8 156 36 156 36 160.8C36 165.6 40.8 165.6 40.8 165.6H72C72 165.6 76.8 165.6 76.8 160.8C76.8 156 72 156 72 156H40.8Z" fill="#00acd7"/>
            <path d="M40.8 98.4C40.8 98.4 36 98.4 36 103.2C36 108 40.8 108 40.8 108H72C72 108 76.8 108 76.8 103.2C76.8 98.4 72 98.4 72 98.4H40.8Z" fill="#00acd7"/>
            <path d="M108 80.4C114.4 77.6 120.8 77.6 126 80.4C131.2 83.2 134.4 88.8 134.4 96V128C140.8 128 147.2 128 153.6 128C160 128 166.4 128 172.8 128C172.8 115.2 168 104 158.4 96C148.8 88 136 84 120 84C104 84 91.2 88 81.6 96C72 104 67.2 115.2 67.2 128C67.2 140.8 72 152 81.6 160C91.2 168 104 172 120 172C136 172 148.8 168 158.4 160C168 152 172.8 140.8 172.8 128H134.4V160C134.4 167.2 131.2 172.8 126 175.6C120.8 178.4 114.4 178.4 108 175.6C101.6 172.8 98.4 167.2 98.4 160V96C98.4 88.8 101.6 83.2 108 80.4Z" fill="#00acd7"/>
          </svg>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white">Built with Go</span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Zap className="w-5 h-5 text-[#00acd7]" fill="#00acd7" />
          </motion.div>
        </div>
        
        {/* Performance metrics */}
        <div className="flex items-center gap-4 text-sm">
          <motion.div 
            className="flex items-center gap-1.5 text-gray-400"
            whileHover={{ scale: 1.05, color: "#ffffff" }}
          >
            <Gauge className="w-4 h-4 text-[#00acd7]" />
            <span>Sub-millisecond</span>
          </motion.div>
          <div className="w-1 h-1 bg-gray-600 rounded-full" />
          <motion.div 
            className="flex items-center gap-1.5 text-gray-400"
            whileHover={{ scale: 1.05, color: "#ffffff" }}
          >
            <Cpu className="w-4 h-4 text-[#00acd7]" />
            <span>High Concurrency</span>
          </motion.div>
        </div>
      </div>

      {/* Floating particles */}
      <motion.div
        className="absolute top-4 right-8 w-2 h-2 bg-[#00acd7] rounded-full"
        animate={{
          y: [-10, 10, -10],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-6 right-12 w-1.5 h-1.5 bg-[#00acd7] rounded-full"
        animate={{
          y: [10, -10, 10],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
    </motion.div>
  )
}
