import { useState } from "react";
import GameGrid from "./Componets/GamegGrid";
import GenreList from "./Componets/GenreList";
import Navbar from "./Componets/Navbar";
import { Genre } from "./hooks/useGenre";
import { PlatformSelector } from "./Componets/PlatformSelector";
import { Platform } from "./hooks/useGames";
import { SortSelector } from "./Componets/SortSelector";
import GameHeading from "./Componets/GameHeading";
export interface GameQuery{
  genre:Genre | null;
  platform : Platform | null;
  sortOrder:string;
  searchText:string;
}
export default function App() {
  const [gameQuery,  setGameQuery]=useState<GameQuery>({} as GameQuery)
  
  return (
    <>
      <div className="">
        <Navbar onSearch={(searchText)=> setGameQuery({...gameQuery, searchText})} />
      </div>

      <div className="flex justify-center mt-6">
        <div className="w-1/4 hidden md:block">
          <GenreList onSelectGenre={(genre)=> setGameQuery({...gameQuery, genre})} selectedGenre={gameQuery.genre} />
        </div>
        <div className="w-full space-y-6 mt-6">
          <GameHeading gameQuery={gameQuery} />
        <div className="flex items-center  space-x-2 md:space-x-6 mx-4 md:mx-0">
        <PlatformSelector onSelectPlatform={(platform)=>setGameQuery({...gameQuery ,platform})} />
        <SortSelector SortOrder={gameQuery.sortOrder}  onSelectSortOrder={(sortOrder)=> setGameQuery({...gameQuery, sortOrder})} />
        </div>
          <GameGrid gameQuery={gameQuery}/>
        </div>
      </div>
    </>
  );
}
