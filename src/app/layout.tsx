import type { Metadata } from "next";
import type { RootLayoutProps } from "./types";

export const metadata: Metadata = {
    title: "Unity Real-Time Development Platform | 3D, 2D, VR & AR Engine",
    description:
        "Create and grow real-time 3D games, apps, and experiences for entertainment, film, automotive, architecture, and more. Get started with Unity today.",
    icons: {
        icon: "/favicon.svg",
    },
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
