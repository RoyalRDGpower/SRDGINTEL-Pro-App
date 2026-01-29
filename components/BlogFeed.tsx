import React from 'react';
import PostCard from './PostCard';

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

interface BlogFeedProps {
    posts: BlogPost[];
}

export default function BlogFeed({ posts }: BlogFeedProps) {
    if (!posts || posts.length === 0) {
        return (
            <p className="text-gray-500 text-center py-10">No posts found or failed to load feed.</p>
        );
    }

    return (
        <section className="w-full flex flex-col">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </section>
    );
}
