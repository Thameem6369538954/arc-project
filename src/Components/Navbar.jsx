import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SlArrowDown } from "react-icons/sl";
import arclogo from "../Images/arclogo.png";
import { TbMenu3 } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <div className="font-[MyCustomFont]">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-[#fff8ef] text-black shadow-md p-4 lg:p-6"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/">
            <img src={arclogo} alt="Logo" className="w-44 md:w-56 h-auto" />
          </Link>

          {/* 🔹 Desktop Menu */}
          <ul className="hidden lg:flex space-x-6 text-md font-[MyCustomFont]">
            {menuItems.map((menu, index) => (
              <li key={index} className="relative group">
                <Link
                  to={menu.link}
                  className="hover:text-pink-500 px-4 py-2 flex items-center"
                >
                  {menu.title} {menu.submenu && <SlArrowDown className="ml-1" />}
                </Link>

                {/* 🔹 Hover Submenu */}
                {menu.submenu && (
                  <AnimatePresence>
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`absolute left-0 top-full hidden group-hover:grid bg-white text-black shadow-lg rounded-lg z-50 w-56 
                        ${menu.title === "Services & Treatment" ? "grid grid-cols-3 gap-4 p-4" : "flex flex-col p-3"}`}
                    >
                      {menu.submenu.map((sub, subIndex) => (
                        <motion.li
                          key={subIndex}
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.3, delay: subIndex * 0.1, ease: "easeOut" }}
                          className="p-3 hover:bg-pink-100 rounded-lg transition-all duration-300 ease-in-out border border-gray-200"
                        >
                          {/* ✅ Show Image */}
                          {sub.Image && (
                            <img
                              src={sub.Image}
                              alt={sub.title}
                              className="w-[80px] h-auto mx-auto rounded-md shadow-md"
                            />
                          )}

                          {/* ✅ Submenu Title */}
                          <Link to={sub.link} className="text-black font-[MyCustomFont] text-base block">
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

          {/* 🔹 Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <IoMdClose className="text-2xl" /> : <TbMenu3 className="text-2xl" />}
          </button>
        </div>

        {/* 🔹 Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="lg:hidden bg-white text-black p-4 shadow-md"
            >
              <ul className="space-y-4 text-lg">
                {menuItems.map((menu, index) => (
                  <li key={index}>
                    <button
                      onClick={() => toggleSubmenu(menu.title)}
                      className="w-full text-left flex justify-between items-center hover:text-pink-500"
                    >
                      {menu.title} {menu.submenu && <SlArrowDown />}
                    </button>

                    {/* 🔹 Mobile Submenu */}
                    {menu.submenu && openSubmenu === menu.title && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="pl-4 mt-2 bg-pink-100 rounded-lg"
                      >
                        {menu.submenu.map((sub, subIndex) => (
                          <motion.li key={subIndex} className="p-3 hover:bg-pink-200 rounded-md">
                            <Link to={sub.link} className="block">{sub.title}</Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
