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
  title: "Portofolio | Fullstack Engineer",
  description: "High-performance web experiences with NeoBrutalist aesthetics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-neo-white text-neo-black`}>
        <CustomCursor />
        <Navbar />
        {children}
        <Toaster
          position="top-center" // Diubah ke tengah atas
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