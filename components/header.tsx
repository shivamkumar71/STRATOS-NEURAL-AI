"use client"

import { ArrowRight, Menu, X, Moon, Sun } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useTheme } from "./theme-provider"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const isDark = theme === "dark"

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/60 backdrop-blur-2xl transition-all duration-300">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-md rounded-xl group-hover:bg-primary/40 transition-all" />
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-primary shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
              <span className="text-sm font-black text-primary-foreground italic">STR</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-foreground leading-none uppercase flex items-center">
              STRATOS <span className="text-primary italic ml-1.5 underline decoration-2 decoration-primary/30 underline-offset-4">NEURAL</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden gap-6 lg:flex items-center">
          {[
            { name: "Home", href: "/" },
            { name: "Analyze", href: "/match" },
            { name: "Dashboard", href: "/dashboard" },
            { name: "Telemetry", href: "/players" },
            { name: "Patterns", href: "/patterns" },
            { name: "Briefing", href: "/briefing" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[10px] uppercase font-black tracking-[0.15em] text-muted-foreground hover:text-primary transition-all relative group py-2"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <div className="h-4 w-px bg-white/10 mx-2" />
          {isMounted && (
            <button
              onClick={toggleTheme}
              className="rounded-full h-10 w-10 flex items-center justify-center bg-white/5 border border-white/10 hover:bg-primary/10 hover:border-primary/30 transition-all text-muted-foreground hover:text-primary"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          )}
          <Link href="/match">
            <Button className="rounded-xl bg-primary text-primary-foreground font-black uppercase tracking-widest text-[10px] px-6 h-10 shadow-lg shadow-primary/20 hover:scale-105 transition-all">
              Initialize
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          {isMounted && (
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 hover:bg-muted transition-colors mr-2"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/90 backdrop-blur-lg p-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <Link
            href="/"
            className="block text-lg font-bold text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/match"
            className="block text-lg font-bold text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Analyze
          </Link>
          <Link
            href="/dashboard"
            className="block text-lg font-bold text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            href="/patterns"
            className="block text-lg font-bold text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Patterns
          </Link>
          <Link
            href="/briefing"
            className="block text-lg font-bold text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Briefing
          </Link>
        </div>
      )}
    </header>
  )
}
