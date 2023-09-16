import  Game  from "../entities/Game";
import DefinationItem from "./DefinationItem";
interface Props{
    game:Game
}
export default function GameAttribute({game}:Props){
    return<>
    <div className="flex flex-col space-y-16 p-10">
        <div className="flex items-start justify-between max-w-xl">
          <DefinationItem term="Platform">
            {game.parent_platforms?.map(({ platform }) => (
              <p key={platform.id}>{platform.name}</p>
            ))}
          </DefinationItem>
          <DefinationItem term="Metascore">
            <div className="w-9 px-2 dark:bg-gray-700 text-md rounded-md dark:text-emerald-600 font-semibold bg-slate-300">
              {game.metacritic}
            </div>
          </DefinationItem>
        </div>
        <div className="flex items-start justify-between max-w-xl">
          <DefinationItem term="Genres">
            {game.genres.map((genre) => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </DefinationItem>
          <DefinationItem term="Publishers">
            {game.publishers?.map((p) => (
              <p key={p.id}>{p.name}</p>
            ))}
          </DefinationItem>
        </div>
      </div>
    </>
}