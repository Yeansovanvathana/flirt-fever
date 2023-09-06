import "./globals.css";
import type { Metadata } from "next";
import RecoidContextProvider from "../service/recoil/recoilContextProvider";
import { AuthProvider } from "@/service/auth/auth";

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
        <RecoidContextProvider>
          <AuthProvider>{children}</AuthProvider>
        </RecoidContextProvider>
      </body>
    </html>
  );
}
