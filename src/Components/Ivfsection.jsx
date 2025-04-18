import React, { useState, useEffect } from "react";
import Egg from "../Images/Egg.png";
import Downarrow from "../Images/Downarrow.png";
import Baby from "../Images/Baby.png";
import { motion, useAnimation } from "framer-motion";
import { Play, Pause } from "lucide-react";

const videoLinks = [
  'https://www.youtube.com/embed/M7NA_Mjjf8k?si=5wVpovkr0VwbdpQi',
  'https://www.youtube.com/embed/f6nC2tGyLw0?si=_Qw7Dp6MJ8lanECF',
  'https://www.youtube.com/embed/qDJIpukgwP8?si=YhrQbsiGj8cApXQF',
  'https://www.youtube.com/embed/qDJIpukgwP8?si=YhrQbsiGj8cApXQF',
  'https://www.youtube.com/embed/afWVk1KtPPU?si=Q54SCB9nNZnySCIM',
  'https://www.youtube.com/embed/-Eond9ws-Pw?si=q3f5nU461TLwx9Yh',
  'https://www.youtube.com/embed/6i2LOhhXbT0?si=gL6YKpvjdjMLjimQ',
  'https://www.youtube.com/embed/bpiQQCHVdCA?si=E70disQbCN1nAtBr',
  'https://www.youtube.com/embed/X7zmvSZcGXA?si=GyaFyROWve2qM6Jx',
  // 'https://www.youtube.com/embed/7v8LREB47S8?si=B0IDf6Dmdmm0xQ6Z',
];

const Ivfsection = () => {
  const [playing, setPlaying] = useState(Array(videoLinks.length).fill(false));
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const isAnyVideoPlaying = playing.some((status) => status);

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
    <div className="w-full min-h-screen flex items-center justify-center p-5 relative bg-[#e1f4fb]">
      <img
        src={Baby}
        className="absolute top-80 right-10 md:top-10 md:right-25 w-[180px] sm:w-[220px] md:w-[250px] lg:w-[300px]"
        alt="Baby"
      />

      <div className="w-[90%] min-h-[650px] rounded-xl shadow-lg bg-[#f9f3aa]">
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

        <div className="w-full overflow-hidden py-10 mt-5 flex justify-center">
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
                  src={`${link}?autoplay=${playing[index] ? 1 : 0}&mute=1&loop=1&playlist=${link.split("embed/")[1].split("?")[0]}`}
                  title={`YouTube Video ${index + 1}`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="rounded-xl"
                ></iframe>

                <button
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
                  onClick={() => togglePlay(index)}
                >
                  {playing[index] ? <Pause size={24} /> : <Play size={24} />}
                </button>
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
