'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function RenderSettingsPage() {
    const [aspectRatio, setAspectRatio] = useState('16:9');
    const [resolution, setResolution] = useState('1080p');
    const [fps, setFps] = useState(24);
    const [intensity, setIntensity] = useState(50);
    const [enhanceLighting, setEnhanceLighting] = useState(false);
    const [motionSmoothing, setMotionSmoothing] = useState(false);

    return (
        <div className="relative flex min-h-screen w-full flex-col max-w-[430px] mx-auto overflow-x-hidden border-x border-white/5 shadow-2xl bg-[#101622] text-white font-display">
            {/* TopAppBar */}
            <header className="sticky top-0 z-50 flex items-center bg-[#101622]/80 backdrop-blur-md p-4 justify-between border-b border-white/5">
                <div className="flex items-center gap-2">
                    <Link href="/tools/video-wizard" className="flex size-10 items-center justify-center rounded-lg hover:bg-white/5 transition-colors">
                        <span className="material-symbols-outlined text-white text-[24px]">arrow_back_ios_new</span>
                    </Link>
                    <div className="flex flex-col">
                        <h2 className="text-white text-sm font-bold leading-none tracking-tight">AI VIDEO WIZARD</h2>
                        <span className="text-[10px] text-primary font-bold tracking-[0.2em] uppercase">SRDGINTEL</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <span className="material-symbols-outlined text-[20px]">info</span>
                    </button>
                </div>
            </header>

            <main className="flex-1 overflow-y-auto pb-32">
                {/* Section: Aspect Ratio */}
                <div className="px-4 pt-6 pb-2">
                    <h3 className="text-white/60 text-[11px] font-bold tracking-[0.15em] uppercase mb-4">Output Aspect Ratio</h3>
                    <div className="flex h-12 items-center justify-center rounded-xl bg-white/5 p-1 border border-white/5">
                        {[
                            { val: '16:9', icon: 'rectangle' },
                            { val: '9:16', icon: 'stay_current_portrait' },
                            { val: '1:1', icon: 'crop_square' }
                        ].map((opt) => (
                            <button
                                key={opt.val}
                                onClick={() => setAspectRatio(opt.val)}
                                className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-medium transition-all ${aspectRatio === opt.val ? 'bg-primary text-white shadow-sm' : 'text-white/50 hover:text-white'}`}
                            >
                                <span className="material-symbols-outlined mr-2 text-[18px]">{opt.icon}</span>
                                <span className="truncate">{opt.val}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Section: Resolution */}
                <div className="px-4 py-4">
                    <h3 className="text-white/60 text-[11px] font-bold tracking-[0.15em] uppercase mb-4">Target Resolution</h3>
                    <div className="flex gap-3 flex-wrap">
                        {['720p', '1080p', '4K'].map((res) => (
                            <button
                                key={res}
                                onClick={() => setResolution(res)}
                                className={`flex flex-1 h-20 flex-col items-center justify-center gap-y-1 rounded-xl border transition-all ${resolution === res ? 'bg-primary/20 border-primary' : 'bg-white/5 border-white/10 hover:border-primary/50'}`}
                            >
                                <span className={`material-symbols-outlined text-[24px] ${resolution === res ? 'text-primary' : 'text-white/40'}`}>{res === '4K' ? '4k' : 'hd'}</span>
                                <p className="text-white text-xs font-semibold uppercase">{res}</p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Section: Frame Rate */}
                <div className="px-4 py-4">
                    <h3 className="text-white/60 text-[11px] font-bold tracking-[0.15em] uppercase mb-4">Frame Rate (FPS)</h3>
                    <div className="grid grid-cols-3 gap-3">
                        {[
                            { val: 24, label: 'Cinematic' },
                            { val: 30, label: 'Standard' },
                            { val: 60, label: 'Fluid' }
                        ].map((opt) => (
                            <button
                                key={opt.val}
                                onClick={() => setFps(opt.val)}
                                className={`relative flex flex-col items-center p-3 rounded-xl border cursor-pointer transition-all ${fps === opt.val ? 'border-primary/50 bg-primary/5' : 'border-transparent bg-white/5 hover:bg-white/10'}`}
                            >
                                <span className="text-white text-lg font-bold">{opt.val}</span>
                                <span className="text-[10px] text-white/40 uppercase">{opt.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Section: AI Engine Intensity */}
                <div className="px-4 py-4">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-white/60 text-[11px] font-bold tracking-[0.15em] uppercase">AI Engine Intensity</h3>
                        <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase">{intensity < 30 ? 'Precise' : intensity > 70 ? 'Creative' : 'Balanced'}</span>
                    </div>
                    <div className="relative px-2">
                        <input
                            className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary"
                            type="range"
                            min="0"
                            max="100"
                            value={intensity}
                            onChange={(e) => setIntensity(parseInt(e.target.value))}
                        />
                        <div className="flex justify-between mt-4 text-[10px] text-white/30 font-medium uppercase tracking-widest">
                            <span>Precise</span>
                            <span>Hyper-Creative</span>
                        </div>
                    </div>
                </div>

                {/* Advanced Toggles */}
                <div className="px-4 py-6 space-y-3">
                    <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/5">
                        <div className="flex items-center gap-3">
                            <div className="size-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
                                <span className="material-symbols-outlined text-[20px]">light_mode</span>
                            </div>
                            <div>
                                <p className="text-sm font-semibold">Enhance Lighting</p>
                                <p className="text-[10px] text-white/40">Auto-correct exposure and color</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setEnhanceLighting(!enhanceLighting)}
                            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${enhanceLighting ? 'bg-primary' : 'bg-white/10'}`}
                        >
                            <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${enhanceLighting ? 'translate-x-5' : 'translate-x-0'}`}></span>
                        </button>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/5">
                        <div className="flex items-center gap-3">
                            <div className="size-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                                <span className="material-symbols-outlined text-[20px]">auto_videocam</span>
                            </div>
                            <div>
                                <p className="text-sm font-semibold">Motion Smoothing</p>
                                <p className="text-[10px] text-white/40">AI-driven frame interpolation</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setMotionSmoothing(!motionSmoothing)}
                            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${motionSmoothing ? 'bg-primary' : 'bg-white/10'}`}
                        >
                            <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${motionSmoothing ? 'translate-x-5' : 'translate-x-0'}`}></span>
                        </button>
                    </div>
                </div>
            </main>

            {/* Live Credit Estimator & Action Button */}
            <footer className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto p-4 bg-[#101622]/90 backdrop-blur-xl border-t border-white/5 space-y-4">
                <div className="flex items-center justify-between px-2">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Estimated Cost</span>
                        <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-primary text-[18px]">toll</span>
                            <span className="text-xl font-bold">12 <span className="text-xs font-normal text-white/60">Credits</span></span>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Balance</span>
                        <p className="text-sm font-semibold">450 Credits</p>
                    </div>
                </div>
                <button className="w-full bg-primary hover:bg-primary/90 text-white h-14 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
                    <span className="material-symbols-outlined">movie_filter</span>
                    GENERATE VIDEO
                </button>
                <div className="h-4"></div>
            </footer>
        </div>
    );
}
