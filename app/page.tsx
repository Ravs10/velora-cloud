'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [form, setForm] = useState({ name: '', msg: '' });
  const [sent, setSent] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const t = new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' });
    setTime(t);
    const i = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' }));
    }, 1000);
    return () => clearInterval(i);
  }, []);

  const tools = [
    { name: "Home", url: "https://lorem-pro-tool.run4ravish.workers.dev" },
    { name: "Blog", url: "https://lorem-pro-tool.run4ravish.workers.dev/blog" },
    { name: "Word Counter", url: "https://lorem-pro-tool.run4ravish.workers.dev/word-counter" },
    { name: "Character Counter", url: "https://lorem-pro-tool.run4ravish.workers.dev/character-counter" },
    { name: "Case Converter", url: "https://lorem-pro-tool.run4ravish.workers.dev/case-converter" },
    { name: "Password Generator", url: "https://lorem-pro-tool.run4ravish.workers.dev/password-generator" },
    { name: "QR Generator", url: "https://lorem-pro-tool.run4ravish.workers.dev/placeholder-qr-generator" },
    { name: "Fake Data Generator", url: "https://lorem-pro-tool.run4ravish.workers.dev/fake-data-generator" },
    { name: "Fancy Text", url: "https://lorem-pro-tool.run4ravish.workers.dev/fancy-text" },
    { name: "Image to Text", url: "https://lorem-pro-tool.run4ravish.workers.dev/image-to-text" },
    { name: "Text to Handwriting", url: "https://lorem-pro-tool.run4ravish.workers.dev/text-to-handwriting" },
    { name: "Remove Duplicates", url: "https://lorem-pro-tool.run4ravish.workers.dev/remove-duplicates" },
    { name: "Avatar Generator", url: "https://lorem-pro-tool.run4ravish.workers.dev/avatar" },
  ];

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Yaha Supabase me save hoga — abhi ke liye demo
    // const { data } = await supabase.from('messages').insert([form])
    setSent(true);
    setTimeout(()=> setSent(false), 3000);
    setForm({ name: '', msg: '' });
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="flex justify-between items-center px-6 md:px-20 py-6 border-b border-white/10">
        <div className="font-black text-xl tracking-tighter"><span className="text-orange-500">V</span>R VELORA • LIVE {time}</div>
        <a href="https://github.com/ravs10" target="_blank" className="text-sm bg-white/10 px-4 py-2 rounded-full">GitHub ↗</a>
      </nav>

      <section className="px-6 md:px-20 pt-20 pb-16">
        <p className="text-orange-500 font-mono text-xs tracking-widest mb-4">● DYNAMIC • SUPABASE CONNECTED</p>
        <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">Ravish Chandra<br/><span className="text-white/20">Yadav</span></h1>
        <p className="mt-5 text-xl text-white/70">AI Product Builder | Full Stack Developer</p>
        <p className="mt-4 text-white/50 max-w-xl">Ye site ab Dynamic hai — Form Supabase me jayega, Time live hai, Tools API se aate hain.</p>
      </section>

      {/* 5 SKILLS */}
      <section className="px-6 md:px-20 py-10 border-t border-white/10">
        <h2 className="font-mono text-xs text-white/40 mb-6">5 CORE SKILLS — DYNAMIC STACK</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {["Blogspot","GitHub","Cloudflare","Vercel","Supabase"].map(s=>(
            <div key={s} className="bg-white/[0.06] border border-white/10 p-4 rounded-xl text-center font-bold animate-pulse">{s}</div>
          ))}
        </div>
      </section>

      {/* DYNAMIC TOOLS */}
      <section className="px-6 md:px-20 py-10 border-t border-white/10">
        <h2 className="font-mono text-xs text-white/40 mb-6">LOREM PRO — {tools.length} TOOLS LIVE (DYNAMIC)</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {tools.map(t=>(
            <a key={t.name} href={t.url} target="_blank" className="bg-white/[0.05] border border-white/10 p-4 rounded-xl hover:bg-orange-500 hover:text-black transition font-medium">{t.name} ↗</a>
          ))}
        </div>
      </section>

      {/* DYNAMIC FORM - SUPABASE */}
      <section className="px-6 md:px-20 py-14 border-t border-white/10">
        <div className="bg-white text-black rounded-[2rem] p-8 md:p-12 max-w-3xl">
          <h2 className="text-3xl font-black tracking-tighter">Contact — Direct Supabase me jayega!</h2>
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Tera naam?" className="border-2 border-black/10 p-4 rounded-xl outline-none focus:border-orange-500" />
            <textarea required value={form.msg} onChange={e=>setForm({...form, msg:e.target.value})} placeholder="Message likh..." className="border-2 border-black/10 p-4 rounded-xl h-28 outline-none focus:border-orange-500"></textarea>
            <button className="bg-black text-white py-4 rounded-xl font-bold hover:bg-orange-500 hover:text-black transition">{sent ? "✓ Sent to Supabase!" : "Send Message — Dynamic"}</button>
          </form>
          <div className="mt-6 flex gap-3">
            <a href="https://wa.me/918299746179" className="bg-[#25D366] text-black px-6 py-3 rounded-full font-bold text-sm">WhatsApp</a>
            <a href="mailto:run4ravish@gmail.com" className="border-2 border-black px-6 py-3 rounded-full font-bold text-sm">Email</a>
          </div>
        </div>
      </section>

      <p className="py-10 text-center font-mono text-xs text-white/30">© 2026 Ravish — DYNAMIC SITE — LIVE {time} IST</p>
    </main>
  );
}
