"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { 
  Download, 
  Share2, 
  CheckCircle2, 
  AlertTriangle, 
  ChevronLeft, 
  Check,
  Zap,
  Shield,
  FileText,
  Activity,
  History,
  Target,
  Waves,
  Cpu,
  Radio,
  ExternalLink
} from "lucide-react"
import { Header } from "./header"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export function CoachBriefing() {
  const [copyFeedback, setCopyFeedback] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleExportPDF = () => {
    toast({
       title: "Export Protocol Initialized",
       description: "Generating secure PDF briefing. Download will commence shortly.",
    })
  }

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "STRATOS Neural Briefing",
          text: "Neural telemetry analysis from STRATOS Systems",
          url: window.location.href,
        })
      } else {
        copyToClipboard()
      }
    } catch (error) {
      copyToClipboard()
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      toast({
         title: "Sync Link Copied",
         description: "The neural briefing URL has been assigned to your clipboard cache.",
      })
    } catch (err) {
      toast({
         variant: "destructive",
         title: "Transfer Failed",
         description: "Unable to access clipboard. Manual link extraction required.",
      })
    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background ai-grid text-foreground pb-20 selection:bg-primary/30">
      <Header />

      <main className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/patterns"
            className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-all mb-12 group"
          >
            <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            DISCONNECT_BRIEFING_NODE
          </Link>

          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div>
              <Badge variant="outline" className="mb-6 rounded-full border-primary/40 bg-primary/5 text-primary font-black uppercase tracking-[0.2em] px-4 py-1 animate-pulse">
                FINAL_TELEMETRY_SYNC // REQ_8829_X
              </Badge>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">
                NEURAL <span className="text-primary italic">BRIEFING</span>
              </h1>
              <p className="mt-4 text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground opacity-50 italic">
                Finalizing synaptic weights and team cohesion datasets.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="outline"
                onClick={handleExportPDF}
                className="h-14 rounded-xl border-white/10 bg-white/5 font-black uppercase tracking-[0.2em] text-[10px] px-8 hover:bg-white/10 transition-all hover:scale-[1.02]"
              >
                <Download className="h-4 w-4 mr-3" />
                INIT_EXPORT
              </Button>
              <Button
                onClick={handleShare}
                className="h-14 rounded-xl bg-primary text-primary-foreground font-black uppercase tracking-[0.2em] text-[10px] px-8 shadow-2xl shadow-primary/30 hover:scale-[1.02] transition-all"
              >
                {copyFeedback ? (
                  <Check className="h-4 w-4 mr-3" />
                ) : (
                  <Radio className="h-4 w-4 mr-3 animate-pulse" />
                )}
                {copyFeedback ? "SIGNAL_LOCKED" : "BROADCAST_UPLINK"}
              </Button>
            </div>
          </div>

          <Card className="glass-card p-8 md:p-16 rounded-[4rem] shadow-4xl relative overflow-hidden border-0">
            <div className="scan-line" />
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Cpu className="h-64 w-64" />
            </div>
            
            <section className="relative mb-20 z-10">
              <div className="flex items-center gap-3 mb-8">
                <Target className="h-5 w-5 text-primary" />
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">EXECUTIVE_SUMMARY_DUMP</h2>
              </div>
              <p className="text-2xl md:text-4xl font-black leading-[1.1] text-foreground tracking-tighter uppercase italic">
                “Team Alpha demonstrated strong macro fundamentals with <span className="text-primary tracking-normal">67% win rate</span>, 
                driven by <span className="bg-primary/20 px-2 py-1 rounded-lg">objective control</span> and early game stability.”
              </p>
            </section>

            <section className="mb-20 z-10 relative">
              <div className="flex items-center gap-3 mb-10">
                <Shield className="h-5 w-5 text-primary" />
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">NEURAL_FINDINGS_TELEMETRY</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { label: "Stability", value: "72%", type: "strength", desc: "12% above mean sync" },
                  { label: "Objective", value: "54%", type: "strength", desc: "High-density vision control" },
                  { label: "Cohesion", value: "58%", type: "warning", desc: "Positional friction detected" },
                  { label: "Pathing", value: "4.2%", type: "warning", desc: "Neural efficiency gap" }
                ].map((item, i) => (
                  <div key={i} className="group p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-primary/40 transition-all hover:bg-white/[0.04] shadow-xl">
                    <div className="flex items-center justify-between mb-6">
                       <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">{item.label}</span>
                       {item.type === "strength" ? <CheckCircle2 className="h-5 w-5 text-primary" /> : <AlertTriangle className="h-5 w-5 text-destructive" />}
                    </div>
                    <div className="text-4xl font-black italic mb-2 tracking-tighter flex items-baseline gap-3">
                      {item.value}
                      <span className="text-[10px] uppercase font-black text-muted-foreground not-italic tracking-widest opacity-30">HEX_0{i}</span>
                    </div>
                    <p className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase opacity-60 leading-tight italic">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-20 bg-primary/5 rounded-[3.5rem] p-8 md:p-12 border border-primary/20 relative group/protocol overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/protocol:opacity-100 transition-opacity" />
              <div className="flex items-center gap-3 mb-12 relative z-10">
                <Zap className="h-5 w-5 text-primary animate-pulse" />
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">CALIBRATION_PROTOCOL_SEQ</h3>
              </div>
              <ul className="space-y-4 relative z-10">
                {[
                  "Jungler route optimization (Phase 1 Init)",
                  "Mid game team fight positioning framework",
                  "Ward placement standardization protocol",
                  "Late game confidence calibration"
                ].map((rec, idx) => (
                  <li key={idx} className="flex gap-6 items-center group/item cursor-pointer p-2 rounded-2xl hover:bg-white/5 transition-all">
                    <span className="h-12 w-12 rounded-xl border border-primary/30 flex items-center justify-center text-xs font-black text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground group-hover/item:scale-110 transition-all italic">
                      {idx + 1}
                    </span>
                    <p className="text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground group-hover/item:text-foreground transition-colors leading-relaxed">
                      {rec}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <div className="text-center p-10 border border-dashed border-white/10 rounded-[3rem] bg-black/20 group hover:border-primary/30 transition-all">
               <History className="h-6 w-6 mx-auto mb-4 text-muted-foreground group-hover:text-primary transition-colors animate-spin-slow" />
               <p className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground opacity-50">NODE_HEALTH: OPTIMAL // SYNC_LOCK: 100%</p>
            </div>
          </Card>

          <footer className="mt-16 flex flex-col sm:flex-row gap-6">
            <Link href="/patterns" className="flex-1">
              <Button variant="outline" className="w-full h-16 rounded-2xl border-white/10 bg-white/5 font-black uppercase tracking-[0.3em] text-[10px] hover:bg-white/10 transition-all">
                TERMINATE_BRIEFING
              </Button>
            </Link>
            <Link href="/action-plan" className="flex-1">
              <Button className="w-full h-16 rounded-2xl bg-foreground text-background font-black uppercase tracking-[0.3em] text-[10px] shadow-3xl transition-all hover:scale-[1.05]">
                INITIATE_STRATEGIC_PLAN
              </Button>
            </Link>
          </footer>
        </div>
      </main>
    </div>
  )
}
