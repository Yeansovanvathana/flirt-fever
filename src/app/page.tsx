import LoadingPage from "./component/LoadingPage";
import FlirtCard from "./component/Layout/Home/FlirtCard";
import Navbar from "./component/Layout/Home/Navbar";
import Menu from "./component/Layout/Home/Menu";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div>
        <Navbar />
        {/* <FlirtCard /> */}
        <Menu />
      </div>
    </main>
  );
}
