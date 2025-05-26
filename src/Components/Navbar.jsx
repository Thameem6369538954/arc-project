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
      {
        title: "Team",
        link: "/OurTeam",
        submenu: [
          { title: "Our Experts", link: "/OurExperts" },
          { title: "Leadership Team", link: "/OurTeam" },
        ],
      },
      { title: "Why Choose Us", link: "/Why_Choose_us" },
      { title: "Virtual Tour", link: "/about/contact" },
    ],
  },
  { title: "Services & Treatment", link: "/Services_and_Treatment" },
  {
    title: "Academics",
    link: "/academics",
    submenu: [
      { title: "PG Programs", link: "/Pgprogrammes" },
      { title: "Fellowship Programs", link: "/academics/fellowshipprograms" },
    ],
  },
  {
    title: "Success Stories",
    link: "/success-stories",
    submenu: [
      { title: "Awards & Recognitions", link: "/Awards" },
      { title: "Testimonials", link: "/Testimonial" },
      { title: "Patient Stories", link: "/success/case-studies" },
    ],
  },
  { title: "Our Packages", link: "/OurPackages" },
  { title: "International Patients", link: "/InternationalPatients" },
  { title: "Contact", link: "/Contactus" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [subDropdown, setSubDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveDropdown(null);
    setSubDropdown(null);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
    setSubDropdown(null);
  };

  const toggleSubDropdown = (subIndex) => {
    setSubDropdown(subDropdown === subIndex ? null : subIndex);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setSubDropdown(null);
  };

  return (
    <div className="w-full fixed top-0 z-50 bg-[#fff8ef] shadow-md font-[choco]">
      <nav className="flex lg:justify-around justify-between px-2 items-center">
        <Link to="/" onClick={closeMenu}>
          <img src={arclogo} alt="Logo" className="h-30 py-4 px-4" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-5">
          {menuItems.map((menu, index) => (
            <li key={index} className="relative group">
              <Link
                to={menu.link}
                onClick={closeMenu}
                className="hover:text-pink-500 px-2 py-2 flex items-center text-xl"
              >
                {menu.title} {menu.submenu && <SlArrowDown className="ml-1" />}
              </Link>

              {menu.submenu && (
                <ul className="absolute hidden group-hover:block bg-white shadow-md rounded-lg w-48 z-50 text-base">
                  {menu.submenu.map((sub, subIndex) => (
                    <li key={subIndex} className="hover:bg-pink-100 p-3 relative group/submenu">
                      <Link
                        to={sub.link}
                        onClick={closeMenu}
                        className="flex justify-between items-center"
                      >
                        {sub.title}
                        {sub.submenu && <SlArrowDown className="ml-2" />}
                      </Link>

                      {sub.submenu && (
                        <ul className="absolute hidden group-hover/submenu:block bg-white shadow-md rounded-lg left-full top-0 w-48">
                          {sub.submenu.map((nested, i) => (
                            <li key={i} className="hover:bg-pink-100 p-3">
                              <Link to={nested.link} onClick={closeMenu}>
                                {nested.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Burger Icon */}
        <button onClick={toggleMobileMenu} className="lg:hidden text-2xl p-5">
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
                      transition={{ duration: 0.3 }}
                      className="bg-gray-100"
                    >
                      {menu.submenu.map((sub, subIndex) => (
                        <li key={subIndex} className="pl-10 py-2 relative">
                          {sub.submenu ? (
                            <>
                              <button
                                onClick={() => toggleSubDropdown(subIndex)}
                                className="flex justify-between w-full items-center"
                              >
                                {sub.title}
                                <SlArrowDown
                                  className={`ml-2 transition-transform ${
                                    subDropdown === subIndex ? "rotate-180" : ""
                                  }`}
                                />
                              </button>

                              <AnimatePresence>
                                {subDropdown === subIndex && (
                                  <motion.ul
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-gray-200"
                                  >
                                    {sub.submenu.map((nested, i) => (
                                      <li key={i} className="pl-6 py-2">
                                        <Link to={nested.link} onClick={closeMenu}>
                                          {nested.title}
                                        </Link>
                                      </li>
                                    ))}
                                  </motion.ul>
                                )}
                              </AnimatePresence>
                            </>
                          ) : (
                            <Link to={sub.link} onClick={closeMenu}>
                              {sub.title}
                            </Link>
                          )}
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
