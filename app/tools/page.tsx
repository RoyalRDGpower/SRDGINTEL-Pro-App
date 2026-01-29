import Link from 'next/link';
import React from 'react';

export default function ToolsIndexPage() {
    return (
        <div className="min-h-screen bg-[#0B0E14] text-white font-display">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 bg-[#0B0E14]/80 backdrop-blur-md border-b border-white/5">
                <div className="flex items-center p-4 justify-between max-w-5xl mx-auto">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="flex items-center justify-center size-10 rounded-full hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined text-white">arrow_back</span>
                        </Link>
                        <h1 className="text-white text-lg font-bold leading-tight tracking-tight">AI Suite</h1>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-10">
                <div className="mb-10 text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-4">SRDGINTEL Workstation</span>
                    <h2 className="text-4xl font-bold mb-4">Select Your Tool</h2>
                    <p className="text-gray-400 max-w-xl mx-auto">Access our suite of advanced AI generation and configuration tools. Optimized for high-performance creative workflows.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Tool Card: Video Wizard */}
                    <Link href="/tools/video-wizard" className="group relative overflow-hidden bg-[#121216] border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-2xl">videocam</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Video Wizard</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">Create cinematic AI videos with our multi-step generation assistant. Supports 4K rendering.</p>
                        <div className="flex items-center text-xs font-bold text-white uppercase tracking-wider">
                            <span>Launch Tool</span>
                            <span className="material-symbols-outlined text-sm ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                    </Link>

                    {/* Tool Card: Engine Selector */}
                    <Link href="/tools/engine-selector" className="group relative overflow-hidden bg-[#121216] border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
                        <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-2xl">settings_applications</span>
                        </div>
                        <div className="absolute top-6 right-6 flex gap-2">
                            <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-500 transition-colors">Engine Config</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">Configure your underlying AI models. Switch between Local OSS and Gemini Pro.</p>
                        <div className="flex items-center text-xs font-bold text-white uppercase tracking-wider">
                            <span>Configure</span>
                            <span className="material-symbols-outlined text-sm ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                    </Link>

                    {/* Tool Card: Prompt Architect (Coming Soon) */}
                    <div className="group relative overflow-hidden bg-[#121216]/50 border border-white/5 rounded-2xl p-6 opacity-75">
                        <div className="absolute top-4 right-4 px-2 py-1 bg-white/10 rounded text-[10px] font-bold text-white/50 uppercase">Coming Soon</div>
                        <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500/50 mb-6">
                            <span className="material-symbols-outlined text-2xl">architecture</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-500 mb-2">Prompt Architect</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">Advanced prompt engineering environment for Gemini Ultra.</p>
                        <div className="flex items-center text-xs font-bold text-gray-600 uppercase tracking-wider cursor-not-allowed">
                            <span>Locked</span>
                            <span className="material-symbols-outlined text-sm ml-2">lock</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
