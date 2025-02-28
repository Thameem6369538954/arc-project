import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import arclogo from "../Images/arclogo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={arclogo} alt="Arc Logo" className="mb-4" />
          </div>
          <div>
            <h3 className="font-bold mb-3">Our Services</h3>
            <ul className="space-y-2">
              <li>Extending the biological clock</li>
              <li>Life style and Conception advice</li>
              <li>Therapeutic activity For Patients</li>
              <li>Counselling</li>
              <li>Fertility Tools</li>
              <li>Corporate social Responsibility</li>
              <li>Sexually Dysfunction Clinic</li>
              <li>Gynocologic Surgery</li>
              <li>Stem cell Banking</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">Our IVF centres</h3>
            <ul className="grid grid-cols-2 gap-2">
              {["Ariyur", "Bengaluru", "Coimbatore", "Dindigul", "Egmore",
                "Erode", "Hyderabad", "Kochi", "Kolkata", "Kovilpatti",
                "Sri Lanka", "Madurai", "Nagercoil", "Nellore", "Ongole",
                "Perambur", "Ramanathapuram", "Reddiarpalayam", "Salem", "Trichy",
                "Ambattur", "Tiruvannamalai", "Tirunelveli", "Tirupathi", "Tiruppur",
                "Vellore", "Tambaram", "Kumbakonam"].map((city, index) => (
                <li key={index}>{city}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              <FaFacebookF className="text-pink-500" />
              <FaInstagram className="text-pink-500" />
              <FaYoutube className="text-pink-500" />
            </div>
            <address className="not-italic">
              No. 22/2, ESI Hospital Road, Peravallur (Perambur), Chennai, Tamil Nadu 600011
            </address>
            <button className="mt-4 border border-pink-500 text-black px-4 py-2 rounded-md">
              BOOK AN APPOINTMENT
            </button>
            <button className="mt-2 border border-pink-500 text-black px-4 py-2 rounded-md">
              Get Direction on Google
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
