import useGenre from "../hooks/useGenre";
import getCroppImageUrl from "../services/image-url";
import useGameQueryStore from "../store";
export default function GenreList() {
  const { data } = useGenre();
  const  selectedGenreId =useGameQueryStore(s=>s.gameQuery.genreId)
  const  setSelectedGenreId =useGameQueryStore(s=>s.setGenreId);
  const style =
    "text-xl font-thin opacity-80 group-hover:opacity-100 hover:border-b-2 cursor-pointer";
  const selectedStyle = "text-xl font-semibold hover:border-b-2 cursor-pointer";
  return (
    <>
      <div className="flex flex-col space-y-4">
        {data?.results.map((item) => (
          <div
            key={item.id}
            className="lg:mx-4 md:mx-2 group flex items-center space-x-2"
          >
            <img
              src={getCroppImageUrl(item.image_background)}
              alt=""
              className="w-12 h-8 rounded-md"
            />
            <a
              className={item.id === selectedGenreId ? selectedStyle : style}
              onClick={() => setSelectedGenreId(item.id)}
            >
              {item.name}
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
