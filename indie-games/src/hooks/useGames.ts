import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import ApiClient, { FetchRespone } from "../services/api-cilent";
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

const apiClient = new ApiClient<Game>("/games");
const useGame = (gameQuery: GameQuery) =>
  useQuery<FetchRespone<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          paplatforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });
export default useGame;
