'use client';

import Link from 'next/link';
import React, { useState } from 'react';

export default function SettingsPage() {
    const [apiKey, setApiKey] = useState('sk-srdg-••••••••••••••••');

    const generateKey = () => {
        setApiKey('sk-srdg-' + Math.random().toString(36).substr(2, 16));
    };

    return (
        <div className="flex min-h-screen w-full flex-col max-w-2xl mx-auto bg-[#0B0E14] text-white font-display overflow-x-hidden">
            {/* TopAppBar */}
            <div className="sticky top-0 z-50 flex items-center bg-[#0B0E14]/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-white/5">
                <Link href="/dashboard" className="text-white flex size-12 shrink-0 items-center justify-start hover:bg-white/5 rounded-full transition-colors">
                    <span className="material-symbols-outlined">arrow_back_ios</span>
                </Link>
                <h2 className="text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">Account & API Settings</h2>
                <div className="flex w-12 items-center justify-end">
                    <button className="flex cursor-pointer items-center justify-center rounded-lg h-12 bg-transparent text-white p-0 hover:text-primary">
                        <span className="material-symbols-outlined">settings</span>
                    </button>
                </div>
            </div>

            {/* ProfileHeader */}
            <div className="flex p-6 justify-center">
                <div className="flex w-full flex-col gap-4 items-center">
                    <div className="flex gap-4 flex-col items-center">
                        <div className="relative">
                            <div className="size-24 rounded-full border-2 border-primary bg-[#1a212f] flex items-center justify-center text-primary text-4xl font-bold">
                                AC
                            </div>
                            <div className="absolute bottom-1 right-1 bg-green-500 h-4 w-4 rounded-full border-2 border-[#0B0E14]"></div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-white text-2xl font-bold leading-tight tracking-tight text-center">Alex Chen</p>
                            <p className="text-primary text-sm font-semibold tracking-wider uppercase mt-1">Pro Developer Plan</p>
                            <p className="text-gray-400 text-sm font-normal leading-normal text-center">Member since Oct 2023</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Developer Settings */}
            <div className="px-4 pb-2 pt-4">
                <h3 className="text-white text-xs font-bold leading-tight tracking-[0.1em] uppercase opacity-60">Developer Settings</h3>
            </div>

            {/* API Key Field */}
            <div className="flex flex-col gap-4 px-4 py-3">
                <label className="flex flex-col w-full">
                    <p className="text-white text-sm font-medium leading-normal pb-2">Primary API Key</p>
                    <div className="flex w-full items-stretch rounded-lg shadow-xs">
                        <input
                            className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg text-white focus:outline-hidden focus:ring-0 border border-white/10 bg-[#121216] h-14 placeholder:text-gray-500 p-[15px] border-r-0 text-base font-mono tracking-widest"
                            readOnly
                            type="text"
                            value={apiKey}
                        />
                        <button
                            onClick={() => navigator.clipboard.writeText(apiKey)}
                            className="text-gray-400 flex border border-white/10 bg-[#121216] items-center justify-center px-4 rounded-r-lg border-l-0 cursor-pointer hover:text-primary hover:bg-white/5 transition-all"
                            title="Copy Key"
                        >
                            <span className="material-symbols-outlined">content_copy</span>
                        </button>
                    </div>
                </label>
            </div>

            {/* Generate Key Button */}
            <div className="flex px-4 py-3">
                <button
                    onClick={generateKey}
                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 flex-1 bg-primary hover:bg-primary/90 text-black text-sm font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform"
                >
                    <span className="material-symbols-outlined mr-2 text-[20px]">refresh</span>
                    <span className="truncate uppercase tracking-wider">Generate New API Key</span>
                </button>
            </div>

            {/* Integration Status Section */}
            <div className="px-4 pb-2 pt-8">
                <h3 className="text-white text-xs font-bold leading-tight tracking-[0.1em] uppercase opacity-60">System Integrations</h3>
            </div>

            {/* Status Cards */}
            <div className="px-4 py-2 space-y-3">
                {/* Firebase Status */}
                <div className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-[#121216]">
                    <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                            <span className="material-symbols-outlined">database</span>
                        </div>
                        <div>
                            <p className="text-white font-semibold text-sm">Firebase Connection</p>
                            <p className="text-gray-400 text-xs">Production Environment</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-xs font-bold uppercase">Active</span>
                    </div>
                </div>

                {/* Gemini Status */}
                <div className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-[#121216]">
                    <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <span className="material-symbols-outlined">auto_awesome</span>
                        </div>
                        <div>
                            <p className="text-white font-semibold text-sm">Gemini Model</p>
                            <p className="text-gray-400 text-xs">Primary LLM Provider</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        <span className="text-xs font-bold uppercase">Gemini 1.5 Pro</span>
                    </div>
                </div>
            </div>

            {/* Additional Actions */}
            <div className="mt-auto px-4 py-8 space-y-2">
                <button className="w-full flex items-center justify-between p-4 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[20px]">description</span>
                        <span className="text-sm font-medium">View API Documentation</span>
                    </div>
                    <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                </button>
                <button className="w-full flex items-center justify-between p-4 rounded-lg text-red-500 hover:bg-red-500/10 transition-colors">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[20px]">logout</span>
                        <span className="text-sm font-bold">Sign Out</span>
                    </div>
                </button>
            </div>
            <div className="h-8"></div>
        </div>
    );
}
