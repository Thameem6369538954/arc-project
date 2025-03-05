import { useState, useEffect } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 bg-white text-[#d25c78] p-3 text-2xl rounded-full shadow-lg hover:scale-110 transition-all  z-50"
      >
        <MdKeyboardArrowUp  />
        {/* <MdKeyboardArrowUp /> */}
      </button>
    )
  );
};

export default ScrollToTop;
