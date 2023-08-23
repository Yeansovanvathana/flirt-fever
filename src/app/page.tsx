import HomeLayout from "./component/Layout/Home/HomeLayout";
import LoadingPage from "./component/LoadingPage";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div>
        {/* <LoadingPage /> */}
        <HomeLayout />
      </div>
    </main>
  );
}
