
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";


export default function GameHeading() {
  const genreId = useGameQueryStore(s=>s.gameQuery.genreId);
  const { data: genres } = useGenre();
  const genre = genres?.results.find((g) => g.id === genreId);
  const heading = `${
    genre?.name || ""
  } Games`;
  return (
    <>
      <h1 className="text-5xl font-medium mx-4">{heading}</h1>
    </>
  );
}
