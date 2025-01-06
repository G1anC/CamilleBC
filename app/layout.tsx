import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Helvetica = localFont({
    src: "./fonts/Helvetica.otf", // Corrected file extension
    variable: "--helvetica",
});

const LeMurmure = localFont({
    src: "./fonts/LeMurmure.otf",
    variable: "--murmure",
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
        className={`${LeMurmure.variable} ${Helvetica.variable} ${Helvetica.className} text-base antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
