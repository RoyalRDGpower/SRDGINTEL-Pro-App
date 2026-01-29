'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function EngineSelectorPage() {
    const [engineType, setEngineType] = useState<'standard' | 'pro'>('standard');

    return (
        <div className="min-h-screen bg-[#101622] text-white font-display">
            {/* Top Navigation Bar */}
            <div className="sticky top-0 z-10 flex items-center bg-[#101622]/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-white/5">
                <Link href="/" className="text-primary flex size-12 shrink-0 items-center justify-start cursor-pointer hover:text-white transition-colors">
                    <span className="material-symbols-outlined">arrow_back_ios</span>
                </Link>
                <h2 className="text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-12">AI Engine Selector</h2>
            </div>

            <main className="max-w-md mx-auto pb-24">
                {/* Brand Header Section */}
                <div className="px-4 pt-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-2">
                        <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-xs font-bold tracking-widest text-primary uppercase">SRDGINTEL Systems</span>
                    </div>
                    <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight pb-2">Engine Configuration</h1>
                    <p className="text-slate-400 text-base font-normal leading-relaxed">
                        Seamlessly scale your workloads from local Open-Source models to enterprise-grade Gemini AI.
                    </p>
                </div>

                {/* Engine Toggle Selector */}
                <div className="px-4 py-8">
                    <div className="flex h-14 w-full items-center justify-center rounded-xl bg-[#222f49] p-1.5">
                        <button
                            onClick={() => setEngineType('standard')}
                            className={`flex h-full grow items-center justify-center rounded-lg px-2 text-sm font-bold transition-all ${engineType === 'standard' ? 'bg-[#101622] text-primary shadow-lg' : 'text-[#90a4cb] hover:text-white'}`}
                        >
                            Standard (OSS)
                        </button>
                        <button
                            onClick={() => setEngineType('pro')}
                            className={`flex h-full grow items-center justify-center rounded-lg px-2 text-sm font-bold transition-all ${engineType === 'pro' ? 'bg-[#101622] text-primary shadow-lg' : 'text-[#90a4cb] hover:text-white'}`}
                        >
                            Pro (Gemini AI)
                        </button>
                    </div>
                </div>

                {/* Real-time Metrics Cards */}
                <div className="flex flex-wrap gap-4 px-4 pb-8">
                    {/* Latency Card */}
                    <div className="flex min-w-[158px] flex-1 flex-col gap-3 rounded-xl p-5 border border-[#314368] bg-[#18181b]/50">
                        <div className="flex items-center justify-between">
                            <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Latency</p>
                            <span className="material-symbols-outlined text-primary text-xl">speed</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <p className="text-white tracking-tight text-3xl font-bold">{engineType === 'standard' ? '45ms' : '15ms'}</p>
                            <p className="text-emerald-500 text-sm font-bold leading-normal">{engineType === 'standard' ? '-12%' : '-40%'}</p>
                        </div>
                        <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                            <div className="bg-primary h-full transition-all duration-500" style={{ width: engineType === 'standard' ? '35%' : '85%' }}></div>
                        </div>
                    </div>
                    {/* Cost Card */}
                    <div className="flex min-w-[158px] flex-1 flex-col gap-3 rounded-xl p-5 border border-[#314368] bg-[#18181b]/50">
                        <div className="flex items-center justify-between">
                            <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Cost / 1k</p>
                            <span className="material-symbols-outlined text-primary text-xl">token</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <p className="text-white tracking-tight text-3xl font-bold">{engineType === 'standard' ? '$0.00' : '$0.02'}</p>
                            <p className="text-slate-400 text-sm font-medium leading-normal">0%</p>
                        </div>
                        <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                            <div className="bg-primary h-full transition-all duration-500" style={{ width: engineType === 'standard' ? '2%' : '45%' }}></div>
                        </div>
                    </div>
                </div>

                {/* Status & Details Section */}
                <div className="px-4 space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-slate-800/50 border border-slate-800 cursor-pointer hover:bg-slate-800/80 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary">verified</span>
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm">System Status</p>
                                <p className="text-emerald-500 text-xs font-medium">Engine Ready & Optimal</p>
                            </div>
                        </div>
                        <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                    </div>

                    {/* Log Terminal */}
                    <div className="p-4 rounded-xl border border-dashed border-slate-700 bg-black/40 font-mono">
                        <p className="text-slate-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-2">Live Logs</p>
                        <div className="space-y-1">
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                <span className="text-primary">[14:02:11]</span>
                                <span>{engineType === 'standard' ? 'Standard engine heartbeat: OK' : 'Gemini Pro API Handshake: ACKB'}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                <span className="text-primary">[14:02:12]</span>
                                <span>Connection to {engineType === 'standard' ? 'SRDGINTEL-LOCAL-01' : 'GOOGLE-VERTEX-AI'} stable</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footnote */}
                <div className="px-4 pt-8">
                    <p className="text-slate-500 text-[10px] text-center leading-relaxed italic">
                        Switching to Pro (Gemini AI) may incur cloud usage fees based on your current tier.
                        OSS processing is performed locally on SRDGINTEL clusters.
                    </p>
                </div>
            </main>

            {/* Fixed Action Button */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#101622] via-[#101622]/95 to-transparent">
                <button className="w-full bg-primary hover:bg-primary/90 text-black font-bold py-4 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-primary/25">
                    <span className="material-symbols-outlined text-xl">bolt</span>
                    Apply Configuration
                </button>
            </div>
        </div>
    );
}
