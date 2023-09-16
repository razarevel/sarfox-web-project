import Image1 from "../assets/1.jpg";
import Image2 from "../assets/2.jpg";
import Image3 from "../assets/3.jpg";
import Image4 from "../assets/4.jpg";
import Image5 from "../assets/5.jpg";
import Image6 from "../assets/6.jpg";
export default function ImageGrid() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 duration-1000">
        {/* First */}
        <div className="relative cursor-pointer overflow-hidden group">
          <img
            src={Image1}
            alt=""
            className="duration-500 group-hover:scale-110"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 border w-full h-full duration-500 group-hover:bg-yellow-500 opacity-95"></div>
          <div className="hidden group-hover:absolute top-0 bottom-0 left-0 right-0 border w-full h-full
           duration-500 group-hover:flex flex-col items-center justify-center space-y-4">
            <div className="w-6 h-6 flex flex-col items-center justify-center relative">
              <div className="w-[1.4px] h-full bg-white absolute"></div>
              <div className="w-[1.4px] h-full bg-white rotate-90  absolute"></div>
            </div>
            <a href="#" className="text-sm font-medium text-white duration-300 hover:text-slate-600">Tower Building</a>
          </div>
        </div>
        {/* Second */}
        <div className="relative  cursor-pointer overflow-hidden group">
          <img
            src={Image2}
            alt=""
            className="duration-500 group-hover:scale-110"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 border w-full h-full duration-500 group-hover:bg-yellow-500 opacity-95"></div>
          <div className="hidden group-hover:absolute top-0 bottom-0 left-0 right-0 border w-full h-full
           duration-500 group-hover:flex flex-col items-center justify-center space-y-4">
            <div className="w-6 h-6 flex flex-col items-center justify-center relative">
              <div className="w-[1.4px] h-full bg-white absolute"></div>
              <div className="w-[1.4px] h-full bg-white rotate-90  absolute"></div>
            </div>
            <a href="#" className="text-sm font-medium text-white duration-300 hover:text-slate-600">Renovation</a>
          </div>
        </div>
        {/* Third */}
        <div className="relative cursor-pointer overflow-hidden group">
          <img
            src={Image3}
            alt=""
            className="duration-500 group-hover:scale-110"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 border w-full h-full duration-500 group-hover:bg-yellow-500 opacity-95"></div>
          <div className="hidden group-hover:absolute top-0 bottom-0 left-0 right-0 border w-full h-full
           duration-500 group-hover:flex flex-col items-center justify-center space-y-4">
            <div className="w-6 h-6 flex flex-col items-center justify-center relative">
              <div className="w-[1.4px] h-full bg-white absolute"></div>
              <div className="w-[1.4px] h-full bg-white rotate-90  absolute"></div>
            </div>
            <a href="#" className="text-sm font-medium text-white duration-300 hover:text-slate-600">Hospital Building</a>
          </div>
        </div>
        {/* Fourth */}
        <div className="relative cursor-pointer overflow-hidden group ">
          <img
            src={Image4}
            alt=""
            className="duration-500 group-hover:scale-110"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 border w-full h-full duration-500 group-hover:bg-yellow-500 opacity-95"></div>
          <div className="hidden group-hover:absolute top-0 bottom-0 left-0 right-0 border w-full h-full
           duration-500 group-hover:flex flex-col items-center justify-center space-y-4">
            <div className="w-6 h-6 flex flex-col items-center justify-center relative">
              <div className="w-[1.4px] h-full bg-white absolute"></div>
              <div className="w-[1.4px] h-full bg-white rotate-90  absolute"></div>
            </div>
            <a href="#" className="text-sm font-medium text-white duration-300 hover:text-slate-600">Tower Building</a>
          </div>
        </div>
        {/* Fiveth */}
        <div className="relative cursor-pointer overflow-hidden group">
          <img
            src={Image5}
            alt=""
            className="duration-500 group-hover:scale-110"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 border w-full h-full duration-500 group-hover:bg-yellow-500 opacity-95"></div>
          <div className="hidden group-hover:absolute top-0 bottom-0 left-0 right-0 border w-full h-full
           duration-500 group-hover:flex flex-col items-center justify-center space-y-4">
            <div className="w-6 h-6 flex flex-col items-center justify-center relative">
              <div className="w-[1.4px] h-full bg-white absolute"></div>
              <div className="w-[1.4px] h-full bg-white rotate-90  absolute"></div>
            </div>
            <a href="#" className="text-sm font-medium text-white duration-300 hover:text-slate-600">Tower Renovation</a>
          </div>
        </div>
        {/* Sixth */}
        <div className="relative  cursor-pointer overflow-hidden group">
          <img
            src={Image6}
            alt=""
            className="duration-500 group-hover:scale-110"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 border w-full h-full duration-500 group-hover:bg-yellow-500 opacity-95"></div>
          <div className="hidden group-hover:absolute top-0 bottom-0 left-0 right-0 border w-full h-full
           duration-500 group-hover:flex flex-col items-center justify-center space-y-4">
            <div className="w-6 h-6 flex flex-col items-center justify-center relative">
              <div className="w-[1.4px] h-full bg-white absolute"></div>
              <div className="w-[1.4px] h-full bg-white rotate-90  absolute"></div>
            </div>
            <a href="#" className="text-sm font-medium text-white duration-300 hover:text-slate-600">Plaining</a>
          </div>
        </div>
      </div>
    </>
  );
}
