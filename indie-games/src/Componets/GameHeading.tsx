import { GameQuery } from "../App";

interface Props{
    gameQuery:GameQuery;
}
export default function GameHeading({gameQuery}:Props) {
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`
  return (
    <>
      <h1 className="text-5xl font-medium mx-4">{heading}</h1>
    </>
  );
}
