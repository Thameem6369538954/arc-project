import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Ar from "../Images/home.jpeg"; // Ensure this path is correct
import paper from "../Animations/paper.json"
import Lottie from "lottie-react";
const HomePopup = () => {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  }, [location]);

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className=" relative bg-white rounded-xl shadow-xl overflow-hidden w-[90%] max-w-5xl mt-30 animate-fadeIn">
        {/* Image at the top */}
        <img
          src={Ar}
          alt="Promotional"
          className="w-full min-h-90 object-cover"
        />
        
        {/* Content below the image */}
        <div className="p-5 text-center">
          <h2 className="text-5xl font-semibold mb-2 font-[bebas] tracking-wider">Welcome to Our ARC  WebSite!</h2>
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Close
          </button>
          <Lottie 
  className="absolute top-0 pointer-events-none" 
  animationData={paper} 

/>
        </div>
      </div>
    </div>
  );
};

export default HomePopup;
