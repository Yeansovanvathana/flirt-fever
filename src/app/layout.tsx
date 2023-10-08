import "./globals.css";
import type { Metadata } from "next";
import RecoidContextProvider from "../utils/context/recoilContextProvider";
import { AuthProvider } from "@/service/auth/auth";
import MainLayout from "./component/MainLayout";
import SocketProvider from "@/utils/context/SocketContext";

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
            <SocketProvider>
              <MainLayout>{children}</MainLayout>
            </SocketProvider>
          </AuthProvider>
        </RecoidContextProvider>
      </body>
    </html>
  );
}
