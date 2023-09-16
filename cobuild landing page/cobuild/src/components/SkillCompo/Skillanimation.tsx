import { useInView } from "react-intersection-observer";

export default function SkillAnimation() {
  const { ref: myref, inView: isVisible } = useInView();
  return (
    <>
      <div className="  md:w-[50%] space-y-8">
        {/* Building */}
        <div className="flex flex-col space-y-3">
          <div className="flex items-center justify-between ">
            <h1 className="uppercase text-xs font-semibold">Buidings</h1>
            <h1 className="uppercase text-xs font-semibold">85%</h1>
          </div>
          <div className="h-1.5 rounded-full bg-slate-100 relative">
            <div
              className={`${
                isVisible ? "builshow" : "buildremove"
              } bg-yellow-400 rounded-full`}
              ref={myref}
            ></div>
          </div>
        </div>
        {/* architectrue */}
        <div className="flex flex-col space-y-3">
          <div className="flex items-center justify-between ">
            <h1 className="uppercase text-xs font-semibold">Architecture</h1>
            <h1 className="uppercase text-xs font-semibold">60%</h1>
          </div>
          <div className=" h-1.5 rounded-full bg-slate-100 relative">
            <div
              className={`${
                isVisible ? "arshow" : "arremove"
              } bg-yellow-400 rounded-full`}
            ></div>
          </div>
        </div>
        {/* construction */}
        <div className="flex flex-col space-y-3">
          <div className="flex items-center justify-between ">
            <h1 className="uppercase text-xs font-semibold">construction</h1>
            <h1 className="uppercase text-xs font-semibold">70%</h1>
          </div>
          <div className=" h-1.5 rounded-full bg-slate-100 relative">
            <div
              className={`${
                isVisible ? "constshow" : "constemove"
              } bg-yellow-400 rounded-full`}
            ></div>
          </div>
        </div>
        {/* planing */}
        <div className="flex flex-col space-y-3">
          <div className="flex items-center justify-between ">
            <h1 className="uppercase text-xs font-semibold">plaining</h1>
            <h1 className="uppercase text-xs font-semibold">40%</h1>
          </div>
          <div className=" h-1.5 rounded-full bg-slate-100 relative">
            <div
              className={`${
                isVisible ? "plainstshow" : "plainremove"
              } bg-yellow-400 rounded-full`}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
