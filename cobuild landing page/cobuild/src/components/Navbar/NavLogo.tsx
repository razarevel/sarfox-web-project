import Logo from "../assets/RevelDark.png";
import Logo2 from '../assets/revelWhite.png';
interface props{
  showbg:boolean;
}
export default function NavLogo({showbg}:props) {
  return (
    <>
      <div className="flex items-center justify-center space-x-2.5 md:space-x-5">
        {showbg ? <img src={Logo} alt="" className="w-10  md:w-14" /> : 
            <img src={Logo2} alt="" className="w-10  md:w-14" />
        }
        <h1 className={"md:text-xl tracking-wider uppercase self-center text-white " +(showbg && ' text-black ') }>
          COBUILD
        </h1>
      </div>
    </>
  );
}
