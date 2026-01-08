"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Card } from "@/components/ui/card"

interface EndpointDetailProps {
  endpointId: string
  onMenuClick: () => void
}

interface Parameter {
  name: string
  type: string
  required: boolean
  default?: string
  description: string
}

interface EndpointData {
  name: string
  method: string
  endpoint: string
  description: string
  parameters: Parameter[]
  example: {
    request: string
    response: Record<string, unknown>
  }
}

const endpointData: Record<string, EndpointData> = {
  "gpt4-chat": {
    name: "GPT-4 Chat",
    method: "GET",
    endpoint: "/v1/gpt4",
    description: "Chat with GPT-4 AI model. Get intelligent responses powered by OpenAI's GPT-4.",
    parameters: [
      {
        name: "prompt",
        type: "string",
        required: true,
        description: "Your message or question to GPT-4"
      }
    ],
    example: {
      request: "https://api.zumlabs.tech/v1/gpt4?prompt=YOUR_PROMPT_HERE",
      response: {
        attribution: "@GIMITA",
        data: {
          answer: "Hello! How can I assist you today?",
          model: "gpt-4"
        },
        statusCode: 200,
        success: true,
        timestamp: "2026-01-07T07:05:54.517Z"
      }
    }
  },
  "tiktok-downloader": {
    name: "TikTok Video Downloader",
    method: "GET",
    endpoint: "/v1/media/tiktok",
    description: "Download TikTok videos without watermark. Get video details, statistics, and download links.",
    parameters: [
      {
        name: "url",
        type: "string",
        required: true,
        description: "The TikTok video URL (e.g., https://www.tiktok.com/@user/video/1234567890)"
      }
    ],
    example: {
      request: "https://api.zumlabs.tech/v1/media/tiktok?url=https://www.tiktok.com/@user/video/1234567890",
      response: {
        success: true,
        data: {
          author: "username",
          title: "Video title/description",
          duration: 15,
          video_url: "https://example.com/video_with_watermark.mp4",
          video_nowm: "https://example.com/video_without_watermark.mp4",
          music_url: "https://example.com/music.mp3",
          cover: "https://example.com/cover.jpg",
          statistics: {
            likes: 12345,
            comments: 678,
            shares: 234,
            views: 567890
          }
        }
      }
    }
  }
}

