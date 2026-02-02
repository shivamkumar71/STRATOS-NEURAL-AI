"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { 
  ArrowRight, 
  ChevronLeft, 
  Zap, 
  Target, 
  Shield, 
  Activity,
  GitBranch,
  Network
} from "lucide-react"
import { Header } from "./header"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

interface FlowStep {
  title: string
  description: string
  icon: any
  delay: number
}

export function ImpactFlow() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const flowSteps: FlowStep[] = [
    {
      title: "Decision Node",
      description: "Jungler commits to bot side gank without wave priority",
      icon: Target,
      delay: 0.1
    },
    {
      title: "Local Impact",
      description: "Bot lane overextended; gank countered by enemy support rotation",
      icon: Zap,
      delay: 0.3
    },
    {
      title: "Objective Result",
      description: "Loss of bot fight allows enemy to secure scuttle and mid control",
      icon: Shield,
      delay: 0.5
    },
    {
      title: "Neural Consequence",
      description: "Snowballing vision reduction; -18% Win Probability Delta",
      icon: Activity,
      delay: 0.7
    },
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      <Header />

      <main className="container mx-auto px-6 py-12">
        <Link
          href="/patterns"
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-12 group"
        >
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Abort to Patterns
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <Badge variant="outline" className="mb-4 rounded-full border-primary/50 text-primary font-black uppercase tracking-widest px-4">
            TELEMETRY PATHWAY
          </Badge>
          <h1 className="text-6xl font-black tracking-tighter mb-4">
            CASCADE <span className="text-primary italic">ANALYSIS</span>
          </h1>
          <p className="text-muted-foreground font-medium text-lg max-w-2xl">
            Trace the neural propagation of a single micro-decision from initiation to global strategic outcome.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-stretch gap-4 mb-20 relative">
          {/* Pathway Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 -translate-y-1/2 hidden lg:block -z-10" />
          
          {flowSteps.map((step, index) => (
             <div key={index} className="flex-1 flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: step.delay, duration: 0.5 }}
                  className="w-full h-full"
                >
                  <Card className="h-full bg-card/40 backdrop-blur-2xl border-2 border-border/50 hover:border-primary/50 transition-all p-8 rounded-[2rem] shadow-2xl group flex flex-col justify-between">
                    <div>
                      <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                        <step.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xs font-black uppercase tracking-[0.25em] text-muted-foreground mb-4">{step.title}</h3>
                      <p className="text-lg font-bold leading-tight tracking-tight mb-4 group-hover:text-foreground transition-colors italic">
                        “{step.description}”
                      </p>
                    </div>
                    {index === flowSteps.length - 1 && (
                      <div className="mt-4 pt-4 border-t border-primary/10">
                        <span className="text-2xl font-black italic text-primary">-18.4%</span>
                      </div>
                    )}
                  </Card>
                </motion.div>
                
                {index < flowSteps.length - 1 && (
                  <div className="lg:hidden py-4">
                    <ArrowRight className="h-8 w-8 text-primary/30 rotate-90" />
                  </div>
                )}
             </div>
          ))}
        </div>

        <section className="grid md:grid-cols-2 gap-8 items-center">
           <Card className="bg-foreground text-background p-10 rounded-[3rem] shadow-2xl relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 p-8 opacity-10"><Network className="h-48 w-48" /></div>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-4 flex items-center gap-3">
                <GitBranch className="h-6 w-6" />
                KEY INSIGHT
              </h2>
              <p className="text-lg opacity-80 leading-relaxed font-medium italic">
                A single decision in the <span className="text-primary font-black">Early Laning Phase</span> propagates 
                through the system, determining objective parity and ultimately shifting win probability by nearly 20%.
              </p>
           </Card>

           <div className="space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground text-center">Root Decision Impact</h3>
              <div className="flex justify-center gap-12">
                 <div className="text-center">
                    <div className="text-4xl font-black italic text-primary mb-1">92%</div>
                    <div className="text-[10px] uppercase font-black tracking-widest text-muted-foreground">Criticality</div>
                 </div>
                 <div className="text-center">
                    <div className="text-4xl font-black italic text-accent mb-1">0.14s</div>
                    <div className="text-[10px] uppercase font-black tracking-widest text-muted-foreground">Trigger Latency</div>
                 </div>
                 <div className="text-center">
                    <div className="text-4xl font-black italic text-primary mb-1">HIGH</div>
                    <div className="text-[10px] uppercase font-black tracking-widest text-muted-foreground">Risk Rating</div>
                 </div>
              </div>
           </div>
        </section>
      </main>
    </div>
  )
}
