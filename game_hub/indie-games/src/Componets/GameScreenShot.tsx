import useScreenShot from "../hooks/useScreenShots"

interface Props{
    gameId:number
}
export default function GameScreenShot({gameId}:Props){
    const {data, error , isLoading} = useScreenShot(gameId);
    if(isLoading) return null;
    if(error) throw error;
    return<>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-3">
    {data?.results.map(file=> <img src={file.image} alt=""  key={file.id}/>  )}
    </div>
    </>
}