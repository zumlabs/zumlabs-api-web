"use client"

import { useState } from "react"
import { ChevronDown, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const apiCategories = [
  {
    name: "AI",
    endpoints: [
      {
        id: "gpt4-chat",
        name: "GPT-4 Chat",
        method: "GET"
      }
    ]
  },
  {
    name: "Media",
    endpoints: [
      {
        id: "tiktok-downloader",
        name: "TikTok Video Downloader",
        method: "GET"
      }
    ]
  }
]

interface DocsSidebarProps {
  isOpen: boolean
  onClose: () => void
  onEndpointSelect: (endpointId: string) => void
  selectedEndpoint?: string
}

export function DocsSidebar({ isOpen, onClose, onEndpointSelect, selectedEndpoint }: DocsSidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["AI", "Media"])
  const [filter, setFilter] = useState("")

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryName) 
        ? prev.filter(c => c !== categoryName)
        : [...prev, categoryName]
    )
  }

  const filteredCategories = apiCategories.map(category => ({
    ...category,
    endpoints: category.endpoints.filter(endpoint => 
      endpoint.name.toLowerCase().includes(filter.toLowerCase())
    )
  })).filter(category => category.endpoints.length > 0)

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <div className="hidden lg:block lg:sticky top-0 left-0 w-80 h-screen overflow-y-auto bg-[#0a0e14] border-r border-[#1a1f2e]">
        {/* Desktop Sidebar Content */}
        <div className="p-6 border-b border-[#1a1f2e]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <div className="w-2 h-2 bg-[#16a34a] rounded-full"></div>
              Endpoints
            </h2>
          </div>
          <input 
            type="text"
            placeholder="Type to filter..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full px-4 py-2.5 bg-[#0f1218] border border-[#2d3748] rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#16a34a] focus:ring-1 focus:ring-[#16a34a] transition-all"
          />
        </div>

        <div className="p-4">
          {filteredCategories.map((category) => (
            <div key={category.name} className="mb-4">
              <button
                onClick={() => toggleCategory(category.name)}
                className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0f1218] rounded-lg transition-all group"
              >
                <span className="text-[#16a34a]">{category.name}</span>
                <ChevronDown 
                  className={`w-4 h-4 text-gray-400 group-hover:text-white transition-all ${
                    expandedCategories.includes(category.name) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {expandedCategories.includes(category.name) && (
                <div className="mt-2 space-y-1 ml-2">
                  {category.endpoints.map((endpoint) => (
                    <button
                      key={endpoint.id}
                      onClick={() => onEndpointSelect(endpoint.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 text-xs hover:text-white hover:bg-[#0f1218] rounded-lg transition-all text-left group ${
                        selectedEndpoint === endpoint.id ? 'bg-[#0f1218] text-white' : 'text-gray-400'
                      }`}
                    >
                      <span className={`px-2 py-1 text-[10px] font-bold rounded border transition-all ${
                        selectedEndpoint === endpoint.id 
                          ? 'bg-[#16a34a] text-white border-[#16a34a]' 
                          : 'bg-[#16a34a]/20 text-[#16a34a] border-[#16a34a]/30 group-hover:bg-[#16a34a] group-hover:text-white'
                      }`}>
                        {endpoint.method}
                      </span>
                      <span className="truncate">{endpoint.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <motion.div
        initial={false}
        animate={{ x: isOpen ? 0 : -320 }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="lg:hidden fixed top-0 left-0 w-80 h-screen overflow-y-auto bg-[#0a0e14] border-r border-[#1a1f2e] z-50"
      >
        {/* Header */}
        <div className="p-6 border-b border-[#1a1f2e]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <div className="w-2 h-2 bg-[#16a34a] rounded-full"></div>
              Endpoints
            </h2>
            <button
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-[#0f1218] rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          <input 
            type="text"
            placeholder="Type to filter..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full px-4 py-2.5 bg-[#0f1218] border border-[#2d3748] rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#16a34a] focus:ring-1 focus:ring-[#16a34a] transition-all"
          />
        </div>

        <div className="p-4">
          {filteredCategories.map((category) => (
            <div key={category.name} className="mb-4">
              <button
                onClick={() => toggleCategory(category.name)}
                className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0f1218] rounded-lg transition-all group"
              >
                <span className="text-[#16a34a]">{category.name}</span>
                <ChevronDown 
                  className={`w-4 h-4 text-gray-400 group-hover:text-white transition-all ${
                    expandedCategories.includes(category.name) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {expandedCategories.includes(category.name) && (
                <div className="mt-2 space-y-1 ml-2">
                  {category.endpoints.map((endpoint) => (
                    <button
                      key={endpoint.id}
                      onClick={() => {
                        onEndpointSelect(endpoint.id)
                        onClose()
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 text-xs hover:text-white hover:bg-[#0f1218] rounded-lg transition-all text-left group ${
                        selectedEndpoint === endpoint.id ? 'bg-[#0f1218] text-white' : 'text-gray-400'
                      }`}
                    >
                      <span className={`px-2 py-1 text-[10px] font-bold rounded border transition-all ${
                        selectedEndpoint === endpoint.id 
                          ? 'bg-[#16a34a] text-white border-[#16a34a]' 
                          : 'bg-[#16a34a]/20 text-[#16a34a] border-[#16a34a]/30 group-hover:bg-[#16a34a] group-hover:text-white'
                      }`}>
                        {endpoint.method}
                      </span>
                      <span className="truncate">{endpoint.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </>
  )
}
