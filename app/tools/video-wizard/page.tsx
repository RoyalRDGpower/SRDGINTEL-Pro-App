'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function VideoWizardPage() {
    const [step, setStep] = useState(1);

    return (
        <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-[#0a0a0c] text-white font-display">
            {/* TopAppBar */}
            <header className="sticky top-0 z-50 flex items-center bg-[#101622]/80 backdrop-blur-md p-4 justify-between border-b border-white/5">
                <Link href="/" className="text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/5 cursor-pointer transition-colors">
                    <span className="material-symbols-outlined">close</span>
                </Link>
                <div className="flex flex-col items-center">
                    <h2 className="text-white text-base font-bold leading-tight tracking-tight">AI Video Wizard</h2>
                    <span className="text-[10px] uppercase tracking-widest text-primary font-semibold">SRDGINTEL</span>
                </div>
                <div className="flex items-center gap-2">
                    <Link href="/tools/video-wizard/settings" className="flex size-10 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined text-white text-[20px]">settings</span>
                    </Link>
                    <button className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <span className="material-symbols-outlined text-[20px]">info</span>
                    </button>
                </div>
            </header>

            {/* Progress Stepper */}
            <div className="flex w-full flex-col items-center justify-center gap-2 py-6 px-6">
                <div className="flex w-full items-center justify-between max-w-sm relative">
                    {/* Connecting Line Background */}
                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 z-0"></div>
                    {/* Progress Line */}
                    <div className="absolute top-1/2 left-0 h-[2px] bg-primary -translate-y-1/2 z-0 transition-all duration-300" style={{ width: `${(step - 1) * 33}%` }}></div>

                    {[
                        { num: 1, label: 'Prompt' },
                        { num: 2, label: 'Style' },
                        { num: 3, label: 'Settings' },
                        { num: 4, label: 'Render' }
                    ].map((s) => (
                        <div key={s.num} className="z-10 flex flex-col items-center gap-1 cursor-pointer" onClick={() => setStep(s.num)}>
                            <div className={`h-8 w-8 rounded-full flex items-center justify-center text-[12px] font-bold transition-all duration-300 ${step >= s.num ? 'bg-primary text-black shadow-[0_0_15px_rgba(201,162,77,0.5)]' : 'bg-[#182234] border border-white/10 text-white/40'}`}>
                                {s.num}
                            </div>
                            <span className={`text-[10px] font-bold transition-colors ${step >= s.num ? 'text-primary' : 'text-white/40'}`}>{s.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <main className="flex-1 flex flex-col gap-6 pb-32">
                {/* HeadlineText */}
                <div className="px-4">
                    <h3 className="text-white tracking-tight text-3xl font-bold leading-tight">Describe your vision</h3>
                    <p className="text-[#90a4cb] text-sm mt-1">Provide a detailed prompt for the AI to generate from.</p>
                </div>

                {/* Preview Window */}
                <div className="px-4">
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-[#182234]/60 group">
                        {/* Placeholder Image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#182234] to-[#0a0a0c]"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                            <span className="material-symbols-outlined text-primary text-4xl mb-2">videocam</span>
                            <p className="text-white/60 text-sm font-medium">Visualization will appear here</p>
                        </div>
                        <div className="absolute bottom-3 right-3">
                            <div className="bg-black/50 backdrop-blur-md border border-white/10 px-2 py-1 rounded text-[10px] font-bold text-white/70">16:9 HD</div>
                        </div>
                    </div>
                </div>

                {/* TextField */}
                <div className="px-4">
                    <div className="rounded-xl p-1 border border-white/10 bg-[#182234]/40 backdrop-blur-sm">
                        <textarea className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-primary/50 border-none bg-transparent min-h-40 placeholder:text-[#90a4cb]/50 p-4 text-base font-normal leading-relaxed" placeholder="A futuristic cityscape at sunset, neon lights reflecting on rain-slicked streets, flying vehicles gliding between skyscrapers..."></textarea>
                    </div>
                </div>

                {/* Mood Tags */}
                <div className="flex flex-col gap-3 px-4">
                    <h4 className="text-white/80 text-sm font-bold uppercase tracking-wider px-1">Visual Mood</h4>
                    <div className="flex flex-wrap gap-2">
                        {['Cinematic', 'Futuristic', 'Cyberpunk', 'Minimalist', 'Anime'].map((mood, i) => (
                            <button key={mood} className={`px-4 py-2 rounded-full text-sm border transition-all ${i === 0 ? 'bg-primary text-black font-bold border-primary/50 shadow-[0_0_10px_rgba(201,162,77,0.3)]' : 'bg-white/5 text-white/70 font-medium border-white/10 hover:bg-white/10'}`}>
                                {mood}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ActionPanel */}
                <div className="px-4">
                    <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#182234]/60 p-4">
                        <div className="flex items-center gap-3">
                            <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">auto_awesome</span>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-white text-sm font-bold leading-tight">AI Prompt Enhancer</p>
                                <p className="text-[#90a4cb] text-xs font-normal leading-normal">Optimize for high quality</p>
                            </div>
                        </div>
                        <div className="relative flex h-7 w-12 cursor-pointer items-center rounded-full bg-primary/20 p-0.5">
                            <div className="absolute right-0.5 h-6 w-6 rounded-full bg-primary shadow-lg"></div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Fixed Footer Action */}
            <footer className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#101622] via-[#101622]/90 to-transparent pt-10">
                <button
                    onClick={() => setStep(step < 4 ? step + 1 : 1)}
                    className="w-full h-14 bg-primary rounded-xl flex items-center justify-center gap-2 text-black font-bold text-lg shadow-[0_4px_20px_rgba(201,162,77,0.4)] hover:brightness-110 active:scale-[0.98] transition-all"
                >
                    <span>{step === 4 ? 'Start Render' : 'Continue to Style'}</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                {/* Home Indicator */}
                <div className="w-32 h-1.5 bg-white/20 rounded-full mx-auto mt-6"></div>
            </footer>
        </div>
    );
}
