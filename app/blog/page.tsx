import BlogFeed from "@/components/BlogFeed";
import { getBlogPosts } from "@/lib/rss";
import Link from "next/link";

export const revalidate = 0; // Disable cache for debugging

export default async function BlogPage() {
    const posts = await getBlogPosts();

    return (
        <div className="min-h-screen bg-[#f5f6f8] dark:bg-[#101622] font-display text-white pb-24">
            {/* Top Navigation Bar */}
            <div className="sticky top-0 z-50 bg-[#f5f6f8]/80 dark:bg-[#101622]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center px-4 py-4 justify-between">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center size-8 bg-[#256af4] rounded-lg text-white">
                            <span className="material-symbols-outlined !text-[20px]">bolt</span>
                        </div>
                        <h2 className="text-gray-900 dark:text-white text-xl font-bold leading-tight tracking-tight">SRDGINTEL</h2>
                    </div>
                    <div className="flex gap-4">
                        <span className="material-symbols-outlined text-gray-500 hover:text-[#256af4] cursor-pointer transition-colors">search</span>
                        <span className="material-symbols-outlined text-gray-500 hover:text-[#256af4] cursor-pointer transition-colors">account_circle</span>
                    </div>
                </div>
            </div>

            {/* Category Scroller */}
            <div className="flex gap-3 px-4 py-4 overflow-x-auto no-scrollbar scroll-smooth">
                <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#256af4] px-5 shadow-lg shadow-[#256af4]/20">
                    <p className="text-white text-sm font-semibold leading-normal">All Feed</p>
                </div>
                <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-gray-100 dark:bg-[#182234] border border-gray-200 dark:border-gray-700/50 px-5">
                    <p className="text-gray-600 dark:text-[#90a4cb] text-sm font-medium leading-normal">AI Trends</p>
                </div>
                <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-gray-100 dark:bg-[#182234] border border-gray-200 dark:border-gray-700/50 px-5">
                    <p className="text-gray-600 dark:text-[#90a4cb] text-sm font-medium leading-normal">SEO Optimization</p>
                </div>
                <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-gray-100 dark:bg-[#182234] border border-gray-200 dark:border-gray-700/50 px-5">
                    <p className="text-gray-600 dark:text-[#90a4cb] text-sm font-medium leading-normal">Tech Tips</p>
                </div>
                <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-gray-100 dark:bg-[#182234] border border-gray-200 dark:border-gray-700/50 px-5">
                    <p className="text-gray-600 dark:text-[#90a4cb] text-sm font-medium leading-normal">Video Ops</p>
                </div>
            </div>

            <main className="">
                {/* Featured Hero Card */}
                <div className="px-4 py-2 @container">
                    <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#256af4]">campaign</span>
                        Trending Now
                    </h3>
                    <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start overflow-hidden shadow-2xl bg-white dark:bg-[#182234] border border-gray-100 dark:border-gray-800">
                        <div className="w-full relative bg-center bg-no-repeat aspect-video bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCcebBNVaYPz9gxZqv5HbeFRB5cfJF4ieuz0_htWSjd-BdiG9t-AEhmAE_1YamJKW4Oy_D3Bh4NqrdnGU8UD_JigRrHayFd-urAe2AFucFfa-2xT2PAwqe5rYLFjDlLkQcdVua7rmJFhFHwOVfnaJ4mOcRkCfWPP58N1-6E10aChRUiVNmoGyAM5VH-f31jgNjTchfyR0zNJMDfIk-gIv8rRoLkA-jMLEQFGuNlkBExJftV9VzJr6lSJuvhksz3oh4nw-5nyX4JEOs")' }}>
                            <div className="absolute top-4 left-4 bg-[#256af4] px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                                <span className="material-symbols-outlined !text-[14px] text-white">verified</span>
                                <span className="text-white text-[10px] font-bold tracking-wider uppercase">AI-Verified</span>
                            </div>
                        </div>
                        <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 p-5">
                            <div className="flex justify-between items-center mb-1">
                                <p className="text-[#256af4] text-xs font-bold leading-normal uppercase tracking-widest">Featured Report</p>
                                <p className="text-gray-400 dark:text-[#90a4cb] text-[10px] font-medium">MAY 2024</p>
                            </div>
                            <p className="text-gray-900 dark:text-white text-2xl font-bold leading-tight tracking-tight mb-2">The Future of Generative AI in 2024: A Global Shift</p>
                            <p className="text-gray-600 dark:text-[#90a4cb] text-sm font-normal leading-relaxed mb-4">Exploring the next frontier of LLMs, creative automation, and the impact on digital marketing workflows.</p>
                            <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-700/50 pt-4 mt-2">
                                <div className="flex flex-col">
                                    <p className="text-gray-500 dark:text-[#90a4cb] text-xs font-medium">8 min read • Editorial Team</p>
                                </div>
                                <button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-9 px-4 bg-[#256af4] text-white text-sm font-semibold transition-all active:scale-95 shadow-lg shadow-[#256af4]/20">
                                    Read Article
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Latest List */}
                <div className="mt-6">
                    <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight px-4 mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#256af4]">schedule</span>
                        Latest Updates
                    </h3>
                    <BlogFeed posts={posts} />
                </div>
            </main>

            {/* Navigation Tab Bar (iOS style) */}
            {/* Navigation Tab Bar (iOS style) */}
            <div className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-[#101622]/90 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 pb-8 pt-3 px-8 flex justify-between items-center z-50">
                <Link href="/" className="flex flex-col items-center gap-1 text-[#256af4] active:scale-95 transition-transform duration-200">
                    <span className="material-symbols-outlined !text-[28px]">home</span>
                    <span className="text-[10px] font-bold">Home</span>
                </Link>
                <Link href="/studio" className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#256af4] transition-colors cursor-pointer active:scale-95 duration-200">
                    <span className="material-symbols-outlined !text-[28px]">explore</span>
                    <span className="text-[10px] font-medium">Explore</span>
                </Link>
                <Link href="/dashboard" className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#256af4] transition-colors cursor-pointer active:scale-95 duration-200">
                    <span className="material-symbols-outlined !text-[28px]">bookmark</span>
                    <span className="text-[10px] font-medium">Saved</span>
                </Link>
                <Link href="/settings" className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#256af4] transition-colors cursor-pointer active:scale-95 duration-200">
                    <span className="material-symbols-outlined !text-[28px]">settings</span>
                    <span className="text-[10px] font-medium">Settings</span>
                </Link>
            </div>
        </div>
    );
}
