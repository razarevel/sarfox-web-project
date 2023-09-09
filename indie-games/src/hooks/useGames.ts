import ApiClient, { FetchRespone } from "../services/api-cilent";
import { useInfiniteQuery } from "@tanstack/react-query";
import useGameQueryStore from "../store";
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
const useGame = () =>{
  const gameQuery = useGameQueryStore(s=>s.gameQuery)
 return useInfiniteQuery<FetchRespone<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          paplatforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000,
  });
}
export default useGame;
