import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-cilent";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const apiClient = new ApiClient<Genre>("/genres");
const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll(),
    staleTime: 24 * 60 * 60 * 1000
  });
export default useGenre;
