import { motion } from 'framer-motion';

const MaleSexualDysfunction = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="p-6 md:p-12 mt-20 font-[choco]">
      <motion.h2
        className="text-xl md:text-2xl font-semibold text-gray-800 mb-4"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        Male Sexual Dysfunction
      </motion.h2>
      <motion.p
        className="text-gray-700 mb-6 leading-relaxed"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        Today’s sedentary lifestyle has led to an increased stress level in people of all age groups. Stress can be one of the factors that affect the fertility process because stress levels are expected to reduce libido in individuals. This is an example of sexual dysfunction that affects both partners and causes hindrance in the overall fertilization process.
      </motion.p>

      <motion.h3
        className="text-lg md:text-xl font-semibold text-pink-600 mb-2"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        Causes of Male Sexual Dysfunction
      </motion.h3>
      <motion.p className="text-gray-700 mb-6 leading-relaxed" variants={fadeIn} initial="hidden" animate="visible">
        There are several things which affect an individual’s sexual life adversely. Common causes include low testosterone levels, excessive intake of antidepressants, blood vessel disorders, smoking, and substance abuse. Psychological causes like work-related stress and anxiety also contribute.
      </motion.p>

      <motion.h3 className="text-lg md:text-xl font-semibold text-pink-600 mb-2" variants={fadeIn} initial="hidden" animate="visible">
        How does Male Sexual Dysfunction affect Men?
      </motion.h3>
      <motion.p className="text-gray-700 mb-6 leading-relaxed" variants={fadeIn} initial="hidden" animate="visible">
        Male sexual dysfunction results in issues like ejaculation problems, erectile dysfunction, and reduced sexual desire. These problems can reduce the desire to have sex and ultimately affect the entire fertility process.
      </motion.p>

      <motion.h3 className="text-lg md:text-xl font-semibold text-pink-600 mb-2" variants={fadeIn} initial="hidden" animate="visible">
        Why Choose ARC?
      </motion.h3>
      <motion.p className="text-gray-700 mb-6 leading-relaxed" variants={fadeIn} initial="hidden" animate="visible">
        ARC is one of India’s best infertility hospitals providing the best treatments. The talented pool of doctors ensures every patient’s data security and privacy. They offer customized treatments with high success rates for couples facing infertility problems.
      </motion.p>
    </div>
  );
};

export default MaleSexualDysfunction;
