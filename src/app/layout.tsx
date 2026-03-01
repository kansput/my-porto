import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Toaster } from 'sonner';
import "@/styles/globals.css";
import CustomCursor from "@/components/common/CustomCursor";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Kanda Putra | Software Engineer & Cloud Specialist",
  description: "Kanda Putra, a Freelance Software Engineer & Cloud Specialist, builds high-performance web systems and scalable cloud solutions with a unique NeoBrutalist aesthetic and expert coding.",
  keywords: [
    "Kanda Putra", "Freelance", "Web Coding", "Web Developer",
    "Software Engineer", "Cloud Engineer", "Cloud Specialist",
    "Fullstack Engineer", "Jakarta", "Indonesia"
  ],
  authors: [{ name: "Kanda Putra" }],
  creator: "Kanda Putra",
  metadataBase: new URL("https://www.kandaputra.my.id"),
  alternates: {
    canonical: "https://www.kandaputra.my.id",
  },
  openGraph: {
    title: "Kanda Putra | Software Engineer & Cloud Specialist",
    // Deskripsi diperpanjang agar mencapai 150+ karakter (Optimal untuk SEO) [cite: 2026-03-01]
    description: "Kanda Putra is a Freelance Software Engineer & Cloud Specialist building high-performance web systems and scalable cloud solutions with a refined NeoBrutalist aesthetic.",
    url: "https://www.kandaputra.my.id",
    siteName: "Kanda Putra Portfolio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanda Putra | Software Engineer",
    description: "Freelance Software Engineer & Cloud Specialist.",
    // Hapus creator twitter jika tidak ada
  },
  verification: {
    // PAKAI KODE BARU INI [cite: 2026-03-01]
    google: "7rdFqC9-x2SIGjB83mHAPNoiE1CgA_7PSTuStqVze18",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kanda Putra",
    "url": "https://www.kandaputra.my.id",
    "jobTitle": "Software Engineer & Cloud Specialist",
    "sameAs": [
      "https://github.com/kansput",
      "https://www.linkedin.com/in/kanda-putra-hibatullah-96a032241/",
      
    ],
    "knowsAbout": [
      "Software Engineering",
      "Cloud Computing",
      "Fullstack Development",
      "Web Coding"
    ]
  };

  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-neo-white text-neo-black`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CustomCursor />
        <Navbar />
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              borderRadius: '0px',
              border: '4px solid black',
              boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
              fontFamily: 'monospace',
              fontWeight: 'bold'
            },
          }}
        />
        <Footer />
      </body>
    </html>
  );
}