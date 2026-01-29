import type { Metadata } from "next";
// import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"; // Added Space_Grotesk
import "./globals.css";

// Mock fonts for offline build support
const geistSans = { variable: "font-sans-serif" };
const geistMono = { variable: "font-mono" };
const spaceGrotesk = { variable: "font-display" };

/*
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
    variable: "--font-display", // Matches globals.css
    subsets: ["latin"],
});
*/

export const metadata: Metadata = {
    title: "SRDG Intel Blog Feed",
    description: "Latest updates and intelligence from SRDG.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
            >
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block" rel="stylesheet" />
                {children}
            </body>
        </html>
    );
}
