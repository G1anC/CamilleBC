import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Helvetica = localFont({
    src: "./fonts/Helvetica.ttf", // Corrected file extension
    variable: "--font-helvetica",
});

const PPEditorialUltraThinItalic = localFont({
    src: "./fonts/ppuli.otf",
    variable: "--font-ppuli",
})

const DxSitrus = localFont({
    src: "./fonts/DxSitrus-Expanded.otf",
    variable: "--font-dxsitrus",
})

const DxSitrusItalic = localFont({
    src: "./fonts/DxSitrus-ExpandedItalic.otf",
    variable: "--font-dxsitrusi",
})

export const metadata: Metadata = {
  title: "Camille Bonnet Crevel",
  description: "Created by Devign Inc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${PPEditorialUltraThinItalic.variable} ${DxSitrus.variable} ${DxSitrusItalic.variable} ${Helvetica.variable} ${Helvetica.className} text-base antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
