import Link from 'next/link';
import React from 'react';

export default function LegalPage() {
    return (
        <div className="min-h-screen bg-[#101622] text-white font-display">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 bg-[#101622]/80 backdrop-blur-md border-b border-white/5">
                <div className="flex items-center p-4 justify-between max-w-2xl mx-auto">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="flex items-center justify-center size-10 rounded-full hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined text-white">arrow_back</span>
                        </Link>
                        <h1 className="text-white text-lg font-bold leading-tight tracking-tight">Legal Center</h1>
                    </div>
                    <div className="flex items-center gap-1">
                        <button className="flex size-10 items-center justify-center rounded-full hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined text-white">search</span>
                        </button>
                    </div>
                </div>
                {/* Segmented Control (Tabs) */}
                <div className="px-4 py-3 max-w-2xl mx-auto">
                    <div className="flex h-11 items-center justify-center rounded-xl bg-[#1a2336] p-1">
                        <button className="flex h-full grow items-center justify-center rounded-lg px-2 bg-[#101622] text-primary text-sm font-semibold shadow-sm transition-all">
                            Privacy
                        </button>
                        <button className="flex h-full grow items-center justify-center rounded-lg px-2 text-gray-400 text-sm font-semibold hover:text-white transition-all">
                            Terms
                        </button>
                        <button className="flex h-full grow items-center justify-center rounded-lg px-2 text-gray-400 text-sm font-semibold hover:text-white transition-all">
                            Disclaimer
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-2xl mx-auto pb-20">
                {/* Headline Section */}
                <section className="px-4 pt-6">
                    <div className="flex flex-col gap-1">
                        <span className="text-primary text-xs font-bold uppercase tracking-widest">SRDGINTEL</span>
                        <h2 className="text-white text-[32px] font-extrabold leading-tight">Privacy Policy</h2>
                    </div>
                    <div className="flex items-center gap-2 py-4">
                        <span className="material-symbols-outlined text-[#90a4cb] text-sm">schedule</span>
                        <p className="text-[#90a4cb] text-xs font-medium uppercase tracking-tighter">Last Updated: October 24, 2023</p>
                    </div>
                    <p className="text-[#90a4cb] text-base leading-relaxed mb-6">
                        At SRDGINTEL, we are committed to protecting your privacy and ensuring transparency in how we handle your data, especially concerning our AI generation and tech recommendation services.
                    </p>
                </section>

                {/* Accordion Content */}
                <section className="flex flex-col px-4 gap-4">
                    <details className="flex flex-col rounded-xl border border-white/5 bg-[#121216] px-4 py-1 group" open>
                        <summary className="flex cursor-pointer items-center justify-between gap-6 py-4 list-none text-white font-semibold">
                            <div className="flex items-center gap-3">
                                <span className="text-primary font-bold text-lg">01.</span>
                                <p>Data Collection</p>
                            </div>
                            <span className="material-symbols-outlined text-slate-500 transition-transform group-open:rotate-180">expand_more</span>
                        </summary>
                        <div className="pb-4 pt-1 text-[#90a4cb] text-sm leading-relaxed">
                            <p className="mb-3">We collect information you provide directly to us when you create an account, use our AI generation tools, or communicate with us. This includes:</p>
                            <ul className="list-disc list-inside space-y-2 pl-2">
                                <li>Contact information (Name, Email)</li>
                                <li>AI Generation Prompts and Metadata</li>
                                <li>Device and Usage information</li>
                                <li>Transaction history for premium features</li>
                            </ul>
                        </div>
                    </details>

                    <details className="flex flex-col rounded-xl border border-white/5 bg-[#121216] px-4 py-1 group">
                        <summary className="flex cursor-pointer items-center justify-between gap-6 py-4 list-none text-white font-semibold">
                            <div className="flex items-center gap-3">
                                <span className="text-primary font-bold text-lg">02.</span>
                                <p>How We Use AI</p>
                            </div>
                            <span className="material-symbols-outlined text-slate-500 transition-transform group-open:rotate-180">expand_more</span>
                        </summary>
                        <div className="pb-4 pt-1 text-[#90a4cb] text-sm leading-relaxed">
                            <p>Our proprietary AI models process your inputs to generate custom content. By using our service, you acknowledge that processed data may be used anonymously to improve our training models unless you opt-out via your account settings.</p>
                        </div>
                    </details>

                    <details className="flex flex-col rounded-xl border border-white/5 bg-[#121216] px-4 py-1 group">
                        <summary className="flex cursor-pointer items-center justify-between gap-6 py-4 list-none text-white font-semibold">
                            <div className="flex items-center gap-3">
                                <span className="text-primary font-bold text-lg">03.</span>
                                <p>Cookie Policy</p>
                            </div>
                            <span className="material-symbols-outlined text-slate-500 transition-transform group-open:rotate-180">expand_more</span>
                        </summary>
                        <div className="pb-4 pt-1 text-[#90a4cb] text-sm leading-relaxed">
                            <p>We use essential cookies to maintain your session and security. Analytic cookies help us understand how users interact with our tech tips and video generation dashboard to provide a more tailored experience.</p>
                        </div>
                    </details>
                </section>

                {/* Footer Actions */}
                <section className="px-4 mt-12 pb-12 border-t border-white/5 pt-8">
                    <h3 className="text-white font-bold mb-4">Questions about our policies?</h3>
                    <div className="grid grid-cols-1 gap-3">
                        <button className="flex items-center justify-between bg-primary text-black p-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors">
                            <span>Contact Legal Team</span>
                            <span className="material-symbols-outlined">mail</span>
                        </button>
                        <button className="flex items-center justify-between bg-[#222f49] text-white p-4 rounded-xl font-bold hover:bg-[#2a3a5a] transition-colors">
                            <span>Download as PDF</span>
                            <span className="material-symbols-outlined">download</span>
                        </button>
                    </div>
                    <div className="mt-10 text-center">
                        <p className="text-[#90a4cb] text-xs">SRDGINTEL © 2024. All rights reserved.</p>
                        <p className="text-[#90a4cb] text-[10px] mt-1 opacity-50">v2.4.0 (Build 902)</p>
                    </div>
                </section>
            </main>
        </div>
    );
}
