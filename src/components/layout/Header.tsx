"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Boxes, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface HeaderProps {
  onDocsMenuClick?: () => void
  showDocsMenu?: boolean
}

export function Header({ onDocsMenuClick, showDocsMenu }: HeaderProps = {}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const handleMobileMenuClick = () => {
    if (showDocsMenu && onDocsMenuClick) {
      // Di halaman docs, buka sidebar endpoint
      onDocsMenuClick()
    } else {
      // Di halaman lain, toggle menu navigasi
      setMobileMenuOpen(!mobileMenuOpen)
    }
  }

  return (
    <header className="border-b border-[#1f2937] relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-7 h-7 bg-[#1a1f2e] rounded flex items-center justify-center border border-[#2d3748]">
            <Boxes className="w-4 h-4 text-[#9ca3af]" strokeWidth={2} />
          </div>
          <span className="text-lg font-semibold tracking-tight">ZUMLABS APIs</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {!isHomePage && <Link href="/" className="text-sm text-[#9ca3af] hover:text-white transition-colors">Home</Link>}
          <Link href="/docs" className="text-sm text-[#9ca3af] hover:text-white transition-colors">Documentation</Link>
          <Link href="/status" className="text-sm text-[#9ca3af] hover:text-white transition-colors">System Status</Link>
          <a href="https://instagram.com/qhorryzuma" target="_blank" rel="noopener noreferrer" className="text-sm text-[#9ca3af] hover:text-white transition-colors">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={handleMobileMenuClick}
          className="md:hidden p-2 text-[#9ca3af] hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && !showDocsMenu && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[#1f2937] bg-[#0f1218]"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
              <Link 
                href="/docs" 
                className="text-sm text-[#9ca3af] hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Documentation
              </Link>
              <Link 
                href="/status" 
                className="text-sm text-[#9ca3af] hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                System Status
              </Link>
              <a 
                href="https://instagram.com/qhorryzuma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#9ca3af] hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
