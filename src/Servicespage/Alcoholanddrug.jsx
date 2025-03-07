import { motion } from "framer-motion";

const FertilityInfo = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="p-6 max-w-9xl mx-auto mt-40 font-[choco]">
         <motion.h2
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-2xl  text-center text-pink-400 font-bold mb-4"
      >
        How alcohol affects fertility?
      </motion.h2>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-lg text-gray-700 mb-6"
      >
The fact that alcohol and drugs can cause much damage to your body is known by all. But still, there are many people who continue to take alcohol and drugs on a frequent basis. Being ignorant of the fact that it may adversely affect your reproductive system, people have made drug and alcohol abuse a matter of regular intake. If woman are addicted towards excessive intake of such harmful components then they are sure to face problem while conceiving. Doctors at ARC will help you get rid of such addictions so that you can help reduce the problems associated with infertility so that you don’t problem with the conception part.      </motion.p>

      <motion.h2
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-2xl text-pink-400 font-bold mb-4"
      >
        How alcohol affects fertility?
      </motion.h2>

      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-lg text-gray-700 mb-6"
      >
If you drink more than six alcoholic beverages a week than there are high chances of hormonal imbalances taking place in your body. Hormonal imbalances affect reproductive system in both man and woman. So if you are planning to have a baby, then quitting alcohol will be the best option for you. Excessive alcohol intake not only stimulates hormonal imbalances but is also responsible for disrupting menstrual cycles and reducing ovarian weight as well. All this is a big hindrance in the entire reproductive system and stops fertilization process.      </motion.p>

      <motion.h2
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-2xl text-pink-400 font-bold mb-4"
      >
        How drug affects fertility?
      </motion.h2>

      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-lg text-gray-700 mb-6"
      >
The female reproductive system is greatly altered as a result of prolonged drug abuse. The harmful and illicit drugs are known to alter a woman’s menstrual cycle. Alternatively, malnutrition is also observed as a result of drug abuse which leads to abnormalities in a menstrual cycle. This statement holds true for many cases where woman are extensively addicted to cocaine and heroin. All these illicit drugs adversely impact the chemical balance within a female body, damaging many organs. Woman’s egg can be considerably damaged by substance abuse which can also lead to children being born with health issues. A Woman’s fallopian tube is also damaged with excessive drug intake which can prove to be a big hindrance in the process of fertilization.      </motion.p>

      <motion.h2
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-2xl text-pink-400 font-bold mb-4"
      >
        Why choose ARC?
      </motion.h2>

      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-lg text-gray-700"
      >
ARC, being the pioneer in this field has been delivering consultation to many affected women. The professionals at this hospital have extensive years of experience and have a track record of carrying out the maximum number of successful treatments. They offer a consultation session where they first understand the case clearly and then proceed with suggesting the relevant course of action. No matter whether you have been facing this problem from past 1 year or more than that, the doctors are sure to get you out of this problem, so that you don’t have any problem in conceiving. The doctors are well-trained and have immense knowledge on every related aspect. They not only help you reduce the threats associated with substance abuse but also help you get rid of the alcohol and drug addiction safely and effectively. This will not only help you overcome infertility problems but will also improve your overall health conditions so that you are not only able to conceive properly but also have a healthy body that is prepared for a baby.      </motion.p>
    </div>
  );
};

export default FertilityInfo;
