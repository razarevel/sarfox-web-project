import Crane from '../svg/crane.png';
import CraneTruck from '../svg/crane truck.png';
import Helmet from '../svg/construction helmet.png';
import Building from '../svg/Buildings.png';
export default function Services() {
  return (
    <>
      <div className="container mx-auto flex items-start justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 md:gap-16">
          {/* First */}
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <img src={Crane} alt="" />
            <h1 className="text-xl">Fast Operations</h1>
            <p className=" w-72 md:w-full lg:w-52 text-slate-600 text-sm opacity-60">
              Cobuild impresses you with fully responsiveness and highly
              customization.
            </p>
          </div>
          {/* Second */}
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <img src={CraneTruck} alt="" />
            <h1 className="text-xl">Renovation</h1>
            <p className=" w-72 md:w-full lg:w-52 text-slate-600 text-sm opacity-60">
              Cobuild impresses you with fully responsiveness and highly
              customization.
            </p>
          </div>
          {/* Third */}
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <img src={Helmet} alt="" />
            <h1 className="text-xl">Consultation</h1>
            <p className=" w-72 md:w-full lg:w-52 text-slate-600 text-sm opacity-60">
              Cobuild impresses you with fully responsiveness and highly
              customization.
            </p>
          </div>
          {/* Second */}
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <img src={Building} alt="" />
            <h1 className="text-xl">Architecture</h1>
            <p className=" w-72 md:w-full lg:w-52 text-slate-600 text-sm opacity-60">
              Cobuild impresses you with fully responsiveness and highly
              customization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
