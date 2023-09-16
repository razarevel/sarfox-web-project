export default function Quote() {
  return (
    <>
      <div className="w-full bg-yellow-500 text-white px-2.5  py-16 text-center z-40 relative" id="quotes">
        <div
          className="flex flex-col lg:flex-row items-center justify-center
            space-y-8 lg:space-y-0  lg:space-x-10
            "
        >
          <h1 className="text-3xl">
            An innovative company working with the latest technologies
          </h1>
          <a
            href="#nav"
            className="px-10 py-3 border border-white uppercase
            rounded-full text-xs  duration-150 hover:text-yellow-500 hover:bg-white"
          >
            get a quote
          </a>
        </div>
      </div>
    </>
  );
}
