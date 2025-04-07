"use client"

import { useState } from "react"
import SpaceScene from "@/components/space-scene"
import ControlPanel from "@/components/control-panel"
import InfoPanel from "@/components/info-panel"
import Header from "@/components/header"
import { SpaceObjectProvider } from "@/components/space-object-context"

export default function Home() {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <SpaceObjectProvider>
      <main className="flex min-h-screen flex-col bg-black text-white overflow-hidden">
        <Header />
        <div className="flex-1 relative">
          <SpaceScene />
          <ControlPanel onInfoClick={() => setShowInfo(!showInfo)} />
          <InfoPanel isOpen={showInfo} onClose={() => setShowInfo(false)} />
        </div>
      </main>
    </SpaceObjectProvider>
  )
}

