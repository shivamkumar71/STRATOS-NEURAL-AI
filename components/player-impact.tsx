"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ChevronLeft, 
  Target, 
  Cpu, 
  Zap, 
  Shield, 
  Activity,
  User,
  GitBranch,
  Dna,
  X
} from "lucide-react"
import { Header } from "./header"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/hooks/use-toast"

interface PlayerData {
  name: string
  role: string
  impactScore: number
  decisions: number
  avgDecisionImpact: number
  heatmapIntensity: number
  profileColor: string
  recurringMistakes: string[]
  macroNexus: string
}

export function PlayerImpact() {
  const [mounted, setMounted] = useState(false)
  const [selectedPlayer, setSelectedPlayer] = useState(0)
  const { toast } = useToast()

  useEffect(() => {
    setMounted(true)
  }, [])

  const players: PlayerData[] = [
    {
      name: "Alpha-9",
      role: "Jungler / Ingress",
      impactScore: 8.4,
      decisions: 47,
      avgDecisionImpact: 1.2,
      heatmapIntensity: 92,
      profileColor: "oklch(0.7 0.25 150)",
      recurringMistakes: ["Early Pathing Inefficiency", "Objective Smite Latency"],
      macroNexus: "Leading to 15% drop in early Dragon control."
    },
    {
      name: "Beta-4",
      role: "Executive ADC",
      impactScore: 7.1,
      decisions: 38,
      avgDecisionImpact: 0.9,
      heatmapIntensity: 76,
      profileColor: "oklch(0.65 0.2 260)",
      recurringMistakes: ["Aggressive Over-extension", "Vision Denial Neglect"],
      macroNexus: "Increases late-game 'Pick' vulnerability by 22%."
    },
    {
      name: "Gamma-X",
      role: "Mid / Protocol",
      impactScore: 6.8,
      decisions: 52,
      avgDecisionImpact: 0.7,
      heatmapIntensity: 71,
      profileColor: "oklch(0.75 0.15 300)",
      recurringMistakes: ["Roam Timing Desync", "Resource Hovering"],
      macroNexus: "Results in 3.4 min average delay in Side-Lane pressure."
    },
    {
      name: "Delta-Z",
      role: "Support / Shield",
      impactScore: 6.2,
      decisions: 31,
      avgDecisionImpact: 0.8,
      heatmapIntensity: 64,
      profileColor: "oklch(0.8 0.1 200)",
      recurringMistakes: ["Cooldown Mismanagement", "Deep Ward Risk-taking"],
      macroNexus: "Costing team average 1.2 unnecessary deaths per match."
    },
    {
      name: "Epsilon-Prime",
      role: "Top / Breach",
      impactScore: 5.9,
      decisions: 25,
      avgDecisionImpact: 0.6,
      heatmapIntensity: 58,
      profileColor: "oklch(0.6 0.2 30)",
      recurringMistakes: ["Teleport Hesitation", "Lane Freeze Failure"],
      macroNexus: "Reduces split-push efficiency by 18%."
    },
  ]

  const current = players[selectedPlayer]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background ai-grid text-foreground pb-20 selection:bg-primary/30">
      <Header />

      <main className="container mx-auto px-4 md:px-6 py-12">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-all mb-12 group"
        >
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          TERMINATE_DASHBOARD_SYNC
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <Badge variant="outline" className="mb-6 rounded-full border-primary/40 bg-primary/5 text-primary font-black uppercase tracking-[0.2em] px-4 py-1 animate-pulse">
            NEURAL IMPACT PROFILING // LAYER_07
          </Badge>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none">
            PLAYER <span className="text-primary italic">TELEMETRY</span>
          </h1>
          <p className="mt-4 text-sm md:text-base font-bold text-muted-foreground uppercase tracking-widest max-w-2xl italic opacity-80">
            Surgical analysis of individual decision cascades. Deep-layer attribution without cognitive bias.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-4 items-start">
          {/* Neural List */}
          <div className="lg:col-span-1 space-y-3">
             {players.map((player, index) => (
                <button
                  key={player.name}
                  onClick={() => setSelectedPlayer(index)}
                  className="w-full text-left group outline-none"
                >
                  <div className={`relative overflow-hidden p-5 rounded-2xl transition-all duration-500 bg-card/40 backdrop-blur-xl border ${selectedPlayer === index ? 'border-primary shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)] scale-[1.02]' : 'border-white/5 hover:border-primary/40'}`}>
                    <div className="flex items-center justify-between relative z-10">
                       <div className="flex items-center gap-4">
                          <div className={`h-11 w-11 rounded-xl flex items-center justify-center transition-all ${selectedPlayer === index ? 'bg-primary text-primary-foreground rotate-3 shadow-lg shadow-primary/20' : 'bg-white/5 text-muted-foreground'}`}>
                             <User className="h-5 w-5" />
                          </div>
                          <div>
                             <h3 className="font-black text-sm tracking-tight uppercase">{player.name}</h3>
                             <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground italic">{player.role.split(' / ')[0]}</p>
                          </div>
                       </div>
                       <div className="text-right">
                          <p className={`text-xl font-black italic tracking-tighter ${selectedPlayer === index ? 'text-primary' : 'text-muted-foreground opacity-50'}`}>{player.impactScore}</p>
                       </div>
                    </div>
                    {selectedPlayer === index && <div className="absolute inset-x-0 bottom-0 h-1 bg-primary" />}
                  </div>
                </button>
             ))}
          </div>

          {/* Analysis View */}
          <div className="lg:col-span-3">
             <AnimatePresence mode="wait">
                <motion.div
                  key={selectedPlayer}
                  initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="glass-card p-8 md:p-12 rounded-[3rem] shadow-3xl overflow-hidden relative group border-0">
                    <div className="scan-line" />
                    
                    {/* Background Visual */}
                    <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none">
                       <Dna className="h-[500px] w-[500px] animate-spin-slow" />
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start mb-16 relative z-10 gap-8">
                       <div className="flex-1">
                          <div className="flex items-center gap-3 mb-6">
                            <Badge className="rounded-full px-5 py-1 bg-primary text-primary-foreground font-black italic shadow-lg shadow-primary/30 uppercase tracking-[0.2em] text-[10px]">
                               SYNC_STABLE // PRIORITY_ALPHA
                            </Badge>
                            <Badge variant="outline" className="rounded-full border-white/10 font-mono text-[9px] px-3 uppercase text-muted-foreground">ID: NEURAL_PR-{current.name.toLowerCase()}</Badge>
                          </div>
                          <h2 className="text-6xl md:text-8xl font-black tracking-[-0.05em] uppercase leading-none mb-4">{current.name}</h2>
                          <div className="flex items-center gap-4">
                             <div className="h-px w-12 bg-primary/30" />
                             <p className="text-lg font-black text-primary tracking-[0.2em] uppercase italic">{current.role}</p>
                          </div>
                       </div>
                       
                       <div className="w-full md:w-auto">
                          <div className="h-12 md:h-32 w-full md:w-32 rounded-[2rem] bg-foreground text-background flex flex-col items-center justify-center shadow-2xl relative overflow-hidden group/box">
                             <div className="absolute inset-0 bg-primary opacity-0 group-hover/box:opacity-10 transition-opacity" />
                             <span className="text-[10px] hidden md:block font-black uppercase tracking-widest opacity-60 mb-1">Impact Index</span>
                             <span className="text-2xl md:text-5xl font-black italic tracking-tighter">{current.impactScore}</span>
                             <div className="absolute top-0 left-0 w-full h-1 bg-primary animate-pulse" />
                          </div>
                       </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-16 relative z-10">
                       <div className="space-y-8">
                          <div className="bg-destructive/5 rounded-[2rem] border border-destructive/20 p-8 transition-all hover:bg-destructive/[0.08]">
                             <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-destructive mb-6 flex items-center gap-2">
                                <Activity className="h-4 w-4" />
                                Critical Inefficiencies
                             </h4>
                             <ul className="space-y-4">
                                {current.recurringMistakes.map((mistake, i) => (
                                   <li key={i} className="flex gap-4 items-start">
                                      <div className="h-5 w-5 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                         <X className="h-3 w-3 text-destructive" />
                                      </div>
                                      <p className="text-xs font-black italic tracking-tight text-foreground uppercase opacity-80 leading-tight">
                                         {mistake}
                                      </p>
                                   </li>
                                ))}
                             </ul>
                          </div>

                          <div className="bg-primary/5 rounded-[2rem] border border-primary/20 p-8 transition-all hover:bg-primary/[0.08]">
                             <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-2">
                                <GitBranch className="h-4 w-4" />
                                Macro Strategy Nexus
                             </h4>
                             <p className="text-sm font-bold italic text-muted-foreground leading-relaxed uppercase tracking-tight">
                                {current.macroNexus}
                             </p>
                             <div className="mt-6 pt-6 border-t border-primary/10 flex items-center justify-between">
                                <span className="text-[9px] font-black uppercase tracking-widest text-primary/60">Success Probability Shift</span>
                                <span className="text-xl font-black italic text-primary">High Corellation</span>
                             </div>
                          </div>
                       </div>

                       <div className="space-y-6">
                          <div className="bg-white/[0.02] rounded-[2rem] border border-white/10 p-8">
                             <div className="flex justify-between items-center mb-6">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Neural Activation Rate</h4>
                                <span className="text-2xl font-black italic text-primary">{current.heatmapIntensity}%</span>
                             </div>
                             <div className="w-full h-3 bg-black/40 rounded-full overflow-hidden shadow-inner">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  animate={{ width: `${current.heatmapIntensity}%` }}
                                  transition={{ duration: 1 }}
                                  className="h-full bg-primary relative" 
                                >
                                   <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                                </motion.div>
                             </div>
                             <div className="mt-4 flex justify-between font-mono text-[9px] font-bold text-muted-foreground uppercase opacity-50">
                                <span>Level_Idle</span>
                                <span>Target_Acquired</span>
                             </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                             <div className="p-6 bg-white/[0.02] rounded-2xl border border-white/10 text-center">
                                <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground mb-1">Decisions</p>
                                <p className="text-4xl font-black italic tracking-tighter text-foreground">{current.decisions}</p>
                             </div>
                             <div className="p-6 bg-white/[0.02] rounded-2xl border border-white/10 text-center">
                                <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground mb-1">Efficiency</p>
                                <p className="text-4xl font-black italic tracking-tighter text-primary">+{current.avgDecisionImpact * 10}%</p>
                             </div>
                          </div>
                       </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                       <button 
                          onClick={() => toast({ title: "Neural Profile Exported", description: "Telemetry data saved to local encrypted cache." })}
                          className="flex-1 h-14 bg-foreground text-background rounded-xl font-black uppercase tracking-[0.2em] text-[10px] hover:scale-[1.02] transition-all shadow-xl"
                       >
                          Export Neural Profile
                       </button>
                       <button 
                          onClick={() => toast({ title: "Protocol Injected", description: "Corrective behavioral patterns queued for next session." })}
                          className="flex-1 h-14 bg-primary/10 text-primary border border-primary/20 rounded-xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-primary/20 transition-all"
                       >
                          Inject Training Protocol
                       </button>
                    </div>
                  </Card>
                </motion.div>
             </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  )
}
