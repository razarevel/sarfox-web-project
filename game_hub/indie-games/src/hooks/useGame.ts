import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-cilent";
import  Game  from "../entities/Game";
const apiClient = new ApiClient<Game>("/games");
const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.getSingle(slug),
  });
export default useGame;
