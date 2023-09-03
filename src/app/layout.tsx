import "./globals.css";
import type { Metadata } from "next";
import RecoidContextProvider from "./recoilContextProvider";

export const metadata: Metadata = {
  title: "Flirt Fever",
  description: "dating application",
  icons: "/logo/FlirtFeverIconPri.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RecoidContextProvider>{children}</RecoidContextProvider>
      </body>
    </html>
  );
}
