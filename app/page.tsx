export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-orange-500 selection:text-black">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 md:px-20 py-6 border-b border-white/10">
        <div className="font-black text-xl tracking-tighter">
          <span className="text-orange-500">V</span>R VELORA
        </div>
        <a href="https://github.com/ravs10" target="_blank" className="text-sm text-white/60 hover:text-white">
          GitHub ↗
        </a>
      </nav>

      {/* HERO */}
      <section className="px-6 md:px-20 pt-24 pb-20">
        <p className="text-orange-500 font-mono text-sm tracking-widest mb-4">● AVAILABLE FOR PROJECTS</p>
        <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">
          Ravish Chandra<br />
          <span className="text-white/20">Yadav</span>
        </h1>
        <p className="mt-6 text-xl md:text-2xl font-light text-white/70">
          AI Product Builder | <span className="text-white font-medium">Full Stack Developer</span>
        </p>
        <p className="mt-6 max-w-xl text-white/50 leading-relaxed">
          I build premium digital products with AI. Founder of Velora. I turn ideas into fast, modern websites using Next.js, Supabase & Cloudflare — no heavy coding, just smart building.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#projects" className="bg-orange-500 text-black px-8 py-3 rounded-full font-bold hover:bg-orange-400 transition">
            View Projects
          </a>
          <a href="#contact" className="border border-white/20 px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition">
            Contact Me
          </a>
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-6 md:px-20 py-16 border-t border-white/10">
        <h2 className="font-mono text-sm tracking-widest text-white/40 mb-8">SKILLS / STACK</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            ["Blogspot / Blogger", "Content & SEO"],
            ["GitHub", "Version Control"],
            ["Cloudflare", "Pages & R2"],
            ["Vercel", "Deployment"],
            ["Supabase", "Database & Auth"],
            ["Next.js + Tailwind", "Frontend Stack"],
          ].map(([name, desc]) => (
            <div key={name} className="bg-white/[0.04] border border-white/10 p-5 rounded-2xl hover:bg-white/[0.06] transition">
              <p className="font-bold">{name}</p>
              <p className="text-sm text-white/40 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 md:px-20 py-16 border-t border-white/10">
        <h2 className="font-mono text-sm tracking-widest text-white/40 mb-8">SELECTED PROJECTS</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/[0.04] border border-white/10 p-8 rounded-[2rem]">
            <p className="text-orange-500 font-mono text-xs mb-3">01 — CLOUD STORAGE</p>
            <h3 className="text-2xl font-bold">Velora Cloud</h3>
            <p className="text-white/50 mt-3">Premium file storage & sharing platform built with Cloudflare R2 + Next.js.</p>
          </div>
          <div className="bg-white/[0.04] border border-white/10 p-8 rounded-[2rem]">
            <p className="text-orange-500 font-mono text-xs mb-3">02 — CONTENT TOOL</p>
            <h3 className="text-2xl font-bold">Lorem Pro</h3>
            <p className="text-white/50 mt-3">AI-powered content generation tool for bloggers and creators.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 md:px-20 py-20 border-t border-white/10 text-center">
        <h2 className="text-4xl font-black tracking-tighter">Let&apos;s build something<br />premium together.</h2>
        <div className="mt-8 flex justify-center gap-4">
          <a href="https://github.com/ravs10" target="_blank" className="bg-white text-black px-8 py-3 rounded-full font-bold">
            GitHub — ravs10
          </a>
        </div>
        <p className="mt-12 font-mono text-xs text-white/30">© 2026 Ravish Chandra Yadav — VR VELORA</p>
      </section>
    </main>
  );
}
