import "./globals.css";
import type { Metadata } from "next";
import RecoidContextProvider from "../service/recoil/recoilContextProvider";
import { AuthProvider } from "@/service/auth/auth";
import MainLayout from "./component/MainLayout";

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
          <AuthProvider>
            <MainLayout>{children}</MainLayout>
          </AuthProvider>
        </RecoidContextProvider>
      </body>
    </html>
  );
}
