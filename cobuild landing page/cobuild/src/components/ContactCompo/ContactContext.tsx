import home from "../assets/home.png";
import iphone from "../assets/iphone.png";
import mail from "../assets/mail.png";
export default function ContactContext() {
  return (
    <div className="py-24 px-10 bg-white">
      <div
        className="container mx-auto flex flex-col items-center justify-center
       md:flex-row md:justify-between max-w-7xl space-y-16 md:space-y-0"
      >
        <div className="flex flex-col items-center justify-center text-center space-y-5">
          <img src={home} alt="" className="w-14" />
          <h1 className="text-xl">Address</h1>
          <p className="text-slate-600 opacity-60 text-sm w-52">
            220 Akihabara, AnimMart street, Japn Pa6550
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center space-y-5">
          <img src={iphone} alt="" className="w-14" />
          <h1 className="text-xl">Address</h1>
          <div>
            <p className="text-slate-600 opacity-60 text-sm w-52">
              {"Phone: (04) 491 570 110"}
            </p>
            <p className="text-slate-600 opacity-60 text-sm w-52">
              <p className="text-slate-600 opacity-100 text-sm w-52">
                Fax: +04 642 021 332
              </p>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center space-y-5">
          <img src={mail} alt="" className="w-14" />
          <h1 className="text-xl">Address</h1>
          <div>
          <p className="text-slate-600 opacity-60 text-sm w-52">
            support@revel.com
            </p>
            <p className="text-slate-600 opacity-60 text-sm w-52">
                Twitter: @revel
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}
