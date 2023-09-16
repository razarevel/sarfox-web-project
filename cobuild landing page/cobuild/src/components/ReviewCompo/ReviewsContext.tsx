import andrew from "../assets/andrew.png";
import khabib from "../assets/khabib.png";
export default function ReviewsContext() {
  return (
    <>
      <div className="flex flex-col jsutify-center md:flex-row space-y-6 md:space-y-0 md:space-x-5 md:justify-between lg:space-x-16">
        {/* First */}
        <div className="flex justify-center items-start space-x-7 max-w-sm">
          <div className="xl:w-32">
            <img src={andrew} alt="" className="object-container w-[270px]"/>
          </div>
          <div className="space-y-5">
            <p className="text-slate-600 opacity-60 font-kalam">
              <q>
                It's just brilliant. I will recommend Cobuild to my every fan
                who wants to get rich and live in Dubai. It can also protect you
                from matric's attack.
              </q>
            </p>
            <h1 className="text-sm font-semibold">Andrew Tate</h1>
          </div>
        </div>
        {/* Second */}
        <div className="flex justify-center items-start space-x-7 max-w-sm">
          <div className="xl:w-32">
            <img src={khabib} alt="" className="w-[270px]" />
          </div>
          <div className="space-y-6">
            <p className="text-slate-600 opacity-60 font-kalam">
              <q>
                Alhamdulila, God gave me everything. I am so excited to launch
                my new gym. By using new Cobuild, I will smash everyone at my
                gym. If you think you're strong come to gym I'll smash you.
              </q>
            </p>
            <h1 className="text-sm font-semibold">Khabib Nurmagomedov</h1>
          </div>
        </div>
      </div>
    </>
  );
}
