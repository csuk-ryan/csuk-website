import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "CSUK - C-Section Education & Support | #1 C-Section Website",
  description: "Feel confident, calm & informed about your C-section birth & recovery. Expert-led courses and community support for cesarean births. The #1 C-section education website globally.",
  keywords: "c-section, cesarean birth, c-section recovery, birth education, pregnancy, childbirth, c-section prep",
  authors: [{ name: "C-Section UK" }],
  openGraph: {
    title: "CSUK - C-Section Education & Support",
    description: "Feel confident, calm & informed about your C-section birth & recovery",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSUK - C-Section Education & Support",
    description: "Feel confident, calm & informed about your C-section birth & recovery",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
