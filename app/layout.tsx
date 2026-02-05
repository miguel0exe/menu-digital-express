import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { STORE_CONFIG } from "@/config/data";

export const metadata: Metadata = {
  title: `${STORE_CONFIG.name} | Menú Digital`,
  description: `Ordena los mejores platillos de ${STORE_CONFIG.name} directamente por WhatsApp. Rápido, fácil y sin apps.`,
  keywords: ["menú digital", "pedidos por whatsapp", "restaurante", "carta online"],
  authors: [{ name: "Tu Nombre o Marca" }],
  icons: {
    icon: '/icon.svg',
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  openGraph: {
    title: `${STORE_CONFIG.name} | Menú Digital`,
    description: "Haz tu pedido en segundos y recíbelo en casa.",
    url: "TODO: Reemplaza con la URL",
    siteName: STORE_CONFIG.name,
    images: [
      {
        url: "TODO: Reemplaza con la URL/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
