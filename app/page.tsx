export default function Home() {
  const tools = [
    { name: "Home", url: "https://lorem-pro-tool.run4ravish.workers.dev", tag: "Main" },
    { name: "Blog", url: "https://lorem-pro-tool.run4ravish.workers.dev/blog", tag: "Content" },
    { name: "Word Counter", url: "https://lorem-pro-tool.run4ravish.workers.dev/word-counter", tag: "Text" },
    { name: "Character Counter", url: "https://lorem-pro-tool.run4ravish.workers.dev/character-counter", tag: "Text" },
    { name: "Case Converter", url: "https://lorem-pro-tool.run4ravish.workers.dev/case-converter", tag: "Text" },
    { name: "Password Generator", url: "https://lorem-pro-tool.run4ravish.workers.dev/password-generator", tag: "Security" },
    { name: "QR Generator", url: "https://lorem-pro-tool.run4ravish.workers.dev/placeholder-qr-generator", tag: "Tool" },
    { name: "Fake Data Generator", url: "https://lorem-pro-tool.run4ravish.workers.dev/fake-data-generator", tag: "Dev" },
    { name: "Fancy Text", url: "https://lorem-pro-tool.run4ravish.workers.dev/fancy-text", tag: "Stylish" },
    { name: "Image to Text", url: "https://lorem-pro-tool.run4ravish.workers.dev/image-to-text", tag: "AI" },
    { name: "Text to Handwriting", url: "https://lorem-pro-tool.run4ravish.workers.dev/text-to-handwriting", tag: "AI" },
    { name: "Remove Duplicates", url: "https://lorem-pro-tool.run4ravish.workers.dev/remove-duplicates", tag: "Cleaner" },
    { name: "Avatar Generator", url: "https://lorem-pro-tool.run4ravish.workers.dev/avatar", tag: "Profile" },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="flex justify-between items-center px-6 md:px-20 py-6 border-b border-white/10">
        <div className="font-black text-xl tracking-tighter"><span className="text-orange-500">V</span>R VELORA</div>
        <a href="https://github.com/ravs10" target="_blank" className="text-sm text-white/60 hover:text-white">GitHub ↗</a>
      </nav>

      <section className="px-6 md:px-20 pt-20 pb-16">
        <p className="text-orange-500 font-mono text-xs tracking-widest mb-4">● AI PRODUCT BUILDER</p>
        <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">Ravish Chandra<br/><span className="text-white/20">Yadav</span></h1>
        <p className="mt-5 text-xl md:text-2xl font-light text-white/70">AI Product Builder | <span className="text-white font-medium">Full Stack Developer</span></p>
        <p className="mt-5 max-w-xl text-white/50 leading-relaxed">I build premium digital products with AI. Founder of Velora. From Blogspot to Supabase — I ship fast.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="https://wa.me/918299746179" target="_blank" className="bg-orange-500 text-black px-8 py-3 rounded-full font-bold">WhatsApp</a>
          <a href="mailto:run4ravish@gmail.com" className="border border-white/20 px-8 py-3 rounded-full font-bold">Email Me</a>
        </div>
      </section>

      <section className="px-6 md:px-20 py-14 border-t border-white/10">
        <h2 className="font-mono text-xs tracking-widest text-white/40 mb-7">MY STACK — 5 CORE SKILLS</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            ["Blogspot", "Content & SEO"],
            ["GitHub", "Version Control"],
            ["Cloudflare", "Pages & R2"],
            ["Vercel", "Deployment"],
            ["Supabase", "DB & Auth"],
          ].map(([n,d])=>(
            <div key={n} className="bg-white/[0.04] border border-white/10 p-5 rounded-2xl"><p className="font-bold">{n}</p><p className="text-xs text-white/40 mt-1">{d}</p></div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-20 py-14 border-t border-white/10">
        <h2 className="font-mono text-xs tracking-widest text-white/40 mb-2">LOREM PRO — ALL TOOLS (13 LIVE)</h2>
        <p className="text-white/40 text-sm mb-7">Click any tool — direct open hoga lorem-pro-tool pe.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tools.map(t=>(
            <a key={t.name} href={t.url} target="_blank" className="group bg-white/[0.04] border border-white/10 p-5 rounded-2xl hover:bg-white hover:text-black transition flex justify-between items-center">
              <div><p className="font-bold">{t.name}</p><p className="text-xs opacity-60 mt-1">{t.tag}</p></div>
              <span className="group-hover:translate-x-1 transition">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-20 py-16 border-t border-white/10">
        <div className="bg-orange-500 rounded-[2.5rem] p-10 md:p-14 text-black">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.9]">Let&apos;s build<br/>something premium.</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://wa.me/918299746179" target="_blank" className="bg-black text-white px-7 py-3 rounded-full font-bold text-sm">WhatsApp: +91 8299746179</a>
            <a href="mailto:run4ravish@gmail.com" className="bg-white text-black px-7 py-3 rounded-full font-bold text-sm">run4ravish@gmail.com</a>
          </div>
        </div>
        <p className="mt-10 text-center font-mono text-xs text-white/30">© 2026 Ravish Chandra Yadav — VR VELORA — AI Product Builder</p>
      </section>
    </main>
  );
}
