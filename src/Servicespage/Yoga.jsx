import { motion } from 'framer-motion';

const YogaBenefits = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <div className="w-full h-[500px] relative">
        <img
          src="https://via.placeholder.com/150" // Replace with your image URL
          alt="Yoga Benefits"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 bg-opacity-40 flex items-center justify-center"></div>
      </div>

      {/* Content Section */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-pink-400 p-5 text-4xl md:text-5xl font-bold font-[choco] text-center p-4"
      >
        Yoga 
      </motion.h1>

      <div className="max-w-8xl mx-auto px-6 py-12 font-[choco] space-y-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg leading-relaxed"
        >
          Yoga is an amazing practice with a multitude of benefits for physical, mental, and emotional health. It’s important to take a balanced approach to yoga and well-being.
        </motion.p>

        {/* Benefits Section */}
        {[{
          title: "Diminishes stress", 
          image: "https://via.placeholder.com/400", 
          description: "As stated above that stress takes a major part to reduce your fertility, yoga plays a counter role in overcoming stress. Yoga is an exception to thrush stress and procures mental tranquility. Stress hormone cortisol in the body decreases by the breathing method of yoga. With the reduction of stress hormone in the body, your conception chances increase. Yes, ARC is here with you to give yoga support to abate stress from your body, mind and soul."
        }, {
          title: "Detoxifies the body", 
          image: "https://via.placeholder.com/400", 
          description: "There is some yoga asana which helps to detoxify your body boosting your immunity as well as fertility. Yoga also shows the way to keep your connective tissues and muscles tight. To reinstate your body detoxified is one of the most important issues to invigorate your fertility and ARC is providing those yoga practices."
        }, {
          title: "Increases blood circulation", 
          image: "https://via.placeholder.com/400", 
          description: "A good number of infertility cases come with blockage. It is yoga which strengthens blood circulation system in your body correctly and upholds blood supply into the reproductive organs. Yoga creates an environment in the body favorable to conceive. The right place for you to choose from such yoga support is obviously ARC."
        }, {
          title: "Reinforce immune system", 
          image: "https://via.placeholder.com/400", 
          description: "Yoga is a powerful tool to amplify your immunity. Regular practice of yoga yields increases in some white blood corpuscles (WBC) in the blood which plays the role of defense within the body. An active immunity system with the body also fights against infertility. ARC plays exactly that role to develop a robust immune system in your body with the help of yoga"
        }, {
          title: "Maintain healthy ovaries", 
          image: "https://via.placeholder.com/400", 
          description: "Women come with ovarian dysfunction and suffer from infertility. This is a general feature today. A set of yoga is there to reinforce adequate blood circulation through the ovaries supplying more oxygen to make them stronger and healthier. So, yoga plays a strong role for women with ovarian dysfunction which ARC takes care of with immense importance."
        }, {
          title: "Helps in hormonal treatment", 
          image: "https://via.placeholder.com/400", 
          description: "If you are fighting with infertility before and taking hormonal treatment under medical guidance, yoga will ideally accelerate your medication. The negative energy that evolves from hormone treatment causes mental and physical distress and it can be removed from your body and thereby cultivating a domain for fruitful conception with the help of a group of yoga. ARC is doing that job efficiently since its inauguration."
        }].map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
          >
            {/* <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4" /> */}
            <h2 className="text-xl font-semibold text-pink-400 ">{item.title}</h2>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </motion.div>
        ))}
   <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-pink-400 p-5 text-4xl md:text-5xl font-bold font-[choco] text-center px-4"
      >
        
        Why Choose ARC?
      </motion.h1>
        {/* ARC Section */}
        <motion.p
          className="mt-10 text-lg text-gray-700 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
        ARC is outstanding in research and innovation in its products and services. ARC provides a reasonable and manageable package for fertility medication. ARC also assigns treatment financing opportunity, drug payment scheme and also refunds policy.
        </motion.p>
      </div>
    </div>
  );
};

export default YogaBenefits;
