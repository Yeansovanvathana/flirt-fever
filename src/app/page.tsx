import HomeLayout from "./component/Layout/Home/HomeLayout";
import LoadingPage from "./component/LoadingPage";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div>
        {/* <LoadingPage /> */}
        <HomeLayout />
      </div>
      {/* <div className="flex justify-center items-center w-screen h-screen">
      <div className="mt-20 flex justify-center items-center bg-green-400">
        {People.map((character, index) => (
          <TinderCard
            preventSwipe={["up", "down"]}
            key={character.id}
            className="absolute"
          >
            <div
              style={{ backgroundImage: `url(${character.img})` }}
              className="relative w-64 p-2 max-w-sm h-96 rounded-xl shadow-lg bg-cover bg-center"
            >
              <h3 className="absolute text-white font-medium bottom-3">
                {character.name}
              </h3>
            </div>
          </TinderCard>
        ))}
      </div>  */}
    </main>
  );
}
