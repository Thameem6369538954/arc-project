import React from 'react';
import { motion } from 'framer-motion';

const Healthy_Diet = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="p-6 bg-gray-100 font-[choco]">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="max-w-9xl mx-auto mt-25"
      >
        <h1 className="text-3xl font-bold text-center text-pink-400 mb-8">
          Nutritional Tips for Fertility
        </h1>
        <div className="space-y-8">
          <motion.div variants={fadeIn}>
            <h2 className="text-2xl font-semibold text-pink-400">Choose iron-rich foods</h2>
            <p>Iron-rich foods like beans, lentils, spinach, and whole grains help lower the chances of ovulatory infertility.</p>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h2 className="text-2xl font-semibold text-pink-400">Try to eat mostly cold water fish</h2>
            <p>Cold water fish like salmon and cod provide protein and omega-3 fatty acids that regulate the menstrual cycle.</p>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h2 className="text-2xl font-semibold text-pink-400">Choose grass-fed and organic meat</h2>
            <p>Grass-fed meats provide essential fatty acids and proteins that promote fertility.</p>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h2 className="text-2xl font-semibold text-pink-400">Eat high fiber foods with each meal</h2>
            <p>High fiber foods like vegetables, fruits, and beans regulate blood sugar and improve hormonal balance.</p>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h2 className="text-2xl font-semibold text-pink-400">Drink lots of clean water</h2>
            <p>Water helps detoxify the body and maintain overall health.</p>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h2 className="text-2xl font-semibold text-pink-400">Why Choose ARC?</h2>
            <p>ARC doctors offer expert fertility treatments with personalized care at affordable prices.</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Healthy_Diet;
