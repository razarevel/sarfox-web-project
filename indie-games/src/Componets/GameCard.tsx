import { Game } from "../hooks/useGames";
import getCroppImageUrl from "../services/image-url";
import PlatformIcon from "./PlatformIcon";
interface Props {
  game: Game;
}
export default function GameCard({ game }: Props) {
  return (
    <>
      <div className="flex flex-col pb-6 space-y-6 bg-slate-100 dark:bg-gray-800 rounded-lg overflow-hidden duration-150 hover:scale-105 cursor-pointer">
        {/* Card Iamge */}
        <div className="w-full">
          <img
            src={getCroppImageUrl(game.background_image)}
            alt=""
            className="w-full"
          />
        </div>
        {/* Card Body */}
        <div className="px-4 space-y-6">
           {/* Card icons */}
           <div className="flex items-center justify-between">
            <PlatformIcon
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <div className="px-2 dark:bg-gray-700 text-md rounded-md dark:text-emerald-600 font-semibold bg-slate-300">
              {game.metacritic}
            </div>
          </div>
          <h1 className="text-3xl font-medium">{game.name}</h1>
         
        </div>
      </div>
    </>
  );
}
