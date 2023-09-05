import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
interface Props {
  platforms: Platform[];
}
export default function PlatformIcon({ platforms }: Props) {
  const IconMap = (name: string, id:number) => {
    if (name == "pc") return <FaWindows color="#718096" key={id}/>;
    if (name == "playstation") return <FaPlaystation color="#718096" key={id} />;
    if (name == "xbox") return <FaXbox color="#718096" key={id}/>;
    if (name == "nintendo") return <SiNintendo color="#718096" key={id}/>;
    if (name == "mac") return <FaApple color="#718096" key={id}/>;
    if (name == "linux") return <FaLinux color="#718096" key={id}/>;
    if (name == "android") return <FaAndroid color="#718096" key={id}/>;
    if (name == "ios") return <MdPhoneIphone color="#718096" key={id}/>;
    if (name == "web") return <BsGlobe color="#718096" key={id}/>;
  };
  return (
    <div className="flex flex-wrap gap-4">
      {platforms.map((platform) => IconMap(platform.slug, platform.id))}
    </div>
  );
}
