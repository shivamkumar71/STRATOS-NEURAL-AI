"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Zap,
  TrendingUp,
  BarChart3,
  Brain,
  Target,
  Cpu,
  ShieldCheck,
  Activity,
  Layers,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: any
  title: string
  description: string
  delay: number
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    className="relative group p-8 md:p-10 rounded-[2rem] border border-white/5 bg-card/40 backdrop-blur-2xl hover:bg-card/60 hover:border-primary/40 transition-all shadow-xl hover:shadow-primary/10 overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 group-hover:scale-110 transition-all text-primary">
       <div className="scan-line" />
       <Icon className="h-20 w-20" />
    </div>
    
    <div className="relative z-10">
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 shadow-inner">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <h3 className="text-xl md:text-2xl font-black mb-4 tracking-tight uppercase">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm font-bold uppercase tracking-tight opacity-70 group-hover:opacity-100 transition-opacity italic">
         {description}
      </p>
    </div>
    <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-700" />
  </motion.div>
)

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background ai-grid selection:bg-primary/20 overflow-x-hidden">
      <Header />

      <main className="relative z-10 pt-20">
        <div className="absolute top-0 left-0 w-full h-[100vh] pointer-events-none overflow-hidden -z-10">
           <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[150px] rounded-full animate-pulse" />
           <div className="absolute bottom-[20%] left-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[150px] rounded-full animate-pulse delay-1000" />
           <div className="scan-line h-full opacity-10" />
        </div>

        <section className="container mx-auto px-6 pt-12 md:pt-24 pb-32">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-12 backdrop-blur-xl animate-bounce-slow shadow-xl shadow-primary/10"
            >
              <Cpu className="h-4 w-4" />
              SYSTEM ACTIVE // NEURAL ENGINE v4.2 stable
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
               <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black tracking-[-0.05em] text-foreground uppercase leading-[0.85] mb-8">
                STRATOS <br />
                <span className="text-primary italic relative">
                  NEURAL
                  <div className="absolute -bottom-2 left-0 w-full h-2 md:h-4 bg-primary/20 -skew-x-12 blur-sm" />
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl text-muted-foreground max-w-3xl leading-snug font-bold mb-12 italic uppercase tracking-tight"
            >
              The definitive AI engine for high-performance esports telemetry. <br className="hidden md:block" />
              We normalize every micro-decision into <span className="text-foreground">actionable strategic dominance.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center w-full sm:w-auto"
            >
              <Link href="/match" className="w-full sm:w-auto">
                <Button size="lg" className="w-full h-16 sm:h-20 px-12 text-xs md:text-sm font-black uppercase tracking-[0.2em] rounded-2xl group shadow-2xl shadow-primary/40 bg-primary hover:scale-105 transition-all">
                  INITIALIZE ANALYSIS
                  <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              <Link href="/team" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full h-16 sm:h-20 px-12 text-xs md:text-sm font-black uppercase tracking-[0.2em] rounded-2xl border-2 hover:bg-white/5 transition-all backdrop-blur-md">
                  KNOWLEDGE BASE
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-24 md:mt-32 relative max-w-6xl mx-auto"
          >
            <div className="glass-card rounded-[2.5rem] overflow-hidden group shadow-3xl">
              <div className="absolute top-0 left-0 w-full h-12 bg-white/5 border-b border-white/5 flex items-center px-6 gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-500/20" />
                 <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                 <div className="w-3 h-3 rounded-full bg-green-500/20" />
                 <div className="ml-4 font-mono text-[10px] text-muted-foreground opacity-50 font-bold uppercase tracking-widest">NEURAL_DASHBOARD_PREVIEW // ACCESS_LEVEL_S1</div>
              </div>
              <div className="aspect-[21/9] md:aspect-[16/7] relative p-12 pt-24">
                 <div className="scan-line" />
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
                    {[Brain, Activity, Layers].map((Icon, i) => (
                       <div key={i} className="flex flex-col justify-center items-center rounded-3xl bg-white/[0.02] border border-white/5 p-8 group-hover:border-primary/20 transition-all">
                          <Icon className="h-12 w-12 text-primary/40 mb-6 group-hover:text-primary transition-all animate-pulse" />
                          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                             <div className="h-full bg-primary/40 rounded-full" style={{ width: `${30 + i * 20}%` }} />
                          </div>
                          <div className="mt-4 flex justify-between w-full font-mono text-[10px] text-muted-foreground font-bold">
                             <span>DATA_SET_{i+1}</span>
                             <span className="text-primary">{30 + i * 20}% SYNC</span>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="container mx-auto px-6 py-32 md:py-48 border-t border-white/5 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-2 bg-background border border-white/5 rounded-full font-mono text-[10px] text-primary font-black tracking-[0.4em] uppercase">
             NEURAL_LAYERS_01-04
          </div>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <h2 className="text-xs md:text-sm font-black uppercase tracking-[0.5em] text-primary mb-6 flex items-center gap-3">
                 <div className="h-px w-12 bg-primary/30" />
                 Core Capabilities
              </h2>
              <p className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                PROPRIETARY AI <span className="text-primary italic">VICTORY ENGINE</span>
              </p>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm md:text-base font-bold uppercase tracking-tight leading-relaxed italic opacity-80">
              Engineered by data scientists and pro-coaches to bridge the gap between human intuition and machine precision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <FeatureCard 
              icon={Brain}
              title="Cognitive"
              description="Identify player decision patterns and cognitive load spikes during critical clutch moments."
              delay={0.1}
            />
            <FeatureCard 
              icon={Target}
              title="Synthesis"
              description="Real-time probability mapping that isolates the single most effective path to victory."
              delay={0.2}
            />
            <FeatureCard 
              icon={Layers}
              title="Synergy"
              description="Visualize team micro-interactions to detect breakdowns in trade-timing and backup coverage."
              delay={0.3}
            />
            <FeatureCard 
              icon={ShieldCheck}
              title="Counter Strat"
              description="Automated opponent scouting that predicts pick-ban phases with 89%+ historical accuracy."
              delay={0.4}
            />
          </div>
        </section>

        <section className="relative py-24 md:py-32 overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-primary/5 backdrop-blur-3xl -z-10" />
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24 items-center">
              {[
                { label: "Data Points", value: "4.2B+" },
                { label: "Pro Teams", value: "150+" },
                { label: "Win Rate Delta", value: "+14.2%" },
                { label: "Latency", value: "<15MS" },
              ].map((stat, i) => (
                <div key={i} className="text-center group">
                  <p className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 text-primary group-hover:scale-110 transition-transform duration-500">{stat.value}</p>
                  <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-muted-foreground opacity-70 italic">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

