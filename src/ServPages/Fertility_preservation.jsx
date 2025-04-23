import React from "react";
import { motion } from "framer-motion";
import AS from "../Images/BlogFertilityPreservation.jpeg"

const FertilityPreservation = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <div className="w-full h-[500px] relative">
        <img
          src={AS}
          alt="Fertility Preservation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 bg-opacity-40 flex items-center justify-center">
          
        </div>
      </div>

      {/* Content Section */}
      <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-pink-400 p-5 text-4xl md:text-5xl font-bold font-[choco] text-center px-4"
          >
            Fertility Preservation
          </motion.h1>
      <div className="max-w-8xl mx-auto px-6 py-12 font-[choco] space-y-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg leading-relaxed"
        >
          Fertility preservation allows individuals to retain their ability to reproduce by storing reproductive tissues or cells. It’s especially beneficial for cancer patients undergoing treatments like chemotherapy, radiation, or surgery. It’s also a helpful option for those with autoimmune disorders or those wishing to delay childbearing.
        </motion.p>

        {/* Male Techniques */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">Techniques for Males</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Sperm Banking:</strong> Freezing and storing sperm for later use.</li>
            <li><strong>Testicular Sperm Extraction:</strong> Retrieval of sperm from testicular tissue.</li>
            <li><strong>Radiation Shielding:</strong> Protection of gonads during therapy.</li>
            <li><strong>Testicular Tissue Freezing:</strong> Preserving testicular tissues surgically.</li>
          </ul>
        </motion.div>

        {/* Female Techniques */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">Techniques for Females</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Embryo Cryopreservation:</strong> Freezing IVF embryos for future use.</li>
            <li><strong>Oocyte Cryopreservation:</strong> Freezing mature or immature eggs.</li>
            <li><strong>Ovarian Tissue Freezing:</strong> Preserving ovarian cortex with follicles.</li>
            <li><strong>In vitro Maturation (IVM):</strong> Maturing and freezing oocytes outside the body.</li>
            <li><strong>Ovarian Transposition:</strong> Repositioning ovaries away from radiation zones.</li>
            <li><strong>Gonadal Shielding:</strong> Radiation protection for ovaries in young girls.</li>
          </ul>
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
            ARC provides expert fertility treatment with early diagnosis and advanced techniques. With cutting-edge labs and compassionate care, we ensure the highest quality IVF and fertility services.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FertilityPreservation;
