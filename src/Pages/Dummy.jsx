import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// import Docter from "../Images/Docter.png";
import Ria from "../Rice/Ria.jpeg"
import Rib from "../Rice/Rib.jpeg"
import Ric from "../Rice/Ric.jpeg"

const cards = [
  {
    image: Ria,
  },
  {
    image: Rib,
  },
  {
    image: Ric,
  },
];

export default function CardSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center min-h-[100vh] p-2 sm:p-4 lg:p-8 bg-[url('../Images/bggg.jpg')] bg-cover bg-center bg-fixed w-full">
      <div className="relative w-full sm:max-w-4xl sm:h-[100vh] flex items-center justify-center overflow-hidden">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: i === index ? 1 : 0.5,
              scale: i === index ? 1 : 0.9,
              x: i === index ? 0 : i === (index + 1) % cards.length ? 100 : -100,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`absolute w-full h-full rounded-lg shadow-lg bg-cover bg-center border-0 border-black-500 transition-all duration-500 ease-in-out ${
              i === index ? "z-20" : "z-10"
            }`}
            style={{ backgroundImage: `url(${card.image})`, height: "100vh", width: "100%" }}
          />
        ))}
      </div>
    </div>
  );
}