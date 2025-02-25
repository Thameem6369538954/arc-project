import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SlArrowDown } from "react-icons/sl";
import { FiMenu, FiX } from "react-icons/fi";
import arclogo from "../Images/arclogo.png";

const menuItems = [
  { title: "About Us", link: "/About_arc", submenu: [
      { title: "About Arc", link: "/About_arc" },
      { title: "Leadership Team", link: "/OurTeam" },
      { title: "Our Experts", link: "/about/careers" },
      { title: "Virtual Tour", link: "/about/contact" },
      // { title: "FAQ", link: "/about/contact" },
    ]},
    { title: "Services & Treatment", link: "/Services_and_Treatment" },
  { title: "Success Stories", link: "/success-stories", submenu: [
      { title: "Awards & Recognitions", link: "/Awards" },
      { title: "Testimonials", link: "/Testimonial" },
      { title: "Blog", link: "/success/case-studies" },
      { title: "Live", link: "/success/case-studies" },
    ]},
    // { title: "Our Experts", link: "/experts" },
    { title: "Our Centers", link: "/experts" },
    // { title: "Awards", link: "/Awards" },
    { title: "Academics", link: "/academics", submenu: [
        { title: "PG Programs", link: "/academics/programs" },
        { title: "Fellowship Programs", link: "/academics/programs" },
      ]},
    { title: "Our Facilities", link: "/OurFacilities" },
    { title: "Contact", link: "/Contactus" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <div className="font-[choco] relative">
      <motion.nav className="bg-[#fff8ef] text-black px-6 py-4 flex justify-between items-center shadow-md">
        <Link to="/" onClick={closeMobileMenu}>
          <img src={arclogo} alt="Logo" className="h-13 md:h-23" />
        </Link>
        <ul className="hidden lg:flex space-x-6">
          {menuItems.map((menu, index) => (
            <li key={index} className="relative group">
              <Link to={menu.link} className="hover:text-pink-500 px-2 py-2 flex items-center">
                {menu.title} {menu.submenu && <SlArrowDown className="ml-1" />}
              </Link>
              {menu.submenu && (
                <AnimatePresence>
                  <motion.ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg z-50 p-4 w-max rounded-lg">
                    {menu.submenu.map((sub, subIndex) => (
                      <motion.li key={subIndex} className="p-3 hover:bg-pink-100 rounded-lg transition">
                        <Link to={sub.link} className="text-black text-base" onClick={closeMobileMenu}>{sub.title}</Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                </AnimatePresence>
              )}
            </li>
          ))}
        </ul>
        <button onClick={toggleMobileMenu} className="lg:hidden text-2xl text-black focus:outline-none">
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div className="lg:hidden bg-white shadow-md w-full absolute left-0 top-16 z-50">
            <ul className="flex flex-col">
              {menuItems.map((menu, index) => (
                <li key={index} className="border-b border-gray-200">
                  <button onClick={() => toggleDropdown(index)} className="w-full text-left px-6 py-4 flex justify-between items-center">
                    {menu.title} {menu.submenu && <SlArrowDown className={`ml-1 transition-transform ${activeDropdown === index ? "rotate-180" : ""}`} />}
                  </button>
                  {menu.submenu && activeDropdown === index && (
                    <motion.ul className="bg-gray-100 pl-8 py-2">
                      {menu.submenu.map((sub, subIndex) => (
                        <li key={subIndex} className="py-2">
                          <Link to={sub.link} className="text-black" onClick={closeMobileMenu}>{sub.title}</Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
