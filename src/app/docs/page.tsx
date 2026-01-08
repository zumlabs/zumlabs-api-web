"use client"

import { useState } from "react"
import { DocsSidebar, DocsContent, EndpointDetail } from "@/components/docs"
import { Header, Footer } from "@/components/layout"

export default function DocsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedEndpoint, setSelectedEndpoint] = useState<string | undefined>()

  return (
    <div className="min-h-screen bg-[#0f1218] text-white flex flex-col">
      <Header onDocsMenuClick={() => setSidebarOpen(true)} showDocsMenu />
      <div className="flex relative flex-1">
        <DocsSidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)}
          onEndpointSelect={setSelectedEndpoint}
          selectedEndpoint={selectedEndpoint}
        />
        {selectedEndpoint ? (
          <EndpointDetail endpointId={selectedEndpoint} onMenuClick={() => setSidebarOpen(true)} />
        ) : (
          <DocsContent onMenuClick={() => setSidebarOpen(true)} />
        )}
      </div>
      <Footer />
    </div>
  )
}
