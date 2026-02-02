"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { 
  ChevronDown, 
  AlertCircle, 
  Dna, 
  Cpu, 
  Zap,
  Activity
} from "lucide-react"
import { Header } from "./header"
import { useMatch } from "./match-context"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function MatchSetup() {
  const router = useRouter()
  const { state, updateTeam, updatePatch, updatePhase, updateRole, setLoading, setError } = useMatch()
  const [isValidating, setIsValidating] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const teams = ["Team Alpha vs Team Beta", "Team Gamma vs Team Delta", "Team Epsilon vs Team Zeta"]
  const patches = ["STRATOS 1.0 (PRO)", "STRATOS 0.9", "LEGACY 9.4"]
  const phases = ["Synchronized Full", "Early Neural", "Mid Convergence", "Late Terminal"]
  const roles = ["Neural Core", "Vanguard", "Pathfinder", "Focus", "Execution", "Support"]

  const handleRunAnalysis = async () => {
    if (state.selectedTeam === "vs") {
      setError("SYSERR: TEAM_MATCH_REQUIRED")
      return
    }

    setIsValidating(true)
    setLoading(true)
    setError(null)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200))
      setLoading(false)
      router.push("/dashboard")
    } catch (err) {
      setError("Failed to sync neural context. Retry.")
      setLoading(false)
    } finally {
      setIsValidating(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background ai-grid text-foreground pb-20">
      <Header />

      <main className="container mx-auto px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-6 rounded-full border-primary/40 bg-primary/5 text-primary font-black uppercase tracking-[0.2em] px-4 py-1 animate-pulse">
               SYSTEM_INITIALIZATION // PORT_8080
            </Badge>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none mb-4 italic">
              NEW <span className="text-primary">SESSION</span>
            </h1>
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground opacity-50">
              Configure neural parameters for quantum match analysis.
            </p>
          </motion.div>

          <Card className="glass-card p-8 md:p-16 rounded-[4rem] shadow-4xl relative overflow-hidden border-0">
            <div className="scan-line" />
            
            <div className="space-y-12 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2 block">ACTIVE_TEAM_CONTEXT</label>
                  <div className="relative group">
                    <select 
                      value={state.selectedTeam}
                      onChange={(e) => {updateTeam(e.target.value); setError(null)}}
                      className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-6 font-black uppercase text-[10px] tracking-[0.2em] appearance-none focus:outline-none focus:border-primary/50 transition-all cursor-pointer"
                    >
                      <option value="vs">SELECT_MATCH...</option>
                      {teams.map(t => <option key={t} value={t} className="bg-background">{t.toUpperCase()}</option>)}
                    </select>
                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none group-hover:text-primary transition-colors" />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2 block">QUANTUM_PATCH_SET</label>
                  <div className="relative group">
                    <select 
                      value={state.selectedPatch}
                      onChange={(e) => updatePatch(e.target.value)}
                      className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-6 font-black uppercase text-[10px] tracking-[0.2em] appearance-none focus:outline-none focus:border-primary/50 transition-all cursor-pointer"
                    >
                      {patches.map(p => <option key={p} value={p} className="bg-background">{p.toUpperCase()}</option>)}
                    </select>
                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary block">SESSION_PHASE_ISOLATION</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {phases.map((p) => (
                    <button
                      key={p}
                      onClick={() => updatePhase(p)}
                      className={`h-14 rounded-2xl border-2 font-black uppercase tracking-[0.1em] text-[8px] transition-all ${state.selectedPhase === p ? 'border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.05]' : 'border-white/5 bg-white/5 text-muted-foreground hover:bg-white/10 hover:border-white/20'}`}
                    >
                      {p.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary block">ANALYTIC_FOCUS_POINT</label>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  {roles.map((r) => (
                    <button
                      key={r}
                      onClick={() => updateRole(r)}
                      className={`h-12 rounded-xl border-2 font-black uppercase tracking-[0.1em] text-[8px] transition-all ${state.selectedRole === r ? 'border-primary bg-primary/20 text-primary scale-110' : 'border-white/5 bg-white/5 text-muted-foreground hover:bg-white/10'}`}
                    >
                      {r.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {state.error && (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-4 rounded-xl bg-destructive/10 border border-destructive/30 flex items-center gap-3"
                >
                  <AlertCircle className="h-4 w-4 text-destructive" />
                  <span className="text-[8px] font-black uppercase tracking-widest text-destructive">{state.error}</span>
                </motion.div>
              )}

              <Button
                onClick={handleRunAnalysis}
                disabled={isValidating || state.isLoading}
                className="w-full h-24 rounded-[2.5rem] bg-foreground text-background font-black uppercase tracking-[0.5em] text-[14px] shadow-4xl hover:scale-[1.02] transition-all disabled:opacity-50 mt-8"
              >
                {isValidating ? (
                  <div className="flex items-center gap-6">
                    <Cpu className="h-8 w-8 animate-spin" />
                    SYNCING_NEURAL_NODES...
                  </div>
                ) : (
                  <div className="flex items-center gap-6">
                    <Zap className="h-8 w-8 text-primary fill-primary" />
                    INITIALIZE_QUANTUM_SYNC
                  </div>
                )}
              </Button>
            </div>
          </Card>

          <p className="mt-12 text-center text-[8px] font-black uppercase tracking-[0.5em] text-muted-foreground opacity-30">
            ALL DATA IS ENCRYPTED AND PROCESSED VIA STRATOS NEURAL v4.2
          </p>
        </div>
      </main>
    </div>
  )
}
