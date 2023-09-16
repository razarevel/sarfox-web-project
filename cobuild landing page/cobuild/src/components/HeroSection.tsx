export default function HeroSection() {
  return (
    <>
      <div className="z-40 w-full min-h-[600px] md:min-h-screen bg-slate-900 bg-opacity-70 relative" id="heroSection">
        <div className="w-full min-h-[600px] md:min-h-screen flex flex-col items-center justify-end md:justify-center
         text-center text-white opacity-100 space-y-10 pb-10">
          <h1 className="text-6xl font-medium md:translate-y-4">We're Building Your Future</h1>
          <p className="text-xl font-medium font-kalam md:translate-y-4">
            Take a step forward of construction with Cobuild
          </p>
          <button className="px-10 py-4 text-sm font-kalam font-medium rounded-full bg-yellow-500 duration-300 hover:bg-slate-800 uppercase md:translate-y-4">
            Get a quote
          </button>
        </div>
      </div>
    </>
  );
}
