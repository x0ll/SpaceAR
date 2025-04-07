"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative z-50">
      <div className="flex justify-between items-center p-4 bg-black/50 backdrop-blur-md">
        <div className="flex items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            SpaceAR
          </div>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-full hover:bg-white/10 transition-colors">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute w-full bg-black/80 backdrop-blur-md"
          >
            <nav className="p-4">
              <ul className="space-y-4">
                {["Explore", "Planets", "Stars", "Galaxies", "About"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block p-2 hover:bg-white/10 rounded transition-colors"
                      onClick={(e) => {
                        e.preventDefault()
                        setMenuOpen(false)
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

