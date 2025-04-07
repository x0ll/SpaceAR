"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type SpaceObjectContextType = {
  selectedObject: string | null
  setSelectedObject: (object: string | null) => void
}

const SpaceObjectContext = createContext<SpaceObjectContextType | undefined>(undefined)

export function SpaceObjectProvider({ children }: { children: ReactNode }) {
  const [selectedObject, setSelectedObject] = useState<string | null>(null)

  return (
    <SpaceObjectContext.Provider value={{ selectedObject, setSelectedObject }}>{children}</SpaceObjectContext.Provider>
  )
}

export function useSpaceObject() {
  const context = useContext(SpaceObjectContext)
  if (context === undefined) {
    throw new Error("useSpaceObject must be used within a SpaceObjectProvider")
  }
  return context
}

