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
        className={`${PPEditorialUltraThinItalic.variable} ${Helvetica.variable} ${Helvetica.className} text-base antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
