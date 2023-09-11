"use client";

import { useSearchParams } from "next/navigation";
import LoadingPage from "./LoadingPage";
import { useAuth } from "@/service/auth/auth";
import Navbar from "./Layout/Home/Navbar";
import Menu from "./Layout/Home/Menu";

type Props = {
  children: React.ReactNode;
};

function MainLayout({ children }: Props) {
  const searchParams = useSearchParams();

  const isAuthPage = searchParams.get("auth");
  console.log(isAuthPage);

  const { loading } = useAuth();

  return (
    <>
      {!loading ? (
        <div className="flex flex-col min-h-screen">
          {!isAuthPage ? <Navbar /> : null}
          <div className="flex-grow">
            <div className="h-full">{children}</div>
          </div>
          {!isAuthPage && <Menu />}
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

export default MainLayout;
