import React from "react";
import { motion } from "framer-motion";
import Egg from "../Images/Egg.png"
import NumberRolling from "./NumberRolling";

const IVFSection = () => {
  return (
    <div className='bg-[#fff8ef]  w-full min-h-[150vh]'>
    <section className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-16 ">
      {/* Left Side - Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="lg:w-full text-left"
      >
        <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-6xl font-[Belli] text-gray-900 tracking-wide">
          Why Opt For <span className="text-[#1c97c8]">In-Vitro Fertilization (IVF)?</span>
        </h1>

        <h2 className=" text-2xl font-[Heading] text-gray-800 mt-6">Vitro Fertilization</h2>
        <div className="w-16 h-1 bg-pink-500 my-2"></div>

        <p className="text-gray-600 font-[choco] text-1xl md:text-3xl mt-4">
          In-Vitro fertilization (IVF) is the most effective fertility treatment available today.
          IVF treatments at NIF offer the highest success rates and quickest time-to-pregnancy in India.
          We’re one of the top IVF clinics in the world, after all!.
        </p>

        <h3 className="text-xl font-[Heading] text-gray-900 mt-6">Reasons for taking IVF may include:</h3>
        <ul className="mt-4 space-y-2 font-[choco] text-1xl md:text-3xl">
          {[
            "Low sperm count",
            "Poor egg quality",
            "Uterus or Fallopian tube issues",
            "Ovulation Problems",
            "Unidentified infertility issues",
          ].map((reason, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: false }}
              className="flex items-center text-gray-700"
            >
              <span className="text-pink-500 text-lg mr-2">✦</span> {reason}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
  // initial={{ opacity: 0, x: 50 }}
  // whileInView={{ opacity: 1, x: 0 }}
  // transition={{ duration: 0.8 }}
  // viewport={{ once: false, amount: 0.3 }}
  className="w-full flex justify-center lg:justify-end mt-8 lg:mt-0"
>
  <img
    src={Egg}
    alt="Mother and Baby"
    className="w-4/5 sm:w-3/5 md:w-2/5 lg:w-[400px] xl:w-[500px] rounded-lg"
  />
</motion.div>

    </section>

  {/* <NumberRolling /> */}
    <div className="grid place-items-center relative w-full">
    <div  className="absolute" >
</div>
    </div>



    </div>
  );
};

export default IVFSection;
