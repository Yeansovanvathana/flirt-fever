import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flirt Fever",
  description: "dating application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/FlirtFeverIconPri.png" sizes="any" />
      <body>{children}</body>
    </html>
  );
}
