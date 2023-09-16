import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-cilent";
import Platform  from "../entities/Platform";
const apiCilent = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiCilent.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });
export default usePlatform;
