"use client";

import LoadingPage from "./LoadingPage";
import { useAuth } from "@/service/auth/auth";
import Navbar from "./Layout/Home/Navbar";
import Menu from "./Layout/Home/Menu";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

function MainLayout({ children }: Props) {
  const router = usePathname();
  const { loading } = useAuth();

  return (
    <>
      {!loading ? (
        <div className="flex flex-col min-h-screen">
          {!(router === "/auth") ? <Navbar /> : null}
          <div className="flex-grow">
            <div className="h-full">{children}</div>
          </div>
          {!(router === "/auth") && <Menu />}
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

export default MainLayout;
