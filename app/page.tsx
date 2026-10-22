"use client";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const toolsList = [
    { name: "Avatar Generator", url: "https://lorem-pro-tool.run4ravish.workers.dev/avatar" },
    { name: "Case Converter", url: "https://lorem-pro-tool.run4ravish.workers.dev/case-converter" },
    { name: "Character Counter", url: "https://lorem-pro-tool.run4ravish.workers.dev/character-counter" },
    { name: "Fake Data Generator", url: "https://lorem-pro-tool.run4ravish.workers.dev/fake-data-generator" },
    { name: "Fancy Text", url: "https://lorem-pro-tool.run4ravish.workers.dev/fancy-text" },
    { name: "Image to Text - OCR", url: "https://lorem-pro-tool.run4ravish.workers.dev/image-to-text" },
    { name: "Password Generator", url: "https://lorem-pro-tool.run4ravish.workers.dev/password-generator" },
    { name: "QR Generator", url: "https://lorem-pro-tool.run4ravish.workers.dev/placeholder-qr-generator" },
    { name: "Remove Duplicates", url: "https://lorem-pro-tool.run4ravish.workers.dev/remove-duplicates" },
    { name: "Text to Handwriting", url: "https://lorem-pro-tool.run4ravish.workers.dev/text-to-handwriting" },
    { name: "Word Counter", url: "https://lorem-pro-tool.run4ravish.workers.dev/word-counter" },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A14] text-white selection:bg-[#FF7A1A]/30 overflow-x-hidden">
      {/* HEADER */}
      <div className="w-full pt-4 px-3 md:px-0">
        <header className="relative z-50 max-w-[1100px] mx-auto bg-[#14141F]/90 backdrop-blur-xl border border-white/[0.07] rounded-[14px] px-4 py-[10px] flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-[#0A0A14] rounded-lg flex items-center justify-center border border-white/10 overflow-hidden">
              <img src="/logo.png" alt="VR" className="w-9 h-9 object-contain" />
            </div>
            <img src="/velora-text.png" alt="VELORA" className="h-[28px] md:h-[36px] object-contain" />
          </div>
          <nav className="hidden md:flex items-center gap-6 text-[13px] font-medium">
            {["About","Contact","Disclaimer","Privacy"].map(l=>(
              <button key={l} onClick={()=>setActiveModal(l)} className="text-white/60 hover:text-[#FF7A1A]">{l}</button>
            ))}
            <a href="#contact" className="bg-[#FF7A1A] px-4 py-2 rounded-full font-bold text-white">Hire Me</a>
          </nav>
          <button onClick={()=>setMenuOpen(!menuOpen)} className="md:hidden text-[#FF7A1A] text-2xl">☰</button>
        </header>
        {menuOpen && (
          <div className="md:hidden max-w-[1100px] mx-auto mt-3 bg-[#14141F] border border-white/10 rounded-xl p-4 flex flex-col gap-3">
            {["About","Contact","Disclaimer","Privacy Policy"].map(l=>(
              <button key={l} onClick={()=>{setActiveModal(l); setMenuOpen(false)}} className="text-left py-2.5 text-white/70 text-[14px]">{l}</button>
            ))}
          </div>
        )}
      </div>

      {/* HERO */}
      <section className="relative max-w-[1100px] mx-auto text-center pt-12 md:pt-20 pb-8 px-4">
        <h1 className="text-[36px] sm:text-[42px] md:text-[68px] font-extrabold leading-[0.95]">
          Got an Idea?<br/><span className="text-[#FF7A1A]">Let's Build It.</span>
        </h1>
        <p className="mt-5 text-white/60 max-w-[520px] mx-auto text-[14px] md:text-[15px] px-2">
          We design & develop products that launch fast. From tools to SaaS, we build what founders need.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <a href="#contact" className="w-[280px] max-w-[90vw] px-8 py-3.5 bg-[#FF7A1A] text-white font-bold rounded-xl">Start a Project →</a>
          <a href="#products" className="w-[280px] max-w-[90vw] px-8 py-3 border border-[#FF7A1A]/40 text-[#FF7A1A] rounded-xl">View Our Work</a>
        </div>
      </section>

      {/* NEW CONTACT CTA - SCREENSHOT JAISA - ORANGE SECTION */}
            {/* NEW CONTACT CTA - FIXED VERSION */}
      <section id="contact" className="w-full bg-[#FF7A1A] py-10 px-5 md:px-8 mt-4 rounded-[32px] max-w-[760px] mx-auto">
        <div className="max-w-[700px] mx-auto">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 bg-black text-white text-[11px] md:text-[12px] font-bold tracking-widest px-4 py-2 rounded-full mb-5">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
            AVAILABLE FOR NEW PROJECTS
          </div>

          <h2 className="text-[34px] md:text-[48px] font-extrabold leading-[0.9] text-black">
            Got an Idea?<br/>
            <span className="text-white">Let's Build It.</span>
          </h2>
          <p className="mt-4 text-black/80 text-[14px] md:text-[15px] leading-relaxed font-medium">
            I don't just build apps. I build <span className="font-black text-black">money-making tools, high-converting websites, SaaS & automation systems</span> that save time & make you money.
          </p>

          {/* 6 BLACK TAGS - CENTER JUSTIFY FIXED */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2.5 mt-6">
            {["Custom Tools","Websites","Web Apps","Mobile Apps","SaaS","AI Tools"].map(tag=>(
              <span key={tag} className="bg-black text-white text-[13px] font-bold px-5 py-2.5 rounded-full text-center">{tag}</span>
            ))}
          </div>

          {/* Black Card */}
          <div className="mt-8 bg-black rounded-[28px] p-6 md:p-8 border border-white/10">
            <h3 className="text-white text-[20px] md:text-[24px] font-extrabold flex items-center gap-2">
              What I Can Do For You <span>👇</span>
            </h3>

            <div className="mt-5 space-y-4">
              <p className="flex gap-3 text-[14px]"><span className="text-[#FF7A1A]">✓</span><span className="text-white"><span className="font-bold">Custom Business Tools</span> — Like Lorem Pro</span></p>
              <p className="flex gap-3 text-[14px]"><span className="text-[#FF7A1A]">✓</span><span className="text-white"><span className="font-bold">Lightning Fast Websites</span> — Next.js, SEO Ready</span></p>
              <p className="flex gap-3 text-[14px]"><span className="text-[#FF7A1A]">✓</span><span className="text-white"><span className="font-bold">Web & Mobile Apps</span> — Idea to Play Store</span></p>
            </div>

            {/* WHATSAPP + EMAIL BUTTONS - GAP FIXED */}
            <div className="mt-7 grid grid-cols-2 gap-4">
              <a 
                href="https://wa.me/919999999999?text=Hi%20Ravish,%20I%20want%20to%20build%20a%20project!" 
                target="_blank"
                className="flex items-center justify-center w-full bg-[#25D366] text-black font-black text-[14px] md:text-[15px] py-3.5 rounded-full hover:scale-[1.02] transition-all"
              >
                WhatsApp Me
              </a>
              <a 
                href="mailto:hello@velora.dev?subject=New%20Project%20Inquiry" 
                className="flex items-center justify-center w-full bg-white text-black font-black text-[14px] md:text-[15px] py-3.5 rounded-full hover:scale-[1.02] transition-all"
              >
                Email Me
              </a>
            </div>

            <p className="mt-4 text-center text-white/40 text-[11px] tracking-widest flex items-center justify-center gap-2">
              <span>⚡</span> REPLY IN 3 HOURS • 100% CONFIDENTIAL
            </p>
          </div>
        </div>
      </section>
      {/* FOUNDER */}
      <section className="max-w-[700px] mx-auto px-4 py-8">
        <p className="text-[#FF7A1A] font-bold tracking-[0.15em] text-[12px]">ABOUT FOUNDER</p>
        <p className="text-white/40 text-[10px] tracking-[0.3em] mb-4">— THE BUILDER BEHIND VELORA</p>
        <div className="bg-[#15151F] border border-white/[0.07] rounded-2xl p-5 md:p-6 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF7A1A]" />
          <div className="flex items-center gap-4 mb-5">
            <div className="w-[60px] h-[60px] rounded-xl bg-[#0A0A14] border border-white/10 flex items-center justify-center overflow-hidden shrink-0">
              <img src="/logo.png" className="w-11 h-11 object-contain" alt="VR" />
            </div>
            <div>
              <h2 className="font-extrabold text-[17px] md:text-[20px]">Ravish Chandra Yadav</h2>
              <p className="text-[#FF7A1A] text-[10px] font-bold tracking-[0.15em]">Portfolio - FOUNDER @ VELORA</p>
            </div>
          </div>
          <div className="space-y-3 text-[12px] md:text-[13px] text-white/65">
            <p className="flex gap-2.5"><span className="text-[#FF7A1A]">•</span> AI Product Builder | Full-Stack Developer — Next.js, Cloudflare Workers, Vercel, Supabase, Github, Blogger etc.</p>
            <p className="flex gap-2.5"><span className="text-[#FF7A1A]">•</span> Founder of Velora — Building fast, modern tools for founders & creators</p>
            <p className="flex gap-2.5"><span className="text-[#FF7A1A]">•</span> SaaS Builder — Shipped 13-in-1 Lorem Pro Tool + multiple products</p>
            <p className="flex gap-2.5"><span className="text-[#FF7A1A]">•</span> Obsessed with AI Automation & Dev Tools that save weeks of work</p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="max-w-[700px] mx-auto px-4 pb-10">
        <p className="text-[#FF7A1A] font-bold tracking-[0.15em] text-[12px]">OUR PRODUCTS</p>
        <p className="text-white/40 text-[10px] tracking-[0.3em] mb-5">— BUILT BY VELORA</p>
        <div className="bg-[#15151F] border border-white/[0.07] rounded-2xl p-5 md:p-6 mb-5">
          <div className="flex justify-between items-start gap-2">
            <div><p className="font-extrabold text-[16px]">LOREM PRO TOOL — 11 Tools Suite</p><p className="text-white/50 text-[11px] mt-1">All-in-one toolkit for creators & developers</p></div>
            <span className="bg-[#FF7A1A] text-black text-[10px] font-black px-3 py-1 rounded-full">OPEN LIVE</span>
          </div>
          <div className="grid grid-cols-2 gap-2.5 mt-5">
            {toolsList.map((t) => {
              const isSelected = selectedTool === t.name;
              return (
                <a key={t.name} href={t.url} target="_blank" onClick={() => setSelectedTool(t.name)}
                  className={`border rounded-xl px-3 py-3 text-[11px] font-medium transition-all ${isSelected ? "bg-[#FF7A1A] border-[#FF7A1A] text-white" : "bg-[#1E1E2A] border-white/5 text-white/70 hover:bg-[#FF7A1A]/10 hover:text-[#FF7A1A]"}`}>
                  {t.name}
                </a>
              )
            })}
          </div>
          <a href="https://lorem-pro-tool.run4ravish.workers.dev" target="_blank" className="mt-5 block w-full text-center py-3.5 bg-[#FF7A1A] rounded-xl font-bold">Open Live →</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-[1100px] mx-auto mt-8 border-t border-white/[0.06] mx-3 md:mx-auto pt-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-2">
          <div className="pl-1"><div className="flex items-center gap-2"><img src="/logo.png" className="w-8 h-8 object-contain" alt="" /><img src="/velora-text.png" className="h-6 object-contain" alt="" /></div><p className="text-white/40 text-[12px] mt-3">We build fast, modern products for founders.</p></div>
          <div className="pl-2 md:pl-4"><p className="text-white font-bold text-[13px] mb-3">Quick Links</p><div className="flex flex-col gap-2.5 text-[13px] text-white/50"><a href="#products" className="hover:text-[#FF7A1A]">Our Products</a><a href="#contact" className="hover:text-[#FF7A1A]">Start a Project</a></div></div>
          <div className="pl-2 md:pl-4"><p className="text-white font-bold text-[13px] mb-3">Legal</p><div className="flex flex-col gap-2.5 text-[13px] text-white/50"><button onClick={()=>setActiveModal("Disclaimer")} className="text-left hover:text-[#FF7A1A]">Disclaimer</button><button onClick={()=>setActiveModal("Privacy")} className="text-left hover:text-[#FF7A1A]">Privacy Policy</button><button onClick={()=>setActiveModal("About")} className="text-left hover:text-[#FF7A1A]">About Us</button></div></div>
          <div className="pl-2 md:pl-4"><p className="text-white font-bold text-[13px] mb-3">Contact</p><p className="text-[13px] text-white/50">hello@velora.dev</p><p className="text-[11px] text-white/30 mt-2">Founded by Yadav Ravish</p></div>
        </div>
        <p className="text-center text-white/20 text-[10px] mt-8 tracking-[0.2em]">© 2024 VELORA • hello@velora.dev • All rights reserved</p>
      </footer>

      {activeModal && (
        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur flex items-center justify-center p-4" onClick={()=>setActiveModal(null)}>
          <div className="bg-[#15151F] border border-white/10 rounded-2xl p-6 max-w-[500px] w-full" onClick={e=>e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4"><h3 className="font-bold text-[18px]">{activeModal}</h3><button onClick={()=>setActiveModal(null)} className="text-white/50">✕</button></div>
            <div className="text-white/60 text-[13px] leading-relaxed">
              {activeModal==="About" && "Velora is founded by Yadav Ravish. We build modern SaaS tools, AI automation, and creator utilities that launch fast."}
              {activeModal==="Contact" && "Email us at hello@velora.dev for projects, collaborations, and inquiries."}
              {activeModal==="Disclaimer" && "All tools provided by Velora are for informational purposes."}
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
