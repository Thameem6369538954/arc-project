import React from 'react';
import { motion } from 'framer-motion';

const GynaecologicalConditions = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-9xl mt-30  font-[choco] mx-auto my-10">
      <motion.h2 className="text-2xl font-bold text-pink-500 mb-6" variants={fadeIn} initial="hidden" animate="visible">
        Gynaecological Conditions and Fertility Symptoms Checker Tools
      </motion.h2>

      <motion.p className="mb-6" variants={fadeIn} initial="hidden" animate="visible">
        One of the reasons that you are failing to conceive a child is because of an underlying gynaecological condition.
        Yes, there are several gynaecological conditions that may prevent you from getting pregnant.
      </motion.p>

      {[
        { title: 'Polycystic Ovarian Syndrome (PCOS)', content: [
          'Irregular menstruation cycle and inconsistent ovulation.',
          'It increases the chances of anaesthetic and pregnancy complications, which are mainly related to weight.',
          'Being overweight can significantly reduce the chances of getting pregnant, even with normal ovulation.'
        ]},
        { title: 'Endometriosis', content: [
          'Endometriosis affects women over 30 years, who haven’t had any children yet.',
          'Endometrial cells line the uterus, but sometimes grow outside the uterus including the ovaries.'
        ]},
        { title: 'Fibroids', content: [
          'Intramural - in the uterine wall.',
          'Subserosal - on the outer surface of the uterus.',
          'Submucosal - protruding into the cavity of the uterus.'
        ]}
      ].map((condition, index) => (
        <motion.div key={index} className="mb-6" variants={fadeIn} initial="hidden" animate="visible">
          <h3 className="text-xl font-semibold text-pink-500 mb-2">{condition.title}</h3>
          <ul className="list-disc ml-6">
            {condition.content.map((item, idx) => (
              <li key={idx} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </motion.div>
      ))}

      <motion.p className="text-gray-700 mt-6" variants={fadeIn} initial="hidden" animate="visible">
        ARC Fertility, a state-of-the-art facility, is equipped with advanced tools to help patients with all the necessary treatments.
      </motion.p>
    </div>
  );
};

export default GynaecologicalConditions;
