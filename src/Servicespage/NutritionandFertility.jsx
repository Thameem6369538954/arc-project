import React from 'react';
import { motion } from 'framer-motion';
import EX from "../Images/BlogFertilityPreservation.jpeg"; 

const Healthy_Diet = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-gray-100  mt-20 font-[choco]">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className=" mx-auto bg-white rounded-2xl shadow-lg overflow-hidden p-6"
      >
       
             <div className="w-full h-[500px] relative">
               <img
                 src={EX}
                 alt="Exercise in Moderation"
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-black/30 bg-opacity-40 flex items-center justify-center"></div>
             </div>
         <h1 className="text-6xl font-bold text-center font-[belli] text-pink-400 mb-6 p-5">
          Nutritional Tips for Fertility
        </h1>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-pink-400">Choose iron-rich foods</h2>
          <p className="text-gray-700 leading-relaxed mt-2">
            Iron-rich foods like beans, lentils, spinach, and whole grains help lower the chances of ovulatory infertility.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-pink-400">Try to eat mostly cold water fish</h2>
          <p className="text-gray-700 leading-relaxed mt-2">
            Cold water fish like salmon and cod provide protein and omega-3 fatty acids that regulate the menstrual cycle.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-pink-400">Choose grass-fed and organic meat</h2>
          <p className="text-gray-700 leading-relaxed mt-2">
            Grass-fed meats provide essential fatty acids and proteins that promote fertility.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-pink-400">Eat high fiber foods with each meal</h2>
          <p className="text-gray-700 leading-relaxed mt-2">
            High fiber foods like vegetables, fruits, and beans regulate blood sugar and improve hormonal balance.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-pink-400">Drink lots of clean water</h2>
          <p className="text-gray-700 leading-relaxed mt-2">
            Water helps detoxify the body and maintain overall health.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-pink-400">Why Choose ARC?</h2>
          <p className="text-gray-700 leading-relaxed mt-2">
            ARC doctors offer expert fertility treatments with personalized care at affordable prices.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Healthy_Diet;
