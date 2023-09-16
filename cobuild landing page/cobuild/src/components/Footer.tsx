import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoDribbble,
  BiLogoInstagram,
} from "react-icons/bi";
export default function Footer() {
  return (
    <>
      <div className="border-t-2 py-10 z-40 relative bg-white" id="footer">
        <div
          className="container mx-auto flex flex-col items-center justify-center
     md:flex-row md:justify-between md:px-10 space-y-10 md:space-y-0"
        >
          <h1 className="text-sm text-slate-600 opacity-60">
            © Revels 2016. All Rights Reserved.
          </h1>
          <div className="flex space-x-5">
            <a href="#nav">
              <BiLogoFacebook color="#eab308" className="ficon" size="20" />
            </a>
            <a href="#nav">
              <BiLogoTwitter color="#eab308" className="ficon" size="20" />
            </a>
            <a href="#nav">
              <BiLogoDribbble color="#eab308" className="ficon" size="20" />
            </a>
            <a href="#nav">
              <BiLogoInstagram color="#eab308" className="ficon" size="20" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
