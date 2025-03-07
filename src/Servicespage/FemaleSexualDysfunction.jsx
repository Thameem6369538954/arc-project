import { motion } from 'framer-motion';

const FemaleDysfunction = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="mt-30 font-[choco] p-5">
      <motion.h2 initial="hidden" animate="visible" variants={fadeIn} className="text-2xl font-bold text-[#E72E6C]">
        Causes of Female Sexual Dysfunction
      </motion.h2>
      <motion.p initial="hidden" animate="visible" variants={fadeIn} className="mt-4 text-[18px] text-justify">
        Most of the women experience female sexual dysfunction at some point of time or the other and the causes could be various. Several physical, psychological, and hormonal causes are responsible for such problems. Low estrogen levels, excessive intake of antidepressants, substance abuse, untreated anxiety, and sexual abuse in the past are some of the causes of sexual dysfunction in women. Whatever be the cause, but if it is not treated timely, then the women may face more problem in future relating to infertility and her inability to conceive may leave her depressed and mentally exhausted. Hence female sexual dysfunction should not be overlooked and preventive measures need to be taken timely to avoid enhanced problems.
      </motion.p>

      <motion.h2 initial="hidden" animate="visible" variants={fadeIn} className="text-2xl font-bold text-[#E72E6C] mt-10">
        Symptoms of Female Sexual Dysfunction
      </motion.h2>
      <motion.p initial="hidden" animate="visible" variants={fadeIn} className="mt-4 text-[18px] text-justify">
        You can only start early treatment if you are able to identify the symptoms of a disease. Same is the case with female sexual dysfunction. The symptoms can also vary depending on the type of female sexual dysfunction that you have. Low sexual disorder, sexual arousal disorder, orgasmic disorder, and sexual pain disorder are the symptoms which can trigger infertility problems in you. Of the above symptoms, low sexual desire is the most common symptom that has been evidenced in most cases followed by sexual pain order. All these symptoms make intercourse very painful for women and it reduces the desire for sexual activities eventually over a period of time. So when you start noticing any such symptom then make sure to consult a doctor on an immediate basis.
      </motion.p>

      <motion.h2 initial="hidden" animate="visible" variants={fadeIn} className="text-2xl font-bold text-[#E72E6C] mt-10">
        Why Choose ARC?
      </motion.h2>
      <motion.p initial="hidden" animate="visible" variants={fadeIn} className="mt-4 text-[18px] text-justify">
        The main thing that makes ARC the ultimate choice for every patient is the dedication that the professionals stick towards each patient and try to treat them by choosing the best possible method. They make sure that every patient’s data security and privacy are maintained which makes the women not worry about visiting this hospital for treatment. The hospital has helped many women in the past to conceive naturally with proper medications and hence reducing the re-occurrence of such problems in future. All the existing patients are really happy with the treatment as it not only helped them conceive but also helped them in living a healthy life. The tools and equipment that the hospital uses are of higher standards and aim at treating every patient at any cost.
      </motion.p>
    </div>
  );
};

export default FemaleDysfunction;
