import React from 'react';
import { motion } from 'framer-motion';

const ExerciseInModeration = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-gray-100 py-10 px-6 md:px-20 mt-20 font-[choco]">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="max-w-9xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden p-6"
      >
        <h1 className="text-3xl font-bold text-center font-[belli] text-pink-400 mb-6">Exercise in Moderation</h1>
        <img
          src="https://source.unsplash.com/600x300/?exercise"
          alt="Exercise"
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
        <p className="text-gray-700 leading-relaxed mb-6">
          It might sound a bit absurd as exercise is known mainly for the health benefits that it delivers to individuals.
          But an excess of anything can be injurious to one’s health. Same is the case with exercise. If you overdo it you are sure to decrease your chances of conception.
        </p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-pink-400">Why should one go for Intrauterine Insemination?</h2>
          <p className="text-gray-700 leading-relaxed mt-2">
            Over exercising protects your body in some respect but also discourages ovulation at the same time. You may be facing hormonal disruptions as a result of prolonged strenuous exercise.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-pink-400">How does exercise affect fertility?</h2>
          <p className="text-gray-700 leading-relaxed mt-2">
            Extensive exercise also results in a reduction of body fat in one’s body. Body fat is directly related to levels of estradiol which stimulates the menstrual cycle.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-pink-400">Points to Keep in Mind</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>Exercise in moderation (30-40 minutes daily).</li>
            <li>Don't overdo strenuous workouts.</li>
            <li>Consult a fitness trainer if necessary.</li>
            <li>Seek medical help if conceiving becomes difficult.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-pink-400">Why choose ARC?</h2>
          <p className="text-gray-700 leading-relaxed mt-2">
            The doctors at ARC are experts in their field and aim to solve all your infertility-related problems by the best possible means.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ExerciseInModeration;
