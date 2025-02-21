import React from "react";
import { motion } from "framer-motion";
import { AiFillHeart } from "react-icons/ai"; // Care Icon
import { FaMoneyBillWave, FaHandshake } from "react-icons/fa"; // Cost & Commitment Icons

const Whyfertility = () => {
  const icons = {
    Care: <AiFillHeart className="text-pink-400 text-4xl" />,
    Cost: <FaMoneyBillWave className="text-green-500 text-4xl" />,
    Commitment: <FaHandshake className="text-blue-500 text-4xl" />,
  };

  return (
    <div className="p-5">
      {/* Heading Animation */}
      <motion.h1
        className="font-[Heading] md:text-7xl text-6xl p-5"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Why <span className="text-pink-400">ARC</span> Fertility
      </motion.h1>

      <div className="min-h-auto w-full flex flex-col items-center justify-center relative">
        <motion.div
          className="grid place-items-center w-full text-center p-5"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="font-[Heading] md:text-7xl text-6xl">
            ARC <span className="text-pink-400">World-class</span> Parenthood
          </h1>
          <p className="font-[MyCustomFont] p-3">
            ARC Fertility is equipped with advanced and world-class facilities,
            another reason to be one of the best fertility clinics, offering
            quality services to its patients. At ARC, we take care of our
            patients with the experiences that we have gathered for years and
            benefited tens of thousands of patients to get pregnant through
            essential treatment.
          </p>
        </motion.div>

        {/* Animated Cards */}
        <div className="p-5 flex flex-col items-center">
          <h1 className="font-[Heading] text-7xl p-5">
            Why <span className="text-pink-400">ARC</span> Fertility
          </h1>

          <div className="flex flex-col md:flex-row gap-8">
            {["Care", "Cost", "Commitment"].map((title, index) => (
              <motion.div
                key={index}
                className="relative w-64 p-6 bg-white text-black border-2 border-pink-400 rounded-xl shadow-lg transition-transform duration-500 hover:scale-105 hover:rotate-2 hover:shadow-2xl"
                initial={{ opacity: 0, y: 100, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 120,
                }}
              >
                {/* Icon */}
                <div className="flex justify-center">{icons[title]}</div>

                {/* Title */}
                <motion.h1
                  className="text-2xl font-[Heading] text-center mt-3"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                >
                  {title}
                </motion.h1>

                {/* Description */}
                <motion.p
                  className="mt-2 font-[MyCustomFont] text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.7 + index * 0.2, duration: 0.6 }}
                >
                  {title === "Care"
                    ? "Caring for patients goes beyond their health and entails adapting the service to their own ....."
                    : title === "Cost"
                    ? "Fertility treatments are typically expensive, and many insurance policies do not cover ....."
                    : "Our commitment to providing excellent service will allow you to relax for a very long time ....."}

                </motion.p>

                {/* Button */}
                <motion.button
                  className="font-[MyCustomFont] mt-4 py-2 px-4 bg-pink-400 text-white font-semibold rounded-md transition hover:bg-pink-500"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Read More...
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyfertility;
