"use client";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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

  // READY-MADE BLOGGER TOOLS - Yaha apne blogger tools add karna
  const bloggerTools = [
    { name: "Blogger SEO Checker", icon: "🔍", link: "#", desc: "Check on-page SEO score", coming: true },
    { name: "Meta Tag Generator", icon: "🏷️", link: "#", desc: "Generate SEO meta tags", coming: false },
    { name: "Blogger Sitemap Tool", icon: "🗺️", link: "#", desc: "Create XML sitemap", coming: false },
    { name: "AdSense Calculator", icon: "💰", link: "#", desc: "Estimate earnings", coming: true },
    { name: "Image Compressor", icon: "🖼️", link: "#", desc: "Compress for Blogger", coming: false },
    { name: "Add More Tool", icon: "➕", link: "#", desc: "Your custom tool here", coming: false },
  ];

  const faqs = [
    { q: "What is Velora and what does it build?", a: "Velora is a product studio founded by Ravish Chandra Yadav. We build fast, modern tools for founders and creators — from 11-in-1 tool suites like Lorem Pro Tool to full-stack SaaS, AI automation systems, and high-converting websites. Our focus is shipping products in weeks, not months." },
    { q: "How can I use Lorem Pro Tool for my Blogger website?", a: "Just open any tool from the suite, paste your content, and get results instantly. For Blogger, use Word Counter for post length, Case Converter for titles, Fancy Text for stylish headings, and Password Generator for secure admin. All tools work in browser, no data is saved on our servers." },
    { q: "Are Velora tools free to use?", a: "Yes, all 11 tools in Lorem Pro Tool suite are 100% free. No login, no watermark. We are building premium SaaS boilerplate and AI tools for founders which will have paid plans." },
    { q: "Can I hire Velora for a custom project?", a: "Absolutely. We are available for new projects. Whether you need custom Blogger tools, a Next.js website, a web app, or a SaaS MVP — click WhatsApp Me or Email Me in the contact section. We reply within 2 hours and keep everything 100% confidential." },
    { q: "Who is the founder of Velora?", a: "Ravish Chandra Yadav is the founder of Velora. He is an AI Product Builder and Full-Stack Developer specializing in Next.js, Cloudflare Workers, Vercel, Supabase, and AI automation. He has shipped multiple products including Lorem Pro Tool." },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A14] text-white selection:bg-[#FF7A1A]/30 overflow-x-hidden">
      {/* SCHEMA FOR SEO - GOOGLE RICH RESULTS */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Velora",
        "url": "https://velora.dev",
        "logo": "https://velora.dev/logo.png",
        "founder": { "@type": "Person", "name": "Ravish Chandra Yadav" },
        "description": "Velora builds fast, modern tools for founders. Tools, SaaS, and AI solutions that launch in weeks.",
        "email": "hello@velora.dev",
        "sameAs": []
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f=>({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a }}))
      })}} />

      {/* HEADER */}
      <div className="w-full pt-4 px-3 md:px-0">
        <header className="relative z-50 max-w-[1100px] mx-auto bg-[#14141F]/90 backdrop-blur-xl border border-white/[0.07] rounded-[14px] px-4 py-[10px] flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-[#0A0A14] rounded-lg flex items-center justify-center border border-white/10 overflow-hidden"><img src="/logo.png" alt="VR" className="w-9 h-9 object-contain" /></div>
            <img src="/velora-text.png" alt="VELORA" className="h-[28px] md:h-[36px] object-contain" />
          </div>
          <nav className="hidden md:flex items-center gap-6 text-[13px] font-medium">
            {["About","Tools","Contact","Privacy"].map(l=>(
              <a key={l} href={`#${l.toLowerCase()}`} className="text-white/60 hover:text-[#FF7A1A] transition-colors">{l}</a>
            ))}
            <a href="#contact" className="bg-[#FF7A1A] px-4 py-2 rounded-full font-bold text-white">Hire Me</a>
          </nav>
          <button onClick={()=>setMenuOpen(!menuOpen)} className="md:hidden text-[#FF7A1A] text-2xl">☰</button>
        </header>
      </div>

      {/* HERO */}
      <section className="relative max-w-[1100px] mx-auto text-center pt-12 md:pt-20 pb-8 px-4">
        <h1 className="text-[36px] sm:text-[42px] md:text-[68px] font-extrabold leading-[0.95]">Got an Idea?<br/><span className="text-[#FF7A1A]">Let's Build It.</span></h1>
        <p className="mt-5 text-white/60 max-w-[520px] mx-auto text-[14px] md:text-[15px]">We design & develop products that launch fast. From tools to SaaS, we build what founders need.</p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <a href="#contact" className="w-[280px] max-w-[90vw] px-8 py-3.5 bg-[#FF7A1A] text-white font-bold rounded-xl">Start a Project →</a>
        </div>
      </section>

      {/* CONTACT CTA - FIXED */}
      <section id="contact" className="w-full bg-[#FF7A1A] py-10 px-5 md:px-8 mt-4 rounded-[32px] max-w-[760px] mx-auto">
        <div className="max-w-[700px] mx-auto">
          <div className="inline-flex items-center gap-2 bg-black text-white text-[11px] font-bold tracking-widest px-4 py-2 rounded-full mb-5"><span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>AVAILABLE FOR NEW PROJECTS</div>
          <h2 className="text-[34px] md:text-[48px] font-extrabold leading-[0.9] text-black">Got an Idea?<br/><span className="text-white">Let's Build It.</span></h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-2.5 mt-6">
            {["Custom Tools","Websites","Web Apps","Mobile Apps","SaaS","AI Tools"].map(tag=>(
              <span key={tag} className="bg-black text-white text-[13px] font-bold px-5 py-2.5 rounded-full hover:scale-105 transition-transform">{tag}</span>
            ))}
          </div>
          <div className="mt-8 bg-black rounded-[28px] p-6 md:p-8">
            <h3 className="text-white text-[20px] md:text-[24px] font-extrabold">What I Can Do For You 👇</h3>
            <div className="mt-7 grid grid-cols-2 gap-4">
              <a href="https://wa.me/919999999999?text=Hi%20Ravish!" target="_blank" className="flex items-center justify-center w-full bg-[#25D366] text-black font-black text-[14px] py-3.5 rounded-full hover:scale-[1.03] transition-all">WhatsApp Me</a>
              <a href="mailto:hello@velora.dev" className="flex items-center justify-center w-full bg-white text-black font-black text-[14px] py-3.5 rounded-full hover:scale-[1.03] transition-all">Email Me</a>
            </div>
          </div>
        </div>
      </section>

      {/* READY-MADE BLOGGER TOOLS SECTION */}
      <section id="blogger-tools" className="max-w-[760px] mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-[#FF7A1A] font-bold tracking-[0.15em] text-[12px]">BLOGGER HUB</p>
            <h2 className="text-[22px] md:text-[28px] font-extrabold mt-1">Ready-Made Tools For Blogger</h2>
            <p className="text-white/50 text-[13px] mt-1">Add your Blogger tools here — just edit the array</p>
          </div>
          <span className="bg-[#FF7A1A]/20 text-[#FF7A1A] text-[11px] font-bold px-3 py-1.5 rounded-full border border-[#FF7A1A]/30">6 Slots Ready</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {bloggerTools.map((tool, i)=>(
            <a key={i} href={tool.link} className="group relative bg-[#15151F] border border-white/[0.07] rounded-2xl p-4 flex items-center gap-4 hover:border-[#FF7A1A]/40 hover:bg-[#1A1A28] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(255,122,26,0.15)]">
              <div className="w-12 h-12 bg-[#1E1E2A] group-hover:bg-[#FF7A1A]/20 rounded-xl flex items-center justify-center text-[20px] transition-colors">{tool.icon}</div>
              <div className="flex-1">
                <p className="font-bold text-[14px] group-hover:text-[#FF7A1A] transition-colors">{tool.name}</p>
                <p className="text-white/40 text-[11px] mt-0.5">{tool.desc}</p>
              </div>
              {tool.coming && <span className="text-[10px] bg-[#2A2A35] px-2 py-1 rounded-full text-white/50">Soon</span>}
              <span className="text-white/20 group-hover:text-[#FF7A1A] group-hover:translate-x-1 transition-all">→</span>
            </a>
          ))}
        </div>
        <div className="mt-4 bg-[#15151F]/60 border border-dashed border-white/10 rounded-xl p-3 text-center text-white/30 text-[12px]">
          Tip: <span className="text-white/60">bloggerTools array me apna tool name, icon, link daal do — auto add ho jayega</span>
        </div>
      </section>

      {/* SEO INFORMATIONAL CONTENT - 900 WORDS */}
      <section id="about" className="max-w-[760px] mx-auto px-4 py-12">
        <article className="bg-[#15151F] border border-white/[0.07] rounded-[28px] p-6 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#FF7A1A] to-orange-300" />
          
          <h1 className="text-[28px] md:text-[38px] font-extrabold leading-[1.1]">Velora - Leading Organization for Fast Product Development in India</h1>
          <p className="text-white/50 text-[13px] mt-3 tracking-wide">By Ravish Chandra Yadav • Founder @ Velora • Updated Oct 2024</p>

          <div className="mt-8 space-y-8 text-[14px] leading-[1.8] text-white/70">
            <div>
              <h2 className="text-[20px] md:text-[24px] font-bold text-white mb-3 hover:text-[#FF7A1A] transition-colors">Company Profile: Who We Are</h2>
              <p>Velora is a modern product studio based in India, founded by <strong className="text-white">Ravish Chandra Yadav</strong>, an AI Product Builder and Full-Stack Developer. We are not a traditional agency. We are builders who ship. Our mission is simple — to help founders, creators, and bloggers launch tools, websites, and SaaS products in weeks, not months. What started as a collection of small utility tools has now become <strong className="text-white">Lorem Pro Tool — an 11-in-1 toolkit</strong> used by thousands of creators for text processing, image conversion, and developer utilities. Velora operates on three pillars: Speed, Quality, and Automation. We use Next.js, Cloudflare Workers, Vercel, Supabase, and AI to build products that are lightning fast, SEO ready, and scalable from day one.</p>
            </div>

            <div>
              <h2 className="text-[20px] md:text-[24px] font-bold text-white mb-3 hover:text-[#FF7A1A] transition-colors">What We Build - Our Core Services</h2>
              <p>At Velora, we specialize in building products that make money and save time. Our services are divided into six categories. <strong className="text-white">Custom Tools</strong> like Lorem Pro Tool for businesses who need internal utilities. <strong className="text-white">Websites</strong> that are fast, SEO optimized, and built with Next.js to rank on Google. <strong className="text-white">Web Apps</strong> and <strong className="text-white">Mobile Apps</strong> that take your idea from concept to Play Store. <strong className="text-white">SaaS Products</strong> with authentication, payments, and dashboards ready to launch. And <strong className="text-white">AI Tools</strong> that automate workflows and content creation. Every product we build is responsive, as you have seen — working perfectly on mobile, tablet, and desktop. We don't use heavy page builders. We code clean, minimal, and performant systems.</p>
            </div>

            <div>
              <h2 className="text-[20px] md:text-[24px] font-bold text-white mb-3 hover:text-[#FF7A1A] transition-colors">User Guide: How To Use Lorem Pro Tool</h2>
              <p>Using Lorem Pro Tool is designed to be as simple as possible. Here is a complete guide for beginners and bloggers. <strong className="text-white">Step 1:</strong> Go to the Our Products section and click on any tool you need — for example, Word Counter or Avatar Generator. <strong className="text-white">Step 2:</strong> Paste your text or upload your image in the input box. All processing happens in your browser, so your data never leaves your device. <strong className="text-white">Step 3:</strong> Click generate or convert and get your result instantly. Copy it and use it in your Blogger post, website, or social media. <strong className="text-white">Step 4:</strong> For Blogger users, we recommend using Case Converter for post titles to improve CTR, Character Counter to keep meta descriptions under 160 characters, and Image to Text OCR to extract text from screenshots. No account needed, no limits, and no watermark.</p>
            </div>

            <div>
              <h3 className="text-[18px] font-bold text-white mb-2 hover:text-[#FF7A1A] transition-colors">Why Bloggers Love Velora Tools</h3>
              <p>Bloggers need speed and simplicity. Our tools are built exactly for that. Unlike other tool sites filled with ads and popups, Velora tools are clean, fast, and distraction-free. The Lorem Pro suite helps you optimize your Blogger SEO without any technical knowledge. For example, the Fancy Text tool helps you create stylish headings that increase time on page, while the Remove Duplicates tool cleans your keyword lists for better SEO. The Password Generator helps you secure your Blogger admin panel. All tools are mobile responsive, so you can even use them on your phone while traveling. And because we use Cloudflare Workers, our tools load in under 1 second even on slow 4G connections in Bansi, UP or anywhere in India.</p>
            </div>

            <div>
              <h2 className="text-[20px] md:text-[24px] font-bold text-white mb-3 hover:text-[#FF7A1A] transition-colors">How To Hire Velora For Your Project</h2>
              <p>Hiring us is straightforward. If you have an idea for a custom tool, website, or app — just scroll to the orange contact section labeled Available For New Projects. You will see two clear options — <strong className="text-white">WhatsApp Me</strong> and <strong className="text-white">Email Me</strong>. Clicking WhatsApp Me will open a pre-filled message with your project details, so you can start chatting instantly. Email Me opens your mail client with a subject line for faster replies. We typically reply within 2 hours during IST working hours. All discussions are 100% confidential. We sign NDAs if needed. Once we understand your requirements, we share a fixed timeline and price — no hourly surprises. Most MVPs are delivered in 7 to 14 days.</p>
            </div>
          </div>

          {/* FAQ SECTION WITH ANIMATION */}
          <div className="mt-12">
            <h2 className="text-[22px] md:text-[26px] font-extrabold text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, idx)=>(
                <div key={idx} className="group bg-[#0A0A14] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[#FF7A1A]/30 transition-all duration-300">
                  <button onClick={()=>setOpenFaq(openFaq===idx?null:idx)} className="w-full text-left p-5 flex justify-between items-start gap-4">
                    <span className="font-bold text-[14px] md:text-[15px] text-white group-hover:text-[#FF7A1A] transition-colors">{faq.q}</span>
                    <span className={`shrink-0 w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-[12px] transition-transform duration-300 ${openFaq===idx?'rotate-45 bg-[#FF7A1A] text-black':''}`}>+</span>
                  </button>
                  <div className={`grid transition-all duration-300 ${openFaq===idx?'grid-rows-[1fr] opacity-100':'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden"><p className="px-5 pb-5 text-[13px] leading-relaxed text-white/60">{faq.a}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 p-4 bg-[#FF7A1A]/10 border border-[#FF7A1A]/20 rounded-xl text-[12px] text-white/60">
            <strong className="text-[#FF7A1A]">Schema Added:</strong> Organization + FAQPage schema is auto-injected for Google rich results. Search Console me test kar sakte ho.
          </div>
        </article>
      </section>

      {/* PRODUCTS - SAME AS BEFORE */}
      <section id="products" className="max-w-[700px] mx-auto px-4 pb-10">
        <p className="text-[#FF7A1A] font-bold tracking-[0.15em] text-[12px]">OUR PRODUCTS</p>
        <p className="text-white/40 text-[10px] tracking-[0.3em] mb-5">— BUILT BY VELORA</p>
        <div className="bg-[#15151F] border border-white/[0.07] rounded-2xl p-5 md:p-6 mb-5 group hover:border-[#FF7A1A]/30 transition-all">
          <div className="flex justify-between items-start gap-2">
            <div><p className="font-extrabold text-[16px]">LOREM PRO TOOL — 11 Tools Suite</p><p className="text-white/50 text-[11px] mt-1">All-in-one toolkit for creators & developers</p></div>
            <span className="bg-[#FF7A1A] text-black text-[10px] font-black px-3 py-1 rounded-full">OPEN LIVE</span>
          </div>
          <div className="grid grid-cols-2 gap-2.5 mt-5">
            {toolsList.map((t) => (
              <a key={t.name} href={t.url} target="_blank" onClick={() => setSelectedTool(t.name)}
                className={`border rounded-xl px-3 py-3 text-[11px] font-medium transition-all ${selectedTool===t.name ? "bg-[#FF7A1A] border-[#FF7A1A] text-white shadow-[0_0_20px_rgba(255,122,26,0.5)]" : "bg-[#1E1E2A] border-white/5 text-white/70 hover:bg-[#FF7A1A]/10 hover:border-[#FF7A1A]/40 hover:text-[#FF7A1A]"}`}>
                {t.name}
              </a>
            ))}
          </div>
          <a href="https://lorem-pro-tool.run4ravish.workers.dev" target="_blank" className="mt-5 block w-full text-center py-3.5 bg-[#FF7A1A] rounded-xl font-bold hover:scale-[1.02] transition-transform">Open Live →</a>
        </div>
      </section>

      <footer className="max-w-[1100px] mx-auto mt-8 border-t border-white/[0.06] mx-3 md:mx-auto pt-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-2">
          <div><div className="flex items-center gap-2"><img src="/logo.png" className="w-8 h-8 object-contain" alt="" /><img src="/velora-text.png" className="h-6 object-contain" alt="" /></div><p className="text-white/40 text-[12px] mt-3">We build fast, modern products for founders.</p></div>
          <div><p className="text-white font-bold text-[13px] mb-3">Quick Links</p><div className="flex flex-col gap-2.5 text-[13px] text-white/50"><a href="#products" className="hover:text-[#FF7A1A]">Our Products</a><a href="#blogger-tools" className="hover:text-[#FF7A1A]">Blogger Tools</a></div></div>
          <div><p className="text-white font-bold text-[13px] mb-3">Legal</p><div className="flex flex-col gap-2.5 text-[13px] text-white/50"><button onClick={()=>setActiveModal("Disclaimer")} className="text-left hover:text-[#FF7A1A]">Disclaimer</button><button onClick={()=>setActiveModal("Privacy")} className="text-left hover:text-[#FF7A1A]">Privacy Policy</button></div></div>
          <div><p className="text-white font-bold text-[13px] mb-3">Contact</p><p className="text-[13px] text-white/50">hello@velora.dev</p></div>
        </div>
        <p className="text-center text-white/20 text-[10px] mt-8 tracking-[0.2em]">© 2024 VELORA • hello@velora.dev • All rights reserved</p>
      </footer>
    </div>
  );
}
