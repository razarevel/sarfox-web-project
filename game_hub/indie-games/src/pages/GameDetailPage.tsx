import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "../Componets/ExpandableText";
import GameAttribute from "../Componets/GameAttribute";
import GameTrailer from "../Componets/GameTrailer";
import GameScreenShot from "../Componets/GameScreenShot";

export default function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, error } = useGame(slug!);
  if (error || !game) return;
  return (
    <div className="flex flex-col md:flex-row justify-center mt-16 space-y-8 md:space-y-0 xl:mx-20
     md:space-x-10 px-4">
      <div className="space-y-6 md:w-1/2">
      <h1 className="text-5xl">{game.name}</h1>
      <ExpandableText children={game.description_raw} />
      <GameAttribute game={game}/>
      </div>
      <div className="md:w-1/2 space-y-10">
      <GameTrailer gameId={game.id} />
      <GameScreenShot gameId={game.id}/>
      </div>
    </div>
  );
}
