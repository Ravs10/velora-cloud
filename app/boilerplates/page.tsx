// app/boilerplates/page.tsx
export default function Boilerplates() {
  const boilerplates = [
    {
      name: "20+-in-1 Tools Suite",
      desc: "LOREM PRO TOOL jaisa. 1 code se 20 tools. AdSense + SEO ready.",
      price: "$199",
      tag: "BEST SELLER",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "SaaS Starter Kit",
      desc: "Auth + Stripe + Dashboard + Landing Page. SaaS launch in 2 days.",
      price: "$99",
      tag: "POPULAR",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Directory Boilerplate",
      desc: "Product Hunt clone. Tools / Startup list site with submit feature.",
      price: "$79",
      tag: "NEW",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Job Board Kit",
      desc: "Naukri.com clone. Companies post jobs, users apply.",
      price: "$89",
      tag: "TRENDING",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Portfolio PRO",
      desc: "Tumhara VELORA wala portfolio. 1 click me apna portfolio.",
      price: "$29",
      tag: "FAST",
      color: "from-zinc-700 to-zinc-900"
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">VELORA Boilerplates</h1>
          <p className="text-zinc-400 text-lg">
            Ready-made masala. Copy. Paste. Launch in 48 Hours.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {boilerplates.map((b) => (
            <div key={b.name} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition">
              <div className={`h-32 rounded-xl bg-gradient-to-br ${b.color} mb-6 flex items-center justify-center text-xl font-bold`}>
                {b.name}
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs px-2 py-1 bg-zinc-800 rounded-full text-orange-400">{b.tag}</span>
                <span className="font-bold text-xl">{b.price}</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{b.name}</h3>
              <p className="text-zinc-400 text-sm mb-6">{b.desc}</p>
              <button className="w-full bg-white text-black py-3 rounded-full font-bold hover:bg-zinc-200 transition">
                Buy Now - Live Demo
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-zinc-500 mt-16 text-sm">
          Built with Next.js 15, Tailwind, Supabase, Cloudflare Workers
        </p>
      </div>
    </div>
  );
}
