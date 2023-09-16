import { useState } from "react";
import Image1 from "./assets/1.jpg";
import Image2 from "./assets/2.jpg";
import Image3 from "./assets/3.jpg";
import Image4 from "./assets/4.jpg";
import Image5 from "./assets/5.jpg";
import Image6 from "./assets/6.jpg";

import WorkHeading from "./WorkCompo/WorkHeading";

export default function () {
  const [showAll, setShowAll] = useState(true);
  const [showBuilding, setShowBuilding] = useState(false);
  const [showConstruction, setShowConstruction] = useState(false);
  const [showPlaining, setPlaining] = useState(false);
  return (
    <>
      <div className="bg-slate-50 py-20 px-4 z-40 relative" id="work">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-16">
          {/* Heading */}
          <WorkHeading />
          {/* Options */}
          <div className="flex space-x-4 md:space-x-8">
            <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8">
              {/* All */}
              <div
                className="flex space-x-4 group cursor-pointer"
                onClick={() => {
                  setShowBuilding(false);
                  setShowConstruction(false);
                  setPlaining(false);
                  setShowAll(true);
                }}
              >
                <h1
                  className={
                    "text-slate-600 opacity-75 duration-150 group-hover:text-yellow-500 " +
                    (!showBuilding &&
                      !showConstruction &&
                      !showPlaining &&
                      " text-yellow-500")
                  }
                >
                  All
                </h1>
                <div
                  className={
                    "bg-slate-600 bg-opacity-70 w-[1.4px] h-6 rotate-35 duration-150 group-hover:bg-yellow-500" +
                    (!showBuilding &&
                      !showConstruction &&
                      !showPlaining &&
                      " bg-yellow-500")
                  }
                ></div>
              </div>
              {/* Building */}
              <div
                className="flex space-x-6 group cursor-pointer"
                onClick={() => {
                  setShowConstruction(false);
                  setShowBuilding(!showBuilding);
                  setPlaining(false);
                  setShowAll(false);
                }}
              >
                <h1
                  className={
                    "text-slate-600 opacity-75 duration-150 group-hover:text-yellow-500" +
                    (showBuilding && " text-yellow-500")
                  }
                >
                  Building
                </h1>
                <div
                  className={
                    "bg-slate-600 bg-opacity-70 w-[1.4px] h-6 rotate-35 duration-150 group-hover:bg-yellow-500" +
                    (showBuilding && " bg-yellow-500")
                  }
                ></div>
              </div>
            </div>
            <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8">
              {/* Construction */}
              <div
                className="flex space-x-6 group cursor-pointer"
                onClick={() => {
                  setShowBuilding(false);
                  setShowAll(false);
                  setPlaining(false);
                  setShowConstruction(!showConstruction);
                }}
              >
                <h1
                  className={
                    "text-slate-600 opacity-75 duration-150 group-hover:text-yellow-500" +
                    (showConstruction && " text-yellow-500")
                  }
                >
                  Construction
                </h1>
                <div
                  className={
                    "bg-slate-600 bg-opacity-70 w-[1.4px] h-6 rotate-35 duration-150 group-hover:bg-yellow-500" +
                    (showConstruction && " bg-yellow-500")
                  }
                ></div>
              </div>
              {/* Plaining */}
              <div
                className="flex space-x-6 group cursor-pointer"
                onClick={() => {
                  setShowBuilding(false);
                  setShowConstruction(false);
                  setShowAll(false);
                  setPlaining(!showPlaining);
                }}
              >
                <h1
                  className={
                    "text-slate-600 opacity-75 duration-150 group-hover:text-yellow-500" +
                    (showPlaining && " text-yellow-500")
                  }
                >
                  Plaining
                </h1>
              </div>
            </div>
          </div>
          {/* Images */}

          <div
            className={
              "grid grid-cols-1 md:grid-cols-3 " +
              (showBuilding || showConstruction || showPlaining
                ? " gap-x-8 "
                : "gap-8")
            }
          >
            {/* First */}
            <div
              className={
                "relative cursor-pointer overflow-hidden group duration-500 " +
                (showAll ? " scale-100" : " ") +
                (showConstruction || showPlaining ? "scale-0 " : "")
              }
            >
              <img
                src={Image1}
                alt=""
                className="duration-500 group-hover:scale-110"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 border w-full h-full duration-500 group-hover:bg-yellow-500 opacity-95"></div>
              <div
                className="hidden group-hover:absolute top-0 bottom-0 left-0 right-0 border w-full h-full
           duration-500 group-hover:flex flex-col items-center justify-center space-y-4"
              >
                <div className="w-6 h-6 flex flex-col items-center justify-center relative">
                  <div className="w-[1.4px] h-full bg-white absolute"></div>
                  <div className="w-[1.4px] h-full bg-white rotate-90  absolute"></div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-white duration-300 hover:text-slate-600"
                >
                  Tower Building
                </a>
              </div>
            </div>
            {/* Second */}
            <div
              className={
                "relative  cursor-pointer overflow-hidden group duration-500 " +
                (showBuilding || showPlaining ? "scale-0 " : " ") +
                (showAll ? " scale-100" : " ") +
                (showConstruction
                  ? "-translate-y-full md:translate-y-0 md:-translate-x-full "
                  : " ")
              }
            >
              <img
                src={Image2}
                alt=""
                className="duration-500 group-hover:scale-110"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 border w-full h-full duration-500 group-hover:bg-yellow-500 opacity-95"></div>
              <div
                className="hidden group-hover:absolute top-0 bottom-0 left-0 right-0 border w-full h-full
           duration-500 group-hover:flex flex-col items-center justify-center space-y-4"
              >
                <div className="w-6 h-6 flex flex-col items-center justify-center relative">
                  <div className="w-[1.4px] h-full bg-white absolute"></div>
                  <div className="w-[1.4px] h-full bg-white rotate-90  absolute"></div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-white duration-300 hover:text-slate-600"
                >
                  Renovation
                </a>
              </div>
            </div>
            {/* Third */}
            <div
              className={
                "relative cursor-pointer overflow-hidden group duration-500  " +
                ((showBuilding || showConstruction) && "scale-0 ") +
                (showAll && " scale-100 ") +
                (showPlaining
                  ? " -translate-y-[200%] md:-translate-y-0 md:-translate-x-[200%]"
                  : "")
              }
            >
              <img
                src={Image3}
                alt=""
                className=" object-cover duration-500 group-hover:scale-110  "
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 border w-full h-full duration-500 group-hover:bg-yellow-500 opacity-95"></div>
              <div
                className="hidden group-hover:absolute top-0 bottom-0 left-0 right-0 border w-full h-full
           duration-500 group-hover:flex flex-col items-center justify-center space-y-4"
              >
                <div className="w-6 h-6 flex flex-col items-center justify-center relative">
                  <div className="w-[1.4px] h-full bg-white absolute"></div>
                  <div className="w-[1.4px] h-full bg-white rotate-90  absolute"></div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-white duration-300 hover:text-slate-600"
                >
                  Hospital Building
                </a>
              </div>
            </div>
            {/* Fourth */}
            <div
              className={
                "relative cursor-pointer overflow-hidden group duration-150 " +
                (showBuilding || showPlaining ? "scale-0 " : " ") +
                (showAll ? " scale-100" : " ") +
                (showConstruction
                  ? " -translate-y-[200%] md:-translate-y-full md:translate-x-[115%] mt-4 md:mt-0"
                  : " ")
              }
            >
              <img
                src={Image4}
                alt=""
                className="duration-500 group-hover:scale-110"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 border w-full h-full duration-500 group-hover:bg-yellow-500 opacity-95"></div>
              <div
                className="hidden group-hover:absolute top-0 bottom-0 left-0 right-0 border w-full h-full
           duration-500 group-hover:flex flex-col items-center justify-center space-y-4"
              >
                <div className="w-6 h-6 flex flex-col items-center justify-center relative">
                  <div className="w-[1.4px] h-full bg-white absolute"></div>
                  <div className="w-[1.4px] h-full bg-white rotate-90  absolute"></div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-white duration-300 hover:text-slate-600"
                >
                  Tower Building
                </a>
              </div>
            </div>
            {/* Fiveth */}
            <div
              className={
                "relative cursor-pointer overflow-hidden group duration-500 " +
                (showBuilding &&
                  " -translate-y-[300%] md:-translate-y-full mt-4 md:mt-0 ") +
                (showAll && "translate-y-0 ") +
                (showConstruction || showPlaining ? " scale-0 " : "")
              }
            >
              <img
                src={Image5}
                alt=""
                className="duration-500 group-hover:scale-110"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 border w-full h-full duration-500 group-hover:bg-yellow-500 opacity-95"></div>
              <div
                className="hidden group-hover:absolute top-0 bottom-0 left-0 right-0 border w-full h-full
           duration-500 group-hover:flex flex-col items-center justify-center space-y-4"
              >
                <div className="w-6 h-6 flex flex-col items-center justify-center relative">
                  <div className="w-[1.4px] h-full bg-white absolute"></div>
                  <div className="w-[1.4px] h-full bg-white rotate-90  absolute"></div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-white duration-300 hover:text-slate-600"
                >
                  Tower Renovation
                </a>
              </div>
            </div>
            {/* Sixth */}
            <div
              className={
                "relative  cursor-pointer overflow-hidden group duration-500 " +
                ((showConstruction || showBuilding) && "scale-0 ") +
                (showAll && " scale-100 ") +
                (showPlaining &&
                  " md:-translate-x-full -translate-y-[400%] md:-translate-y-full mt-4 md:mt-0 md:mx-4 ")
              }
            >
              <img
                src={Image6}
                alt=""
                className="duration-500 group-hover:scale-110"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 border w-full h-full duration-500 group-hover:bg-yellow-500 opacity-95"></div>
              <div
                className="hidden group-hover:absolute top-0 bottom-0 left-0 right-0 border w-full h-full
           duration-500 group-hover:flex flex-col items-center justify-center space-y-4"
              >
                <div className="w-6 h-6 flex flex-col items-center justify-center relative">
                  <div className="w-[1.4px] h-full bg-white absolute"></div>
                  <div className="w-[1.4px] h-full bg-white rotate-90  absolute"></div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-white duration-300 hover:text-slate-600"
                >
                  Plaining
                </a>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
}
