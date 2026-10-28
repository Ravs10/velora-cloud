// app/boilerplates/page.tsx
"use client";
import { useState } from "react";

export default function BoilerplatesPage() {
  const [theme, setTheme] = useState("dark");
  const isDark = theme === "dark";

  const list = [
    { 
      name: "20+-in-1 Tools Suite", 
      price: "$199", 
      tag: "BEST SELLER",
      status: "live",
      desc: "LOREM PRO TOOL jaisa - 1 code se 20 tools. AdSense + SEO ready.",
      color: "from-orange-500 to-red-500",
      demoUrl: "https://lorem-pro-tool.run4ravish.workers.dev",
      buyUrl: "https://wa.me/918299746179?text=Hi, I want to buy 20-in-1 Tools Boilerplate"
    },
    { 
      name: "SaaS Starter Kit", 
      price: "$99", 
      tag: "COMING SOON",
      status: "soon",
      desc: "Auth + Stripe + Dashboard + Landing Page. Launch in 2 days.",
      color: "from-blue-500 to-cyan-500",
      demoUrl: "#",
      buyUrl: "#"
    },
    { 
      name: "Directory Boilerplate", 
      price: "$79", 
      tag: "COMING SOON",
      status: "soon",
      desc: "Product Hunt clone - Tools / Startup list with submit.",
      color: "from-purple-500 to-pink-500",
      demoUrl: "#",
      buyUrl: "#"
    },
    { 
      name: "Job Board Kit", 
      price: "$89", 
      tag: "COMING SOON",
      status: "soon",
      desc: "Naukri.com clone - Companies post, users apply.",
      color: "from-green-500 to-emerald-500",
      demoUrl: "#",
      buyUrl: "#"
    },
    { 
      name: "AI Wrapper Kit", 
      price: "$129", 
      tag: "COMING SOON",
      status: "soon",
      desc: "ChatGPT wrapper - PDF Chat, Image Gen, etc.",
      color: "from-yellow-500 to-orange-500",
      demoUrl: "#",
      buyUrl: "#"
    },
    { 
      name: "Portfolio PRO", 
      price: "$29", 
      tag: "COMING SOON",
      status: "soon",
      desc: "VELORA wala portfolio - 1 click personal site.",
      color: "from-zinc-700 to-zinc-900",
      demoUrl: "#",
      buyUrl: "#"
    },
  ];

  return (
    <div className={`min-h-screen transition-colors ${isDark ? "bg-[#0A0A14] text-white" : "bg-[#F8F8FC] text-black"}`}>
      <div className="w-full pt-4 px-3">
        <header className={`max-w-[1100px] mx-auto backdrop-blur-xl border rounded-[14px] px-4 py-[10px] flex justify-between items-center ${isDark ? "bg-[#14141F]/90 border-white/[0.07]" : "bg-white/90 border-black/[0.07]"}`}>
          <a href="/" className="flex items-center gap-2">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${isDark ? "bg-[#0A0A14] border-white/10" : "bg-white border-black/10"}`}>
              <img src="/logo.png" alt="VR" className="w-8 h-8 object-contain" />
            </div>
            <span className="font-black tracking-widest text-[14px]">VELORA</span>
          </a>
          <div className="flex items-center gap-3">
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className={`w-9 h-9 rounded-full flex items-center justify-center border ${isDark ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"}`}>{isDark ? "🌙" : "☀️"}</button>
            <a href="/" className="bg-[#FF7A1A] px-4 py-2 rounded-full font-bold text-white text-[13px]">Back to Home</a>
          </div>
        </header>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-[40px] md:text-[60px] font-black leading-[0.9]">VELORA <span className="text-[#FF7A1A]">Boilerplates</span></h1>
          <p className={`mt-4 text-[14px] max-w-[500px] mx-auto ${isDark ? "text-white/60" : "text-black/60"}`}>Ready-made masala. Copy. Paste. Launch in 48 Hours.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {list.map((b) => (
            <div key={b.name} className={`border rounded-2xl p-5 transition ${b.status === "soon" ? "opacity-70" : "hover:border-[#FF7A1A]/50"} ${isDark ? "bg-[#15151F] border-white/[0.07]" : "bg-white border-black/[0.07] shadow-sm"}`}>
              <div className={`h-[130px] rounded-xl bg-gradient-to-br ${b.color} flex items-center justify-center font-black text-white text-[16px] text-center px-4`}>{b.name}</div>
              <div className="flex justify-between items-center mt-4 mb-2">
                <span className={`text-[10px] px-2 py-1 font-black rounded-full ${b.status === "live" ? "bg-[#FF7A1A] text-black" : "bg-zinc-700 text-zinc-300"}`}>{b.tag}</span>
                <span className="font-black text-[18px]">{b.price}</span>
              </div>
              <h3 className="font-bold text-[15px]">{b.name}</h3>
              <p className={`text-[12px] mt-1 ${isDark ? "text-white/50" : "text-black/50"}`}>{b.desc}</p>
              
              {b.status === "live" ? (
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <a href={b.demoUrl} target="_blank" className="text-center py-3 bg-zinc-800 text-white rounded-full font-bold text-[13px] hover:bg-white hover:text-black transition border border-white/10">Live Demo ↗</a>
                  <a href={b.buyUrl} target="_blank" className="text-center py-3 bg-white text-black rounded-full font-black text-[13px] hover:bg-[#FF7A1A] hover:text-white transition">Buy Now</a>
                </div>
              ) : (
                <div className="mt-4">
                  <button disabled className="w-full py-3 bg-zinc-800 text-zinc-400 rounded-full font-bold text-[13px] cursor-not-allowed border border-white/10">Coming Soon - Stay Tuned</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
