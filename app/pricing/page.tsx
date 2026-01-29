'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function PricingPage() {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

    return (
        <div className="min-h-screen bg-[#080808] text-white font-display">
            {/* Header */}
            <div className="sticky top-0 z-50 bg-[#080808]/80 backdrop-blur-md border-b border-white/5">
                <div className="flex items-center p-4 justify-between max-w-4xl mx-auto">
                    <Link href="/" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined text-white text-lg">arrow_back_ios_new</span>
                    </Link>
                    <div className="flex flex-col items-center">
                        <h2 className="text-white text-lg font-bold leading-tight tracking-tight">SRDGINTEL</h2>
                        <span className="text-[10px] text-primary font-bold uppercase tracking-widest">AI Content Studio</span>
                    </div>
                    <div className="flex w-10 items-center justify-end">
                        <button className="flex items-center justify-center rounded-full size-10 bg-white/5 border border-white/10 text-white hover:bg-white/10">
                            <span className="material-symbols-outlined text-white">more_horiz</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="px-6 pt-10 pb-2 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white mb-4">Services & Pricing</h1>
                <p className="text-gray-400 text-sm leading-relaxed max-w-lg mx-auto">Choose the perfect AI-powered tier for your content production needs.</p>
            </div>

            {/* Billing Toggle */}
            <div className="flex px-6 py-8 max-w-md mx-auto">
                <div className="flex h-12 flex-1 items-center justify-center rounded-xl bg-white/5 p-1.5 border border-white/5">
                    <button
                        onClick={() => setBillingCycle('monthly')}
                        className={`flex cursor-pointer h-full grow items-center justify-center rounded-lg px-2 text-sm font-semibold transition-all ${billingCycle === 'monthly' ? 'bg-white/10 text-white shadow-sm' : 'text-gray-400 hover:text-white'}`}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setBillingCycle('yearly')}
                        className={`flex cursor-pointer h-full grow items-center justify-center rounded-lg px-2 text-sm font-semibold transition-all ${billingCycle === 'yearly' ? 'bg-white/10 text-white shadow-sm' : 'text-gray-400 hover:text-white'}`}
                    >
                        <div className="flex items-center gap-1.5">
                            <span>Yearly</span>
                            <span className="bg-primary/20 text-primary text-[10px] px-1.5 py-0.5 rounded-md font-bold">-20%</span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-6 px-6 py-6 max-w-6xl mx-auto">
                {/* Starter */}
                <div className="flex flex-col gap-6 rounded-2xl bg-[#18181b]/60 border border-white/10 p-6 backdrop-blur-md">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-gray-400 text-lg">bolt</span>
                            <h3 className="text-gray-400 text-sm font-bold uppercase tracking-wider">Starter</h3>
                        </div>
                        <p className="flex items-baseline gap-1 text-white">
                            <span className="text-white text-4xl font-bold tracking-tighter">${billingCycle === 'monthly' ? '29' : '24'}</span>
                            <span className="text-gray-500 text-sm font-medium">/mo</span>
                        </p>
                        <p className="text-gray-400 text-xs mt-1">Perfect for hobbyists and individual creators.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        {['5 AI Video minutes', '2 SEO Articles', 'Standard Tech Tips'].map((feature) => (
                            <div key={feature} className="text-[13px] font-medium flex gap-3 text-white items-center">
                                <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                                {feature}
                            </div>
                        ))}
                    </div>
                    <button className="mt-auto w-full py-3 px-4 bg-white/10 hover:bg-white/20 transition-colors rounded-xl text-white text-sm font-bold">
                        Get Started
                    </button>
                </div>

                {/* Professional */}
                <div className="flex flex-col gap-6 rounded-2xl bg-[#18181b]/60 border border-primary/60 p-6 backdrop-blur-md relative shadow-[0_0_20px_rgba(201,162,77,0.2)]">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full shadow-lg shadow-primary/40">
                        <span className="text-black text-[10px] font-black uppercase tracking-widest whitespace-nowrap">Most Popular</span>
                    </div>
                    <div className="flex flex-col gap-2 pt-2">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-lg">workspace_premium</span>
                            <h3 className="text-primary text-sm font-bold uppercase tracking-wider">Professional</h3>
                        </div>
                        <p className="flex items-baseline gap-1 text-white">
                            <span className="text-white text-5xl font-black tracking-tighter">${billingCycle === 'monthly' ? '99' : '79'}</span>
                            <span className="text-gray-500 text-sm font-medium">/mo</span>
                        </p>
                        <p className="text-gray-300 text-xs mt-1">Advanced tools for growing digital teams.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        {['30 AI Video minutes', '10 SEO Articles', 'Priority Tech Tips', 'Email Support'].map((feature) => (
                            <div key={feature} className="text-[13px] font-semibold flex gap-3 text-white items-center">
                                <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                                {feature}
                            </div>
                        ))}
                    </div>
                    <button className="mt-auto w-full py-4 px-4 bg-primary hover:bg-primary/90 transition-colors rounded-xl text-black font-bold shadow-lg shadow-primary/20">
                        Choose Professional
                    </button>
                </div>

                {/* Enterprise */}
                <div className="flex flex-col gap-6 rounded-2xl bg-[#18181b]/60 border border-white/10 p-6 backdrop-blur-md">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-gray-400 text-lg">corporate_fare</span>
                            <h3 className="text-gray-400 text-sm font-bold uppercase tracking-wider">Enterprise</h3>
                        </div>
                        <p className="flex items-baseline gap-1 text-white">
                            <span className="text-white text-4xl font-bold tracking-tighter">Custom</span>
                        </p>
                        <p className="text-gray-400 text-xs mt-1">Full-scale production with custom pipelines.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        {['Unlimited AI Video', 'Unlimited Articles', '24/7 Dedicated Support', 'Custom API Access'].map((feature) => (
                            <div key={feature} className="text-[13px] font-medium flex gap-3 text-white items-center">
                                <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                                {feature}
                            </div>
                        ))}
                    </div>
                    <button className="mt-auto w-full py-3 px-4 bg-white/10 hover:bg-white/20 transition-colors rounded-xl text-white text-sm font-bold">
                        Contact Sales
                    </button>
                </div>
            </div>

            {/* Footer CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#080808] via-[#080808]/95 to-transparent z-40 pointer-events-none md:hidden">
                <div className="max-w-md mx-auto pointer-events-auto">
                    <button className="w-full bg-primary hover:bg-primary/90 transition-all text-black font-bold py-4 rounded-xl shadow-xl shadow-primary/30 flex items-center justify-center gap-2">
                        <span>Unlock Professional Access</span>
                        <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                    </button>
                    <p className="text-center text-[10px] text-gray-500 mt-3 uppercase tracking-widest font-bold">Secure Stripe Checkout Enabled</p>
                </div>
            </div>
            <div className="h-32 md:hidden"></div>
        </div>
    );
}
