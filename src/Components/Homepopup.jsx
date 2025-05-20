import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Ar from "../Images/home.jpeg";
import paper from "../Animations/paper.json";
import Baby from "../Animations/Baby.json";
import Lottie from "lottie-react";
import logo from "../Images/arclogo.png"
import { IoIosClose } from "react-icons/io";

const HomePopup = () => {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(location.pathname === "/");
  }, [location]);

  const handleClose = () => setShowPopup(false);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn ">
      <div
        className="relative w-[90%] max-w-8xl xl:min-h-[600px] rounded-xl overflow-hidden shadow-2xl bg-cover bg-center flex items-center justify-center md:mt-40"
        style={{ backgroundImage: `url(${Ar})` }}
      >
        <button onClick={handleClose} className="absolute top-4 right-4 text-white bg-white hover:bg-red-700 rounded-full p-2 shadow-lg transition-all duration-200"><IoIosClose className="md:text-2xl lg:text-2xl text-pink-400 hover:text-white" /></button>
        {/* Background floating animation */}
        <Lottie
          animationData={paper}
          className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"
        />

        {/* Floating baby animation */}
        <Lottie
          animationData={Baby}
          className="absolute lg:-top-10 lg:right-10 w-30  md:w-60 lg:w-70 sm:top-34 top-20  sm:w-40 pointer-events-none"
        />

        {/* Popup content */}
        <div className="relative z-10 text-white text-center py-12 max-w-9xl flex flex-col items-center justify-center max-2xl:ml-10 ml-50 sm:ml-70 md:ml-80 xl:ml-130">
          <div>
 <h1 className="text-3xl lg:text-6xl font-bold font-[bebas] text-pink-400 tracking-wide drop-shadow-lg mb-4 animate-fadeUp">
            World's Best Fertility Hospital
          </h1>
 <h1 className="text-xl md:text-6xl font-bold font-[bebas] text-pink-400 tracking-wider drop-shadow-lg mb-4 animate-fadeUp">
            ARC
          </h1>
          <p style={{ wordSpacing: "0.1em" }} className="text-md md:text-4xl  font-[mollai] text-pink-400 mb-6 drop-shadow-md animate-fadeUp delay-100">
            20 Years of transforming Hopes into Heartbeats
          </p>
          
          </div>
          <div>
            <img src={logo}  className="lg:w-70 w-40"  alt="" />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default HomePopup;
