"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ChevronLeft, 
  Cpu, 
  RefreshCcw, 
  TrendingUp, 
  Wind, 
  Zap, 
  Activity,
  Box,
  Waves,
  Radio,
  Gamepad2,
  Lock,
  ArrowRight,
  Database,
  Binary,
} from "lucide-react"
import { Header } from "./header"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

interface SimulationResult {
  label: string
  metric: string
  actual: string
  alternative: string
  change: string
  positive: boolean
}

export function StrategySimulator() {
  const [mounted, setMounted] = useState(false)
  const [showAlternative, setShowAlternative] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const results: SimulationResult[] = [
    {
      label: "Win Probability",
      metric: "Win Rate Delta",
      actual: "67%",
      alternative: "73%",
      change: "+6%",
      positive: true,
    },
    {
      label: "Objective Retention",
      metric: "System Control",
      actual: "54%",
      alternative: "62%",
      change: "+8%",
      positive: true,
    },
    {
      label: "Early Game XP",
      metric: "Resource Gradient @10m",
      actual: "-200",
      alternative: "-80",
      change: "+120",
      positive: true,
    },
    {
      label: "Kinetic Ratio",
      metric: "Neural KD",
      actual: "1.2",
      alternative: "1.45",
      change: "+0.25",
      positive: true,
    },
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-foreground selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(226,18,50,0.08)_0%,transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <Header />

      <main className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12"
          >
            <Link
              href="/patterns"
              className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground hover:text-primary transition-all group"
            >
              <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-2" />
              TERMINATE_SIMULATION // RETURN_TO_PATTERNS
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-20">
            <Badge variant="outline" className="mb-6 rounded-full border-primary/40 bg-primary/5 text-primary font-black uppercase tracking-[0.3em] px-4 py-1 animate-pulse">
               KINETIC_EMULATION_ENGINE // v4.0.0
            </Badge>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-none italic mb-8">
              QUANTUM <span className="text-primary not-italic">EMULATOR</span>
            </h1>
            <p className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.4em] text-muted-foreground opacity-60 max-w-2xl leading-relaxed">
              Run high-fidelity neural simulations to isolate performance deltas and optimize strategic paradigms.
            </p>
          </motion.div>

          {/* Neural Toggle */}
          <Card className="glass-card mb-20 p-10 md:p-14 rounded-[3.5rem] relative overflow-hidden group">
            <div className="scan-line" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex items-center gap-8">
                <div className={`h-24 w-24 rounded-3xl flex items-center justify-center transition-all duration-700 shadow-2xl ${!showAlternative ? 'bg-white text-black translate-y-[-4px]' : 'bg-white/5 text-muted-foreground'}`}>
                  {showAlternative ? <Binary className="h-8 w-8 animate-pulse" /> : <Database className="h-8 w-8" />}
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2 block">DATA_SOURCE_PARADIGM</label>
                  <h2 className="text-3xl font-black italic tracking-tighter uppercase">{!showAlternative ? "Historical Baseline" : "Neural Optimized"}</h2>
                </div>
              </div>

              <div className="flex items-center gap-10 bg-black/40 p-6 rounded-[2.5rem] border border-white/5">
                <span className={`text-[10px] font-black uppercase tracking-[0.4em] transition-opacity ${!showAlternative ? 'opacity-100 text-white' : 'opacity-30'}`}>ACTUAL</span>
                <Switch 
                  checked={showAlternative}
                  onCheckedChange={setShowAlternative}
                  className="scale-[2.0] data-[state=checked]:bg-primary"
                />
                <span className={`text-[10px] font-black uppercase tracking-[0.4em] transition-opacity ${showAlternative ? 'opacity-100 text-primary' : 'opacity-30'}`}>QUANTUM_OPT</span>
              </div>

              <div className="hidden lg:flex items-center gap-4 px-8 border-l border-white/10">
                 <RefreshCcw className={`h-5 w-5 text-primary ${showAlternative ? 'animate-spin' : ''}`} />
                 <div className="flex flex-col">
                    <span className="text-[8px] font-black uppercase tracking-[0.3em] text-muted-foreground">PROCESSING_DELTA</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white">RECALIBRATING_VECTORS...</span>
                 </div>
              </div>
            </div>
          </Card>

          {/* Results Grid */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-20">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card h-full p-8 md:p-10 rounded-[3rem] hover:translate-y-[-8px] transition-all duration-500 border-0 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                    <TrendingUp className="h-12 w-12" />
                  </div>
                  
                  <div className="relative z-10 flex flex-col justify-between h-full">
                     <div className="space-y-2 mb-10">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary block">{result.metric}</label>
                        <h3 className="text-xl font-black uppercase tracking-tighter text-white leading-tight">{result.label}</h3>
                     </div>

                     <div className="space-y-6">
                        <div className="flex items-end justify-between">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={showAlternative ? 'alt' : 'act'}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="space-y-1"
                            >
                               <span className="text-[8px] font-black uppercase tracking-widest text-muted-foreground opacity-50 block">OUTPUT_VALUE</span>
                               <span className={`text-5xl font-black italic tracking-tighter leading-none ${showAlternative ? 'text-primary' : 'text-white'}`}>
                                 {showAlternative ? result.alternative : result.actual}
                               </span>
                            </motion.div>
                          </AnimatePresence>
                          <div className={`p-3 rounded-2xl bg-primary/10 border border-primary/20 ${showAlternative ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} transition-all duration-700`}>
                            <span className="text-[12px] font-black text-primary font-mono">{result.change}</span>
                          </div>
                        </div>

                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                             className={`h-full ${showAlternative ? 'bg-primary' : 'bg-white'}`}
                             initial={{ width: "30%" }}
                             animate={{ width: showAlternative ? "85%" : "60%" }}
                             transition={{ duration: 1, ease: "circOut" }}
                          />
                        </div>
                     </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Simulation Detail */}
          <Card className="glass-card p-12 md:p-20 rounded-[4rem] relative overflow-hidden border-0">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-right from-transparent via-primary to-transparent opacity-50" />
             
             <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-10">
                   <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
                      <Zap className="h-8 w-8 text-primary fill-primary" />
                   </div>
                   <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none">
                     SYNAPTIC <br/><span className="text-primary italic">OPTIMIZATION</span>
                   </h2>
                   <p className="text-[14px] text-muted-foreground uppercase font-black tracking-widest leading-relaxed">
                     BY OVERRIDING RECOVERY PROTOCOLS AND RE-ROUTING KINETIC ENERGY FLOWS, THE NEURAL MODEL IDENTIFIED A 12% EFFICIENCY DRIFT IN THE MID-GAME MACRO LOOP.
                   </p>
                   <div className="flex gap-4">
                      {["VECTOR_ALIGN", "NODE_RE_SYNC", "APPLY_CALIBRATION"].map((tag) => (
                        <Badge key={tag} className="bg-white/5 hover:bg-white/10 border-0 text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-xl transition-colors">
                          {tag}
                        </Badge>
                      ))}
                   </div>
                </div>

                <div className="relative group/viz">
                   <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-all duration-700" />
                   <div className="relative aspect-square glass-card rounded-full p-1 border-white/5 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0%,rgba(226,18,50,0.1)_50%,transparent_100%)] animate-[spin_10s_linear_infinite]" />
                      <div className="relative h-[80%] w-[80%] rounded-full border border-white/5 flex items-center justify-center">
                         <div className="h-[60%] w-[60%] rounded-full border border-primary/20 flex items-center justify-center">
                            <Cpu className="h-20 w-20 text-primary animate-pulse" />
                            <div className="absolute inset-x-0 top-1/2 h-1 bg-primary/20 animate-pulse" />
                         </div>
                      </div>
                      
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                        {[0, 60, 120, 180, 240, 300].map((deg) => (
                          <div 
                            key={deg} 
                            style={{ transform: `rotate(${deg}deg) translateY(-45%)` }}
                            className="absolute top-1/2 left-1/2 w-[1px] h-10 bg-primary/50"
                          />
                        ))}
                      </div>
                   </div>
                </div>
             </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
