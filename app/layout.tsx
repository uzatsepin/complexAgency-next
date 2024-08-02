import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CSPostHogProvider } from "@/app/providers";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://complex-agency-next.vercel.app"), // Установите ваш домен здесь
    title: "Complex Agency – комплексні рішення для твого бізнесу",
    description: "Ми - агенство цифрових рішень під ключ, від дизайну до розробки, ми виконаємо твое побажання.",
    icons: {
        icon: "/favicon.png"
    },
    openGraph: {
        title: "Complex Agency – комплексні рішення для твого бізнесу",
        description: "Ми - агенство цифрових рішень під ключ, від дизайну до розробки, ми виконаємо твое побажання.",
        siteName: "Complex Agency – комплексні рішення для твого бізнесу",
        images: ["./cover.png"],
        locale: "ua",
        type: "website"
    },
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ua">
            <head>
                <Script
                    async src="https://www.googletagmanager.com/gtag/js?id=G-P90MTDEBYS"></Script>
                <Script id="google-analytics">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-P90MTDEBYS');
                    `}
                </Script>
            </head>
            <CSPostHogProvider>
                <body className={inter.className}>{children}</body>
            </CSPostHogProvider>
        </html>
    );
}
