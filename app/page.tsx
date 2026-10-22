"use client";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const tools = [
    "Avatar Generator", "Background Remover", "Code Formamter", "Image Compressor",
    "SEO Analyzer", "PDF Merger", "QR Code Maker", "Color Palette",
    "Json Formamter", "Markdown Editor", "Lorem Generator", "Favicon Creator"
  ];

  return (
    <div className="min-h-screen bg-[#0A0A14] text-white selection:bg-[#FF7A1A]/30">
      {/* HEADER - LOGO + REAL VELORA IMAGE */}
      <header className="sticky top-3 z-50 max-w-[1100px] mx-auto mx-3 md:mx-auto bg-[#14141F]/80 backdrop-blur-xl border border-white/[0.07] rounded-[14px] px-4 py-[10px] flex justify-between items-center shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-[#0A0A14] rounded-lg flex items-center justify-center border border-white/10 overflow-hidden shrink-0">
            <img src="/logo.png" alt="VR" className="w-9 h-9 object-contain" />
          </div>
          {/* YAHAN REAL IMAGE - VELORA FOUNDED BY YADAV RAVISH */}
          <img 
            src="/velora-text.png" 
            alt="VELORA FOUNDED BY YADAV RAVISH" 
            className="h-[32px] md:h-[36px] object-contain"
          />
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6 text-[13px] font-medium">
          {["About","Contact","Disclaimer","Privacy"].map(l=>(
            <button key={l} onClick={()=>setActiveModal(l)} className="text-white/60 hover:text-[#FF7A1A] transition-colors duration-300 tracking-wide">{l}</button>
          ))}
          <a href="#products" className="bg-[#FF7A1A] px-4 py-2 rounded-full font-bold text-white hover:bg-[#ff8c38] hover:shadow-[0_0_20px_rgba(255,122,26,0.5)] transition-all">Portfolio</a>
        </nav>

        <button onClick={()=>setMenuOpen(!menuOpen)} className="md:hidden text-[#FF7A1A] text-2xl w-8 h-8 flex items-center justify-center">☰</button>
      </header>

      {/* REST SAME... */}
      {menuOpen && (
        <div className="md:hidden max-w-[1100px] mx-auto mx-3 mt-2 bg-[#14141F] border border-white/10 rounded-xl p-4 flex flex-col gap-3 z-50">
          {["About","Contact","Disclaimer","Privacy Policy"].map(l=>(
            <button key={l} onClick={()=>{setActiveModal(l); setMenuOpen(false)}} className="text-left py-2 text-white/70 hover:text-[#FF7A1A]">{l}</button>
          ))}
        </div>
      )}

      <section className="relative max-w-[1100px] mx-auto text-center pt-16 pb-10 px-4 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-orange-500/20 blur-[60px] rounded-full animate-pulse" />
        <div className="absolute top-20 right-10 w-60 h-60 bg-orange-500/10 blur-[70px] rounded-full animate-pulse" />
        <h1 className="text-[42px] md:text-[68px] font-extrabold leading-[0.9] tracking-tight">
          Got an Idea?<br/><span className="text-[#FF7A1A] drop-shadow-[0_0_20px_rgba(255,122,26,0.3)]">Let's Build It.</span>
        </h1>
        <p className="mt-5 text-white/60 max-w-[520px] mx-auto text-[15px] leading-relaxed">
          We design & develop products that launch fast. From tools to SaaS, we build what founders need.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <a href="#products" className="group w-[280px] px-8 py-3.5 bg-[#FF7A1A] text-white font-bold rounded-xl shadow-[0_0_30px_rgba(255,122,26,0.4)] hover:shadow-[0_0_40px_rgba(255,122,26,0.6)] hover:scale-[1.03] transition-all duration-300">Start a Project <span className="group-hover:translate-x-1 inline-block transition-transform">→</span></a>
          <a href="#products" className="w-[280px] px-8 py-3 border border-[#FF7A1A]/40 text-[#FF7A1A] rounded-xl hover:bg-[#FF7A1A]/10 transition-all">View Our Work</a>
        </div>
      </section>

      <section id="products" className="max-w-[700px] mx-auto px-4 pb-10">
        <p className="text-[#FF7A1A] font-bold tracking-[0.15em] text-[13px]">OUR PRODUCTS</p>
        <p className="text-white/40 text-[11px] tracking-[0.3em] mb-5">— BUILT BY VELORA</p>

        <div className="group relative bg-[#15151F] border border-white/[0.07] rounded-2xl p-6 mb-5 hover:border-[#FF7A1A]/30 hover:shadow-[0_0_30px_rgba(255,122,26,0.1)] transition-all duration-500">
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF7A1A] rounded-l-2xl group-hover:shadow-[0_0_15px_#FF7A1A] transition-all" />
          <div className="flex justify-between items-start">
            <div><p className="font-extrabold text-[18px]">LOREM PRO TOOL — 13 Tools Suite</p><p className="text-white/50 text-[12px] mt-1">All-in-one toolkit for creators & developers. 13 utilities in one place</p></div>
            <span className="bg-[#FF7A1A] text-black text-[11px] font-black px-3 py-1 rounded-full animate-pulse">OPEN LIVE</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-5">
            {tools.map(t=><div key={t} className="bg-[#1E1E2A] border border-white/5 rounded-lg px-2.5 py-2 text-[11px] text-white/70 hover:bg-[#252535] hover:text-white hover:border-[#FF7A1A]/20 transition-all cursor-default">{t}</div>)}
          </div>
          <a href="https://lorem-pro-tool.run4ravish.workers.dev" target="_blank" className="mt-5 block w-full text-center py-3.5 bg-[#FF7A1A] rounded-xl font-bold hover:bg-[#ff8c38] hover:scale-[1.01] transition-all">Open Live →</a>
        </div>

        <div className="group relative bg-[#15151F] border border-white/[0.07] rounded-2xl p-6 mb-5 hover:border-white/15 transition-all">
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF7A1A]/70 group-hover:bg-[#FF7A1A] transition-all" />
          <div className="flex justify-between"><p className="text-[#FF7A1A] font-bold text-[11px] tracking-widest">UPCOMING</p><span className="bg-[#2A2A35] border border-[#FF7A1A]/30 text-[#FF7A1A] text-[11px] font-bold px-3 py-1 rounded-full">Coming Soon</span></div>
          <p className="text-[19px] font-bold mt-2">SaaS Boilerplate</p><p className="text-white/50 text-[12px] mt-1">Modern SaaS starter with Auth • Payments • Dashboard</p>
        </div>

        <div className="group relative bg-[#15151F] border border-white/[0.07] rounded-2xl p-6 hover:border-white/15 transition-all">
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF7A1A]/70 group-hover:bg-[#FF7A1A] transition-all" />
          <div className="flex justify-between"><p className="text-[#FF7A1A] font-bold text-[11px] tracking-widest">TEMPLATE</p><span className="bg-[#2A2A35] border border-[#FF7A1A]/30 text-[#FF7A1A] text-[11px] font-bold px-3 py-1 rounded-full">Idea Stage</span></div>
          <p className="text-[19px] font-bold mt-2">AI Automation Tool</p><p className="text-white/50 text-[12px] mt-1">Workflow automation powered by AI.</p>
          <button className="mt-4 block w-full text-center py-3 border border-[#FF7A1A]/30 rounded-xl text-[#FF7A1A] hover:bg-[#FF7A1A]/10 transition-all">Learn More →</button>
        </div>
      </section>

      <footer className="max-w-[1100px] mx-auto mt-8 border-t border-white/[0.06] mx-3 md:mx-auto pt-8 pb-8">
        <div className="grid md:grid-cols-4 gap-8 px-2">
          <div>
            <div className="flex items-center gap-2">
              <img src="/logo.png" className="w-8 h-8 object-contain" alt="" />
              <img src="/velora-text.png" className="h-6 object-contain" alt="" />
            </div>
            <p className="text-white/40 text-[12px] mt-3 leading-relaxed">We build fast, modern products for founders.</p>
          </div>
          <div><p className="text-white font-bold text-[13px] mb-3">Quick Links</p><div className="flex flex-col gap-2 text-[12px] text-white/50"><a href="#products" className="hover:text-[#FF7A1A]">Our Products</a></div></div>
          <div><p className="text-white font-bold text-[13px] mb-3">Legal</p><div className="flex flex-col gap-2 text-[12px] text-white/50"><button onClick={()=>setActiveModal("Disclaimer")} className="text-left hover:text-[#FF7A1A]">Disclaimer</button><button onClick={()=>setActiveModal("Privacy")} className="text-left hover:text-[#FF7A1A]">Privacy Policy</button></div></div>
          <div><p className="text-white font-bold text-[13px] mb-3">Contact</p><p className="text-[12px] text-white/50">hello@velora.dev</p></div>
        </div>
        <p className="text-center text-white/20 text-[10px] mt-8 tracking-[0.2em]">© 2024 VELORA • hello@velora.dev</p>
      </footer>

      {activeModal && (
        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur flex items-center justify-center p-4" onClick={()=>setActiveModal(null)}>
          <div className="bg-[#15151F] border border-white/10 rounded-2xl p-6 max-w-[500px] w-full" onClick={e=>e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4"><h3 className="font-bold text-[18px]">{activeModal}</h3><button onClick={()=>setActiveModal(null)} className="text-white/50 hover:text-white">✕</button></div>
            <div className="text-white/60 text-[13px] leading-relaxed">
              {activeModal==="About" && "Velora is founded by Yadav Ravish. We build modern SaaS tools."}
              {activeModal==="Contact" && "Email us at hello@velora.dev"}
              {activeModal==="Disclaimer" && "All tools are for informational purposes."}
              {activeModal==="Privacy" && "We don't collect personal data without consent."}
              {activeModal==="Privacy Policy" && "We don't collect personal data without consent."}
            </div>
            <button onClick={()=>setActiveModal(null)} className="mt-5 w-full py-2.5 bg-[#FF7A1A] rounded-lg font-bold">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
