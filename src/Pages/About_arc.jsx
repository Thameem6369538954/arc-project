import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Abt from '../Animations/Abt.json'

const AboutUs = () => {
  return (
    <div className=' w-full min-h-screen  mt-20 md:mt-15'>
      <div className='bg-[#fadadd] w-full py-16 px-8 lg:px-20  min-h-[100vh] '>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-[Belli] text-gray-900 tracking-wide">
          About <span className="text-[#1c97c8]">Us</span>
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-4">
  <p className="text-gray-700 text-lg md:text-2xl font-[choco] mt-4 md:mt-0 w-full md:w-[70%] text-center md:text-left">
    ARC International Fertility & Research Center is a provider of advanced assisted reproductive treatment services at affordable costs and has successfully catered to the childless needs of 55,000+ couples since its inception in 2004. ARC has 30 branches across India in Tamil Nadu, Pondicherry, Andhra Pradesh, Telangana, Kerala, and West Bengal as well as an international centre in Sri Lanka. ARC Fertility prides itself in being equipped with advanced and world-class facilities offering quality services to its patients.
  </p>
  <div className="w-full md:w-[30%] flex justify-center">
    <Lottie animationData={Abt} className="max-w-[300px] md:max-w-full" />
  </div>
</div>

      </motion.div>

      </div>
     


      {/* Mission, Vision & Values */}
      <div className="w-full min-h-[60vh] bg-[#ffe6bb] py-16 px-8 lg:px-20">

      <div className="mt-12  w-full ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-[Heading] text-gray-900">Mission</h2>
          <div className="w-19 h-1 bg-pink-500"></div>
          <p className="text-gray-700 font-[choco] p-5 text-xl md:text-2xl">
          To be the globally preferred brand in assisted reproductive technology for childless individuals through excellence in quality, service, and access
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-[Heading] text-gray-900">Vision</h2>
                    <div className="w-15 h-1 bg-pink-500"></div>

         
          <ul className="mt-4 space-y-4 font-[choco] text-xl md:text-2xl text-gray-700">
            {["Creating a community wherein we ensure solutions for every childless individual desiring a child by providing advanced fertility treatment solutions at affordable cost", "To be a trusted & valued partner in the community and creators of positive change through the excellence of our people, superior client care, innovation and research."].map((value, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: false }}
                className="flex items-center"
              >
                <span className="text-pink-500 text-lg mr-2">✔</span> {value}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-[Heading] text-gray-900">Values</h2>
                    <div className="w-17 h-1 bg-pink-500"></div>

          <ul className="mt-4 space-y-4 font-[choco] text-xl md:text-2xl text-gray-700">
            <div>
                <h1 className="p-5 font-bold">1. Relationship with our clients</h1>
            {["We are dedicated to patient care.", "Treat everyone with respect and dignity.", "Listen compassionately and do everything in our power to help them achieve parenthood",].map((value, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: false }}
                className="flex items-center"
              >
                <span className="text-pink-500 text-lg mr-2">✔</span> {value}
              </motion.li>
            ))}
            </div>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-12"
        >
          
          <ul className="mt-4 space-y-4 font-[choco] text-xl md:text-2xl text-gray-700">
            <div>
                <h1 className="p-5 font-bold">2. Approach to Health Care</h1>
            {["Provide holistic care for our clients preferring to see the complexity of every childless individual’s life and believe that addressing a broad range of human needs is the best way to provide fertility solutions", "Strive to continuously examine and improve upon the services we provide.", "Providing high-quality, accessible, and affordable solutions to our clients.",].map((value, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: false }}
                className="flex items-center"
              >
                <span className="text-pink-500 text-lg mr-2">✔</span> {value}
              </motion.li>
            ))}
            </div>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-12"
        >
          
          <ul className="mt-4 space-y-4 font-[choco] text-xl md:text-2xl text-gray-700">
            <div>
                <h1 className="p-5 font-bold">3. Work Environment</h1>
            {["Teamwork is central to our work. We each take the responsibility to contribute effectively to teams", "Take pride in what we do and how we do it – our integrity and ethics will never be compromised.", "Listen compassionately and do everything in our power to help them achieve parenthood",].map((value, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: false }}
                className="flex items-center"
              >
                <span className="text-pink-500 text-lg mr-2">✔</span> {value}
              </motion.li>
            ))}
            </div>
          </ul>
        </motion.div>

        
      </div>
     <div >
     <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-start"
      >
      <p className="mt-4 space-y-4 font-[choco] text-xl md:text-2xl text-gray-700">At ARC, we take care of our patients using the experiences that we have gathered over the years wherein we have been instrumental in answering the prayers of tens of thousands of childless couples and enabling them to have a child through essential fertility treatment provided with utmost care. We also pride ourselves in reciprocating the unique gift of trust that our patients have shown us by providing them with the best of medical care at affordable cost. We believe that everyone has the right to get pregnant, despite their financial condition.</p> <br />
    <p className="mt-4 space-y-4 font-[choco] text-xl md:text-2xl text-gray-700">Our aim is to take care of our patients as our own family. Being mindful of this, we constantly reinvent and work towards providing the best of facilities and services to meet the fertility needs of our growing patient numbers. We have designed our services under three specific areas of excellence and we call it “the ARC Advantage” - Care, Cost and Continued Support. Once under the care of ARC, patients may rest assured that they get complete care at affordable cost and continuous support. We provide our patients with the best resources and tools on patient education, treatment management, and stress reduction that makes the patients put their trust in us for their treatment.</p><br />
     <p className="mt-4 space-y-4 font-[choco] text-xl md:text-2xl text-gray-700">We at ARC have been working for decades to make it possible for our patients to hear that euphoric moment of the first cry of a baby and we are proud to say that we are truly blessed to be able to achieve it on a continuous basis.</p>
    </motion.div>
     </div>
      </div>
    </div>
  );
};

export default AboutUs;