import { useQuery } from "@tanstack/react-query";
import { FetchRespone} from '../services/api-cilent'
import apiCilent from "../services/api-cilent";

interface Platform {
  id: number;
  name: string;
  slug: string;
}
const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiCilent
        .get<FetchRespone<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
        staleTime: 24*60*60*1000
  });
export default usePlatform;
