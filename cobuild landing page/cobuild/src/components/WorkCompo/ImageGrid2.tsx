interface Props{
    img : string;
    context: string;
    id:number
}
export default function ImageGrid2({img, context, id}:Props){

   
    return <>
    <div className="relative cursor-pointer overflow-hidden group" key={id}>
          <img
            src={img}
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
            <a href="#" className="text-sm font-medium text-white duration-300 hover:text-slate-600">{context}</a>
          </div>
        </div>
    </>
}