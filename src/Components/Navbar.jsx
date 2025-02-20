import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SlArrowDown } from "react-icons/sl";
import arclogo from "../Images/arclogo.png";
import { TbMenu3 } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";


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
    title: "Services",
    link: "/services",
    submenu: [
      { title: "Web Development", link: "/services/web-dev" },
      { title: "SEO Optimization", link: "/services/seo" },
      { title: "Marketing", link: "/services/marketing" },
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
  {
    title: "Our Experts",
    link: "/",
  
  },
  {
    title: "Our Facilities  ",
    link: "/about",
    submenu: [
      { title: "Our Mission", link: "/about/mission" },
      { title: "Our Team", link: "/about/team" },
      { title: "History", link: "/about/history" },
      { title: "Careers", link: "/about/careers" },
      { title: "Contact Us", link: "/about/contact" },
    ],
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <div className="font-[MyCustomFont] ">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white text-black shadow-md p-8 "
      >
        <div className="max-w-8xl mx-auto flex justify-between items-center">
          {/* 🔹 Logo */}
          <Link to="/">
            <img src={arclogo} className="w-full" alt="Logo" />
          </Link>

          {/* 🔹 Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {menuItems.map((menu, index) => (
              <li key={index} className="relative group">
                <Link
                  to={menu.link}
                  className="hover:text-pink-500 px-4 py-2 flex items-center"
                >
                  {menu.title} {menu.submenu && <span className="ml-1"><SlArrowDown /></span>}
                </Link>

                {/* 🔹 Smooth Hover Submenu */}
                {menu.submenu && (
                  <AnimatePresence>
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white text-black shadow-lg rounded-lg w-48 overflow-hidden z-50"
                    >
                      {menu.submenu.map((sub, subIndex) => (
                        <motion.li
                          key={subIndex}
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.3, delay: subIndex * 0.1, ease: "easeOut" }}
                          className="p-3 hover:bg-pink-100 "
                        >
                          <Link to={sub.link}>{sub.title}</Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>

          {/* 🔹 Desktop Button */}
          <button className="hidden md:block bg-pink-400 px-6 py-2 rounded-lg font-semibold text-white shadow-md hover:bg-pink-500 transition-all">
            Book Appointment
          </button>

          {/* 🔹 Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            { isMobileMenuOpen ?<IoMdClose />:<TbMenu3 />}
            
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
              className="md:hidden bg-white text-black p-4 shadow-md"
            >
              <ul className="space-y-4">
                {menuItems.map((menu, index) => (
                  <li key={index}>
                    <button
                      onClick={() => toggleSubmenu(menu.title)}
                      className="w-full text-left flex justify-between items-center hover:text-pink-500"
                    >
                      {menu.title} {menu.submenu && <span><SlArrowDown /></span>}
                    </button>

                    {/* 🔹 Submenu for Mobile */}
                    {menu.submenu && openSubmenu === menu.title && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="pl-4 mt-2 bg-pink-100 rounded-lg overflow-hidden"
                      >
                        {menu.submenu.map((sub, subIndex) => (
                          <motion.li
                            key={subIndex}
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.3, delay: subIndex * 0.1, ease: "easeOut" }}
                            className="p-2 hover:bg-pink-200"
                          >
                            <Link to={sub.link}>{sub.title}</Link>
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
