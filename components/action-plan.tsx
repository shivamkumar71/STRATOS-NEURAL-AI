"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ChevronDown, 
  CheckCircle2, 
  AlertCircle, 
  ArrowLeft,
  Target,
  Zap,
  Activity,
  Cpu,
  Waves,
  Radio,
  Gamepad2,
  Lock,
} from "lucide-react"
import { Header } from "./header"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface ActionItem {
  id: number
  title: string
  description: string
  timeline: string
  priority: "high" | "medium" | "low"
  completed: boolean
}

export function ActionPlan() {
  const [expandedItems, setExpandedItems] = useState<number[]>([1])
  const [completedItems, setCompletedItems] = useState<number[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const actions: ActionItem[] = [
    {
      id: 1,
      title: "Jungler Route Optimization Training",
      description:
        "Run 2 scrim sessions focusing on bot-side camp prioritization at minutes 3:30-5:00. Use replay analysis to identify decision points and alternatives.",
      timeline: "Next 2 Sessions",
      priority: "high",
      completed: false,
    },
    {
      id: 2,
      title: "Mid Game Team Fight Framework",
      description:
        "Establish clear positioning rules for squishy champions (Mid, ADC, Support). Create reference cards with engagement distance thresholds.",
      timeline: "Next 3 Sessions",
      priority: "high",
      completed: false,
    },
    {
      id: 3,
      title: "Role-Based Warding Standardization",
      description:
        "Document standard ward locations for each role. Practice in practice tool to build muscle memory.",
      timeline: "Phase 1 - Complete",
      priority: "medium",
      completed: false,
    },
    {
      id: 4,
      title: "Late Game Confidence Drills",
      description:
        "Simulate high-risk late game scenarios. Practice risk assessment and decision-making under pressure.",
      timeline: "Ongoing Protocol",
      priority: "medium",
      completed: false,
    },
  ]

  const toggleExpand = (id: number) => {
    setExpandedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const toggleComplete = (id: number) => {
    setCompletedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const priorityColors = {
    high: "bg-destructive/10 text-destructive border-destructive/20",
    medium: "bg-primary/10 text-primary border-primary/20",
    low: "bg-accent/10 text-accent border-accent/20",
  }

  const completedProgress = (completedItems.length / actions.length) * 100

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
              href="/briefing"
              className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground hover:text-primary transition-all group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-2" />
              TERMINATE_DEPLOIMENT // RETURN_TO_BRIEFING
            </Link>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
            <div>
              <Badge variant="outline" className="mb-6 rounded-full border-primary/40 bg-primary/5 text-primary font-black uppercase tracking-[0.2em] px-4 py-1 animate-pulse">
                TACTICAL_PROTOCOL_v4.2
              </Badge>
              <h1 className="text-7xl md:text-8xl font-black tracking-tighter uppercase leading-none italic">
                STRATEGIC <span className="text-primary not-italic">DEPLOYMENT</span>
              </h1>
            </div>
            
            <div className="flex flex-col items-end gap-4 p-8 glass-card rounded-[2rem] min-w-[240px]">
              <div className="flex items-center gap-3 self-start">
                 <Radio className="h-4 w-4 text-primary animate-pulse" />
                 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">SYNC_PROGRESS</span>
              </div>
              <div className="w-full space-y-3">
                 <div className="flex items-baseline justify-between">
                    <span className="text-4xl font-black italic tracking-tighter">{Math.round(completedProgress)}%</span>
                    <span className="text-[8px] font-black uppercase tracking-widest opacity-40">TARGET_REACHED</span>
                 </div>
                 <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                      className="h-full bg-primary relative" 
                      initial={{ width: 0 }}
                      animate={{ width: `${completedProgress}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[size:1rem_1rem] animate-[move-bg_1s_linear_infinite]" />
                    </motion.div>
                 </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-6">
              {actions.map((action, index) => (
                <motion.div
                  key={action.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card 
                    className={`group relative overflow-hidden border-0 rounded-[2.5rem] transition-all duration-500 ${
                      completedItems.includes(action.id) 
                      ? "bg-primary/5 opacity-40" 
                      : "glass-card hover:translate-x-2"
                    }`}
                  >
                    {!completedItems.includes(action.id) && <div className="scan-line" />}
                    
                    <div 
                      className="p-8 md:p-10 cursor-pointer relative z-10"
                      onClick={() => toggleExpand(action.id)}
                    >
                      <div className="flex items-start gap-8">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleComplete(action.id)
                          }}
                          className={`mt-1 flex-shrink-0 h-10 w-10 rounded-2xl border-2 flex items-center justify-center transition-all duration-300 ${
                            completedItems.includes(action.id)
                              ? "bg-primary border-primary rotate-12 scale-90"
                              : "border-white/10 hover:border-primary bg-white/5"
                          }`}
                        >
                          {completedItems.includes(action.id) ? (
                            <CheckCircle2 className="h-5 w-5 text-black" />
                          ) : (
                            <div className="h-2 w-2 rounded-full bg-primary/20 animate-ping" />
                          )}
                        </button>

                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className={`text-2xl font-black uppercase tracking-tight leading-none ${completedItems.includes(action.id) ? "line-through opacity-50" : "text-white group-hover:text-primary transition-colors"}`}>
                              {action.title}
                            </h3>
                            <div className={`p-2 rounded-full bg-white/5 transition-transform duration-500 ${expandedItems.includes(action.id) ? "rotate-180 bg-primary/20 text-primary" : ""}`}>
                              <ChevronDown className="h-5 w-5" />
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 flex-wrap">
                            <Badge className={`${priorityColors[action.priority]} border-0 rounded-lg font-black uppercase text-[9px] tracking-[0.2em] px-3 py-1`}>
                              {action.priority}_PRIORITY
                            </Badge>
                            <div className="h-1 w-1 rounded-full bg-white/10" />
                            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
                              <Activity className="h-3 w-3 text-primary" />
                              TIMELINE: {action.timeline}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <AnimatePresence>
                      {expandedItems.includes(action.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "circOut" }}
                        >
                          <div className="px-10 md:px-28 pb-10 pt-4 relative z-10">
                             <div className="p-6 rounded-3xl bg-white/5 border border-white/5 mb-8">
                               <p className="text-[14px] text-muted-foreground font-medium leading-relaxed uppercase tracking-wider">
                                 {action.description}
                               </p>
                             </div>
                             
                             <div className="flex gap-4">
                                <Button className="h-12 px-8 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-[10px] hover:bg-primary transition-colors">
                                  LAUNCH_NEURAL_REPLAY
                                </Button>
                                <Button variant="outline" className="h-12 px-8 rounded-2xl border-white/10 bg-transparent text-white font-black uppercase tracking-widest text-[10px] hover:border-primary">
                                  MARK_CRITICAL
                                </Button>
                             </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="lg:col-span-4 space-y-8">
               <Card className="bg-white text-black p-10 rounded-[3rem] shadow-4xl relative overflow-hidden group">
                  <div className="absolute -top-10 -right-10 opacity-5 group-hover:scale-110 transition-transform duration-700">
                    <Zap className="h-64 w-64 fill-current" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-10">
                      <div className="h-12 w-12 rounded-2xl bg-black flex items-center justify-center">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-black uppercase tracking-tighter leading-none">
                        PRE-FLIGHT<br/><span className="text-primary italic">SYSTEMS</span>
                      </h3>
                    </div>

                    <ul className="space-y-6 mb-12">
                      {[
                        "Recalibrate Core Sensors",
                        "Initialize Team Vitals",
                        "Synchronize Strategy Map",
                        "Authorize Combat Protocol"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-4 group/item cursor-pointer">
                          <div className="h-6 w-6 rounded-xl border-2 border-black/10 flex items-center justify-center group-hover/item:border-primary group-hover/item:bg-primary transition-all duration-300">
                            <div className="h-1.5 w-1.5 rounded-full bg-black opacity-20 group-hover/item:opacity-100" />
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Button className="w-full h-20 rounded-[2rem] bg-black text-white font-black uppercase tracking-[0.4em] text-[12px] hover:bg-primary transition-colors group/btn">
                      INITIATE_SESSION
                      <Zap className="ml-4 h-5 w-5 fill-primary text-primary animate-pulse" />
                    </Button>
                  </div>
               </Card>

               <Card className="glass-card p-10 rounded-[3rem] shadow-xl relative overflow-hidden">
                  <div className="flex items-center gap-4 mb-10">
                    <Cpu className="h-5 w-5 text-primary" />
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">EFFICIENCY_TELEMETRY</h3>
                  </div>

                  <div className="space-y-10">
                    <div className="space-y-4">
                      <div className="flex justify-between items-end">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">SUCCESS_RATE</span>
                        <span className="text-3xl font-black italic text-primary tracking-tighter">84%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-primary" 
                          initial={{ width: 0 }}
                          animate={{ width: "84%" }}
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-end">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">ADHERENCE_INDEX</span>
                        <span className="text-3xl font-black italic text-white tracking-tighter">92%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-white" 
                          initial={{ width: 0 }}
                          animate={{ width: "92%" }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-10 border-t border-white/5">
                    <div className="flex items-center gap-4 opacity-50">
                      <Lock className="h-3 w-3" />
                      <span className="text-[8px] font-black uppercase tracking-[0.3em]">ENCRYPTION_ACTIVE: AES_256</span>
                    </div>
                  </div>
               </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
