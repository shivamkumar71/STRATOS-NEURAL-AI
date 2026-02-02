"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ChevronRight, 
  AlertTriangle, 
  ArrowLeft, 
  Search, 
  Filter, 
  Brain, 
  Layers, 
  Zap,
  Target,
  BarChart3,
  Waves,
  Eye,
  Activity,
  ChevronLeft
} from "lucide-react"
import { Header } from "./header"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

interface Pattern {
  id: number
  title: string
  when: string
  why: string
  impact: string
  frequency: number
  probability: number
  category: "Tactical" | "Macro" | "Vision" | "Mental"
  contributors: string[]
}

export function PatternDiscovery() {
  const router = useRouter()
  const { toast } = useToast()
  const [selectedPattern, setSelectedPattern] = useState<number>(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const patterns: Pattern[] = [
    {
      id: 1,
      title: "Jungler Gank Timing Mismatch",
      category: "Macro",
      when: "Occurs in minutes 5-12 during laning phase",
      why: "Jungler commits to ganks without sufficient wave priority for laner",
      impact: "Team fight win rate drops 18% when this pattern is active. Average 2.1 kills lost per occurrence.",
      probability: 89,
      frequency: 14,
      contributors: ["Alex 'Cipher' Chen", "Sarah 'Ghost' Kim"]
    },
    {
      id: 2,
      title: "Bot Lane Engage Vision Gap",
      category: "Vision",
      when: "Happens 3-4 times per game during mid-game",
      why: "ADC initiates teamfights without enemy vision denial, leading to counter-engages",
      impact: "Win probability decreases 12% in matches with 4+ occurrences. High risk, low reward.",
      probability: 72,
      frequency: 8,
      contributors: ["Sarah 'Ghost' Kim", "David 'Viper' Lin"]
    },
    {
      id: 3,
      title: "Mid-Game Objective Hesitation",
      category: "Mental",
      when: "Triggered after baron attempts fail or team loses a teamfight",
      why: "Team loses confidence and avoids high-value objectives for 2-3 minutes",
      impact: "Teams miss 2.3 free objectives on average. Win rate impact: -8% per pattern",
      probability: 95,
      frequency: 11,
      contributors: ["Marcus 'Zen' Thorne", "Elena 'Pulse' Rodriguez"]
    },
    {
      id: 4,
      title: "Late Game Over-Positioning",
      category: "Tactical",
      when: "Manifests in minutes 30+ during higher-stakes teamfights",
      why: "Squishier champions (Mid, ADC) position too far forward after securing picks",
      impact: "Position-based deaths increase by 23%. Each death in late game costs 45 sec + objective",
      probability: 64,
      frequency: 6,
      contributors: ["Elena 'Pulse' Rodriguez", "Sarah 'Ghost' Kim"]
    },
  ]

  if (!mounted) return null
  const current = patterns[selectedPattern]

  return (
    <div className="min-h-screen bg-background ai-grid text-foreground pb-20 selection:bg-primary/30">
      <Header />

      <main className="container mx-auto px-4 md:px-6 py-12">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-all mb-12 group"
        >
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          DISCONNECT_PATTERN_NODE
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <Badge variant="outline" className="mb-6 rounded-full border-primary/40 bg-primary/5 text-primary font-black uppercase tracking-[0.2em] px-4 py-1 animate-pulse">
            PATTERN_REWARD_RECOGNITION // NODE_04
          </Badge>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none">
            RECURRING <span className="text-primary italic">PATTERNS</span>
          </h1>
          <p className="mt-4 text-sm md:text-base font-bold text-muted-foreground uppercase tracking-widest max-w-2xl italic opacity-80">
            Neural mapping of team behavior. Identifying structural weaknesses through repetitive action loops.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3 items-start">
          <div className="lg:col-span-1 space-y-4">
            <div className="relative group">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
               <Input 
                  placeholder="FILTER_MATRIX..." 
                  className="h-14 pl-12 bg-card/40 backdrop-blur-xl border-white/5 rounded-2xl focus:border-primary/50 focus:ring-0 font-black uppercase text-[10px] tracking-widest placeholder:text-muted-foreground/30"
               />
            </div>

            <div className="space-y-3">
               {patterns.map((pattern, index) => (
                  <button
                    key={pattern.id}
                    onClick={() => setSelectedPattern(index)}
                    className="w-full text-left focus:outline-none group"
                  >
                    <div className={`relative overflow-hidden p-5 rounded-2xl transition-all duration-500 bg-card/40 backdrop-blur-xl border ${selectedPattern === index ? 'border-primary shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)] scale-[1.02]' : 'border-white/5 hover:border-primary/40'}`}>
                       <div className="flex items-start justify-between relative z-10">
                          <div>
                             <div className="flex items-center gap-2 mb-2">
                                <div className={`h-6 w-6 rounded-lg flex items-center justify-center ${selectedPattern === index ? 'bg-primary text-primary-foreground' : 'bg-white/5 text-muted-foreground'}`}>
                                   {pattern.category === "Macro" && <Layers className="h-3 w-3" />}
                                   {pattern.category === "Vision" && <Eye className="h-3 w-3" />}
                                   {pattern.category === "Mental" && <Brain className="h-3 w-3" />}
                                   {pattern.category === "Tactical" && <Target className="h-3 w-3" />}
                                </div>
                                <Badge variant="outline" className="rounded-full border-white/10 font-black uppercase text-[8px] tracking-[0.2em] text-muted-foreground bg-white/5 h-5">
                                   {pattern.category}
                                </Badge>
                             </div>
                             <h3 className="font-black text-sm tracking-tight uppercase leading-snug">{pattern.title}</h3>
                          </div>
                          <div className={`text-xl font-black italic tracking-tighter ${selectedPattern === index ? 'text-primary' : 'text-muted-foreground opacity-30'}`}>
                             {pattern.probability}%
                          </div>
                       </div>
                       {selectedPattern === index && <div className="absolute inset-x-0 bottom-0 h-1 bg-primary" />}
                    </div>
                  </button>
               ))}
            </div>
          </div>

          {/* Pattern Engine Output */}
          <div className="lg:col-span-2">
             <AnimatePresence mode="wait">
                <motion.div
                  key={selectedPattern}
                  initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="glass-card p-6 md:p-12 rounded-[3.5rem] shadow-4xl overflow-hidden relative group border-0">
                    <div className="scan-line" />
                    
                    <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8 relative z-10">
                       <div className="flex-1">
                          <div className="flex items-center gap-3 mb-6">
                            <Badge className="rounded-full px-5 py-1 bg-primary text-primary-foreground font-black italic shadow-lg shadow-primary/30 uppercase tracking-[0.2em] text-[10px]">
                               PATTERN_CONFIRMED // SYNC_98
                            </Badge>
                            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-50">Model_{current.id}.alpha</span>
                          </div>
                          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-tight mb-4 italic">{current.title}</h2>
                          <div className="flex items-center gap-4">
                             <div className="h-px w-10 bg-primary/30" />
                             <p className="text-xs font-black text-primary tracking-[0.2em] uppercase">{current.category} HEURISTIC</p>
                          </div>
                       </div>
                       
                       <div className="w-full md:w-auto grid grid-cols-2 md:flex md:flex-col gap-4">
                          <div className="p-8 bg-white/[0.02] rounded-3xl border border-white/10 text-center min-w-[140px] shadow-xl">
                             <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">Frequency</p>
                             <p className="text-4xl font-black italic tracking-tighter text-foreground">{current.frequency}x</p>
                          </div>
                          <div className="p-8 bg-white/[0.02] rounded-3xl border border-white/10 text-center min-w-[140px] shadow-xl">
                             <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">Win Impact</p>
                             <p className="text-4xl font-black italic tracking-tighter text-destructive">-{current.impact.match(/\d+%/)?.[0] || '12%'}</p>
                          </div>
                       </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 mb-12 relative z-10">
                       <div className="space-y-6">
                          <div className="bg-primary/5 rounded-[2.5rem] border border-primary/20 p-8 transition-all hover:bg-primary/[0.08] group/card">
                             <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-3">
                                <Zap className="h-4 w-4 animate-pulse" />
                                Temporal Trigger Matrix
                             </h4>
                             <p className="text-base font-black italic text-muted-foreground leading-relaxed uppercase tracking-tight group-hover/card:text-foreground transition-colors">
                                "{current.when}"
                             </p>
                          </div>

                          <div className="bg-white/[0.02] rounded-[2.5rem] border border-white/10 p-8 hover:border-white/20 transition-all group/card">
                             <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-6 flex items-center gap-3">
                                <Target className="h-4 w-4" />
                                Root Cause Architecture
                             </h4>
                             <p className="text-base font-black italic text-foreground leading-relaxed uppercase tracking-tight">
                                "{current.why}"
                             </p>
                          </div>
                       </div>

                       <div className="space-y-6">
                          <div className="bg-destructive/5 rounded-[2.5rem] border border-destructive/20 p-8 transition-all hover:bg-destructive/[0.08] group/card">
                             <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-destructive mb-6 flex items-center gap-3">
                                <Activity className="h-4 w-4" />
                                Strategic Vulnerability
                             </h4>
                             <p className="text-base font-black italic text-muted-foreground leading-relaxed uppercase tracking-tight group-hover/card:text-foreground transition-colors">
                                {current.impact}
                             </p>
                          </div>

                          <div className="bg-black/20 rounded-[2.5rem] border border-white/5 p-8 backdrop-blur-md">
                             <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-8">Neural Probability Matrix</h4>
                             <div className="w-full h-4 bg-black/60 rounded-full overflow-hidden shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] mb-6">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  animate={{ width: `${current.probability}%` }}
                                  transition={{ duration: 1.5, ease: "easeOut" }}
                                  className="h-full bg-primary relative" 
                                >
                                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-scan" style={{ width: '50%' }} />
                                </motion.div>
                             </div>
                             <div className="flex justify-between items-end">
                                <div>
                                   <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest mb-1">Confidence</p>
                                   <span className="text-4xl font-black italic text-foreground">{current.probability}%</span>
                                </div>
                                <div className="h-10 w-10 rounded-full border border-primary/20 flex items-center justify-center">
                                   <Waves className="h-5 w-5 text-primary animate-pulse" />
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>

                    <div className="bg-white/[0.02] rounded-[2.5rem] border border-white/10 p-8 mb-12 relative z-10 group/nodes">
                       <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-8 flex items-center justify-between">
                          Contributing Neural Nodes
                          <span className="text-[8px] opacity-40">AUTO_DETECTION: ON</span>
                       </h4>
                       <div className="flex flex-wrap gap-4">
                          {current.contributors.map((c, i) => (
                             <div key={i} className="px-6 py-3 bg-foreground text-background rounded-2xl text-[11px] font-black uppercase tracking-widest italic hover:scale-110 transition-transform cursor-default">
                                {c}
                             </div>
                          ))}
                       </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                       <Button 
                          onClick={() => {
                             toast({
                                title: "INITIATING_SIMULATION",
                                description: "Calibrating synaptic counter-responses...",
                             })
                             setTimeout(() => router.push("/simulator"), 1200)
                          }}
                          className="flex-1 h-16 bg-foreground text-background rounded-2xl font-black uppercase tracking-[0.3em] text-[11px] hover:scale-[1.02] transition-all shadow-2xl hover:shadow-white/10"
                       >
                          Simulate Countermeasure
                       </Button>
                       <Button 
                          variant="outline"
                          onClick={() => {
                             toast({
                                title: "NODE_STAGED",
                                description: "Pattern data synchronized with coaching briefing.",
                             })
                          }}
                          className="flex-1 h-16 bg-primary/10 text-primary border border-primary/20 rounded-2xl font-black uppercase tracking-[0.3em] text-[11px] hover:bg-primary/20 transition-all"
                       >
                          Add to Briefing Matrix
                       </Button>
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
