"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Info, ZoomIn, ZoomOut, RotateCcw, Compass } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ControlPanel({ onInfoClick }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="bg-black/50 backdrop-blur-md rounded-full p-2 flex items-center space-x-2">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full text-white hover:bg-white/20"
          onClick={() => setExpanded(!expanded)}
        >
          <Compass className="h-5 w-5" />
        </Button>

        {expanded && (
          <motion.div
            className="flex space-x-2"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
          >
            <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-white/20">
              <ZoomIn className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-white/20">
              <ZoomOut className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-white/20">
              <RotateCcw className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-white hover:bg-white/20"
              onClick={onInfoClick}
            >
              <Info className="h-5 w-5" />
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

