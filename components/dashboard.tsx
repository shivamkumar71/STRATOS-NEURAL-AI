"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  TrendingUp, 
  Target, 
  ArrowLeft,
  Activity,
  Zap,
  Timer,
  Brain,
  GitBranch,
  Terminal,
  Cpu,
  Layers,
  ChevronLeft
} from "lucide-react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { Header } from "./header"
import { useMatch } from "./match-context"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const chartData = [
  { time: "00:00", performance: 45, objective: 30 },
  { time: "05:00", performance: 52, objective: 40 },
  { time: "10:00", performance: 48, objective: 55 },
  { time: "15:00", performance: 61, objective: 50 },
  { time: "20:00", performance: 55, objective: 70 },
  { time: "25:00", performance: 67, objective: 65 },
  { time: "30:00", performance: 72, objective: 80 },
]

interface MetricCardProps {
  label: string
  value: string
  change: string
  icon: React.ReactNode
  positive: boolean
  delay: number
}

const MetricCard = ({ label, value, change, icon, positive, delay }: MetricCardProps) => {
  const [displayValue, setDisplayValue] = useState(value)
  
  useEffect(() => {
     const interval = setInterval(() => {
        if (value.includes('%')) {
           const num = parseFloat(value)
           const jitter = (Math.random() - 0.5) * 0.4
           setDisplayValue(`${(num + jitter).toFixed(1)}%`)
        }
     }, 2000)
     return () => clearInterval(interval)
  }, [value])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="relative overflow-hidden rounded-2xl border border-white/5 bg-card/40 backdrop-blur-xl p-5 md:p-6 group hover:border-primary/50 transition-all shadow-xl"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all text-primary">
        {icon}
      </div>
      <div className="relative z-10">
        <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">{label}</p>
        <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-foreground mb-2">{displayValue}</h3>
        <div className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${positive ? "bg-emerald-500/10 text-emerald-500" : "bg-orange-500/10 text-orange-500"}`}>
          {positive ? "↑" : "↓"} {change}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500" />
    </motion.div>
  )
}

export function Dashboard() {
  const { state } = useMatch()
  const [mounted, setMounted] = useState(false)
  const [logs, setLogs] = useState([
    { time: "05:12", event: "Neural Projection: Alpha Objective Priority High", type: "success" },
    { time: "05:44", event: "Pathing Anomaly Detected: Beta-Sector", type: "warning" },
    { time: "06:01", event: "Macro Sync Re-Established: 94%", type: "neutral" },
  ])

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      const msgs = ["Cache Refreshed", "Vision Recalculated", "Latency Stable", "Outcome Projected"]
      const now = new Date()
      const timeStr = `${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`
      setLogs(prev => [{ time: timeStr, event: msgs[Math.floor(Math.random() * msgs.length)], type: "neutral" }, ...prev.slice(0, 10)])
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background ai-grid pb-20">
      <Header />
      
      <main className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Badge variant="outline" className="mb-4 rounded-full border-primary/40 bg-primary/5 text-primary font-black uppercase tracking-[0.2em] px-4 py-1 animate-pulse">
              Live Neural Stream // v4.2 stable
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-foreground uppercase leading-none">
              COMMAND <span className="text-primary italic">CENTER</span>
            </h1>
            <p className="mt-2 text-xs md:text-sm font-bold text-muted-foreground uppercase tracking-widest">
              Session Target: <span className="text-foreground">{state.selectedTeam !== "vs" ? state.selectedTeam : "GENERIC_MATCH_ALPHA"}</span>
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="rounded-full border-border/40 bg-card/40 backdrop-blur-md px-6 font-bold hover:bg-primary/10 transition-all text-xs h-11">
              <Activity className="h-4 w-4 mr-2 text-primary" />
              Resync UI
            </Button>
            <Button className="rounded-full bg-primary text-primary-foreground px-8 font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-all text-xs h-11">
              <Zap className="h-4 w-4 mr-2" />
              Predict Outcome
            </Button>
          </div>
        </div>

        {/* Metric Cards - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          <MetricCard
            label="Prediction Confidence"
            value="92.4%"
            change="+2.1%"
            icon={<Brain className="h-5 w-5" />}
            positive={true}
            delay={0.1}
          />
          <MetricCard
            label="Efficiency Gradient"
            value="1.42x"
            change="+12.1%"
            icon={<Zap className="h-5 w-5" />}
            positive={true}
            delay={0.2}
          />
          <MetricCard
            label="Macro Synchronization"
            value="88.7%"
            change="-1.1%"
            icon={<Layers className="h-5 w-5" />}
            positive={false}
            delay={0.3}
          />
          <MetricCard
            label="Neural Latency"
            value="14ms"
            change="-3ms"
            icon={<Cpu className="h-5 w-5" />}
            positive={true}
            delay={0.4}
          />
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Performance Chart - Responsive glass card */}
          <Card className="lg:col-span-2 glass-card overflow-hidden group relative">
            <div className="scan-line" />
            <CardHeader className="p-6 md:p-8">
               <div className="flex items-center justify-between mb-4">
                  <div>
                    <CardTitle className="text-xl md:text-2xl font-black uppercase tracking-tight flex items-center gap-2">
                       <TrendingUp className="h-6 w-6 text-primary" />
                       Performance Projection
                    </CardTitle>
                    <CardDescription className="text-xs md:text-sm font-medium mt-1">Neural Model analysis of team kinetic drift across match timeline.</CardDescription>
                  </div>
                  <Badge variant="outline" className="hidden sm:flex rounded-lg border-white/10 bg-white/5 font-mono text-[10px]">REAL_TIME_INGESTION</Badge>
               </div>
            </CardHeader>
            <CardContent className="p-2 sm:p-6 md:p-8 pt-0">
               <div className="h-[280px] md:h-[400px] w-full mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                       <defs>
                          <linearGradient id="colorPerf" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="oklch(0.65 0.24 353)" stopOpacity={0.4}/>
                             <stop offset="95%" stopColor="oklch(0.65 0.24 353)" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="colorObj" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="oklch(0.66 0.22 30)" stopOpacity={0.2}/>
                             <stop offset="95%" stopColor="oklch(0.66 0.22 30)" stopOpacity={0}/>
                          </linearGradient>
                       </defs>
                       <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                       <XAxis 
                          dataKey="time" 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{fontSize: 10, fill: "rgba(255,255,255,0.4)"}} 
                       />
                       <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: "rgba(255,255,255,0.4)"}} />
                       <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#1a1a2e', 
                            border: '1px solid rgba(255,255,255,0.1)', 
                            borderRadius: '12px',
                            backdropFilter: 'blur(10px)',
                            fontSize: '12px'
                          }} 
                       />
                       <Area 
                          type="monotone" 
                          dataKey="performance" 
                          stroke="oklch(0.65 0.24 353)" 
                          strokeWidth={4} 
                          fillOpacity={1} 
                          fill="url(#colorPerf)" 
                          animationDuration={2000}
                       />
                       <Area 
                          type="monotone" 
                          dataKey="objective" 
                          stroke="oklch(0.66 0.22 30)" 
                          strokeWidth={2} 
                          strokeDasharray="5 5"
                          fillOpacity={1} 
                          fill="url(#colorObj)" 
                       />
                    </AreaChart>
                  </ResponsiveContainer>
               </div>
            </CardContent>
          </Card>

          {/* Neural Terminal Sidebar */}
          <div className="flex flex-col gap-6">
            <Card className="glass-card flex-1 min-h-[400px] flex flex-col">
              <CardHeader className="border-b border-white/5 p-6 md:p-8">
                <div className="flex items-center gap-3">
                   <div className="h-2 w-2 rounded-full bg-primary animate-ping" />
                   <CardTitle className="text-lg font-black uppercase tracking-tight">Neural Feed</CardTitle>
                </div>
                <CardDescription className="text-xs font-bold uppercase tracking-widest text-muted-foreground italic">Ingestion active...</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 overflow-hidden p-0 relative">
                <div className="absolute inset-0 overflow-y-auto p-6 space-y-4 font-mono text-[10px] md:text-xs">
                   <AnimatePresence initial={false}>
                      {logs.map((item, i) => (
                         <motion.div 
                            key={`${item.time}-${i}`} 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex gap-4 items-start border-b border-border/10 pb-3 group"
                         >
                            <span className="text-primary/60 font-bold flex-shrink-0">[{item.time}]</span>
                            <span className={`italic font-medium ${item.type === 'error' ? 'text-destructive' : item.type === 'warning' ? 'text-orange-500' : item.type === 'success' ? 'text-primary' : 'text-foreground'}`}>
                               {item.event}
                            </span>
                         </motion.div>
                      ))}
                   </AnimatePresence>
                   <div className="flex items-center gap-2 text-primary/50 text-[10px] font-black uppercase tracking-widest py-4 border-t border-border/10">
                      <Terminal className="h-3 w-3" />
                      <span>Streaming real-time telemetry from Nexus-6</span>
                   </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/10 border-primary/20 p-6 rounded-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Brain className="h-24 w-24" />
               </div>
               <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2">Neural Health</p>
               <h4 className="text-xl font-black text-foreground mb-4">Sync Stable</h4>
               <div className="w-full bg-black/40 h-2 rounded-full overflow-hidden mb-2">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "94%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-primary" 
                  />
               </div>
               <p className="text-[10px] text-muted-foreground font-bold uppercase">Confidence Level: 0.94</p>
            </Card>
          </div>
        </div>

        {/* Bottom Actions - Fully Responsive */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-12 pt-8 border-t border-border/40">
           <Link href="/match" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full px-10 font-black uppercase tracking-widest text-[10px] h-12 rounded-xl">
                 <ChevronLeft className="h-4 w-4 mr-2" />
                 Back to Match
              </Button>
           </Link>
           <Link href="/patterns" className="w-full sm:w-auto">
              <Button className="w-full px-10 font-black uppercase tracking-widest text-[10px] h-12 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                 Identify Patterns
              </Button>
           </Link>
        </div>
      </main>
    </div>
  )
}
