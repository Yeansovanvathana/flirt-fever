import LoadingPage from "./component/LoadingPage";
import FlirtCard from "./component/Layout/Home/FlirtCard";
import Navbar from "./component/Layout/Home/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div>
        <Navbar />
        {/* <LoadingPage /> */}
        <FlirtCard />
      </div>
    </main>
  );
}
