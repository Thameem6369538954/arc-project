import { motion } from 'framer-motion';

const YogaBenefits = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen bg-white p-10 font-[choco] mt-30">

      <motion.h1
        className="text-3xl font-bold text-red-500 mb-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >  Yoga <br /><br />
        Why choose ARC?
      </motion.h1>
      <div className="space-y-6">
        {[
          { title: "Diminishes stress", image: "https://via.placeholder.com/400" },
          { title: "Detoxifies the body", image: "https://via.placeholder.com/400" },
          { title: "Increases blood circulation", image: "https://via.placeholder.com/400" },
          { title: "Reinforce immune system", image: "https://via.placeholder.com/400" },
          { title: "Maintain healthy ovaries", image: "https://via.placeholder.com/400" },
          { title: "Helps in hormonal treatment", image: "https://via.placeholder.com/400" },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
          >
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. ARC provides yoga support to enhance your fertility and overall well-being.
            </p>
          </motion.div>
        ))}
      </div>
      <motion.p
        className="mt-10 text-lg text-gray-700 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        ARC is outstanding in research and innovation in its products and services, providing a reasonable package for fertility medication.
      </motion.p>
    </div>
  );
};

export default YogaBenefits;
