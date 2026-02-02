"use client"

import * as React from "react"
import { useEffect, useState } from "react"

interface ThemeProviderProps {
  children: React.ReactNode
  attribute?: string
  defaultTheme?: string
  enableSystem?: boolean
  storageKey?: string
}

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
  storageKey = "theme",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<string>("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Get stored theme or use default
    const stored = typeof window !== "undefined" ? localStorage.getItem(storageKey) : null
    let currentTheme = stored || defaultTheme

    // Check system preference if enableSystem and theme is 'system'
    if (enableSystem && currentTheme === "system" && typeof window !== "undefined") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      currentTheme = isDark ? "dark" : "light"
    }

    setTheme(currentTheme)
    applyTheme(currentTheme, attribute)
  }, [])

  const applyTheme = (newTheme: string, attr: string) => {
    if (typeof window === "undefined") return

    const root = document.documentElement
    if (attr === "class") {
      root.classList.remove("light", "dark")
      root.classList.add(newTheme)
    } else if (attr === "data-theme") {
      root.setAttribute("data-theme", newTheme)
    }
  }

  const updateTheme = (newTheme: string) => {
    setTheme(newTheme)
    localStorage.setItem(storageKey, newTheme)
    applyTheme(newTheme, attribute)
  }

  const value = {
    theme,
    setTheme: updateTheme,
  }

  return <ThemeContext.Provider value={value}>{mounted ? children : <>{children}</>}</ThemeContext.Provider>
}

interface ThemeContextType {
  theme: string
  setTheme: (theme: string) => void
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
