import { NavLink } from "react-router-dom";
import Image1 from "../assets/RevelDark.png";
import Image2 from "../assets/revelWhite.png";
import SearchInput from "./SearchInput";
import Darkmode from "./darkmode";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-end md:hidden mr-4 my-4">
        <Darkmode />
      </div>

      <div className="flex items-center justify-between mx-2 md:mx-8">
        <div className="flex-none hidden  md:block">
          <NavLink to={"/"}>
            <img
              src={Image1}
              alt=""
              className="w-20 dark:hidden cursor-pointer"
            />
          </NavLink>
          <NavLink to={"/"}>
            <img
              src={Image2}
              alt=""
              className="w-20 hidden dark:block cursor-pointer"
            />
          </NavLink>
        </div>
        <div className="grow px-4">
          <SearchInput />
        </div>
        <div className="flex-none hidden sm:block">
          <Darkmode />
        </div>
      </div>
    </>
  );
}
