"use client";
import { useState } from "react";

const tools = [
  "Avatar Generator", "Background Remover", "Code Formamter", "Image Compressor",
  "SEO Analyzer", "PDF Merger", "QR Code Maker", "Color Palette",
  "Json Formamter", "Markdown Editor", "Lorem Generator", "Favicon Creator"
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A14] text-white antialiased overflow-x-hidden">
      {/* HEADER */}
      <header className="max-w-[1100px] mx-auto mt-4 md:mt-6 mx-3 md:mx-auto bg-[#14141F]/80 backdrop-blur border border-white/5 rounded-xl px-5 py-3 flex justify-between items-center">
        <div className="leading-none">
          <p className="font-black tracking-[0.25em] text-[14px]">VELORA</p>
          <p className="tracking-[0.3em] text-[12px] text-white/70">PORTFOLIO</p>
        </div>
        <button className="text-orange-400 text-xl">☰</button>
      </header>

      {/* HERO */}
      <section className="relative max-w-[1100px] mx-auto text-center pt-16 pb-10 px-4">
        <div className="absolute top-10 left-10 w-40 h-40 bg-orange-500/20 blur-[50px] rounded-full pointer-events-none" />
        <div className="absolute top-10 right-10 w-60 h-60 bg-orange-500/15 blur-[60px] rounded-full pointer-events-none" />
        
        {/* Floating shapes */}
        <div className="absolute left-4 md:left-20 top-32 w-16 h-16 border border-orange-400/30 rotate-45 shadow-[0_0_20px_rgba(255,122,26,0.5)] hidden md:block" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}} />
        <div className="absolute right-4 md:right-24 top-40 w-20 h-20 border border-orange-400/30 rotate-12 shadow-[0_0_20px_rgba(255,122,26,0.5)] hidden md:block" />

        <h1 className="text-[42px] md:text-[64px] font-extrabold leading-[0.95] tracking-tight">
          Got an Idea?<br />
          <span className="text-[#FF7A1A]">Let's Build It.</span>
        </h1>
        <p className="mt-4 text-white/70 max-w-[520px] mx-auto text-[15px] md:text-[16px] leading-relaxed">
          We design & develop products that launch fast.<br/>From tools to SaaS, we build what founders need.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <a href="#products" className="w-[280px] md:w-auto px-8 py-3.5 bg-[#FF7A1A] text-white font-bold rounded-lg shadow-[0_0_30px_rgba(255,122,26,0.4)] hover:scale-[1.02] transition">
            Start a Project →
          </a>
          <a href="#work" className="w-[280px] md:w-auto px-8 py-3 bg-transparent border border-[#FF7A1A]/60 text-[#FF7A1A] font-semibold rounded-lg">
            View Our Work
          </a>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="max-w-[700px] mx-auto px-4 pb-20">
        <p className="text-[#FF7A1A] font-bold tracking-wide text-[14px]">OUR PRODUCTS</p>
        <p className="text-white/60 text-[13px] tracking-wide mb-4">— BUILT BY VELORA</p>

        {/* CARD 1 - LOREM PRO */}
        <div className="relative bg-[#15151F] border border-white/10 rounded-2xl p-5 md:p-6 mb-5 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF7A1A]" />
          <div className="flex justify-between items-start gap-2">
            <div>
              <p className="text-white font-extrabold text-[18px] md:text-[20px]">LOREM PRO TOOL — 13 Tools Suite</p>
              <p className="text-white/60 text-[13px] mt-1">All-in-one toolkit for creators & developers. 13 utilities in one place</p>
            </div>
            <span className="shrink-0 bg-[#FF7A1A] text-black text-[11px] md:text-[12px] font-black px-3 py-1 rounded-full">OPEN LIVE</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-5">
            {tools.map(t => (
              <div key={t} className="bg-[#1E1E2A] border border-white/5 rounded-lg px-2.5 py-2 text-[11px] text-white/80 flex items-center gap-1.5">
                <span className="opacity-70">◍</span> {t}
              </div>
            ))}
          </div>

          <a href="https://lorem-pro-tool.run4ravish.workers.dev" target="_blank" className="mt-5 block w-full text-center py-3.5 bg-[#FF7A1A] rounded-lg font-bold text-white">
            Open Live →
          </a>
        </div>

        {/* CARD 2 - SaaS Boilerplate */}
        <div className="relative bg-[#15151F] border border-white/10 rounded-2xl p-5 md:p-6 mb-5">
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF7A1A]" />
          <div className="flex justify-between">
            <p className="text-[#FF7A1A] font-bold text-[13px]">UPCOMING</p>
            <span className="bg-[#FF7A1A] text-black text-[12px] font-bold px-3 py-1 rounded-full">Coming Soon</span>
          </div>
          <p className="text-[20px] font-bold mt-1">SaaS Boilerplate</p>
          <p className="text-white/60 text-[13px] mt-1">Modern SaaS starter with Auth • Payments • Dashboard</p>
          <div className="flex gap-2 mt-3">
            {["Authentication","Payments","Dashboard UI"].map(x=>(
              <span key={x} className="bg-[#2A2A35] text-[11px] px-2.5 py-1 rounded-full text-white/70">{x}</span>
            ))}
          </div>
        </div>

        {/* CARD 3 - AI Automation */}
        <div className="relative bg-[#15151F] border border-white/10 rounded-2xl p-5 md:p-6">
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF7A1A]" />
          <div className="flex justify-between">
            <p className="text-[#FF7A1A] font-bold text-[13px]">TEMPLATE</p>
            <span className="bg-[#FF7A1A] text-black text-[12px] font-bold px-3 py-1 rounded-full">Idea Stage</span>
          </div>
          <p className="text-[20px] font-bold mt-1">AI Automation Tool</p>
          <p className="text-white/60 text-[13px] mt-1">Workflow automation powered by AI. Build agents, triggers & actions</p>
          <div className="flex gap-2 mt-3">
            {["AI Agents","Integrations","Zap Workflows"].map(x=>(
              <span key={x} className="bg-[#2A2A35] text-[11px] px-2.5 py-1 rounded-full text-white/70">{x}</span>
            ))}
          </div>
          <a href="#" className="mt-4 block w-full text-center py-3 border border-[#FF7A1A]/50 rounded-lg text-[#FF7A1A] font-semibold">
            Learn More →
          </a>
        </div>

        <p className="text-center text-white/40 text-[11px] mt-8">© 2024 VELORA • hello@velora.dev • All rights reserved</p>
      </section>
    </div>
  );
}
