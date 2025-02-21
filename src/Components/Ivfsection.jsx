import { motion } from "framer-motion";
import Kid from "../Images/Kid.jpg";

const IVFSection = () => {
  return (
    <section className="container mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center gap-10 relative">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-6 relative z-10">
        <motion.h2
          className="text-4xl font-[Heading] md:text-6xl text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }} // Ensures animation works every time it enters viewport
        >
          Why Opt For In-Vitro Fertilization (IVF)?
        </motion.h2>

        <motion.p
          className="text-gray-700 font-[MyCustomFont]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        >
          In-Vitro fertilization (IVF) is the most effective fertility treatment available today. IVF treatments at NIF offer the highest success rates and quickest time-to-pregnancy in India.
        </motion.p>

        <motion.h3
          className="text-4xl font-[Heading] md:text-6xl text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
         Reasons for taking IVF may include:
        </motion.h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Low sperm count",
            "Poor egg quality",
            "Uterus or Fallopian tube issues",
            "Ovulation problems",
            "Unidentified infertility issues",
          ].map((reason, index) => (
            <motion.li
              key={index}
              className="flex items-center space-x-2 text-gray-700 font-[MyCustomFont]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              <span className="text-pink-500 text-lg">✔</span>
              <span>{reason}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center relative">
        <motion.img
          src={Kid}
          alt="Mother and Baby"
          className="w-full max-w-xs md:max-w-xl rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        />
      </div>
    </section>
  );
};

export default IVFSection;
