"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  Cpu, 
  LayoutDashboard, 
  Activity, 
  Zap, 
  Radio, 
  Users, 
  Telescope, 
  BookOpen, 
  CheckSquare, 
  Terminal,
  Waves,
  Target
} from "lucide-react"

const navItems = [
  { href: "/dashboard", label: "COMMAND_CENTER", icon: LayoutDashboard },
  { href: "/match", label: "SYNC_CONTEXT", icon: Target },
  { href: "/patterns", label: "NEURAL_PATTERNS", icon: Zap },
  { href: "/impact", label: "IMPACT_FLOW", icon: Waves },
  { href: "/players", label: "TELEMETRY_NODES", icon: Users },
  { href: "/simulator", label: "KINETIC_EMULATOR", icon: Activity },
  { href: "/briefing", label: "NEURAL_BRIEFING", icon: BookOpen },
  { href: "/action-plan", label: "STRATEGIC_PLAN", icon: CheckSquare },
]

export function NavigationSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:flex flex-col w-72 bg-black border-r border-white/5 h-screen sticky top-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(226,18,50,0.05)_0%,transparent_100%)] pointer-events-none" />
      
      <div className="p-10 relative z-10">
        <div className="flex items-center gap-4 mb-2">
           <div className="h-4 w-4 rounded bg-primary animate-pulse" />
           <h2 className="text-[10px] font-black text-white uppercase tracking-[0.5em]">SYSTEM_NAV</h2>
        </div>
        <div className="h-[1px] w-full bg-gradient-to-r from-primary/50 to-transparent" />
      </div>

      <nav className="flex-1 px-6 space-y-4 relative z-10">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 relative overflow-hidden ${
                isActive
                  ? "bg-primary/10 text-primary border border-primary/20 shadow-[0_0_20px_rgba(226,18,50,0.1)]"
                  : "text-muted-foreground hover:bg-white/5 hover:text-white"
              }`}
            >
              <div className={`relative z-10 p-2 rounded-xl transition-colors ${isActive ? 'bg-primary/20' : 'bg-transparent group-hover:bg-white/5'}`}>
                <Icon className={`h-4 w-4 ${isActive ? 'text-primary' : 'text-current group-hover:text-primary'}`} />
              </div>
              <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em]">
                {item.label}
              </span>
              
              {isActive && (
                <motion.div 
                  layoutId="sidebar-active"
                  className="absolute inset-y-0 left-0 w-1 bg-primary rounded-full shadow-[0_0_10px_rgba(226,18,50,0.5)]"
                />
              )}
            </Link>
          )
        })}
      </nav>

      {/* Footer Info */}
      <div className="p-8 relative z-10">
        <div className="glass-card p-6 rounded-3xl border-white/5 bg-white/5">
           <div className="flex items-center gap-3 mb-3">
              <Terminal className="h-3 w-3 text-primary" />
              <span className="text-[8px] font-black uppercase tracking-widest text-muted-foreground">TERMINAL_OUTPUT</span>
           </div>
           <p className="text-[7px] font-black uppercase tracking-widest text-white/50 leading-relaxed">
             STRATOS_NEURAL_v4.2.1-STABLE...<br/>
             ENCRYPTION_LAYER: 100%<br/>
             CONNECTION: SECURE
           </p>
        </div>
        <div className="mt-8 flex justify-between items-center px-2">
          <span className="text-[8px] font-black uppercase tracking-widest text-muted-foreground opacity-30">© 2024 STRATOS</span>
          <span className="text-[8px] font-black uppercase tracking-widest text-primary animate-pulse">LIVE_SYNC</span>
        </div>
      </div>
    </aside>
  )
}
