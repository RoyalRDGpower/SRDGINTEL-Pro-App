export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    url: string;
    readTime?: string;
    imageUrl?: string;
    category?: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
    const RSS_URL = "https://elitehustlevaultcentral.blogspot.com/feeds/posts/default?alt=rss";

    try {
        const res = await fetch(RSS_URL, { cache: 'no-store' });
        if (!res.ok) {
            throw new Error("Failed to fetch RSS feed");
        }
        const xml = await res.text();

        const posts: BlogPost[] = [];

        // Simple regex parser for Blogger RSS
        // Note: This is a basic parser. For production with complex feeds, use 'fast-xml-parser' or 'rss-parser'.
        const itemRegex = /<item>(.*?)<\/item>/gs;
        let match;

        while ((match = itemRegex.exec(xml)) !== null) {
            const itemContent = match[1];

            const titleMatch = itemContent.match(/<title>(.*?)<\/title>/);
            const title = titleMatch ? titleMatch[1].replace(/<!\[CDATA\[|\]\]>/g, "") : "No Title";

            const linkMatch = itemContent.match(/<link>(.*?)<\/link>/);
            const url = linkMatch ? linkMatch[1] : "#";

            const pubDateMatch = itemContent.match(/<pubDate>(.*?)<\/pubDate>/);
            const dateStr = pubDateMatch ? pubDateMatch[1] : new Date().toISOString();
            const date = new Date(dateStr).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            });

            const descMatch = itemContent.match(/<description>(.*?)<\/description>/s);
            let excerpt = descMatch ? descMatch[1] : "";

            // Clean HTML tags from excerpt
            excerpt = excerpt.replace(/<!\[CDATA\[|\]\]>/g, ""); // Remove CDATA wrappers
            excerpt = excerpt.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, ""); // Remove style tags and content
            excerpt = excerpt.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, ""); // Remove script tags and content
            excerpt = excerpt.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&nbsp;/g, " "); // decode entities
            excerpt = excerpt.replace(/<[^>]*>?/gm, ""); // strip remaining tags
            excerpt = excerpt.replace(/\s+/g, " ").trim(); // collapse whitespace
            excerpt = excerpt.substring(0, 200) + (excerpt.length > 200 ? "..." : "");

            // detailed regex to find the first image in content
            const imgMatch = itemContent.match(/<img[^>]+src="([^">]+)"/);
            const imageUrl = imgMatch ? imgMatch[1] : undefined;

            posts.push({
                id: url, // use URL as ID
                title,
                excerpt,
                date,
                url,
                readTime: "5 min read", // Placeholder
                imageUrl,
                category: "Tech Tips" // Placeholder category
            });
        }

        return posts;
    } catch (error) {
        console.error("Error fetching blog posts:", error);
        return [];
    }
}
