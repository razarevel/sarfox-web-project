import NavLogo from "./NavLogo";
import { useState } from "react";
interface props {
  showbg: boolean;
}
export default function MobileNavbar({ showbg }: props) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        className={
          (showbg && "shadow-md bg-white") +
          " w-full  flex flex-col items-center justify-center px-4 pt-7 space-y-6 fixed z-50 "
        }
      >
        <div className="container mx-auto flex items-center justify-between">
          <NavLogo showbg={showbg} />
          <button
            className="border-2 border-yellow-500 h-8 w-10 px-2 py-1 flex flex-col space-y-1 items-center justify-center"
            onClick={() => setShow(!show)}
          >
            <div className="w-full h-0.5 bg-yellow-500"></div>
            <div className="w-full h-0.5 bg-yellow-500"></div>
            <div className="w-full h-0.5 bg-yellow-500"></div>
          </button>
        </div>
        {/* Options */}
        <div
          className={`${
            show ? "max-h-64" : "max-h-0"
          } transition-all w-full duration-500  overflow-hidden `}
        >
          <div className=" bg-gray-800 flex flex-col items-start justify-center px-4 py-2 w-full text-white text-sm  uppercase space-y-4 overflow-hidden ">
            <a href="#heroSection" className="duration-150 hover:text-yellow-500">Home</a>
            <a href="#services" className="duration-150 hover:text-yellow-500">services</a>
            <a href="#work" className="duration-150 hover:text-yellow-500">Work</a>
            <a href="#skills" className="duration-150 hover:text-yellow-500">skills</a>
            <a href="#reviews" className="duration-150 hover:text-yellow-500">
              Testimonials
            </a>
            <a href="#location" className="duration-150 hover:text-yellow-500">map</a>
          </div>
        </div>
      </div>
    </>
  );
}
