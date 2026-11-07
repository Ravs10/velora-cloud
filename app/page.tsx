"use client";
import { useState, useRef } from "react";

// ✅ FIX - Tools dusre domain pe hai, isliye FULL URL chahiye, relative nahi
const TOOLS_BASE = "https://lorem-pro-tool.run4ravish.workers.dev";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [showSeo, setShowSeo] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [theme, setTheme] = useState("dark");
  const audioCtxRef = useRef<AudioContext | null>(null);

  const isDark = theme === "dark";
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  // ✅ SIRF CLICK SOUND - HOVER SOUND NAHI HAI
  const playSound = () => {
    try {
      if (!audioCtxRef.current) audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") ctx.resume();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.frequency.value = 1200; gain.gain.setValueAtTime(0.15, ctx.currentTime);
      osc.start(); gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3); osc.stop(ctx.currentTime + 0.3);
    } catch {}
  };

  // ✅ TUMHARI DI HUI 23 URL - FULL ABSOLUTE LINKS - SAHI CATEGORY - NO AI CATEGORY
  const toolCategories = [
    {
      title: "💰 HIGH CPC - Finance Calculators",
      desc: "Most profitable tools - $10+ CPC",
      color: "from-emerald-500 to-green-600",
      tools: [
        { name: "Personal Loan EMI Calculator", url: `${TOOLS_BASE}/personal-loan-emi-calculator`, hot: true, icon: "💰" },
        { name: "FIRE Calculator", url: `${TOOLS_BASE}/fire-calculator`, hot: true, icon: "🔥" },
        { name: "SIP Calculator", url: `${TOOLS_BASE}/sip-calculator`, hot: true, icon: "📈" },
        { name: "Mortgage Calculator", url: `${TOOLS_BASE}/mortgage-calculator`, hot: true, icon: "🏠" },
        { name: "YouTube Earnings Calculator", url: `${TOOLS_BASE}/youtube-earnings-calculator`, hot: true, icon: "▶️" },
{ name: "Income Tax Calculator Pro", url: `${TOOLS_BASE}/income-tax-calculator`, hot: true, icon: "🧾" },
{ name: "Resume Builder", url: `${TOOLS_BASE}/resume-builder`, hot: true, icon: "📄" },
        { name: "FD + RD + Compound Calculator", url: `${TOOLS_BASE}/fd-rd-calculator`, hot: true, icon: "🏦" },
      ]
    },
    {
      title: "🚀 Smart Creator Tools",
      desc: "Smart + Viral - High traffic",
      color: "from-red-500 to-orange-500",
      tools: [
        { name: "AI Detector", url: `${TOOLS_BASE}/ai-detector`, icon: "🤖" },
        { name: "Hashtag Generator", url: `${TOOLS_BASE}/hashtag-generator`, icon: "#️⃣" },
        { name: "YouTube Title Generator", url: `${TOOLS_BASE}/youtube-title-generator`, icon: "🎬" },
        { name: "YouTube Thumbnail Downlodar", url: `${TOOLS_BASE}/youtube-thumbnail-downlodar`, icon: "🖼️" },
        
      ]
    },
    {
      title: "✍️ Text & Writing Tools",
      desc: "Content writers ke liye",
      color: "from-blue-500 to-cyan-500",
      tools: [
        { name: "Word Counter", url: `${TOOLS_BASE}/word-counter`, icon: "📝" },
        { name: "Character Counter", url: `${TOOLS_BASE}/character-counter`, icon: "🔤" },
        { name: "Case Converter", url: `${TOOLS_BASE}/case-converter`, icon: "🔠" },
        { name: "Fancy Text", url: `${TOOLS_BASE}/fancy-text`, icon: "✨" },
        { name: "Remove Duplicates", url: `${TOOLS_BASE}/remove-duplicates`, icon: "🧹" },
        { name: "Slug Generator", url: `${TOOLS_BASE}/slug-generator`, icon: "🔗" },
        { name: "Text to Handwriting", url: `${TOOLS_BASE}/text-to-handwriting`, icon: "✍️" },
      ]
    },
    {
      title: "🎨 Generators & Utilities",
      desc: "Daily use tools",
      color: "from-purple-500 to-pink-500",
      tools: [
        { name: "Avatar Generator", url: `${TOOLS_BASE}/avatar`, icon: "👤" },
        { name: "Fake Data Generator", url: `${TOOLS_BASE}/fake-data-generator`, icon: "🧪" },
        { name: "Password Generator", url: `${TOOLS_BASE}/password-generator`, icon: "🔐" },
        { name: "QR Generator", url: `${TOOLS_BASE}/placeholder-qr-generator`, icon: "📱" },
        { name: "Color Palette Generator", url: `${TOOLS_BASE}/color-palette`, icon: "🎨" },
        { name: "Image to Text - OCR", url: `${TOOLS_BASE}/image-to-text`, icon: "📷" },
      ]
    },
  ];

  const favouriteTools = [
    { name: "Lorem Ipsum Pro", url: "https://loremipsumpro.blogspot.com/" },
    { name: "AI BG Remover", url: "https://aibg-remover.blogspot.com/" },
    { name: "Advance Favicon Generator", url: "https://advancefavicongenerator.blogspot.com/" },
    { name: "How To Effect", url: "https://howtoeffect.blogspot.com/" },
    { name: "Image Manipulation Tools", url: "https://imagemanipulationtools.blogspot.com/" },
  ];

  const faqs = [
    { q: "What is Velora and what does it build?", a: "Velora is a product studio founded by Ravish Chandra Yadav. We build fast, modern tools for founders and creators — from 11-in-1 tool suites like Lorem Pro Tool to full-stack SaaS, AI automation systems, and high-converting websites. Our focus is shipping products in weeks, not months." },
    { q: "How can I use Lorem Pro Tool for my Blogger website?", a: "Just open any tool, paste your content, and get results instantly. For Blogger, use Word Counter for post length, Case Converter for titles, Fancy Text for stylish headings, and Password Generator for secure admin. All tools work in browser, no data saved." },
    { q: "Are Velora tools free to use?", a: "Yes, all 11 tools in Lorem Pro Tool suite are 100% free. No login, no watermark. We are building premium SaaS boilerplate and AI tools for founders which will have paid plans." },
    { q: "Can I hire Velora for a custom project?", a: "Absolutely. We are available for new projects. Whether you need custom Blogger tools, a Next.js website, a web app, or a SaaS MVP — click WhatsApp Me or Email Me. We reply within 2 hours and keep everything confidential." },
    { q: "Who is the founder of Velora?", a: "Ravish Chandra Yadav is the founder of Velora. He is an AI Product Builder and Full-Stack Developer specializing in Next.js, Cloudflare Workers, Vercel, Supabase, and AI automation." },
  ];

  return (
    <div className={`min-h-screen selection:bg-[#FF7A1A]/30 overflow-x-hidden transition-colors duration-300 ${isDark ? "bg-[#0A0A14] text-white" : "bg-[#F8F8FC] text-black"}`}>
      <style>{`
        @keyframes smallPulse { 0%,100%{transform:scale(1);box-shadow:0 0 0 0 rgba(255,122,26,0.6)} 50%{transform:scale(1.08);box-shadow:0 0 0 8px rgba(255,122,26,0)} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes veloraGlow { 0%,100%{box-shadow:0 0 15px rgba(255,107,0,0.4),0 0 30px rgba(255,107,0,0.2);border-color:rgba(255,107,0,0.5)} 50%{box-shadow:0 0 30px rgba(255,107,0,0.9),0 0 60px rgba(255,107,0,0.5);border-color:rgba(255,107,0,1)} }
        @keyframes veloraFloat { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-8px) scale(1.03)} }
        @keyframes veloraBlinkDot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.3;transform:scale(.8)} }
        @keyframes hotPulse { 0%,100%{box-shadow:0 0 10px rgba(16,185,129,0.5)} 50%{box-shadow:0 0 20px rgba(16,185,129,0.9)} }
        .animate-small-live{animation:smallPulse 2s infinite}
        .velora-glow{animation:veloraGlow 1.8s ease-in-out infinite}
        .velora-float{animation:veloraFloat 2.5s ease-in-out infinite}
        .velora-blink-dot{animation:veloraBlinkDot 1s ease-in-out infinite}
        .hot-glow{animation:hotPulse 1.5s infinite}
        .animate-big-live{background:linear-gradient(100deg,#FF7A1A 20%,#ffad66 50%,#FF7A1A 80%);background-size:200% auto;animation:shimmer 2.5s linear infinite;position:relative;overflow:hidden}
        .animate-big-live::after{content:'';position:absolute;top:0;left:-100%;width:50%;height:100%;background:linear-gradient(120deg,transparent,rgba(255,255,255,0.4),transparent);animation:shimmerSlide 2.2s infinite}
        @keyframes shimmerSlide{0%{left:-100%}100%{left:200%}}
        .tool-card{transition:all .35s cubic-bezier(.4,0,.2,1);position:relative;isolation:isolate}
        .tool-card::before{content:'';position:absolute;inset:0;border-radius:inherit;padding:1px;background:linear-gradient(135deg,rgba(255,122,26,0),rgba(255,122,26,.7),rgba(255,255,255,.2));-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:0;transition:opacity .35s;z-index:1}
        .tool-card:hover{transform:translateY(-4px) scale(1.03);box-shadow:0 12px 30px rgba(255,122,26,.25),0 4px 12px rgba(0,0,0,.3)}
        .tool-card:hover::before{opacity:1}
        .tool-card:active{transform:scale(.97)}
      `}</style>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", "name": "Velora", "url": "https://velora.dev", "logo": "https://velora.dev/logo.png", "founder": { "@type": "Person", "name": "Ravish Chandra Yadav" }, "description": "Velora builds fast, modern tools for founders.", "email": "hello@velora.dev" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f=>({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a }})) }) }} />

      <div className="w-full pt-4 px-3 md:px-0">
        <header className={`relative z-50 max-w-[1100px] mx-auto backdrop-blur-xl border rounded-[14px] px-4 py-[10px] flex justify-between items-center transition-colors ${isDark ? "bg-[#14141F]/90 border-white/[0.07]" : "bg-white/90 border-black/[0.07] shadow-sm"}`}>
          <div className="flex items-center gap-3">
            <div className={`w-11 h-11 rounded-lg flex items-center justify-center border overflow-hidden ${isDark ? "bg-[#0A0A14] border-white/10" : "bg-white border-black/10"}`}>
              <img src="/logo.png" alt="VR" className="w-9 h-9 object-contain" />
            </div>
            <img src="/velora-text.png" alt="VELORA" className="h-[28px] md:h-[36px] object-contain" />
          </div>
          <nav className="hidden md:flex items-center gap-6 text-[13px] font-medium">
            <a href="/boilerplates" className="text-[#FF7A1A] font-black">Boilerplates</a>
            {["About","Contact","Disclaimer","Privacy"].map(l=>(
              <button key={l} onClick={()=>setActiveModal(l)} className={`${isDark ? "text-white/60 hover:text-[#FF7A1A]" : "text-black/60 hover:text-[#FF7A1A]"}`}>{l}</button>
            ))}
            <button onClick={toggleTheme} className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all ${isDark ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"}`}>{isDark ? "🌙" : "☀️"}</button>
            <a href="#contact" className="bg-[#FF7A1A] px-4 py-2 rounded-full font-bold text-white">Hire Me</a>
          </nav>
          <div className="flex items-center gap-2 md:hidden">
            <button onClick={toggleTheme} className={`w-8 h-8 rounded-full flex items-center justify-center ${isDark ? "bg-white/10" : "bg-black/10"}`}>{isDark ? "🌙" : "☀️"}</button>
            <button onClick={()=>setMenuOpen(!menuOpen)} className="text-[#FF7A1A] text-2xl">☰</button>
          </div>
        </header>
        {menuOpen && (
          <div className={`md:hidden max-w-[1100px] mx-auto mt-3 border rounded-xl p-4 flex flex-col gap-3 ${isDark ? "bg-[#14141F] border-white/10" : "bg-white border-black/10"}`}>
            <a href="/boilerplates" className="text-left py-2.5 text-[14px] font-black text-[#FF7A1A]">Boilerplates</a>
            {["About","Contact","Disclaimer","Privacy Policy"].map(l=>(
              <button key={l} onClick={()=>{setActiveModal(l); setMenuOpen(false)}} className={`text-left py-2.5 text-[14px] ${isDark ? "text-white/70" : "text-black/70"}`}>{l}</button>
            ))}
          </div>
        )}
      </div>

      <section className="relative max-w-[1100px] mx-auto text-center pt-12 md:pt-20 pb-8 px-4">
        <h1 className="text-[36px] sm:text-[42px] md:text-[68px] font-extrabold leading-[0.95]">Got an Idea?<br/><span className="text-[#FF7A1A]">Let's Build It.</span></h1>
        <p className={`mt-5 max-w-[520px] mx-auto text-[14px] md:text-[15px] px-2 ${isDark ? "text-white/60" : "text-black/60"}`}>We design & develop products that launch fast. From tools to SaaS, we build what founders need.</p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <a href="#contact" className="w-[280px] max-w-[90vw] px-8 py-3.5 bg-[#FF7A1A] text-white font-bold rounded-xl">Start a Project →</a>
          <a href="#products" className={`w-[280px] max-w-[90vw] px-8 py-3 border rounded-xl ${isDark ? "border-[#FF7A1A]/40 text-[#FF7A1A]" : "border-[#FF7A1A]/40 text-[#FF7A1A] bg-white"}`}>View Our Work</a>
        </div>
      </section>
    
      <div className="px-4 md:px-6">
        <section id="contact" className="w-full bg-gradient-to-br from-orange-500 via-[#ff6b00] to-[#ff3c00] relative overflow-hidden py-10 px-4 rounded-[32px] max-w-[1020px] mx-auto mt-4 shadow-[0_0_0_1px_rgba(255,122,26,0.2)]">
          <div className="relative max-w-6xl mx-auto px-2 md:px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center gap-2 bg-black text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest mb-4"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>AVAILABLE FOR NEW PROJECTS</div>
                <h2 className="text-4xl md:text-5xl font-black leading-[0.9] text-black">Got an Idea? <br /><span className="text-white">Let's Build It.</span></h2>
                <p className="text-black/90 font-medium mt-4 text-[15px] leading-relaxed"><b>VELORA</b> doesn't just build apps. <b>VELORA</b> builds <b>money-making tools, high-converting websites, SaaS & automation systems</b> that save time & make you money.</p>
                <div className="flex flex-wrap gap-2 mt-5 justify-center md:justify-start">
                  {['Custom Tools', 'Websites', 'Web Apps', 'Mobile Apps', 'SaaS', 'AI Tools', 'SaaS Boilerplate'].map((t) => (<span key={t} className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold border border-white/10 hover:bg-white hover:text-black hover:scale-105 transition-all cursor-default">{t}</span>))}
                </div>
              </div>
              <div className="bg-black rounded-[24px] p-7 border border-white/10 shadow-2xl">
                <h3 className="text-xl font-black text-white flex items-center gap-2">What VELORA Can Do For You 👇</h3>
                <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                  <li className="flex gap-3"><span className="text-orange-500">✓</span><span><b className="text-white">Custom Business Tools</b> — Like Lorem Pro - 20+ Tools Suite</span></li>
                  <li className="flex gap-3"><span className="text-orange-500">✓</span><span><b className="text-white">Lightning Fast Websites</b> — Next.js, SEO Ready</span></li>
                  <li className="flex gap-3"><span className="text-orange-500">✓</span><span><b className="text-white">Web & Mobile Apps</b> — Idea to Play Store</span></li>
                  <li className="flex gap-3"><span className="text-orange-500">✓</span><span><b className="text-white">SaaS Boilerplate Kits</b> — Auth + Payments + Dashboard, Launch in 48H</span></li>
                </ul>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <a href="https://wa.me/919999999999?text=Hi%20Ravish,%20I%20want%20to%20build%20a%20project!" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-black text-center py-3 rounded-full font-black text-sm hover:scale-105 transition">WhatsApp</a>
                  <a href="mailto:hello@velora.dev" className="bg-white text-black text-center py-3 rounded-full font-black text-sm hover:bg-zinc-200 transition">Email</a>
                </div>
                <p className="text-center text-[11px] text-zinc-500 mt-3">⚡ REPLY IN 2 HOURS • 100% CONFIDENTIAL</p>
                <a href="https://velora-cloud.pages.dev/" target="_blank" rel="noopener noreferrer" className="group relative mt-5 block">
                  <div className="absolute -top-3 -right-2 z-10 flex items-center gap-1.5 bg-red-600 text-white px-3 py-1 rounded-full text-[10px] font-black tracking-widest"><span className="w-2 h-2 bg-white rounded-full velora-blink-dot"></span>LIVE</div>
                  <div className="velora-glow bg-[#111] border-2 border-orange-500 rounded-[18px] p-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <div className="flex items-center justify-center relative"><img src="/logo-dark.png" alt="VELORA" className="velora-float w-full max-w-[280px] h-auto object-contain group-hover:scale-110 transition-all duration-500" /></div>
                    <div className="flex items-center justify-center gap-2 mt-3"><span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span><p className="text-center text-[11px] font-black tracking-[0.2em] text-orange-400 group-hover:text-white transition">CLICK TO VISIT VELORA CLOUD →</p></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="max-w-[700px] mx-auto px-4 py-8">
        <p className="text-[#FF7A1A] font-bold tracking-[0.15em] text-[12px]">ABOUT FOUNDER</p>
        <p className={`text-[10px] tracking-[0.3em] mb-4 ${isDark ? "text-white/40" : "text-black/40"}`}>— THE BUILDER BEHIND VELORA</p>
        <div className={`border rounded-2xl p-5 md:p-6 relative overflow-hidden ${isDark ? "bg-[#15151F] border-white/[0.07]" : "bg-white border-black/[0.07] shadow-sm"}`}>
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF7A1A]" />
          <div className="flex items-center gap-4 mb-5">
            <div className={`w-[60px] h-[60px] rounded-xl border flex items-center justify-center overflow-hidden shrink-0 ${isDark ? "bg-[#0A0A14] border-white/10" : "bg-white border-black/10"}`}><img src="/logo.png" className="w-11 h-11 object-contain" alt="VR" /></div>
            <div><h2 className="font-extrabold text-[17px] md:text-[20px]">Ravish Chandra Yadav</h2><p className="text-[#FF7A1A] text-[10px] font-bold tracking-[0.15em]">Portfolio - FOUNDER @ VELORA</p></div>
          </div>
          <div className={`space-y-3 text-[12px] md:text-[13px] ${isDark ? "text-white/65" : "text-black/65"}`}>
            <p className="flex gap-2.5"><span className="text-[#FF7A1A]">•</span> AI Product Engineer — Next.js, Cloudflare Workers, D1 Database, Vercel, Supabase</p>
            <p className="flex gap-2.5"><span className="text-[#FF7A1A]">•</span> Founder of Velora — Building fast, modern tools and websites, SaaS Boilerplate, for founders & creators</p>
            <p className="flex gap-2.5"><span className="text-[#FF7A1A]">•</span> SaaS Builder — Shipped 20+-in-1 Lorem Pro Tool + multiple products</p>
            <p className="flex gap-2.5"><span className="text-[#FF7A1A]">•</span> Obsessed with AI Automation & Dev Tools that save weeks of work</p>
          </div>
        </div>
      </section>

      <section id="products" className="max-w-[800px] mx-auto px-4 pb-10">
        <p className="text-[#FF7A1A] font-bold tracking-[0.15em] text-[12px]">OUR PRODUCTS</p>
        <p className={`text-[10px] tracking-[0.3em] mb-5 ${isDark ? "text-white/40" : "text-black/40"}`}>— 25+ TOOLS BY VELORA (CATEGORY WISE)</p>
        <div className="space-y-6">
          {toolCategories.map((cat, catIdx) => (
            <div key={catIdx} className={`border rounded-2xl p-4 md:p-6 ${isDark ? "bg-[#15151F] border-white/[0.07]" : "bg-white border-black/[0.07] shadow-sm"}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-1.5 h-8 rounded-full bg-gradient-to-b ${cat.color}`} />
                <div><h3 className="font-extrabold text-[14px] md:text-[16px]">{cat.title}</h3><p className={`text-[10px] md:text-[11px] ${isDark ? "text-white/40" : "text-black/40"}`}>{cat.desc}</p></div>
                <div className="ml-auto"><span className={`text-[10px] font-black px-2.5 py-1 rounded-full bg-gradient-to-r ${cat.color} text-white`}>{cat.tools.length} Tools</span></div>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {cat.tools.map((t) => {
                  const isSelected = selectedTool === t.name;
                  return (
                    <a key={t.name} href={t.url} target="_blank" rel="noopener noreferrer" onClick={() => { playSound(); setSelectedTool(t.name); }}
                      className={`tool-card group relative border rounded-xl px-2.5 sm:px-3.5 py-3.5 text-[11px] sm:text-[12px] font-bold flex items-center gap-2 overflow-hidden
                        ${isSelected ? "bg-[#FF7A1A] border-[#FF7A1A] text-white scale-[1.02]" : t.hot ? `bg-gradient-to-br from-emerald-500/10 to-green-600/10 border-emerald-500/30 hover:border-emerald-500 hover:bg-emerald-500/20 ${isDark ? "text-white" : "text-black"} hot-glow` : isDark ? "bg-[#1E1E2A] border-white/5 text-white/70 hover:bg-[#FF7A1A]/10 hover:text-[#FF7A1A] hover:border-[#FF7A1A]/30" : "bg-[#F2F2F6] border-black/5 text-black/70 hover:bg-[#FF7A1A]/10 hover:text-[#FF7A1A] hover:border-[#FF7A1A]/30"}`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <span className="text-[16px] group-hover:scale-125 group-hover:-rotate-6 transition-transform duration-300 shrink-0">{t.icon}</span>
                      <span className="flex-1 relative z-10 leading-tight">{t.name}</span>
                      {t.hot && <span className="bg-[#10B981] text-black text-[8px] font-black px-1.5 py-0.5 rounded-full animate-pulse shrink-0 hidden sm:block">HOT</span>}
                      <span className="opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0">↗</span>
                    </a>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
        <a href={TOOLS_BASE} target="_blank" rel="noopener noreferrer" onClick={() => playSound()} className="animate-big-live mt-6 block w-full text-center py-3.5 rounded-xl font-bold text-white hover:scale-[1.02] transition-transform tool-card">Open All 25+ Tools Live →</a>
      </section>

      <section id="products-2" className="max-w-[700px] mx-auto px-4 pb-10">
        <p className="text-[#FF7A1A] font-bold tracking-[0.15em] text-[12px]">FAVOURITE PICKS</p>
        <p className={`text-[10px] tracking-[0.3em] mb-5 ${isDark ? "text-white/40" : "text-black/40"}`}>— MORE FAVOURITE TOOLS</p>
        <div className={`border rounded-2xl p-5 md:p-6 mb-5 ${isDark ? "bg-[#15151F] border-white/[0.07]" : "bg-white border-black/[0.07] shadow-sm"}`}>
          <div className="flex justify-between items-start gap-2"><div><p className="font-extrabold text-[16px]">MORE FAVOURITE TOOLS — Blogger Collection</p><p className={`text-[11px] mt-1 ${isDark ? "text-white/50" : "text-black/50"}`}>My most used tools - Live on Blogger</p></div><span className="animate-small-live bg-[#FF7A1A] text-black text-[10px] font-black px-3 py-1 rounded-full shrink-0">OPEN LIVE</span></div>
          <div className="grid grid-cols-2 gap-2.5 mt-5">
            {favouriteTools.map((t) => {
              const isSelected = selectedTool === t.name;
              return (
                <a key={t.name} href={t.url} target="_blank" rel="noopener noreferrer" onClick={() => { playSound(); setSelectedTool(t.name); }}
                  className={`tool-card border rounded-xl px-3 py-3.5 text-[11px] sm:text-[12px] font-bold transition-all flex justify-between items-center gap-1 ${isSelected ? "bg-[#FF7A1A] border-[#FF7A1A] text-white" : isDark ? "bg-[#1E1E2A] border-white/5 text-white/70 hover:bg-[#FF7A1A]/10 hover:text-[#FF7A1A]" : "bg-[#F2F2F6] border-black/5 text-black/70 hover:bg-[#FF7A1A]/10 hover:text-[#FF7A1A]"}`}>
                  <span className="leading-tight">{t.name}</span><span className="shrink-0">↗</span>
                </a>
              )
            })}
          </div>
          <a href="https://loremipsumpro.blogspot.com/" target="_blank" rel="noopener noreferrer" className="animate-big-live mt-5 block w-full text-center py-3.5 rounded-xl font-bold text-white hover:scale-[1.02] transition-transform">Open All Favourite Tools →</a>
        </div>
      </section>

      <section id="seo-content" className="max-w-[700px] mx-auto px-4 pb-10">
        <div className={`border rounded-[28px] overflow-hidden relative ${isDark ? "bg-[#15151F] border-white/[0.07]" : "bg-white border-black/[0.07] shadow-sm"}`}>
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#FF7A1A] to-orange-300" />
          <div className="p-6 md:p-8 pb-0 flex justify-between items-center gap-3"><div><p className="text-[#FF7A1A] font-bold tracking-[0.15em] text-[11px]">SEO • INFORMATION</p><h2 className="text-[20px] md:text-[24px] font-extrabold mt-1">About Velora & User Guide</h2></div><button onClick={()=>setShowSeo(!showSeo)} className="shrink-0 bg-[#FF7A1A] text-black font-black text-[12px] px-5 py-2.5 rounded-full hover:scale-105 transition-all">{showSeo ? "Hide ▲" : "Show ▼"}</button></div>
          <div className="p-6 md:p-8 pt-4"><p className={`text-[13px] leading-relaxed ${isDark ? "text-white/60" : "text-black/60"}`}><strong className={isDark ? "text-white" : "text-black"}>Velora is a leading product studio</strong> founded by Ravish Chandra Yadav. We build fast tools like Lorem Pro Tool (11-in-1 suite) for founders, bloggers, and creators. All tools are free, browser-based, and SEO optimized. Click Show to read full company profile, how to use guide, and FAQs.</p></div>
          <div className={`grid transition-all duration-500 ease-in-out ${showSeo ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
            <div className="overflow-hidden"><div className={`px-6 md:px-8 pb-8 space-y-8 text-[14px] leading-[1.8] border-t mt-2 pt-6 ${isDark ? "text-white/70 border-white/[0.06]" : "text-black/70 border-black/[0.06]"}`}>
              <div><h1 className={`text-[22px] md:text-[28px] font-extrabold leading-tight ${isDark ? "text-white" : "text-black"}`}>Velora - Company Profile: Leading Organization for Fast Product Development</h1><h2 className={`text-[18px] md:text-[20px] font-bold mt-6 mb-3 ${isDark ? "text-white" : "text-black"}`}>Who We Are & What We Build</h2><p>Velora is a modern product studio based in India, founded by <strong className={isDark ? "text-white" : "text-black"}>Ravish Chandra Yadav</strong>. We are not a traditional agency. We are builders who ship. Our mission is simple — to help founders, creators, and bloggers launch tools, websites, and SaaS products in weeks, not months. What started as a collection of small utility tools has now become <strong className={isDark ? "text-white" : "text-black"}>Lorem Pro Tool — an 11-in-1 toolkit</strong> used by thousands. Velora operates on three pillars: Speed, Quality, and Automation. We use Next.js, Cloudflare Workers, Vercel, Supabase, and AI to build products that are lightning fast, SEO ready, and scalable from day one.</p></div>
              <div><h2 className={`text-[18px] md:text-[20px] font-bold mb-3 ${isDark ? "text-white" : "text-black"}`}>User Guide: How To Use Lorem Pro Tool for Blogger</h2><p><strong>Step 1:</strong> Go to Our Products section and click on any tool. <strong>Step 2:</strong> Paste your text or upload image — processing happens in browser, data never leaves device. <strong>Step 3:</strong> Click generate and copy result for your Blogger post. <strong>Step 4:</strong> For Blogger, use Case Converter for titles, Character Counter to keep meta description under 160 chars, Fancy Text for stylish headings, and Remove Duplicates to clean keyword lists. No account needed, no limits.</p></div>
              <div><h2 className={`text-[20px] font-extrabold mb-4 ${isDark ? "text-white" : "text-black"}`}>Frequently Asked Questions</h2><div className="space-y-3">{faqs.map((faq, idx)=>(<div key={idx} className={`border rounded-2xl overflow-hidden ${isDark ? "bg-[#0A0A14] border-white/[0.06]" : "bg-[#F8F8FC] border-black/[0.06]"}`}><button onClick={()=>setOpenFaq(openFaq===idx?null:idx)} className="w-full text-left p-4 flex justify-between items-start gap-3"><span className={`font-bold text-[13px] md:text-[14px] ${isDark ? "text-white" : "text-black"}`}>{faq.q}</span><span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[12px] transition-all duration-300 ${openFaq===idx?'rotate-45 bg-[#FF7A1A] text-black': isDark ? 'bg-white/5' : 'bg-black/5'}`}>+</span></button><div className={`grid transition-all duration-300 ${openFaq===idx?'grid-rows-[1fr] opacity-100':'grid-rows-[0fr] opacity-0'}`}><div className="overflow-hidden"><p className={`px-4 pb-4 text-[12px] leading-relaxed ${isDark ? "text-white/60" : "text-black/60"}`}>{faq.a}</p></div></div></div>))}</div></div>
            </div></div>
          </div>
        </div>
      </section>

      <footer className={`max-w-[1100px] mx-auto mt-8 border-t mx-3 md:mx-auto pt-8 pb-8 ${isDark ? "border-white/[0.06]" : "border-black/[0.06]"}`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-2">
          <div className="pl-1"><div className="flex items-center gap-2"><img src="/logo.png" className="w-8 h-8 object-contain" alt="" /><img src="/velora-text.png" className="h-6 object-contain" alt="" /></div><p className={`text-[12px] mt-3 ${isDark ? "text-white/40" : "text-black/40"}`}>We build fast, modern products for founders.</p></div>
          <div className="pl-2 md:pl-4"><p className="font-bold text-[13px] mb-3">Quick Links</p><div className={`flex flex-col gap-2.5 text-[13px] ${isDark ? "text-white/50" : "text-black/50"}`}><a href="#products" className="hover:text-[#FF7A1A]">Our Products</a><a href="#contact" className="hover:text-[#FF7A1A]">Start a Project</a></div></div>
          <div className="pl-2 md:pl-4"><p className="font-bold text-[13px] mb-3">Legal</p><div className={`flex flex-col gap-2.5 text-[13px] ${isDark ? "text-white/50" : "text-black/50"}`}><button onClick={()=>setActiveModal("Disclaimer")} className="text-left hover:text-[#FF7A1A]">Disclaimer</button><button onClick={()=>setActiveModal("Privacy")} className="text-left hover:text-[#FF7A1A]">Privacy Policy</button><button onClick={()=>setActiveModal("About")} className="text-left hover:text-[#FF7A1A]">About Us</button></div></div>
          <div className="pl-2 md:pl-4"><p className="font-bold text-[13px] mb-3">Contact</p><p className={`text-[13px] ${isDark ? "text-white/50" : "text-black/50"}`}>hello@velora.dev</p><p className={`text-[11px] mt-2 ${isDark ? "text-white/30" : "text-black/30"}`}>Founded by Yadav Ravish</p></div>
        </div>
        <p className={`text-center text-[10px] mt-8 tracking-[0.2em] ${isDark ? "text-white/20" : "text-black/20"}`}>© 2024 VELORA • hello@velora.dev • All rights reserved</p>
      </footer>

      {activeModal && (
  <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur flex items-center justify-center p-4" onClick={()=>setActiveModal(null)}>
    <div className={`border rounded-2xl p-6 max-w-[600px] w-full max-h-[85vh] overflow-y-auto ${isDark ? "bg-[#15151F] border-white/10" : "bg-white border-black/10"}`} onClick={e=>e.stopPropagation()}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-[18px]">{activeModal}</h3>
        <button onClick={()=>setActiveModal(null)} className={isDark ? "text-white/50" : "text-black/50"}>✕</button>
      </div>

      {/* Velora Logo - Clickable */}
      <div className="text-center mb-4">
        <a href="https://velora-cloud.run4ravish.workers.dev/" target="_blank" rel="noopener noreferrer" title="Visit Velora - Developed by Yadav Ravish">
          <img src="/velora-logo.png" alt="Velora Logo - Online Startup by Yadav Ravish" className="w-[100px] h-auto rounded-xl mx-auto cursor-pointer" />
        </a>
        <p className="text-[12px] text-[#FF7A1A] font-bold mt-1">Developed By Velora - Click Logo To Visit Developer Website</p>
      </div>

      <div className={`text-[13px] leading-relaxed ${isDark ? "text-white/70" : "text-black/70"}`}>

        {activeModal==="About" && (
          <div>
            <h1 className="text-[20px] font-bold text-black dark:text-white mb-2">About Velora - Online Startup & Digital Product Company</h1>
            <p className="mb-3">
              <strong>Velora is an online startup and digital product company</strong> founded by <strong>Yadav Ravish</strong>. 
              Velora is a modern platform that develops <strong>websites, web apps, mobile apps, SaaS products, boilerplates, AI tools, and free online tools</strong> for students, creators, startups, and small businesses in India and worldwide.
            </p>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">What Does Velora Build?</h2>
            <ul className="list-disc pl-5 mb-3 space-y-1">
              <li><strong>Websites & Web Apps:</strong> Fast, SEO-friendly business websites, portfolio websites, and e-commerce websites.</li>
              <li><strong>SaaS Tools & Platforms:</strong> Complete SaaS products like Lorem Pro Tool - 25+ free online tools in one place.</li>
              <li><strong>AI Tools & Automation:</strong> AI Detector, AI content tools, YouTube tools, and AI automation workflows.</li>
              <li><strong>Boilerplates & Starters:</strong> Ready-to-launch Next.js, React, and Cloudflare boilerplates for developers.</li>
              <li><strong>Creator Utilities:</strong> Word Counter, SIP Calculator, FD Calculator, YouTube Thumbnail Downloader, and more.</li>
            </ul>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">Our Projects</h2>
            <p className="mb-3">
              We have already developed many projects like <strong>Lorem Pro Tool</strong> - a free all-in-one tools website with 25+ tools like Lorem Ipsum Generator, Word Counter, SIP Calculator, Income Tax Calculator, and YouTube Tools. 
              And many more upcoming SaaS, AI tools, and boilerplates are coming soon under Velora.
            </p>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">Our Vision</h2>
            <p>
              Our vision at Velora is simple - Build fast, beautiful, and useful digital products that anyone can use for free or at low cost. 
              Founded by Yadav Ravish, Velora believes every creator should have premium tools without paying heavy prices.
            </p>
            <p className="mt-3">Want your own website, SaaS, or tool? Visit <a href="https://velora-cloud.run4ravish.workers.dev/" target="_blank" rel="noopener noreferrer" className="text-[#FF7A1A] font-bold">velora-cloud.run4ravish.workers.dev</a></p>
          </div>
        )}

        {activeModal==="Contact" && (
          <div>
            <h1 className="text-[20px] font-bold text-black dark:text-white mb-2">Contact Velora - Get Your Website, App & SaaS Built</h1>
            <p className="mb-3">
              Have a project in mind? <strong>Contact Velora</strong> for <strong>website development, web app development, SaaS development, AI tools, boilerplates, and custom online tools</strong>. 
              Velora is founded by <strong>Yadav Ravish</strong> and we reply within 24-48 hours.
            </p>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">Contact Details</h2>
            <div className="bg-black/5 dark:bg-white/5 p-3 rounded-xl mb-3">
              <p><strong>Email:</strong> hello@velora.dev</p>
              <p><strong>Website:</strong> <a href="https://velora-cloud.run4ravish.workers.dev/" target="_blank" rel="noopener noreferrer" className="text-[#FF7A1A] font-bold">velora-cloud.run4ravish.workers.dev</a></p>
              <p><strong>Our Product:</strong> Lorem Pro Tool - 25+ Free Online Tools</p>
              <p><strong>Founder:</strong> Yadav Ravish</p>
            </div>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">What Can We Build For You?</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Business Website, Portfolio Website, Blog Website</li>
              <li>SaaS Product, AI Tool Website, Tools Website like Lorem Pro Tool</li>
              <li>Next.js Boilerplate, React App, Landing Page</li>
              <li>YouTube Tools, Finance Calculators, SEO Tools</li>
            </ul>
            <p className="mt-3">Email us at <strong>hello@velora.dev</strong> for projects, collaborations, and inquiries. Or click on Velora logo above to visit our developer website.</p>
          </div>
        )}

        {activeModal==="Disclaimer" && (
          <div>
            <h1 className="text-[20px] font-bold text-black dark:text-white mb-2">Disclaimer - Velora & Lorem Pro Tool</h1>
            <p className="mb-3">
              The information and tools provided by <strong>Velora</strong> and <strong>Lorem Pro Tool</strong> are for general, educational, and informational purposes only. 
              <strong>Velora is an online startup founded by Yadav Ravish</strong> that develops websites, SaaS products, AI tools, boilerplates, and free online tools.
            </p>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">1. General Information</h2>
            <p className="mb-3">While we try to keep all tools like SIP Calculator, FD Calculator, Income Tax Calculator, Word Counter, and YouTube Tools accurate, we make no warranties about completeness, reliability, or accuracy. Any reliance you place on such information is at your own risk.</p>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">2. Financial Tools</h2>
            <p className="mb-3">Our finance calculators provide only estimates. Velora is not a financial advisor, bank, or CA. Please consult a professional before taking financial decisions.</p>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">3. Generated Content</h2>
            <p className="mb-3">Fake data, lorem ipsum, fancy text, and other generated content should not be used for illegal or fraudulent purposes. It is only for testing, designing, and demo purposes.</p>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">4. Liability</h2>
            <p>Velora, Lorem Pro Tool, and founder Yadav Ravish shall not be liable for any loss or damage arising from use of this website. For questions, contact us at hello@velora.dev or visit <a href="https://velora-cloud.run4ravish.workers.dev/" target="_blank" rel="noopener noreferrer" className="text-[#FF7A1A] font-bold">Velora Website</a>.</p>
          </div>
        )}

        {(activeModal==="Privacy" || activeModal==="Privacy Policy") && (
          <div>
            <h1 className="text-[20px] font-bold text-black dark:text-white mb-2">Privacy Policy - Velora</h1>
            <p className="text-[12px] opacity-60 mb-3">Last Updated: November 06, 2026</p>
            <p className="mb-3">
              At <strong>Velora</strong>, we respect your privacy. This policy explains how we handle information on Velora website and our products like <strong>Lorem Pro Tool</strong> - 25+ free online tools. 
              <strong>Velora is an online startup founded by Yadav Ravish</strong> that builds websites, SaaS, AI tools, boilerplates, and creator utilities.
            </p>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">1. Data Collection</h2>
            <p className="mb-3">We do not collect, store, or ask for any personal data. No login, no signup, no email required. You can use all our tools directly. Your input stays in your browser only.</p>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">2. Processing</h2>
            <p className="mb-3">All text generation, calculations, and tool processing happens 100% inside your browser. It is not sent to or saved on our servers.</p>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">3. Cookies & Analytics</h2>
            <p className="mb-3">We use privacy-friendly analytics like Google Analytics to understand total visitors and improve our products. We do not track personal identity.</p>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">4. AdSense & Third Parties</h2>
            <p className="mb-3">Google AdSense may use cookies to show relevant ads. You can manage ad personalization in your Google Ad Settings. Google's DART cookie may be used to serve ads based on your visit.</p>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, contact us at <strong>hello@velora.dev</strong> or visit <a href="https://velora-cloud.run4ravish.workers.dev/" target="_blank" rel="noopener noreferrer" className="text-[#FF7A1A] font-bold">velora-cloud.run4ravish.workers.dev</a></p>
          </div>
        )}

        {activeModal && (
  <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur flex items-center justify-center p-4" onClick={()=>setActiveModal(null)}>
    <div className={`border rounded-2xl p-6 max-w-[600px] w-full max-h-[85vh] overflow-y-auto ${isDark ? "bg-[#15151F] border-white/10" : "bg-white border-black/10"}`} onClick={e=>e.stopPropagation()}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-[18px]">{activeModal}</h3>
        <button onClick={()=>setActiveModal(null)} className={isDark ? "text-white/50" : "text-black/50"}>✕</button>
      </div>

      {/* Velora Logo - Updated Link - Dark/Light Auto */}
      <div className="text-center mb-4">
        <a href="https://velora-cloud.run4ravish.workers.dev/" target="_blank" rel="noopener noreferrer" title="Visit Velora - Developed by Yadav Ravish">
          <img src={isDark ? "/logo-dark.png" : "/logo.png"} alt="Velora Logo - Online Startup by Yadav Ravish" className="w-[100px] h-auto rounded-xl mx-auto cursor-pointer" />
        </a>
        <p className="text-[12px] text-[#FF7A1A] font-bold mt-1">Developed By Velora - Click Logo To Visit Developer Website</p>
      </div>

      <div className={`text-[13px] leading-relaxed ${isDark ? "text-white/70" : "text-black/70"}`}>

        {activeModal==="About" && (
          <div>
            <h1 className="text-[20px] font-bold text-black dark:text-white mb-2">About Velora - Online Startup & Digital Product Company</h1>
            <p className="mb-3">
              <strong>Velora is an online startup and digital product company</strong> founded by <strong>Yadav Ravish</strong>. 
              Velora is a modern platform that develops <strong>websites, web apps, mobile apps, SaaS products, boilerplates, AI tools, and free online tools</strong> for students, creators, startups, and small businesses in India and worldwide.
            </p>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">What Does Velora Build?</h2>
            <ul className="list-disc pl-5 mb-3 space-y-1">
              <li><strong>Websites & Web Apps:</strong> Fast, SEO-friendly business websites, portfolio websites, and e-commerce websites.</li>
              <li><strong>SaaS Tools & Platforms:</strong> Complete SaaS products like Lorem Pro Tool - 25+ free online tools in one place.</li>
              <li><strong>AI Tools & Automation:</strong> AI Detector, AI content tools, YouTube tools, and AI automation workflows.</li>
              <li><strong>Boilerplates & Starters:</strong> Ready-to-launch Next.js, React, and Cloudflare boilerplates for developers.</li>
              <li><strong>Creator Utilities:</strong> Word Counter, SIP Calculator, FD Calculator, YouTube Thumbnail Downloader, and more.</li>
            </ul>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">Our Projects</h2>
            <p className="mb-3">
              We have already developed many projects like <strong>Lorem Pro Tool</strong> - a free all-in-one tools website with 25+ tools like Lorem Ipsum Generator, Word Counter, SIP Calculator, Income Tax Calculator, and YouTube Tools. 
              And many more upcoming SaaS, AI tools, and boilerplates are coming soon under Velora.
            </p>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">Our Vision</h2>
            <p>
              Our vision at Velora is simple - Build fast, beautiful, and useful digital products that anyone can use for free or at low cost. 
              Founded by Yadav Ravish, Velora believes every creator should have premium tools without paying heavy prices.
            </p>
            <p className="mt-3">Want your own website, SaaS, or tool? Visit <a href="https://velora-cloud.run4ravish.workers.dev/" target="_blank" rel="noopener noreferrer" className="text-[#FF7A1A] font-bold">velora-cloud.run4ravish.workers.dev</a></p>
          </div>
        )}

        {activeModal==="Contact" && (
          <div>
            <h1 className="text-[20px] font-bold text-black dark:text-white mb-2">Contact Velora - Get Your Website, App & SaaS Built</h1>
            <p className="mb-3">
              Have a project in mind? <strong>Contact Velora</strong> for <strong>website development, web app development, SaaS development, AI tools, boilerplates, and custom online tools</strong>. 
              Velora is founded by <strong>Yadav Ravish</strong> and we reply within 24-48 hours.
            </p>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">Contact Details</h2>
            <div className="bg-black/5 dark:bg-white/5 p-3 rounded-xl mb-3">
              <p><strong>Email:</strong> hello@velora.dev</p>
              <p><strong>Website:</strong> <a href="https://velora-cloud.run4ravish.workers.dev/" target="_blank" rel="noopener noreferrer" className="text-[#FF7A1A] font-bold">velora-cloud.run4ravish.workers.dev</a></p>
              <p><strong>Our Product:</strong> Lorem Pro Tool - 25+ Free Online Tools</p>
              <p><strong>Founder:</strong> Yadav Ravish</p>
            </div>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">What Can We Build For You?</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Business Website, Portfolio Website, Blog Website</li>
              <li>SaaS Product, AI Tool Website, Tools Website like Lorem Pro Tool</li>
              <li>Next.js Boilerplate, React App, Landing Page</li>
              <li>YouTube Tools, Finance Calculators, SEO Tools</li>
            </ul>
            <p className="mt-3">Email us at <strong>hello@velora.dev</strong> for projects, collaborations, and inquiries. Or click on Velora logo above to visit our developer website.</p>
          </div>
        )}

        {activeModal==="Disclaimer" && (
          <div>
            <h1 className="text-[20px] font-bold text-black dark:text-white mb-2">Disclaimer - Velora & Lorem Pro Tool</h1>
            <p className="mb-3">
              The information and tools provided by <strong>Velora</strong> and <strong>Lorem Pro Tool</strong> are for general, educational, and informational purposes only. 
              <strong>Velora is an online startup founded by Yadav Ravish</strong> that develops websites, SaaS products, AI tools, boilerplates, and free online tools.
            </p>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">1. General Information</h2>
            <p className="mb-3">While we try to keep all tools like SIP Calculator, FD Calculator, Income Tax Calculator, Word Counter, and YouTube Tools accurate, we make no warranties about completeness, reliability, or accuracy. Any reliance you place on such information is at your own risk.</p>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">2. Financial Tools</h2>
            <p className="mb-3">Our finance calculators provide only estimates. Velora is not a financial advisor, bank, or CA. Please consult a professional before taking financial decisions.</p>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">3. Generated Content</h2>
            <p className="mb-3">Fake data, lorem ipsum, fancy text, and other generated content should not be used for illegal or fraudulent purposes. It is only for testing, designing, and demo purposes.</p>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">4. Liability</h2>
            <p>Velora, Lorem Pro Tool, and founder Yadav Ravish shall not be liable for any loss or damage arising from use of this website. For questions, contact us at hello@velora.dev or visit <a href="https://velora-cloud.run4ravish.workers.dev/" target="_blank" rel="noopener noreferrer" className="text-[#FF7A1A] font-bold">Velora Website</a>.</p>
          </div>
        )}

        {(activeModal==="Privacy" || activeModal==="Privacy Policy") && (
          <div>
            <h1 className="text-[20px] font-bold text-black dark:text-white mb-2">Privacy Policy - Velora</h1>
            <p className="text-[12px] opacity-60 mb-3">Last Updated: November 06, 2026</p>
            <p className="mb-3">
              At <strong>Velora</strong>, we respect your privacy. This policy explains how we handle information on Velora website and our products like <strong>Lorem Pro Tool</strong> - 25+ free online tools. 
              <strong>Velora is an online startup founded by Yadav Ravish</strong> that builds websites, SaaS, AI tools, boilerplates, and creator utilities.
            </p>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">1. Data Collection</h2>
            <p className="mb-3">We do not collect, store, or ask for any personal data. No login, no signup, no email required. You can use all our tools directly. Your input stays in your browser only.</p>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">2. Processing</h2>
            <p className="mb-3">All text generation, calculations, and tool processing happens 100% inside your browser. It is not sent to or saved on our servers.</p>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">3. Cookies & Analytics</h2>
            <p className="mb-3">We use privacy-friendly analytics like Google Analytics to understand total visitors and improve our products. We do not track personal identity.</p>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">4. AdSense & Third Parties</h2>
            <p className="mb-3">Google AdSense may use cookies to show relevant ads. You can manage ad personalization in your Google Ad Settings. Google's DART cookie may be used to serve ads based on your visit.</p>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, contact us at <strong>hello@velora.dev</strong> or visit <a href="https://velora-cloud.run4ravish.workers.dev/" target="_blank" rel="noopener noreferrer" className="text-[#FF7A1A] font-bold">velora-cloud.run4ravish.workers.dev</a></p>
          </div>
        )}

        {(activeModal==="Terms" || activeModal==="Terms & Conditions" || activeModal==="Terms and Conditions") && (
          <div>
            <h1 className="text-[20px] font-bold text-black dark:text-white mb-2">Terms & Conditions - Velora</h1>
            <p className="text-[12px] opacity-60 mb-3">Last Updated: November 06, 2026</p>
            <p className="mb-3">
              Welcome to <strong>Velora</strong>. By using our website <a href="https://velora-cloud.run4ravish.workers.dev/" target="_blank" rel="noopener noreferrer" className="text-[#FF7A1A] font-bold">velora-cloud.run4ravish.workers.dev</a> and our products like <strong>Lorem Pro Tool</strong>, you agree to these Terms & Conditions. 
              <strong>Velora is an online startup founded by Yadav Ravish</strong> that develops websites, web apps, SaaS products, AI tools, boilerplates, and free online tools. Please read these terms carefully.
            </p>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">1. Acceptance of Terms</h2>
            <p className="mb-3">By accessing Velora website or using Lorem Pro Tool and other Velora products, you agree to follow these terms. If you do not agree, please do not use our website or services.</p>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">2. Use of Our Services</h2>
            <p className="mb-3">You can use our free tools like Word Counter, SIP Calculator, Lorem Ipsum Generator, YouTube Thumbnail Downloader, and AI Detector for personal, educational, and commercial purposes. You agree NOT to use our tools for any illegal, harmful, fraudulent, or abusive activity.</p>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">3. Intellectual Property</h2>
            <p className="mb-3">All content, design, logo, code, boilerplates, and tools on Velora website are owned by Velora. You cannot copy, resell, or claim our Velora logo, brand name, or source code as your own without written permission from Yadav Ravish.</p>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">4. Client Projects & Services</h2>
            <p className="mb-3">If you hire Velora for website development, SaaS development, AI tool, or boilerplate development, project timeline, price, and delivery will be discussed on email before starting work. Advance payment may be required for custom projects. Once delivered, client is responsible for maintaining their own website unless maintenance plan is taken.</p>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">5. Free Tools - No Warranty</h2>
            <p className="mb-3">All free tools are provided AS IS, without any warranty. Finance calculators like SIP, FD, Income Tax Calculator give only estimates. Velora is not responsible for any financial loss based on these estimates.</p>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">6. Limitation of Liability</h2>
            <p className="mb-3">Velora, Lorem Pro Tool, and founder Yadav Ravish shall not be liable for any direct, indirect, or consequential loss or damage arising from use of our website, tools, or services.</p>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">7. Changes To Terms</h2>
            <p className="mb-3">Velora may update these Terms & Conditions at any time to reflect new products, services, or legal requirements. Updated terms will be shown on this page with new date.</p>
            <h2 className="text-[16px] font-bold text-black dark:text-white mt-4 mb-1">8. Contact Us</h2>
            <p>If you have any questions about these Terms, contact us at <strong>hello@velora.dev</strong> or visit <a href="https://velora-cloud.run4ravish.workers.dev/" target="_blank" rel="noopener noreferrer" className="text-[#FF7A1A] font-bold">velora-cloud.run4ravish.workers.dev</a>. Thank you for using Velora.</p>
          </div>
        )}

      </div>
      <button onClick={()=>setActiveModal(null)} className="mt-5 w-full py-2.5 bg-[#FF7A1A] rounded-lg font-bold text-white">Close</button>
    </div>
  </div>
)}
