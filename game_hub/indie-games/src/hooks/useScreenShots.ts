import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-cilent";
import  ScreenShot  from "../entities/useScreenshot";
const useScreenShot = (gameId:number) =>{
    const apiClient = new ApiClient<ScreenShot>(`/games/${gameId}/screenshots`);
    return useQuery({
        queryKey: ['screenshots', gameId],
        queryFn:apiClient.getAll
    })
}
export default useScreenShot;