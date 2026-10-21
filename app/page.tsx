"use client";

export default function Home() {
  const tools = [
    "Avatar Generator", "Background Remover", "Code Formamter", "Image Compressor",
    "SEO Analyzer", "PDF Merger", "QR Code Maker", "Color Palette",
    "Json Formamter", "Markdown Editor", "Lorem Generator", "Favicon Creator"
  ];

  return (
    <div className="min-h-screen bg-[#0A0A14] text-white">
      {/* HEADER WITH REAL LOGO */}
      <header className="max-w-[1100px] mx-auto mt-4 mx-3 md:mx-auto bg-[#14141F]/90 border border-white/10 rounded-xl px-4 py-2.5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src="/logo-dark.png" 
            alt="Velora Logo"
            className="w-11 h-11 object-contain rounded-md"
          />
          <div className="leading-[0.9]">
            {/* VELORA - logo jaisa design */}
            <p className="font-black tracking-[0.15em] text-[18px] flex items-end">
              <span className="text-white">V</span>
              <span className="text-white">E</span>
              <span className="text-white">L</span>
              <span className="text-white">O</span>
              <span className="text-[#FF7A1A] ml-[1px]">R</span>
              <span className="text-[#FF7A1A] relative">A
                <span className="absolute -bottom-[3px] left-0 w-full h-[2px] bg-[#FF7A1A]"></span>
              </span>
            </p>
            <p className="text-[8px] tracking-[0.28em] text-white/50 mt-[3px]">FOUNDED BY YADAV RAVISH</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden md:block text-[10px] tracking-widest text-white/40">PORTFOLIO</span>
          <button className="text-[#FF7A1A] text-2xl">☰</button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative max-w-[1100px] mx-auto text-center pt-14 pb-10 px-4">
        <div className="absolute top-20 left-10 w-40 h-40 bg-orange-500/20 blur-[50px] rounded-full" />
        <div className="absolute top-20 right-10 w-60 h-60 bg-orange-500/15 blur-[60px] rounded-full" />
        <h1 className="text-[40px] md:text-[64px] font-extrabold leading-[0.95]">
          Got an Idea?<br/><span className="text-[#FF7A1A]">Let's Build It.</span>
        </h1>
        <p className="mt-4 text-white/60 max-w-[520px] mx-auto text-[15px]">
          We design & develop products that launch fast. From tools to SaaS, we build what founders need.
        </p>
        <div className="mt-7 flex flex-col items-center gap-3">
          <a href="#products" className="w-[280px] px-8 py-3.5 bg-[#FF7A1A] text-white font-bold rounded-lg shadow-[0_0_25px_rgba(255,122,26,0.4)]">Start a Project →</a>
          <a href="#work" className="w-[280px] px-8 py-3 border border-[#FF7A1A]/60 text-[#FF7A1A] rounded-lg">View Our Work</a>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="max-w-[700px] mx-auto px-4 pb-20">
        <p className="text-[#FF7A1A] font-bold text-[14px]">OUR PRODUCTS</p>
        <p className="text-white/50 text-[13px] mb-4">— BUILT BY VELORA</p>

        <div className="relative bg-[#15151F] border border-white/10 rounded-2xl p-6 mb-5">
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF7A1A]" />
          <div className="flex justify-between items-start">
            <div>
              <p className="font-extrabold text-[18px]">LOREM PRO TOOL — 13 Tools Suite</p>
              <p className="text-white/50 text-[12px] mt-1">All-in-one toolkit for creators & developers. 13 utilities in one place</p>
            </div>
            <span className="bg-[#FF7A1A] text-black text-[11px] font-black px-3 py-1 rounded-full">OPEN LIVE</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-5">
            {tools.map(t=><div key={t} className="bg-[#1E1E2A] border border-white/5 rounded-lg px-2.5 py-2 text-[11px] text-white/70">{t}</div>)}
          </div>
          <a href="https://lorem-pro-tool.run4ravish.workers.dev" target="_blank" className="mt-5 block w-full text-center py-3.5 bg-[#FF7A1A] rounded-lg font-bold">Open Live →</a>
        </div>

        <div className="relative bg-[#15151F] border border-white/10 rounded-2xl p-6 mb-5">
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF7A1A]" />
          <div className="flex justify-between"><p className="text-[#FF7A1A] font-bold text-[12px]">UPCOMING</p><span className="bg-[#FF7A1A] text-black text-[11px] font-bold px-3 py-1 rounded-full">Coming Soon</span></div>
          <p className="text-[18px] font-bold mt-2">SaaS Boilerplate</p>
          <p className="text-white/50 text-[12px] mt-1">Modern SaaS starter with Auth • Payments • Dashboard</p>
        </div>

        <div className="relative bg-[#15151F] border border-white/10 rounded-2xl p-6">
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF7A1A]" />
          <div className="flex justify-between"><p className="text-[#FF7A1A] font-bold text-[12px]">TEMPLATE</p><span className="bg-[#FF7A1A] text-black text-[11px] font-bold px-3 py-1 rounded-full">Idea Stage</span></div>
          <p className="text-[18px] font-bold mt-2">AI Automation Tool</p>
          <p className="text-white/50 text-[12px] mt-1">Workflow automation powered by AI.</p>
        </div>

        <p className="text-center text-white/30 text-[10px] mt-8 tracking-wide">© 2024 VELORA • hello@velora.dev • All rights reserved</p>
      </section>
    </div>
  );
}
