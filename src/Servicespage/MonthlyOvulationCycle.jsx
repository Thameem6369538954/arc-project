import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const OvulationCycle = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.3 } },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="p-6 max-w-9xl mt-30 font-[choco] mx-auto space-y-6">
      <motion.h2 variants={fadeIn} className="text-3xl font-bold text-red-600">
        The Monthly Ovulation Cycle
      </motion.h2>
      <motion.p variants={fadeIn}>
        Every woman would normally produce one egg during each cycle. This procedure takes place every month, but you have to be careful that the ‘fertile window’ only lasts for some four to five days during which you can get pregnant. The sperm has a lifespan of 5 days and this reflects the fertile window. The ovum has a lifespan of 24 hours and can get inseminated only during then. Thus the ‘fertile window’ lasts for the five days ending with the day of ovulation.
      </motion.p>
      <motion.h3 variants={fadeIn} className="text-2xl font-bold text-red-600">
        What is ovulation?
      </motion.h3>
      <motion.p variants={fadeIn}>
        The process of release of a mature egg from the ovary into the fallopian tube and be available there to be fertilised.
      </motion.p>
      <motion.h3 variants={fadeIn} className="text-2xl font-bold text-red-600">
        How to track the ovulation?
      </motion.h3>
      <motion.p variants={fadeIn}>
        Tracking the average menstrual cycle is necessary before you track the day of ovulation. The first day of the menstrual cycle marks the beginning of the period and the last day marks the end of the menstruation process.
      </motion.p>
      <motion.p variants={fadeIn}>
        Ovulation generally happens two weeks prior to the beginning of the next cycle. Now, a rough idea is chalked out about the day of ovulation, the ‘fertility window’ can be calculated. The three days leading up to and including the day of ovulation is the best for having sexual intercourse in order to get pregnant.
      </motion.p>
      <motion.h3 variants={fadeIn} className="text-2xl font-bold text-red-600">
        How to know if you are ovulating?
      </motion.h3>
      <ul className="list-none space-y-4">
        <motion.li variants={fadeIn} className="flex items-start gap-2">
          <FaCheck className="text-red-600 mt-1" /> The mucus in the vagina would be clear and slippery, much like that of egg whites.
        </motion.li>
        <motion.li variants={fadeIn} className="flex items-start gap-2">
          <FaCheck className="text-red-600 mt-1" /> The ovulation predictor kit would show signs about a day before you start ovulating if checking is done prior to that point.
        </motion.li>
        <motion.li variants={fadeIn} className="flex items-start gap-2">
          <FaCheck className="text-red-600 mt-1" /> Another way is to constantly monitor the basal body temperature. Ovulation would cause an increase of about half a degree Celsius.
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default OvulationCycle;
