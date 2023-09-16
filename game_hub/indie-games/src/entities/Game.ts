import  Genre  from "./Genre";
import  Platform  from "./Platform";
import publisher  from "./Publisher";

export default interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  slug: string;
  description_raw: string;
  genres: Genre[];
  publishers: publisher[]
}
