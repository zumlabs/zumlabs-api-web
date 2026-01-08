"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay: number
}

export function FeatureCard({ icon: Icon, title, description, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="cursor-pointer"
    >
      <Card className="hover:border-[#3d4758] transition-all h-full">
        <CardHeader>
          <div className="w-11 h-11 bg-muted rounded-md flex items-center justify-center mb-4">
            <Icon className="w-5 h-5 text-muted-foreground" />
          </div>
          <CardTitle className="text-[19px]">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-[15px] leading-relaxed">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}
