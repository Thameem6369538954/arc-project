import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SlArrowDown } from "react-icons/sl";
import { FiMenu, FiX } from "react-icons/fi";
import arclogo from "../Images/arclogo.png";

const menuItems = [
  {
    title: "About Us",
    link: "/About_arc",
    submenu: [
      { title: "About Arc", link: "/About_arc" },
      { title: "Leadership Team", link: "/OurTeam" },
      { title: "Our Experts", link: "/OurExports" },
      { title: "Virtual Tour", link: "/about/contact" },
    ],
  },
  { title: "Services & Treatment", link: "/Services_and_Treatment" },
  {
    title: "Success Stories",
    link: "/success-stories",
    submenu: [
      { title: "Awards & Recognitions", link: "/Awards" },
      { title: "Testimonials", link: "/Testimonial" },
      { title: "Blog", link: "/success/case-studies" },
      { title: "Live", link: "/success/case-studies" },
    ],
  },
  { title: "Our Centers", link: "/Ourcenters" },
  {
    title: "Academics",
    link: "/academics",
    submenu: [
      { title: "PG Programs", link: "/academics/pgprograms" },
      { title: "Fellowship Programs", link: "/academics/fellowshipprograms" },
    ],
  },
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

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <div className="w-full fixed top-0 z-50 bg-[#fff8ef] shadow-md">
      <nav className="flex justify-between items-center px-6 py-4">
        <Link to="/" onClick={closeMenu}>
          <img src={arclogo} alt="Logo" className="h-14 md:h-20" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          {menuItems.map((menu, index) => (
            <li key={index} className="relative group">
              <Link
                to={menu.link}
                onClick={closeMenu}
                className="hover:text-pink-500 px-2 py-2 flex items-center"
              >
                {menu.title} {menu.submenu && <SlArrowDown className="ml-1" />}
              </Link>
              {menu.submenu && (
                <ul className="absolute hidden group-hover:block bg-white shadow-md rounded-lg w-48 z-50">
                  {menu.submenu.map((sub, subIndex) => (
                    <li key={subIndex} className="hover:bg-pink-100 p-3">
                      <Link to={sub.link} onClick={closeMenu}>
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="lg:hidden text-2xl">
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white shadow-md lg:hidden"
          >
            <ul>
              {menuItems.map((menu, index) => (
                <li key={index} className="border-b">
                  <button
                    onClick={() => {
                      toggleDropdown(index);
                      if (!menu.submenu) {
                        closeMenu();
                        window.location.href = menu.link;
                      }
                    }}
                    className="w-full text-left px-6 py-4 flex justify-between items-center"
                  >
                    {menu.title}
                    {menu.submenu && (
                      <SlArrowDown
                        className={`ml-2 transition-transform ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {menu.submenu && activeDropdown === index && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-gray-100"
                    >
                      {menu.submenu.map((sub, subIndex) => (
                        <li key={subIndex} className="pl-10 py-2">
                          <Link to={sub.link} onClick={closeMenu}>
                            {sub.title}
                          </Link>
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
