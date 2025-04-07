"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useSpaceObject } from "./space-object-context"

const spaceObjectData = {
  Earth: {
    title: "Earth",
    description:
      "Our home planet is the third planet from the Sun, and the only place we know of so far that's inhabited by living things.",
    distance: "149.6 million km from Sun",
    diameter: "12,742 km",
    day: "24 hours",
    year: "365.25 days",
  },
  Mars: {
    title: "Mars",
    description:
      "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury.",
    distance: "227.9 million km from Sun",
    diameter: "6,779 km",
    day: "24.6 hours",
    year: "687 Earth days",
  },
  Jupiter: {
    title: "Jupiter",
    description:
      "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets combined.",
    distance: "778.5 million km from Sun",
    diameter: "139,820 km",
    day: "9.93 hours",
    year: "11.86 Earth years",
  },
}

export default function InfoPanel({ isOpen, onClose }) {
  const { selectedObject } = useSpaceObject()
  const objectData = selectedObject ? spaceObjectData[selectedObject] : null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute right-0 top-0 h-full w-full md:w-96 bg-black/70 backdrop-blur-md z-20 p-6 overflow-y-auto"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 20 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">{objectData ? objectData.title : "Space Information"}</h2>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <X className="h-5 w-5" />
            </button>
          </div>

          {objectData ? (
            <div className="space-y-6">
              <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Planet Visualization</span>
              </div>

              <p className="text-gray-300">{objectData.description}</p>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Distance from Sun:</span>
                  <span>{objectData.distance}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Diameter:</span>
                  <span>{objectData.diameter}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Day length:</span>
                  <span>{objectData.day}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Year length:</span>
                  <span>{objectData.year}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-700">
                <h3 className="text-lg font-medium mb-2">Exploration History</h3>
                <p className="text-gray-300">
                  Humans have been studying {objectData.title} for centuries, with major advancements in our
                  understanding coming from space missions and telescope observations.
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-400 py-10">
              <p>Select a planet to view detailed information</p>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

