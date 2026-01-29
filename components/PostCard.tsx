import React from 'react';

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    url: string;
    readTime?: string;
    imageUrl?: string;
    category?: string;
    isNew?: boolean;
}

interface PostCardProps {
    post: BlogPost;
}

export default function PostCard({ post }: PostCardProps) {
    return (
        <a href={post.url} target="_blank" rel="noopener noreferrer" className="block">
            <div className="flex gap-4 px-4 py-5 justify-between border-b border-gray-100 dark:border-gray-800/50 active:bg-gray-50 dark:active:bg-[#182234]/50 transition-colors">
                <div className="flex items-start gap-4 flex-1">
                    <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl size-[80px] shrink-0 border border-gray-200 dark:border-gray-700/50"
                        style={{ backgroundImage: post.imageUrl ? `url("${post.imageUrl}")` : undefined }}
                    />
                    <div className="flex flex-col justify-center gap-1">
                        <div className="flex items-center gap-2">
                            {post.isNew && (
                                <span className="text-[10px] px-2 py-0.5 bg-green-500/10 text-green-500 rounded font-bold">NEW</span>
                            )}
                            <p className="text-[#256af4] text-[10px] font-bold uppercase tracking-wider">{post.category || 'Update'}</p>
                        </div>
                        <p className="text-gray-900 dark:text-white text-base font-semibold leading-snug line-clamp-2">
                            {post.title}
                        </p>
                        <div className="flex items-center gap-3">
                            <p className="text-gray-500 dark:text-[#90a4cb] text-xs font-normal whitespace-nowrap">
                                {post.isNew ? 'AI-Verified' : 'Staff Pick'} • {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                            </p>
                            <span className="size-1 rounded-full bg-gray-400 dark:bg-gray-600"></span>
                            <p className="text-gray-500 dark:text-[#90a4cb] text-xs font-normal whitespace-nowrap">
                                {post.readTime || '5m read'}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="shrink-0 self-center">
                    <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                </div>
            </div>
        </a>
    );
}
