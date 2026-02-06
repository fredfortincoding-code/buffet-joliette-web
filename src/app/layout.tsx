import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Buffet Chinois Joliette | Saveurs Authentiques",
  description: "Découvrez le meilleur buffet chinois à Joliette. Une cuisine variée, fraîche et abordable pour toute la famille. Beau, Bon, Pas Cher.",
  keywords: ["Buffet Chinois", "Joliette", "Restaurant Chinois", "Buffet à volonté", "Lanaudière"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased bg-[#f8fafc] text-[#1e293b]`}>
        {children}
      </body>
    </html>
  );
}
