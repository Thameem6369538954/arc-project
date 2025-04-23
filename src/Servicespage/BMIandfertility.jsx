import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckSquare } from 'react-icons/fa';
import EX from "../Images/BlogFertilityPreservation.jpeg"; 

const BmiFertility = () => {
  const listItems = [
    "A normal body weight is a BMI of about 18.5-24.9",
    "A BMI lower than 18.5 indicates that the person is underweight",
    "A BMI ranging between 25-29.9 indicates that the person is overweight",
    "A BMI higher than 30 indicates that the person is obese",
    "A BMI over 40 indicates extreme obesity"
  ];

  const lowBmiEffects = [
    "In women, low BMI level results in reduction of estrogen which leads to abnormal menstrual cycle. It can also lead to amenorrhea or the lack of menstrual cycle.",
    "Endorphins, released during exercise, increase the level of prolactin. An increase in prolactin level decreases the possibility of pregnancy."
  ];

  const highBmiEffects = [
    "Girls experience an early onset of puberty due to obesity whereas it leads to delayed puberty in boys. During puberty, obesity affects hormonal imbalance which causes lower levels of testosterone which reduce the reproductive growth of boys, thus delaying puberty.",
    "High BMI level results in irregularities in menstrual cycle, lack of or reduction in ovulation, increase in the rate of miscarriage, inability to conceive.",
    "Obesity causes polycystic ovary syndrome (PCOS) which is characterised by anovulation, hypothalamic hypogonadism, menstrual irregularities and infertility.",
    "High BMI level leads to hormonal imbalance which leads to decreased chances of conceiving and irregular menstrual cycle in women. While in men, it results in reduced sperm count and fertility.",
    "Increase in BMI causes increase in sperm oxidative stress which results in sperm damage, decrease in acrosomal reactions and lower embryo implantation rates after IVF.",
    "Obesity causes endometrial damage which affects the implantation process eventually leading to miscarriage and infertility.",
    "Assisted fertility treatments like in-vitro fertilisation (IVF) are comparatively less successful in obese people.",
    "In males, obesity can cause a rise in scrotal temperature and erectile dysfunction."
  ];

  const arcReasons = [
    "With over a decade of experience in medicine and administration, we offer advanced treatment options for sexual dysfunction, infertility and assisted reproductive treatments with precision and care at a reasonable price.",
    "Presence of cutting edge infrastructure and state of the art laboratories for IVF treatment makes ARC one of the best medical facilities in the world.",
    "We provide a calm and quiet environment that helps in the healing process."
  ];

  const listVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="p-8 space-y-8 mt-30 font-[choco]">
            <div className="w-full h-[500px] relative">
              <img
                src={EX}
                alt="Exercise in Moderation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 bg-opacity-40 flex items-center justify-center"></div>
            </div>
      <h2 className="text-6xl font-[belli] text-center ">BMI and Fertility</h2>
      <ul className="space-y-2">
        {listItems.map((item, index) => (
          <motion.li
            key={index}
            variants={listVariant}
            initial="hidden"
            animate="visible"
            className="flex items-start gap-2"
          >
            <FaCheckSquare className="text-pink-400 mt-1" /> {item}
          </motion.li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold text-pink-400">Impact of low BMI on fertility</h3>
      <ul className="space-y-2">
        {lowBmiEffects.map((effect, index) => (
          <motion.li
            key={index}
            variants={listVariant}
            initial="hidden"
            animate="visible"
            className="flex items-start gap-2"
          >
            <FaCheckSquare className="text-pink-400 mt-1" /> {effect}
          </motion.li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold text-pink-400">Impact of high BMI on fertility</h3>
      <ul className="space-y-2">
        {highBmiEffects.map((effect, index) => (
          <motion.li
            key={index}
            variants={listVariant}
            initial="hidden"
            animate="visible"
            className="flex items-start gap-2"
          >
            <FaCheckSquare className="text-pink-400 mt-1" /> {effect}
          </motion.li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold text-pink-400">Reasons to choose ARC</h3>
      <ul className="space-y-2">
        {arcReasons.map((reason, index) => (
          <motion.li
            key={index}
            variants={listVariant}
            initial="hidden"
            animate="visible"
            className="flex items-start gap-2"
          >
            <FaCheckSquare className="text-pink-400 mt-1" /> {reason}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default BmiFertility;
