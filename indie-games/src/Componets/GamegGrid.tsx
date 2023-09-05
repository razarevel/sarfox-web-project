import { GameQuery } from "../App";
import useGame from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonLoading from "./SkeletionLoading";
interface Props {
  gameQuery:GameQuery;
}
export default function GameGrid({gameQuery}:Props) {
  const { data, error,loading } = useGame(gameQuery);
  const skeletons =[1,2,3,4,5,6,7,8,9,10,11,12];
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mx-4 md:mx-0 md:mr-4 lg:mr-8">
        {error && <p className="text-3xl text-red-500">{error}</p>}
        {loading && skeletons.map(item=> <SkeletonLoading key={item}/>)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
}
