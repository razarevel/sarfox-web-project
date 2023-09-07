import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiCilent from "../services/api-cilent";
import { FetchRespone } from "../services/api-cilent";

export interface Genre {
    id:number,
    name:string
    image_background:string;
}
const useGenre = ()=> useQuery({
    queryKey:['genres'],
    queryFn: ()=> apiCilent
    .get<FetchRespone<Genre>>('/genres')
    .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: {count:genres.length, results:genres} 
})
export default useGenre;