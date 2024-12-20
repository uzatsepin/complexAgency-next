import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://www.the-complex.agency/"),
    title: "Complex Agency – Розробка сайтів і додатків для бізнесу",
    description: "Ми – агентство цифрових рішень під ключ: від дизайну до розробки вебсайту. Виконаємо твої побажання у веб-розробці.",
    keywords: ['website', 'landing', 'web development', 'design', 'digital solutions', 'business', 'javascript', 'seo', 'vue', 'react', 'html', 'css', 'next'],
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
        index: true,
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
            <body className={inter.className}>{children}</body>
        </html>
    );
}