export function EndpointDetail({ endpointId }: EndpointDetailProps) {
  const [testUrl, setTestUrl] = useState("")
  const [testPrompt, setTestPrompt] = useState("")
  const [testResponse, setTestResponse] = useState<Record<string, unknown> | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [codeTab, setCodeTab] = useState<'curl' | 'javascript'>('curl')
  
  const data = endpointData[endpointId]
  
  if (!data) return null

  const handleSendRequest = async () => {
    if (endpointId === 'gpt4-chat' && !testPrompt) return
    if (endpointId === 'tiktok-downloader' && !testUrl) return
    
    setIsLoading(true)
    try {
      const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : ''
      
      if (endpointId === 'gpt4-chat') {
        const response = await fetch(`${baseUrl}/v1/gpt4?prompt=${encodeURIComponent(testPrompt)}`)
        const result = await response.json()
        setTestResponse(result)
      } else if (endpointId === 'tiktok-downloader') {
        const response = await fetch(`${baseUrl}/v1/media/tiktok?url=${encodeURIComponent(testUrl)}`)
        const result = await response.json()
        setTestResponse(result)
      }
    } catch (error) {
      setTestResponse({ 
        success: false, 
        message: 'Failed to fetch data: ' + (error instanceof Error ? error.message : 'Unknown error') 
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex-1 bg-[#0f1218] overflow-y-auto p-6 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="mb-8">
          <div className="mb-2">
            <span className="text-[#16a34a] text-xs font-bold uppercase tracking-wider">
              {endpointId === 'gpt4-chat' ? 'AI' : 'DOWNLOADER'}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{data.name}</h1>
          <p className="text-gray-400">{data.description}</p>
        </div>

        {/* Test Endpoint */}
        <Card className="bg-[#1a1f2e] border-[#2d3748] p-6 mb-6">
          <h2 className="text-white font-semibold mb-4">Test Endpoint</h2>
          <div className="space-y-4">
            {/* Method & Endpoint Display */}
            <div className="flex items-center gap-2 bg-[#0f1218] px-4 py-3 rounded-lg border border-[#2d3748]">
              <span className={`px-2 py-1 text-white text-xs font-bold rounded ${
                data.method === 'GET' ? 'bg-blue-500' : 'bg-green-500'
              }`}>
                {data.method}
              </span>
              <code className="text-gray-300 text-sm font-mono">
                https://api.zumlabs.tech{data.endpoint}
              </code>
            </div>
            
            {/* Input Field */}
            {endpointId === 'gpt4-chat' ? (
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  prompt <span className="text-red-400">*</span>
                </label>
                <textarea
                  value={testPrompt}
                  onChange={(e) => setTestPrompt(e.target.value)}
                  placeholder="Type your message or question here..."
                  rows={4}
                  className="w-full bg-[#0f1218] border border-[#2d3748] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#16a34a] transition-colors placeholder:text-gray-600 resize-none"
                />
              </div>
            ) : (
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  url <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={testUrl}
                  onChange={(e) => setTestUrl(e.target.value)}
                  placeholder="TikTok video or slide URL"
                  className="w-full bg-[#0f1218] border border-[#2d3748] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#16a34a] transition-colors placeholder:text-gray-600"
                />
              </div>
            )}
            
            {/* Send Request Button */}
            <button
              onClick={handleSendRequest}
              disabled={(endpointId === 'gpt4-chat' && !testPrompt) || (endpointId === 'tiktok-downloader' && !testUrl) || isLoading}
              className={`w-full font-medium py-3 rounded-lg transition-colors ${
                data.method === 'GET' 
                  ? 'bg-blue-500 hover:bg-blue-600' 
                  : 'bg-green-500 hover:bg-green-600'
              } disabled:bg-[#2d3748] disabled:cursor-not-allowed text-white`}
            >
              {isLoading ? 'Loading...' : 'Send Request'}
            </button>
          </div>
        </Card>

        {/* Response */}
        <Card className="bg-[#1a1f2e] border-[#2d3748] p-6 mb-6">
          <h2 className="text-white font-semibold mb-4">Response</h2>
          <div className="bg-[#0f1218] p-6 rounded-lg border border-[#2d3748] min-h-50 flex items-center justify-center">
            {testResponse ? (
              <pre className="text-sm font-mono text-gray-300 w-full overflow-x-auto">
                {JSON.stringify(testResponse, null, 2)}
              </pre>
            ) : (
              <p className="text-gray-500 text-sm">Waiting for request...</p>
            )}
          </div>
        </Card>

        {/* Code Examples */}
        <Card className="bg-[#1a1f2e] border-[#2d3748] p-0 overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-[#2d3748]">
            <button
              onClick={() => setCodeTab('curl')}
              className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
                codeTab === 'curl'
                  ? 'bg-[#0f1218] text-white border-b-2 border-[#16a34a]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              cURL
            </button>
            <button
              onClick={() => setCodeTab('javascript')}
              className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
                codeTab === 'javascript'
                  ? 'bg-[#0f1218] text-white border-b-2 border-[#16a34a]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              JavaScript
            </button>
          </div>

          {/* Code Content */}
          <div className="p-6 bg-[#0f1218]">
            <div className="relative">
              <button
                onClick={() => {
                  let code = ''
                  if (endpointId === 'gpt4-chat') {
                    code = codeTab === 'curl'
                      ? `curl -X GET "https://api.zumlabs.tech/v1/gpt4?prompt=${encodeURIComponent(testPrompt || 'YOUR_PROMPT_HERE')}"`
                      : `fetch('https://api.zumlabs.tech/v1/gpt4?prompt=${encodeURIComponent(testPrompt || 'YOUR_PROMPT_HERE')}')\n  .then(response => response.json())\n  .then(data => console.log(data));`
                  } else {
                    code = codeTab === 'curl'
                      ? `curl -X GET "https://api.zumlabs.tech/v1/media/tiktok?url=${testUrl || 'YOUR_TIKTOK_URL'}"`
                      : `fetch('https://api.zumlabs.tech/v1/media/tiktok?url=${testUrl || 'YOUR_TIKTOK_URL'}')\n  .then(response => response.json())\n  .then(data => console.log(data));`
                  }
                  navigator.clipboard.writeText(code)
                }}
                className="absolute top-0 right-0 px-3 py-1.5 bg-[#2d3748] hover:bg-[#374151] text-gray-400 hover:text-white text-xs rounded transition-colors"
              >
                Copy
              </button>
              <pre className="text-sm font-mono text-gray-300 pr-20 overflow-x-auto">
                {codeTab === 'curl' ? (
                  <code>
                    {endpointId === 'gpt4-chat' 
                      ? `curl -X GET "https://api.zumlabs.tech/v1/gpt4?prompt=${encodeURIComponent(testPrompt || 'YOUR_PROMPT_HERE')}"`
                      : `curl -X GET "https://api.zumlabs.tech/v1/media/tiktok?url=${testUrl || 'YOUR_TIKTOK_URL'}"`
                    }
                  </code>
                ) : (
                  <code>
                    {endpointId === 'gpt4-chat'
                      ? `fetch('https://api.zumlabs.tech/v1/gpt4?prompt=${encodeURIComponent(testPrompt || 'YOUR_PROMPT_HERE')}')\n  .then(response => response.json())\n  .then(data => console.log(data));`
                      : `fetch('https://api.zumlabs.tech/v1/media/tiktok?url=${testUrl || 'YOUR_TIKTOK_URL'}')\n  .then(response => response.json())\n  .then(data => console.log(data));`
                    }
                  </code>
                )}
              </pre>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
