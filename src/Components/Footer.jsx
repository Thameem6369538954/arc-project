import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import arclogo from "../Images/arclogo.png";

const Footer = () => {
  const services = [
    "Extending the biological clock",
    "Life style and Conception advice",
    "Therapeutic activity For Patients",
    "Counselling",
    "Fertility Tools",
    "Corporate social Responsibility",
    "Sexually Dysfunction Clinic",
    "Gynocologic Surgery",
    "Stem cell Banking",
    "IVF Treatment",
    "IUI Treatment",
    "Egg Donation",
    "Surrogacy Program",
  ];

  const cities = [
    "Ariyur", "Bengaluru", "Coimbatore", "Dindigul", "Egmore", "Erode", "Hyderabad", "Kochi", 
    "Kolkata", "Kovilpatti", "Sri Lanka", "Madurai", "Nagercoil", "Nellore", "Ongole", 
    "Perambur", "Ramanathapuram", "Reddiyarpalayam", "Salem", "Trichy", "Ambattur", 
    "Tiruvannamalai", "Tirunelveli", "Tirupathi", "Tiruppur", "Vellore", "Tambaram", "Kumbakonam"
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaYoutube />, link: "#" },
  ];

  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 p-5">
        <div>
          <img src={arclogo} alt="ARC Logo" className="w-70 mb-4" />
          <h3 className="font-bold mb-4">Our Services</h3>
          <ul className="space-y-2">
            {services.map((service, index) => (
              <motion.li 
                key={index} 
                whileHover={{ scale: 1.1 }} 
                className="text-gray-700 flex items-center gap-2 cursor-pointer"
              >
                🔹 {service}
              </motion.li>
            ))}
          </ul>
        </div>
        
        <div className="col-span-2">
          <h3 className="font-bold mb-4">Our IVF Centres</h3>
          <div className="grid grid-cols-3 gap-4">
            {cities.map((city, index) => (
              <motion.span 
                key={index} 
                whileHover={{ scale: 1.1, color: "#ff0080" }} 
                className="text-gray-700 cursor-pointer"
              >
                🔹 {city}
              </motion.span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            {socialIcons.map((social, index) => (
              <motion.a 
                key={index} 
                href={social.link} 
                whileHover={{ scale: 1.2, color: "#ff0080" }} 
                className="text-pink-500 text-2xl"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <address className="mt-6 text-gray-700">
            No. 22/2, ESI Hospital Road,<br />
            Peravallur (Perambur), Chennai,<br />
            Tamil Nadu 600011
          </address>

          <div className="mt-6">
            <button className="border border-pink-500 px-6 py-2 rounded-full text-pink-500 hover:bg-pink-500 hover:text-white transition">
              BOOK AN APPOINTMENT
            </button>
            <button className="border border-pink-500 px-6 py-2 rounded-full text-pink-500 hover:bg-pink-500 hover:text-white transition mt-4">
              Get Direction on Google
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
