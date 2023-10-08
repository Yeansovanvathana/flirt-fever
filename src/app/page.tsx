"use client";

import MenuMain from "./component/Layout/Menu/Tab/MenuMain";
import { useAuth } from "@/service/auth/auth";
import withAuth from "@/service/api/withAuth";

const Home = () => {
  const { user, loading } = useAuth();
  console.log(user);
  // console.log(loading);
  return (
    <main>
      <MenuMain />
    </main>
  );
};

export default Home;
