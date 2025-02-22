import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SlArrowDown } from "react-icons/sl";
import arclogo from "../Images/arclogo.png";
import HeaderImg from "../Images/HeaderImg.png";

const menuItems = [
  {
    title: "About Us",
    link: "/about",
    submenu: [
      { title: "Our Mission", link: "/about/mission" },
      { title: "Our Team", link: "/about/team" },
      { title: "History", link: "/about/history" },
      { title: "Careers", link: "/about/careers" },
      { title: "Contact Us", link: "/about/contact" },
    ],
  },
  {
    title: "Services & Treatment",
    link: "/services",
    submenu: [
      { title: "Web Development", link: "/services/web-dev", Image: HeaderImg },
      { title: "SEO Optimization", link: "/services/seo", Image: HeaderImg },
      { title: "Marketing", link: "/services/marketing", Image: HeaderImg },
    ],
  },
  {
    title: "Success Stories",
    link: "/success-stories",
    submenu: [
      { title: "Customer Reviews", link: "/success/reviews" },
      { title: "Case Studies", link: "/success/case-studies" },
    ],
  },
  {
    title: "Academics",
    link: "/academics",
    submenu: [
      { title: "Programs", link: "/academics/programs" },
      { title: "Faculty", link: "/academics/faculty" },
      { title: "Admissions", link: "/academics/admissions" },
      { title: "Student Life", link: "/academics/student-life" },
      { title: "Resources", link: "/academics/resources" },
    ],
  },
  { title: "Our Experts", link: "/experts" },
  { title: "Our Facilities", link: "/facilities" },
];

const Navbar = () => {
  return (
    <div className="font-[MyCustomFont]">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-[#fff8ef] text-black px-6 py-4 flex justify-between items-center shadow-md"
      >
        {/* Logo */}
        <Link to="/">
          <img src={arclogo} alt="Logo" className="h-12" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          {menuItems.map((menu, index) => (
            <li key={index} className="relative group">
              <Link
                to={menu.link}
                className="hover:text-pink-500 px-4 py-2 flex items-center"
              >
                {menu.title} {menu.submenu && <SlArrowDown className="ml-1" />}
              </Link>

              {/* Submenu */}
              {menu.submenu && (
                <AnimatePresence>
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`absolute left-0 top-full hidden group-hover:flex bg-white text-black shadow-lg rounded-lg z-50 w-max ${
                      menu.title === "Services & Treatment"
                        ? "grid grid-cols-3 gap-6 p-6 w-[85vw] h-[85vh] left-1/2 -translate-x-1/2"
                        : "flex flex-col p-4 left-0"
                    }`}
                  >
                    {menu.submenu.map((sub, subIndex) => (
                      <motion.li
                        key={subIndex}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{
                          duration: 0.3,
                          delay: subIndex * 0.1,
                          ease: "easeOut",
                        }}
                        className="p-3 hover:bg-pink-100 rounded-lg transition-all duration-300 ease-in-out flex flex-col items-center"
                      >
                        {/* Show Image if Available */}
                        {sub.Image && (
                          <img
                            src={sub.Image}
                            alt={sub.title}
                            className="w-[90px] h-auto mx-auto rounded-md shadow-md mb-2"
                          />
                        )}

                        {/* Submenu Title */}
                        <Link to={sub.link} className="text-black text-base">
                          {sub.title}
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                </AnimatePresence>
              )}
            </li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
};

export default Navbar;
 