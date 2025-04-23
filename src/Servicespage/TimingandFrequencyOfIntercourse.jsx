import React from "react";
import { motion } from "framer-motion";
import HeroImage from "../Images/BlogFertilityPreservation.jpeg"; // Add your own hero image here

const TimingandFrequencyOfIntercourse = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <div className="w-full h-[500px] relative">
        <img
          src={HeroImage}
          alt="Timing & Frequency"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 bg-opacity-40 flex items-center justify-center"></div>
      </div>

      {/* Heading */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-pink-600 p-5 text-4xl md:text-5xl font-bold font-[choco] text-center px-4"
      >
        Timing & Frequency Of Intercourse
      </motion.h1>

      {/* Content */}
      <div className="max-w-8xl mx-auto px-6 py-12 font-[choco] space-y-10">
        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg leading-relaxed"
        >
          Many people want to conceive but are unable to do so due to several factors.
          There is a certain time when a woman is at her highest productive stage every month.
          If one tries to conceive during that time, there are higher chances that a woman will be able to conceive.
          Timing and frequency of intercourse can considerably affect the reproductive process and increase the chances of fertilization.
          It is advisable to always consult a professional. Doctors at ARC have extensive experience in reproductive concerns and will
          prove to be the best companion in solving all your infertility problems.
        </motion.p>

        {/* Intercourse Timing */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">Intercourse Timing</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            To increase your chances of conceiving, try to have intercourse two days before or on the day of ovulation.
            This is the most productive timeframe since there will be a healthy supply of sperm in your fallopian tube when eggs are released.
            However, many women are unaware of their ovulation timing. You can use an ovulation calculator, ovulation prediction kit,
            or observe symptoms like changes in basal body temperature and cervical mucus.
            Professional medical guidance can greatly assist in identifying your ovulation period accurately.
          </p>
        </motion.div>

        {/* Intercourse Frequency */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">Intercourse Frequency</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            The fertile window is determined by your menstrual cycle and the lifespan of your partner’s sperm and your eggs.
            Some believe reducing intercourse frequency increases sperm supply, but this is not always true.
            Couples with normal fertility conditions should increase intercourse frequency during the fertile window to boost conception chances.
            Despite frequent intercourse potentially reducing sperm count, consistent intercourse during the fertile window often increases
            the probability of conception.
          </p>
        </motion.div>

        {/* Why ARC */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">Why Choose ARC?</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Infertility is a sensitive issue that requires professional guidance. The experts at ARC ensure your comfort throughout each session,
            allowing open discussions without hesitation. Your privacy and data security are top priorities at ARC.
            Their professionals can help you plan intercourse strategies like timing, duration, and frequency to maximize conception chances.
            ARC stands among the top infertility hospitals in India, helping millions of people overcome infertility.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TimingandFrequencyOfIntercourse;
