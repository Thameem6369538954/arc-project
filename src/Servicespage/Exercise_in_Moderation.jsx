import React from "react";
import { motion } from "framer-motion";
import EX from "../Images/BlogFertilityPreservation.jpeg"; // Replace with your local image path if needed

const ExerciseInModeration = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <div className="w-full h-[500px] relative">
        <img
          src={EX}
          alt="Exercise in Moderation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 bg-opacity-40 flex items-center justify-center"></div>
      </div>

      {/* Content Section */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-pink-400 p-5 text-4xl md:text-5xl font-bold font-[choco] text-center px-4"
      >
        Exercise in Moderation
      </motion.h1>

      <div className="max-w-8xl mx-auto px-6 py-12 font-[choco] space-y-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg leading-relaxed"
        >
          It might sound a bit absurd as exercise is known mainly for the health benefits that it delivers to individuals. But an excess of anything can be injurious to one’s health. Same is the case with exercise. If you overdo it you are sure to decrease your chances of conception.
        </motion.p>

        {/* Section 1 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">Why should one go for Intrauterine Insemination?</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Over exercising protects your body in some respect but also discourages ovulation at the same time. You may be facing hormonal disruptions as a result of prolonged strenuous exercise.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">How does exercise affect fertility?</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Extensive exercise also results in a reduction of body fat in one’s body. Body fat is directly related to levels of estradiol which stimulates the menstrual cycle.
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">Points to Keep in Mind</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Exercise in moderation (30-40 minutes daily).</li>
            <li>Don't overdo strenuous workouts.</li>
            <li>Consult a fitness trainer if necessary.</li>
            <li>Seek medical help if conceiving becomes difficult.</li>
          </ul>
        </motion.div>

        {/* ARC Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">Why choose ARC?</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            The doctors at ARC are experts in their field and aim to solve all your infertility-related problems by the best possible means.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ExerciseInModeration;
