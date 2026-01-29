import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'About SRDGINTEL',
    description: 'Shaping the AI-Driven Future',
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#101622] text-slate-900 dark:text-white transition-colors duration-300">
            <div className="relative flex min-h-screen w-full flex-col max-w-[430px] mx-auto overflow-x-hidden border-x border-slate-200 dark:border-slate-800 shadow-2xl bg-white dark:bg-[#101622]">
                {/* TopAppBar */}
                <header className="sticky top-0 z-50 flex items-center bg-gray-50/80 dark:bg-[#101622]/80 backdrop-blur-md p-4 justify-between border-b border-slate-200 dark:border-slate-800">
                    <Link href="/" className="text-primary flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-primary/10 cursor-pointer">
                        <span className="material-symbols-outlined text-xl">arrow_back_ios_new</span>
                    </Link>
                    <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">About SRDGINTEL</h2>
                    <div className="flex w-10 items-center justify-end">
                        <button className="flex items-center justify-center rounded-full h-10 w-10 hover:bg-primary/10 transition-colors text-primary">
                            <span className="material-symbols-outlined text-xl">share</span>
                        </button>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto pb-10">
                    {/* HeaderImage */}
                    <div className="@container">
                        <div className="px-4 py-4">
                            <div
                                className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[280px] relative shadow-lg"
                                style={{
                                    backgroundImage: `linear-gradient(180deg, rgba(16, 22, 34, 0) 0%, rgba(16, 22, 34, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB-2wXSXUnzKM_rslOyE95FO_DQmKmVMs4d1-BGUlvZVWVt4KCfWc_N7TysufF2ixtgYkiJALo5YVrIBTsf-lCXYxxYqeh-AbdIy04pXzBUVVrdNOYmwAFGu2yZAZB1fcJyx-vY-E67Utk5ZNcYZ2m4MY47uBHDbs_LuF87sW8zNH60jKztVlbbdO3f5_utrMuK8u2Lfgw2yazC_QEaa2gYXj8f-3zEMLcXyvn88F0O4wt67PxB8rzsDV-g2SZY05uf-UKcZMoaxlE")`
                                }}
                            >
                                <div className="flex flex-col p-6">
                                    <span className="text-primary font-bold text-sm tracking-widest uppercase mb-1">Intelligence Redefined</span>
                                    <h1 className="text-white tracking-tight text-3xl font-bold leading-tight font-display">Shaping the AI-Driven Future</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SectionHeader: Our Mission */}
                    <section className="px-4 mt-4">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="h-1 w-6 bg-primary rounded-full"></div>
                            <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] font-display">Our Mission</h2>
                        </div>
                        {/* BodyText */}
                        <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-relaxed pb-6 border-b border-slate-200 dark:border-slate-800">
                            Empowering global users through high-tech content, advanced video generation, and cutting-edge tech tips. We bridge the gap between complex AI and practical applications to make the future accessible today.
                        </p>
                    </section>

                    {/* SectionHeader: The Team */}
                    <section className="px-4 mt-8">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-1 w-6 bg-primary rounded-full"></div>
                            <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] font-display">The Team</h2>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {/* Team Card 1 */}
                            <div className="bg-white/5 backdrop-blur-md border border-white/5 p-4 rounded-xl flex flex-col items-center text-center">
                                <div className="w-20 h-20 rounded-full border-2 border-primary/30 p-1 mb-3">
                                    <img alt="Lead Architect" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxuFr3A6xPmhhggmQFbq4cwfx_7Cp0FYoSWLaxZyy63SuJauY3OGoov6Tbu-BSWybW7JU_1Xk_XGBpUCLq-YLvtRFKXDJZOUffzXE_zNnB2guri5H4_f1AB9JHNeG-c0XochCOrHGbAU5gQE57rlm8Pw6dchtdK48pavsIfkbPuLxacR_gyz6Vewih9LBwBNLLHpMH1eovLVAabNSzl0Z8Ob6OXdeP8EuvPm-pSyY4SxkJ9JZYPPxwurEArBBDJcslZh9h1vVIRfw" />
                                </div>
                                <h4 className="font-bold text-slate-900 dark:text-white">Dr. Aris V.</h4>
                                <p className="text-xs text-primary font-medium">Lead AI Architect</p>
                            </div>
                            {/* Team Card 2 */}
                            <div className="bg-white/5 backdrop-blur-md border border-white/5 p-4 rounded-xl flex flex-col items-center text-center">
                                <div className="w-20 h-20 rounded-full border-2 border-primary/30 p-1 mb-3">
                                    <img alt="Content Strategist" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjDm0oMlwf0UeeLwsOe-I1u1kI0nUbojMLYw7qJQm3X0fZX_rXJ5IHp_NiAs2vktyRBv3sdCp84HDm3s0T3nfAgLfeV4WSrLMzNxoMAc8qjHzMoK4KUEizHsm7nRFwYTD5mLPYpIkl5nmcg2H1I5FI3FKUHaDg-lGyeJ18crjSAirrF-olCiVr20nBBl1bquwz95JPqMjGQfCruvlns4gIvOsYFrcGkzNHUUyYSVbM7n_-M9AYe_RUeINd7bQQto8YKqGyU4qJHLQ" />
                                </div>
                                <h4 className="font-bold text-slate-900 dark:text-white">Elena Ray</h4>
                                <p className="text-xs text-primary font-medium">Head of Content</p>
                            </div>
                        </div>
                    </section>

                    {/* SectionHeader: Technology Stack */}
                    <section className="px-4 mt-10">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-1 w-6 bg-primary rounded-full"></div>
                            <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] font-display">Technology Stack</h2>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {["GPT-4o", "Stable Diffusion", "Llama 3", "Python", "PyTorch", "TensorFlow", "NVIDIA H100"].map((tech) => (
                                <span key={tech} className="px-4 py-2 bg-primary/10 border border-primary/20 text-primary text-sm font-bold rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Footer Contact */}
                    <section className="mt-12 mb-8 px-4 text-center">
                        <Link href="/contact">
                            <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform">
                                Join Our Community
                            </button>
                        </Link>
                        <p className="text-[10px] text-slate-500 mt-6 tracking-widest uppercase">© 2024 SRDGINTEL SYSTEMS</p>
                    </section>
                </main>
            </div>
        </div>
    );
}
