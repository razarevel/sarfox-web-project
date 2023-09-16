import NavLogo from "./NavLogo";
interface props{
  showbg : boolean;
}
export default function DesktopNavbar({showbg}:props) {
  return (
    <>
      <div className={" w-full h-24 flex items-center justify-center px-4 fixed z-50 text-white  " + (showbg && 'bg-white shadow-md')}>
        <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <NavLogo showbg={showbg}/>
          {/* Options */}
          <div className={'flex items-center justify-center uppercase space-x-8 text-sm  opacity-70 '+(showbg && 'text-slate-600') }>
            <a href="#heroSection" className='duration-150 hover:text-yellow-500 cursor-pointer'>Home</a>
            <a href="#services" className='duration-150 hover:text-yellow-500 cursor-pointer'>services</a>
            <a href="#work" className='duration-150 hover:text-yellow-500 cursor-pointer'>work</a>
            <a href="#skills" className='duration-150 hover:text-yellow-500 cursor-pointer'>skills</a>
            <a href="#reviews" className='duration-150 hover:text-yellow-500 cursor-pointer'>testimonials</a>
            <a href="#location" className='duration-150 hover:text-yellow-500 cursor-pointer'>map</a>
          </div>
        </div>
      </div>
    </>
  );
}
