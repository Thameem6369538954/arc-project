import React, { useState, useEffect } from "react";
import Egg from "../Images/Egg.png";
import Downarrow from "../Images/Downarrow.png";
import Baby from "../Images/Baby.png";
import { motion, useAnimation } from "framer-motion";
import { Play, Pause } from "lucide-react";

const videoLinks = [
  'https://www.youtube.com/embed/f6nC2tGyLw0?si=zKTtr16wTVJDmA0W',
  'https://www.youtube.com/embed/f6nC2tGyLw0?si=zKTtr16wTVJDmA0W',
  'https://www.youtube.com/embed/f6nC2tGyLw0?si=zKTtr16wTVJDmA0W',
  'https://www.youtube.com/embed/f6nC2tGyLw0?si=zKTtr16wTVJDmA0W',
  'https://www.youtube.com/embed/f6nC2tGyLw0?si=zKTtr16wTVJDmA0W',
  'https://www.youtube.com/embed/f6nC2tGyLw0?si=zKTtr16wTVJDmA0W',
  
];

const Ivfsection = () => {
  const [playing, setPlaying] = useState(Array(videoLinks.length).fill(false));
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const isAnyVideoPlaying = playing.some((status) => status);

  // Function to start/stop scrolling
  const startScrolling = () => {
    controls.start({
      x: ["0%", "-100%"],
      transition: { duration: 40, repeat: Infinity, ease: "linear" },
    });
  };

  const stopScrolling = () => {
    controls.stop();
  };

  useEffect(() => {
    if (!isHovered && !isAnyVideoPlaying) {
      startScrolling();
    } else {
      stopScrolling();
    }
  }, [isHovered, isAnyVideoPlaying]);

  const togglePlay = (index) => {
    setPlaying((prev) => {
      const newPlaying = [...prev];
      newPlaying[index] = !newPlaying[index];
      return newPlaying;
    });
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-5 relative">
    
    <img
  src={Baby}
  className="absolute -top-10 right-1 md:top-10 md:right-25 w-[180px] sm:w-[220px] md:w-[250px] lg:w-[300px]"
  alt="Baby"
/>

      <div className="w-[90%] min-h-[650px] bg-[#e1f4fb] rounded-xl shadow-lg">
        {/* Heading */}
        <h1 className="font-[Belli] text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-6xl mt-5 px-5 text-black tracking-wide">
          Our <span className="text-pink-400">Success</span> Stories
        </h1>
        <div className="flex items-center justify-around w-[100%] md:w-[70%] px-2">
          <p className="font-[choco] text-1xl md:text-3xl p-5 ">
            Our pioneering approach has consistently delivered double the
            national success rates for IVF and ICSI per cycle started, helping
            tens of thousands of patients have babies even after unsuccessful
            treatment elsewhere.
          </p>
          <div>
            <img
              src={Downarrow}
              alt="Egg Illustration"
              className="w-[150px] md:w-[200px]"
            />
          </div>
        </div>

        {/* Marquee Video Section */}
        <div className="w-full overflow-hidden bg-[#e1f4fb] py-10 mt-5 flex justify-center">
          <motion.div
            className="flex space-x-10"
            animate={controls}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {videoLinks.map((link, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-[320px] sm:w-[380px] md:w-[420px] bg-white p-5 rounded-xl shadow-lg border-4 border-white text-center transform rotate-2"
              >
                <iframe
                  width="100%"
                  height="230"
                  src={`${link}?autoplay=${playing[index] ? 1 : 0}&mute=1&loop=1&playlist=${
                    link.split("/embed/")[1]
                  }`}
                  title={`YouTube Video ${index + 1}`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="rounded-xl"
                ></iframe>

                {/* Play/Pause Button */}
                <button
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
                  onClick={() => togglePlay(index)}
                >
                  {playing[index] ? <Pause size={24} /> : <Play size={24} />}
                </button>

                {/* Video Title */}
                {/* <h3 className="mt-4 font-bold text-lg">Video {index + 1}</h3>
                <p className="text-gray-600">Published: 2024</p> */}
                <div className="p-5"></div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Ivfsection;
