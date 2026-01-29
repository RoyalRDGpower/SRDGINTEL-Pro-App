'use client';

import Link from 'next/link';
import React, { useState } from 'react';

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-[#0B0E14] text-white font-display">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 bg-[#0B0E14]/80 backdrop-blur-md border-b border-white/5">
                <div className="flex items-center p-4 justify-between max-w-4xl mx-auto">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="flex items-center justify-center size-10 rounded-full hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined text-white">arrow_back</span>
                        </Link>
                        <div>
                            <h2 className="text-sm font-bold leading-tight tracking-tight">SRDGINTEL</h2>
                            <p className="text-xs text-gray-400">Pro Account</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* Credits Pill */}
                        <div className="flex items-center bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                            <span className="material-symbols-outlined text-primary text-sm mr-1.5" style={{ fontVariationSettings: "'FILL' 1" }}>database</span>
                            <p className="text-primary text-xs font-bold leading-none">450 Credits</p>
                        </div>
                        <Link href="/settings" className="p-2 text-gray-400 hover:text-white transition-colors">
                            <span className="material-symbols-outlined">settings</span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Sub-navigation Tabs */}
            <nav className="bg-[#0B0E14] max-w-4xl mx-auto border-b border-white/5">
                <div className="flex px-4 gap-6 overflow-x-auto no-scrollbar">
                    <button className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-white pb-[13px] pt-4 shrink-0 px-2">
                        <p className="text-sm font-bold tracking-wide">Projects</p>
                    </button>
                    <button className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-400 hover:text-white pb-[13px] pt-4 shrink-0 px-2">
                        <p className="text-sm font-bold tracking-wide">Assets</p>
                    </button>
                    <button className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-400 hover:text-white pb-[13px] pt-4 shrink-0 px-2">
                        <p className="text-sm font-bold tracking-wide">History</p>
                    </button>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto pb-32">
                {/* Active Projects Section */}
                <section className="mt-4">
                    <div className="flex items-center justify-between px-4 pb-2 pt-4">
                        <h3 className="text-white text-lg font-bold tracking-tight flex items-center gap-2">
                            Active Projects
                            <span className="inline-flex items-center justify-center bg-primary text-black text-[10px] px-1.5 py-0.5 rounded-md font-bold">2</span>
                        </h3>
                        <button className="text-primary text-sm font-medium hover:underline">View all</button>
                    </div>

                    {/* Active List Item 1 */}
                    <div className="flex items-center gap-4 bg-[#121216] px-4 min-h-[88px] py-4 justify-between border-b border-white/5 first:rounded-t-xl hover:bg-white/5 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="relative size-16 rounded-lg bg-[#2a2a35] border border-primary/30 flex items-center justify-center overflow-hidden">
                                <span className="material-symbols-outlined text-white/20 text-3xl">movie</span>
                                <div className="absolute inset-0 bg-primary/10 animate-pulse"></div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="text-white text-base font-medium leading-tight line-clamp-1">Cyberpunk_Ad_V2.mp4</p>
                                <p className="text-primary text-xs font-medium mt-1 uppercase tracking-wider">Rendering...</p>
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-col items-end gap-2">
                            <div className="flex items-center gap-3">
                                <div className="w-[72px] h-1.5 overflow-hidden rounded-full bg-[#314368]">
                                    <div className="h-full rounded-full bg-primary shadow-[0_0_15px_rgba(201,162,77,0.5)]" style={{ width: '65%' }}></div>
                                </div>
                                <p className="text-white text-sm font-bold">65%</p>
                            </div>
                            <p className="text-[10px] text-gray-500">ETA: 2m 14s</p>
                        </div>
                    </div>

                    {/* Active List Item 2 */}
                    <div className="flex items-center gap-4 bg-[#121216] px-4 min-h-[88px] py-4 justify-between border-b border-white/5 last:rounded-b-xl hover:bg-white/5 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="relative size-16 rounded-lg bg-[#2a2a35] border border-white/10 flex items-center justify-center overflow-hidden">
                                <span className="material-symbols-outlined text-white/20 text-3xl">analytics</span>
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="text-white text-base font-medium leading-tight line-clamp-1">Tech_Review_Final.mp4</p>
                                <p className="text-gray-500 text-xs font-normal mt-1">Processing assets...</p>
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-col items-end gap-2">
                            <div className="flex items-center gap-3">
                                <div className="w-[72px] h-1.5 overflow-hidden rounded-full bg-[#314368]">
                                    <div className="h-full rounded-full bg-primary/40" style={{ width: '30%' }}></div>
                                </div>
                                <p className="text-white text-sm font-bold">30%</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Recent Renders Section */}
                <section className="mt-8">
                    <div className="flex items-center justify-between px-4 pb-4 pt-4">
                        <h3 className="text-white text-lg font-bold tracking-tight">Recent Renders</h3>
                        <button className="p-1 text-gray-400 hover:text-white"><span className="material-symbols-outlined">filter_list</span></button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 px-4">
                        {/* Project Card 1 */}
                        <div className="bg-[#18181b] rounded-xl overflow-hidden border border-white/5 shadow-sm group">
                            <div className="relative aspect-video bg-[#2a2a35] flex items-center justify-center group-hover:brightness-110 transition-all">
                                <span className="material-symbols-outlined text-white/10 text-6xl">image</span>
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="bg-white/20 backdrop-blur-md rounded-full p-3 border border-white/30">
                                        <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                                    </div>
                                </div>
                                <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white font-bold">
                                    00:15 • 4K
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h4 className="text-white font-bold text-base">Neural_Aesthetics_01</h4>
                                        <p className="text-gray-500 text-xs">Generated 2 hours ago</p>
                                    </div>
                                    <button className="p-1 text-gray-400 hover:text-white"><span className="material-symbols-outlined">more_vert</span></button>
                                </div>
                                <div className="flex gap-2">
                                    <button className="flex-1 bg-primary hover:bg-primary/90 text-black py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors">
                                        <span className="material-symbols-outlined text-lg">download</span>
                                        Save
                                    </button>
                                    <button className="flex-1 bg-[#2a2a35] hover:bg-[#32323e] text-white py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 border border-white/5 transition-colors">
                                        <span className="material-symbols-outlined text-lg">share</span>
                                        Share
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Project Card 2 */}
                        <div className="bg-[#18181b] rounded-xl overflow-hidden border border-white/5 shadow-sm group">
                            <div className="relative aspect-video bg-[#2a2a35] flex items-center justify-center group-hover:brightness-110 transition-all">
                                <span className="material-symbols-outlined text-white/10 text-6xl">landscape</span>
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="bg-white/20 backdrop-blur-md rounded-full p-3 border border-white/30">
                                        <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                                    </div>
                                </div>
                                <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white font-bold">
                                    00:30 • 1080p
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h4 className="text-white font-bold text-base">Eco_Future_Concept</h4>
                                        <p className="text-gray-500 text-xs">Generated yesterday</p>
                                    </div>
                                    <button className="p-1 text-gray-400 hover:text-white"><span className="material-symbols-outlined">more_vert</span></button>
                                </div>
                                <div className="flex gap-2">
                                    <button className="flex-1 bg-primary hover:bg-primary/90 text-black py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors">
                                        <span className="material-symbols-outlined text-lg">download</span>
                                        Save
                                    </button>
                                    <button className="flex-1 bg-[#2a2a35] hover:bg-[#32323e] text-white py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 border border-white/5 transition-colors">
                                        <span className="material-symbols-outlined text-lg">share</span>
                                        Share
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Bottom Navigation Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-[#0B0E14]/90 backdrop-blur-xl border-t border-white/5 pb-2 pt-2 z-40">
                <div className="flex justify-around items-center h-16 max-w-4xl mx-auto">
                    <Link href="/dashboard" className="flex flex-col items-center gap-1 text-primary">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>grid_view</span>
                        <span className="text-[10px] font-bold">Dashboard</span>
                    </Link>
                    <Link href="/studio" className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors">
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

            {/* Fixed Action Button (FAB) */}
            <div className="fixed bottom-8 left-0 right-0 flex justify-center z-50 px-6 pointer-events-none">
                <Link href="/tools/video-wizard" className="pointer-events-auto bg-primary hover:bg-primary/90 text-black w-full max-w-sm py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-[0_0_15px_rgba(201,162,77,0.3)] hover:scale-105 transition-all active:scale-95">
                    <span className="material-symbols-outlined text-2xl">add_circle</span>
                    New AI Video
                </Link>
            </div>
        </div>
    );
}
