import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import DesktopNavbar from "./components/Navbar/DesktopNavbar";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import Quote from "./components/Quote";
import Reviews from "./components/Reviews";
import Services from "./components/ServicesCompo/Services";
import ServicesHeading from "./components/ServicesCompo/ServicesHeading";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Image from "./components/assets/backgourndHeroImage.jpg";
import { useInView } from "react-intersection-observer";
function App() {
  const { ref: myref, inView: isVisible } = useInView();
  const { ref: myrefSec, inView: isVisibleSec } = useInView();
  const { ref: myrefthird, inView: isVisiblethird } = useInView();
 
  return (
    <>
      <div className="w-full z-0 h-full inline-block fixed min-w-screen min-h-screen">
        <img src={Image} alt="" className="w-full h-full object-none" />
      </div>

      <div className="hidden lg:block" id="nav">
        <DesktopNavbar
          showbg={isVisible}
          
        />
      </div>
      <div className="lg:hidden " id="nav">
        <MobileNavbar showbg={isVisibleSec || isVisiblethird} />
      </div>
      <HeroSection />
      {/* Our services */}
      <section id="services">
        <div className="bg-white z-40 relative flex flex-col items-center justify-center py-10 md:px-4   lg:p-14 lg:py-20 space-y-14">
          {/* Heading */}
            <div ref={myref}>
              <ServicesHeading />
            </div>
         
          {/* Services */}
          <section ref={myrefSec}>
            <Services />
          </section>
        </div>
      </section>

      <div ref={myref}>
        <section ref={myrefthird}>
            <Work />
            <Skill />
          <Quote />
            <Reviews />
            <Contact />
          <Footer />
        </section>
      </div>
    </>
  );
}
export default App;
