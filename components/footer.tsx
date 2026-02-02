export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/50 py-16 backdrop-blur-xl relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col gap-2">
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-white">STRATOS_NEURAL_SYSTEMS</h3>
            <p className="text-[8px] font-black text-muted-foreground uppercase tracking-[0.3em] leading-none opacity-50">
              CORE_ENGINE_STABLE // v4.2.1 // BUILD_2024.0.1
            </p>
          </div>
          
          <div className="flex gap-10">
            {[
              { label: "NETWORK_STATUS", value: "OPERATIONAL", color: "text-primary" },
              { label: "ENCRYPTION", value: "AES_256", color: "text-white" },
              { label: "LATENCY", value: "12ms", color: "text-white" }
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-[7px] font-black text-muted-foreground tracking-widest uppercase">{stat.label}</span>
                <span className={`text-[9px] font-black tracking-widest uppercase ${stat.color}`}>{stat.value}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-8">
            <a href="#" className="flex items-center gap-2 group transition-all">
                <div className="h-1 w-1 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-white transition-colors">TERMINAL_X</span>
            </a>
            <a href="#" className="flex items-center gap-2 group transition-all">
                <div className="h-1 w-1 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-white transition-colors">NEURAL_SYNC_LINK</span>
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
           <span className="text-[7px] font-black text-white/20 tracking-[0.4em] uppercase">© 2024 STRATOS RESEARCH LABS. ALL SYSTEMS LOGGED.</span>
           <div className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-primary animate-ping" />
              <span className="text-[8px] font-black text-primary tracking-[0.2em] uppercase">SYSTEMS_LOCKED_AND_LOADED</span>
           </div>
        </div>
      </div>
    </footer>
  )
}
