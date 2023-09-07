import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiCilent from "../services/api-cilent";
import { FetchRespone } from "../services/api-cilent";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGame = (
  gameQuery:GameQuery
) =>
  useQuery<FetchRespone<Game>, Error>({
    queryKey:['games', gameQuery],
    queryFn: () => apiCilent
    .get<FetchRespone<Game>>('/games',{
      params: { 
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
       }
    })
    .then(res=>res.data)
  })
export default useGame;
