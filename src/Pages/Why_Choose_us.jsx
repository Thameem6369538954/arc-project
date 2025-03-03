import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DD from "../Images/DD.jpg";

const Why_Choose_us = () => {
  const contents = [
    {
      icon: "💕",
      header: "Care",
      text: "Fertility treatments are typically expensive, and many insurance policies do not cover many of the reproductive treatment options. Recognizing that successful fertility treatments are out of reach for some people, ARC has devised a number of schemes to give treatment at a reasonable cost. We encourage great reproductive healthcare at the most competitive price that is affordable to all socioeconomic groups. We are proud of our capacity to deliver superior clinical care as well as excellent emotional support to our patients, and we are now offering financial plans, which are unquestionably an essential service for patients who feel financially burdened to seek our treatment."
    },
    {
      icon: "👨‍⚕️",
      header: "Commitment",
      text: "Caring for patients goes beyond their health and entails adapting the service to their own preferences and needs. It is about recognizing the fact that individuals have their own ideas about what is best for them, as well as their own beliefs and objectives in life. We accomplish this by getting to know patients as individuals and actively involving them in care-related decisions. Nobody likes it when decisions are made without their input. It makes them feel more like an item or a task than like a human being with thoughts and feelings. We put our patients first. We tailor our services to client needs and preferences, rather than the other way around. This allows our patients to maintain their dignity and autonomy rather than making them feel constrained by their situation, we give them hope for a better life."
    },
    {
      icon: "💰",
      header: "Affordable Treatment",
      text: "Our commitment to providing excellent service will allow you to relax for a very long time once you are in our care. Since we understand why our jobs are crucial, we can make a difference for our patients. By being sincere and passionate about our profession, we ensure that every patient receives excellent treatment and flawless care. We think that genuine devotion is the bedrock of effective treatment and care. ARC Fertility Center's culture makes us unique among our competitors. Our competitive price advantage may be easily replicated, but our unique customer service culture and commitment to our patient cannot."
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % contents.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [contents.length]);

  return (
    <div className="w-full min-h-[100vh] mt-30 md:mt-40 bg-[#f4d1ff] p-5">
      <div>
        <h1 className="text-4xl md:text-6xl font-[Belli] p-5 text-center"><span className="text-[#1c97c8]">Why</span> Choose Us</h1>
        <div className="w-full md:w-[90%] mx-auto grid place-items-center">
          <p className="text-lg md:text-xl font-[choco] text-center p-5 mb-10">
            Providing world-class fertility care, ARC Fertility uses the latest machines and instruments in its treatment.
          </p>
        </div>

        <div className="grid place-items-center">
          <div className="bg-white min-h-[400px] md:min-h-[500px] w-full md:w-[80%] rounded-xl drop-shadow-2xl flex flex-col md:flex-row items-center justify-center">
            <div className="w-full md:w-1/2 text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8 }}
                  className="p-5 md:p-10"
                >
                  <div className="text-4xl md:text-6xl mb-5">{contents[index].icon}</div>
                  <h2 className="text-2xl md:text-3xl font-[choco] text-[#333] mb-3">{contents[index].header}</h2>
                  <p className="text-lg md:text-xl font-[choco] text-[#555]">{contents[index].text}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="w-full md:w-1/2 text-center">
              <img src={DD} alt="" className="w-full object-cover rounded-b-xl md:rounded-r-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why_Choose_us;