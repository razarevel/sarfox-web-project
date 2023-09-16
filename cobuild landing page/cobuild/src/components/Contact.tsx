import ContactContext from "./ContactCompo/ContactContext";
import Map from "./ContactCompo/Map";
export default function Contact() {
  return (
    <div className="z-40 relative" id="location">
     <Map />
     <ContactContext />
    </div>
  );
}
