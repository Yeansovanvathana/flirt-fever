"use client";
import LoadingPage from "./component/LoadingPage";
import FlirtCard from "./component/Layout/Home/Menu/FlirtCard";
import Navbar from "./component/Layout/Home/Navbar";
import Menu from "./component/Layout/Home/Menu";
import MenuMain from "./component/Layout/Home/Menu/Tab/MenuMain";
import { useAuth } from "@/service/auth/auth";

export default function Home() {
  const { user, loading } = useAuth();
  console.log(user);
  // console.log(loading);
  return (
    <main className="flex min-h-screen max-w-screen-sm">
      <div>
        <Navbar />
        <div className="my-10">
          <MenuMain />
        </div>
        <Menu />
      </div>
    </main>
  );
}
