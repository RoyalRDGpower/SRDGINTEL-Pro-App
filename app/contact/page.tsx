import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Contact Us - SRDGINTEL',
    description: 'Let’s Build the Future together.',
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#101622] font-sans">
            {/* Top Navigation Bar */}
            <nav className="sticky top-0 z-50 bg-gray-50/80 dark:bg-[#101622]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center p-4 justify-between max-w-lg mx-auto">
                    <Link href="/" className="text-primary flex size-10 shrink-0 items-center justify-center cursor-pointer">
                        <span className="material-symbols-outlined text-xl">arrow_back_ios</span>
                    </Link>
                    <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">Contact Us</h2>
                </div>
            </nav>

            <main className="max-w-lg mx-auto pb-12">
                {/* Hero Section */}
                <header className="px-4 pt-8 pb-4">
                    <h1 className="text-gray-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight">Let’s Build the Future</h1>
                    <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-relaxed pt-3">
                        Have a project in mind or want to learn more about our AI solutions? Drop us a line and our team will get back to you shortly.
                    </p>
                </header>

                {/* Contact Form Section */}
                <section className="px-4 space-y-2">
                    {/* Full Name */}
                    <div className="flex flex-col py-3">
                        <label className="flex flex-col flex-1">
                            <p className="text-gray-700 dark:text-gray-200 text-sm font-semibold leading-normal pb-2 px-1">Full Name</p>
                            <input className="flex w-full rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#182234] h-14 placeholder:text-gray-400 dark:placeholder:text-[#90a4cb] p-4 text-base" placeholder="Enter your name" type="text" />
                        </label>
                    </div>
                    {/* Email Address */}
                    <div className="flex flex-col py-3">
                        <label className="flex flex-col flex-1">
                            <p className="text-gray-700 dark:text-gray-200 text-sm font-semibold leading-normal pb-2 px-1">Email Address</p>
                            <input className="flex w-full rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#182234] h-14 placeholder:text-gray-400 dark:placeholder:text-[#90a4cb] p-4 text-base" placeholder="example@email.com" type="email" />
                        </label>
                    </div>
                    {/* Project Description */}
                    <div className="flex flex-col py-3">
                        <label className="flex flex-col flex-1">
                            <p className="text-gray-700 dark:text-gray-200 text-sm font-semibold leading-normal pb-2 px-1">Project Description</p>
                            <textarea className="flex w-full min-h-[120px] rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#182234] placeholder:text-gray-400 dark:placeholder:text-[#90a4cb] p-4 text-base" placeholder="Tell us about your project or inquiry..."></textarea>
                        </label>
                    </div>
                    {/* Submit Button */}
                    <div className="py-4">
                        <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                            <span>Send Message</span>
                            <span className="material-symbols-outlined text-xl">send</span>
                        </button>
                    </div>
                </section>

                {/* Sidebar Style Direct Connect */}
                <section className="mt-8 px-4 space-y-6">
                    <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
                        <h3 className="text-gray-900 dark:text-white text-xl font-bold mb-4">Direct Connect</h3>
                        <div className="grid gap-4">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                                    <span className="material-symbols-outlined text-xl">mail</span>
                                </div>
                                <div>
                                    <p className="text-gray-900 dark:text-white font-semibold">General Inquiries</p>
                                    <a className="text-primary text-sm hover:underline" href="mailto:hello@srdgintel.com">hello@srdgintel.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
