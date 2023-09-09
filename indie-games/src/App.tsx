import GameGrid from "./Componets/GamegGrid";
import GenreList from "./Componets/GenreList";
import Navbar from "./Componets/Navbar";
import { PlatformSelector } from "./Componets/PlatformSelector";
import { SortSelector } from "./Componets/SortSelector";
import GameHeading from "./Componets/GameHeading";

export default function App() {
  return (
    <>
      <div className="">
        <Navbar/>
      </div>

      <div className="flex justify-center mt-6">
        <div className="w-1/4 hidden md:block">
          <GenreList />
        </div>
        <div className="w-full space-y-6 mt-6">
          <GameHeading  />
          <div className="flex items-center  space-x-2 md:space-x-6 mx-4 md:mx-0">
            <PlatformSelector/>
            <SortSelector/>
          </div>
          <GameGrid />
        </div>
      </div>
    </>
  );
}
