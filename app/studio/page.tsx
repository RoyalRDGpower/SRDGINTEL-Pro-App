'use client';

import React from 'react';
import Link from 'next/link';

export default function StudioGalleryPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-display selection:bg-primary/30">
            {/* TopAppBar */}
            <header className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
                <div className="flex items-center p-4 justify-between max-w-lg mx-auto">
                    <div className="text-white flex size-10 shrink-0 items-center justify-center bg-primary/20 rounded-lg">
                        <span className="material-symbols-outlined text-primary">auto_awesome</span>
                    </div>
                    <h2 className="text-white text-lg font-bold leading-tight tracking-tight flex-1 px-3">SRDGINTEL</h2>
                    <div className="flex gap-2">
                        <button className="flex size-10 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined text-white text-[20px]">search</span>
                        </button>
                        <Link href="/settings" className="flex size-10 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined text-white text-[20px]">account_circle</span>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="max-w-lg mx-auto pb-24">
                {/* HeadlineText */}
                <div className="px-4 pt-8 pb-4">
                    <h1 className="text-white tracking-tight text-[36px] font-bold leading-tight">AI Video Studio</h1>
                    <p className="text-gray-400 mt-2 text-sm">Explore our latest high-end neural cinematic productions.</p>
                </div>

                {/* Tabs */}
                <div className="sticky top-[73px] z-40 bg-[#0a0a0a]/95 backdrop-blur-sm">
                    <div className="flex border-b border-white/10 px-4 gap-6 overflow-x-auto no-scrollbar">
                        {['All Showcase', 'Neural Arts', 'Cinematic', 'Abstract'].map((tab, i) => (
                            <button key={tab} className={`flex flex-col items-center justify-center border-b-2 pb-3 pt-4 whitespace-nowrap transition-colors ${i === 0 ? 'border-primary text-white' : 'border-transparent text-gray-500 hover:text-gray-300'}`}>
                                <p className="text-sm font-bold tracking-wide">{tab}</p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Masonry ImageGrid */}
                <div className="px-4 py-6">
                    <div className="columns-2 gap-3 space-y-3">
                        {/* Item 1 */}
                        <div className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer">
                            <div className="bg-cover bg-center flex flex-col aspect-[3/5] relative" style={{ backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCQqOQ61jS6BJDZJnt80f8U5_aeQvx8GVSCtZ4n2aQJAFmD7lY6pByjjGHQNeJANIgllMdgt9QryxoxfwXiIZamOKt4ybwpnQA4u1Rsqu9hwKi5FFh4nsdxqeSOgjoFP2-8u-1bhlZyZDQglrnBIs2i2M0XdON_r7qwpvwqeKwmE7Jf3C4kLKO5gLIBqPQGN5PIcntxrjJp1NllkpcipfMEC4xxOiTGyLzAN7Sj_mrvSybxYSoYKotE3e3z-lzL9vnJGojHhlJhHC8")' }}>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                                    <span className="material-symbols-outlined text-white text-5xl">play_circle</span>
                                </div>
                                <div className="mt-auto p-3">
                                    <span className="inline-block px-2 py-0.5 bg-primary/80 text-[10px] font-bold uppercase tracking-widest rounded mb-1 text-white">Neural</span>
                                    <p className="text-white text-sm font-bold leading-tight">Liquid Aurum</p>
                                </div>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer">
                            <div className="bg-cover bg-center flex flex-col aspect-square relative" style={{ backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDmnASEwKhF2JBSw9S1zK-00kLhnChIptcFxJVj67sOpMDUsAVGUFkQ-XgWK9U2N2Pt_f-qieQAPom1mpyORhxnh9znL4gpiwADUK6-4035RaMe09_u9rY5fpKqhN_PDzG3WMYWkOqxK1hvPfNt2eP0gUltTropi_ur2gq9GCTLnU3NJKi58p0bXq9l9CMY9S6rTWuT8Jf6q7a4R6AVKcwmbSgg3wzUKffNM8JHP0VUcd_qU9aEz5FjSERKYCI_g1x_VCZgMcAfyrs")' }}>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                                    <span className="material-symbols-outlined text-white text-5xl">play_circle</span>
                                </div>
                                <div className="mt-auto p-3">
                                    <span className="inline-block px-2 py-0.5 bg-purple-600/80 text-[10px] font-bold uppercase tracking-widest rounded mb-1 text-white">Cyber</span>
                                    <p className="text-white text-sm font-bold leading-tight">Neon Genesis</p>
                                </div>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer">
                            <div className="bg-cover bg-center flex flex-col aspect-[3/4] relative" style={{ backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCdrXTCT3fwQGlfjiWKSPaAQ8z20HMGGLRJNE1dCepinYVQtfwcNHDeqOSaV6mxGLjFZ06UVwaLy97TQQIQ4fluNVHauuQFX85dk8bm67Rqr9soPi2llFBBG-jT0M91oQ308ygaFDcrnXfZSAJ9kuH3kvcoGO3qWPuYNd8cGcYCI4ukEQVfttoA1v0HRrvShyRaCTGrHbzcibCgTCuqnJK2Xug_5kOe27Xfa9lCuAObQVw0bWzoz-IajEar86265YAPBV0QSrHyAiw")' }}>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                                    <span className="material-symbols-outlined text-white text-5xl">play_circle</span>
                                </div>
                                <div className="mt-auto p-3">
                                    <span className="inline-block px-2 py-0.5 bg-emerald-600/80 text-[10px] font-bold uppercase tracking-widest rounded mb-1 text-white">Ambient</span>
                                    <p className="text-white text-sm font-bold leading-tight">Geometric Rift</p>
                                </div>
                            </div>
                        </div>

                        {/* Item 4 */}
                        <div className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer">
                            <div className="bg-cover bg-center flex flex-col aspect-[3/5] relative" style={{ backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDFqjJ_nxchcn6m5MgAABvYSKrjTR4fc3eJNrv60NIzTRVeBxyRrc193eRBHgm__Pgfmi8cYXSmLpR8AmeCZ2jX72StE1LJSzdYCpkyZe3i3maP2uhMMGJhKsJurMGBV7NDrjPYitrN3sgQvowVm6Cy8nVL2abQcBdDLQHx03_wyuCoDXWKzdJ4uNkuIzqWxNZDN6iLdmK5bcqQ5VZh8GnzbZzTiaB3rWjKshNBuPiO0-vxgMEUUpbuB7yHPE75usbO6CMo1hY0xJQ")' }}>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                                    <span className="material-symbols-outlined text-white text-5xl">play_circle</span>
                                </div>
                                <div className="mt-auto p-3">
                                    <span className="inline-block px-2 py-0.5 bg-primary/80 text-[10px] font-bold uppercase tracking-widest rounded mb-1 text-white">Cinematic</span>
                                    <p className="text-white text-sm font-bold leading-tight">Event Horizon</p>
                                </div>
                            </div>
                        </div>

                        {/* Item 5 */}
                        <div className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer">
                            <div className="bg-cover bg-center flex flex-col aspect-[4/3] relative" style={{ backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCf2TXvRipLuMR2mAydqpIlAzXjq6aRSPSE3JCqmbbzhwDydUyuXNZbZnv3fexecbxijrDD8yxnb1sWpGrr23x-RnA6ZI04ZGH8XFBxvHXtx4Rfeq_kk-l3DggNYsOncDpLnaZSp6YHUGCtYq15s92qENTcAt2wBcRt_nGEEbfkxjpCBgpk1ZWEcxP4vSWdI6VE8MT5Tlux27bGhnUfy_xFKqcVPQZbE8pVrYZerL1sDJ7CNZIoWaK_lv-_NOfEoA_Jec5N8chKiew")' }}>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                                    <span className="material-symbols-outlined text-white text-5xl">play_circle</span>
                                </div>
                                <div className="mt-auto p-3">
                                    <span className="inline-block px-2 py-0.5 bg-orange-600/80 text-[10px] font-bold uppercase tracking-widest rounded mb-1 text-white">Architect</span>
                                    <p className="text-white text-sm font-bold leading-tight">Meta City V.2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SectionHeader */}
                <div className="pt-10">
                    <h2 className="text-white text-2xl font-bold leading-tight tracking-tight px-4 pb-1">Start Your Project</h2>
                    <p className="text-gray-400 px-4 text-sm mb-6">Choose a plan that scales with your creativity.</p>
                </div>

                {/* Pricing Tiers/Starts (Linked to Wizard/Pricing) */}
                <div className="px-4 space-y-4">
                    {/* Pro Card */}
                    <Link href="/pricing" className="block relative overflow-hidden rounded-2xl p-6 border border-primary/50 shadow-[0_0_20px_rgba(37,106,244,0.3)] bg-white/5 backdrop-blur-md transition-transform active:scale-95">
                        <div className="absolute top-0 right-0 bg-primary px-3 py-1 rounded-bl-xl text-[10px] text-white font-bold uppercase tracking-wider">Most Popular</div>
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-primary">Pro Studio</h3>
                                <p className="text-xs text-gray-400">For serious creators</p>
                            </div>
                            <div className="text-right">
                                <span className="text-2xl font-bold text-white">$129</span>
                                <span className="text-xs text-gray-400 block">/mo</span>
                            </div>
                        </div>
                        <ul className="space-y-3 mb-6">
                            {['4K Ultra HD Rendering', 'Priority Queue Access', 'Custom Style Training'].map(feat => (
                                <li key={feat} className="flex items-center text-sm text-gray-300">
                                    <span className="material-symbols-outlined text-primary mr-2 text-sm">check_circle</span> {feat}
                                </li>
                            ))}
                        </ul>
                        <div className="w-full py-3 bg-primary hover:bg-primary/90 text-white text-center font-bold rounded-xl transition-colors shadow-lg shadow-primary/20">Upgrade Now</div>
                    </Link>
                </div>

                {/* Footer / Tech Tips CTA */}
                <footer className="mt-16 px-6 py-12 border-t border-white/10 text-center">
                    <h4 className="text-lg font-bold mb-2 text-white">Join the SRDGINTEL Community</h4>
                    <p className="text-gray-400 text-sm mb-6">Get weekly AI tech tips and video generation guides delivered to your inbox.</p>
                    <div className="flex flex-col gap-3">
                        <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm flex items-center">
                            <input className="bg-transparent w-full outline-none text-white placeholder:text-gray-500" placeholder="Enter your email" type="email" />
                        </div>
                        <button className="bg-primary py-3 rounded-xl font-bold text-white hover:bg-primary/90 transition-colors">Subscribe</button>
                    </div>
                    <p className="text-[10px] text-gray-600 mt-8 uppercase tracking-widest">© 2026 SRDGINTEL STUDIO</p>
                </footer>
            </main>

            {/* Bottom Navigation Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-[#0a0a0a]/90 backdrop-blur-xl border-t border-white/5 pb-2 pt-2 z-40">
                <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
                    <Link href="/dashboard" className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>grid_view</span>
                        <span className="text-[10px] font-bold">Dashboard</span>
                    </Link>
                    <Link href="/studio" className="flex flex-col items-center gap-1 text-primary">
                        <span className="material-symbols-outlined">auto_awesome</span>
                        <span className="text-[10px] font-bold">Studio</span>
                    </Link>
                    <div className="w-16"></div> {/* Spacer for FAB */}
                    <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">folder</span>
                        <span className="text-[10px] font-bold">Library</span>
                    </button>
                    <Link href="/settings" className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">account_circle</span>
                        <span className="text-[10px] font-bold">Account</span>
                    </Link>
                </div>
            </div>

            {/* Fixed Action Button (FAB) relative to this page if needed, or just spacer */}
            <div className="fixed bottom-8 left-0 right-0 flex justify-center z-50 px-6 pointer-events-none">
                <Link href="/tools/video-wizard" className="pointer-events-auto bg-primary hover:bg-primary/90 text-black py-4 px-6 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(201,162,77,0.3)] hover:scale-105 transition-all active:scale-95">
                    <span className="material-symbols-outlined text-2xl">add</span>
                </Link>
            </div>

            {/* iOS Home Indicator Spacing */}
            <div className="h-8 bg-[#0a0a0a]"></div>
        </div>
    );
}
