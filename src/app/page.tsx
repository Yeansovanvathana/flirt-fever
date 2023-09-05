import LoadingPage from "./component/LoadingPage";
import FlirtCard from "./component/Layout/Home/Menu/FlirtCard";
import Navbar from "./component/Layout/Home/Navbar";
import Menu from "./component/Layout/Home/Menu";
import MenuMain from "./component/Layout/Home/Menu/Tab/MenuMain";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-screen-sm">
      <div>
        <Navbar />
        <MenuMain />
        <Menu />
      </div>
    </main>
  );
}
