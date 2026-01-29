import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-slate-100 font-display selection:bg-primary-gold selection:text-black">
      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0B0E14]/80 border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-xl">bolt</span>
          </div>
          <span className="font-bold tracking-tighter text-xl">SRDG<span className="text-primary">INTEL</span></span>
        </div>
        <div className="flex gap-4">
            <Link href="/blog" className="text-sm font-bold hover:text-primary transition-colors">BLOG</Link>
            <button className="p-2">
                <span className="material-symbols-outlined dark:text-white">menu</span>
            </button>
        </div>
      </nav>

      <main className="pt-24 pb-32 px-6">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="relative overflow-hidden rounded-xl bg-[#121216] border border-primary/20 p-8 text-center">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-4">AI Evolution 2024</span>
              <h1 className="text-4xl font-bold leading-tight mb-4 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">Professional AI Video Generation</h1>
              <p className="text-slate-400 text-sm mb-8 max-w-xs mx-auto">Powering the next generation of digital content with advanced neural intelligence.</p>
              <button className="w-full py-4 bg-primary text-white rounded-lg font-bold flex items-center justify-center space-x-2 shadow-lg shadow-primary/20 active:scale-95 transition-transform hover:bg-primary/90">
                <span>Explore AI Video</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
            <div className="mt-8 relative h-48 rounded-lg overflow-hidden">
             {/* Placeholder for Hero Image - linking to external or local asset if available */}
             <div className="w-full h-full bg-gradient-to-t from-[#121216] to-transparent absolute inset-0 z-10"></div>
              <img 
                className="w-full h-full object-cover opacity-50" 
                alt="Abstract futuristic blue wave motion graphics" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3mjYORD4VcdbYXPHttamA4cIDuEAvvewvm0nbshKLludFpwdCXjp6XqhnXCGyZPwfE7rO46GGfOSAU3r0DibBZOYqQGTFjBHpcjqMxw3QIgIVWDCuzGdNEku99Ipkdw1ic2iv50A_qy6s2oqrHaCJtwIY6QwnVQCLg1JZ_W7swdMnPPVEHvEXepDU-QD5NI__hb8Ya5W3OQFrRY86xLB5mHK1e_5ppPPx4JquL0c2j3NSwh24jp1MwcRulrlFc_5_jdgrapd2gqE"
              />
            </div>
          </div>
        </section>

        {/* Our Capabilities Grid */}
        <section className="mb-12">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-2xl font-bold">Our Capabilities</h2>
              <p className="text-slate-400 text-xs">Precision tools for modern scale</p>
            </div>
            <Link href="/services" className="text-primary text-xs font-bold flex items-center hover:underline">
                    VIEW ALL <span className="material-symbols-outlined text-xs ml-1">add</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* AI Content */}
            <div className="bg-[#121216] border border-primary/20 p-5 rounded-xl flex flex-col items-start space-y-4 hover:bg-white/5 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">psychology</span>
              </div>
              <div>
                <h3 className="font-bold text-sm">AI Content</h3>
                <p className="text-xs text-slate-500">Automated Brilliance</p>
              </div>
            </div>
            {/* SEO */}
            <div className="bg-[#121216] border border-primary/20 p-5 rounded-xl flex flex-col items-start space-y-4 hover:bg-white/5 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">insights</span>
              </div>
              <div>
                <h3 className="font-bold text-sm">SEO</h3>
                <p className="text-xs text-slate-500">Data-Driven Growth</p>
              </div>
            </div>
            {/* Video */}
            <div className="bg-[#121216] border border-primary/20 p-5 rounded-xl flex flex-col items-start space-y-4 hover:bg-white/5 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">videocam</span>
              </div>
              <div>
                <h3 className="font-bold text-sm">Video</h3>
                <p className="text-xs text-slate-500">Futuristic Visuals</p>
              </div>
            </div>
            {/* Tech Tips */}
            <Link href="/blog" className="bg-[#121216] border border-primary/20 p-5 rounded-xl flex flex-col items-start space-y-4 hover:bg-white/5 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">tips_and_updates</span>
              </div>
              <div>
                <h3 className="font-bold text-sm">Tech Tips</h3>
                <p className="text-xs text-slate-500">Expert Insights</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Latest Intelligence Feed (Static for Home, Link to Blog) */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Latest Intelligence</h2>
          <div className="space-y-4">
             {/* Check the Blog Page for dynamic feed */}
             <div className="text-center p-8 border border-dashed border-slate-700 rounded-xl">
                <p className="text-slate-400 mb-4">Read our latest advanced tech tips and market analysis.</p>
                <Link href="/blog" className="inline-block px-6 py-2 bg-primary/10 text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-colors">
                    Visit Blog
                </Link>
             </div>
          </div>
        </section>
      </main>

      {/* Footer Links */}
      <footer className="bg-[#121216] border-t border-white/5 py-12 px-6 mb-20">
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-[14px]">bolt</span>
          </div>
          <span className="font-bold tracking-tighter text-lg">SRDG<span className="text-primary">INTEL</span></span>
        </div>
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="space-y-3">
            <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Company</h5>
            <ul className="space-y-2 text-sm">
              <li><Link className="hover:text-primary transition-colors" href="#">Portfolio</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/pricing">Services</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/about">About</Link></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Connect</h5>
            <ul className="space-y-2 text-sm">
              <li><Link className="hover:text-primary transition-colors" href="/contact">Contact</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="#">LinkedIn</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="#">Twitter</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-[10px] text-slate-600 border-t border-white/5 pt-6 flex justify-between">
          <span>© 2024 SRDGINTEL. All Rights Reserved.</span>
          <span>Privacy Policy</span>
        </div>
      </footer>

      {/* Floating Quick Access Bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] backdrop-blur-md bg-[#0B0E14]/80 rounded-full border border-white/10 px-6 py-3 shadow-2xl z-50 flex justify-between items-center max-w-sm">
        <Link href="/" className="p-2 rounded-full text-primary hover:bg-white/5">
          <span className="material-symbols-outlined">home</span>
        </Link>
        <button className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5">
          <span className="material-symbols-outlined">search</span>
        </button>
        <Link href="/tools" className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center -mt-8 border-4 border-[#0B0E14] shadow-xl hover:scale-110 transition-transform">
          <span className="material-symbols-outlined">smart_toy</span>
        </Link>
        <Link href="/blog" className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5">
          <span className="material-symbols-outlined">rss_feed</span>
        </Link>
        <Link href="/contact" className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5">
          <span className="material-symbols-outlined">person_outline</span>
        </Link>
      </div>
    </div>
  );
}
