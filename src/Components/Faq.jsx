import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Faq from "../Images/Faq.png"; // Replace with your image

const faqs = [
  {
    question: "What is IVF?",
    answer: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Overview:</h3>
        <p className="mb-2">
        It is an assisted reproductive technology. In-vitro fertilization (IVF) is a process in which sperm and eggs are fertilized outside of the human body. It begins with manually removing eggs from ovaries and mixing them with sperm in a lab in order to achieve fertilization. Fertilization takes several days to complete, resulting in a fertilized egg, known as an embryo, which is then implanted within the uterus. Upon attachment of the embryo to the uterine wall, pregnancy begins.        </p>
       
      </div>
    ),
  },
  {
    question: "How to choose the best IVF Doctor?",
    answer: (
      <div>
        <h3 className="text-lg font-semibold mb-2">When looking for an IVF doctor, seek for the following characteristics</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Outstanding credentials</li>
          <li>Compassionate and caring</li>
          <li>Skilled personnel</li>
          <li>Excellent amenities and services</li>
          <li>Flexible payment choices or financing</li>
          <li>Scheduling appointments is simple. </li>
        </ul>
      </div>
    ),
  },
  {
    question: " What is the best Age for IVF?",
    answer: (
      <div>
        <p>Women in their 20s and 30s are the best candidates for IVF. When she reaches her mid-30s, her success rates begin to decrease gradually. Once a woman reaches the age of 40, her success rate for IVF significantly decreases.</p>
      </div>
    ),
  },
  {
    question: "What is the Success rate of IVF?",
    answer: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Based on age, the average percentage of  successful live births per egg retrieval over the past few years were measured at:
        </h3>
        <ul>
            <li>46.7% of those under the age of 35</li>
            <li>34.2% of those aged 35 to 37</li>
            <li>21.6 % of those aged 38 to 40.
            </li>
            <li>10.6% of those aged 41 to 42
            </li>
            <li>3.2 % of those aged 43 and up
            </li>
        </ul>
      </div>
    ),
  },
  {
    question: "What needs IVF? ",
    answer: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Trellis – South & North
        </h3>
        <h3 className="text-lg font-semibold mb-2">I think the question is "who needs IVF?" please confirm with the client
                                                answer: When one or both partners suffer from one or more of the following conditions, couples are advised to opt for IVF promptly
                                                
                                            
        </h3>
        <ul>
            <li> Blockages in the fallopian tubes</li>
            <li>Endometriosis</li>
            <li>2 Genetic disease in either parent,
            </li>
            <li>Infertility due to an unrecognized cause,
                                                
            </li>
            <li>Insufficient egg reserves
            </li>
            <li>Ovulation problems
            </li>
            <li>Poor sperm count
            </li>
        </ul>
      </div>
    ),
  },
  {
    question: "What are the IVF risks &amp; how long is the IVF process?",
    answer: (
      <div>
        <h3 className="text-lg font-semibold mb-2">IVF treatment involves several risks, including:
        </h3>
        <ul>
            <li>-Ectopic pregnancy
            </li>
            <li>Egg retrieval complications</li>
            <li>Miscarriage
            </li>
            <li>Multiple births
            </li>
            <li>Ovarian hyperstimulation syndrome (OHSS)
            </li>
            <li>Premature delivery
            </li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">The full IVF process can take up to 7 weeks to finish. Depending on the healthcare practitioner and facility, the exact timing may differ
        </h3>
      </div>
    ),
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto px-6 py-12 min-h-[100vh] bg-[#f5f4f1]">
      <h2 className="text-5xl md:text-7xl font-[Belli] text-black p-5">Frequently Asked Questions</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left - Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center"
          >
            <img src={Faq} alt="FAQ" className="w-full max-w-xl " />
          </motion.div>

          {/* Right - FAQ Section */}
          <div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border rounded-lg shadow-md overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center p-4 bg-[#fff8ef] hover:bg-[#ffe4c4] transition duration-300"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-lg font-[choco]">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown className="text-gray-700" />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden bg-white px-4"
                  >
                    <div className="py-3 text-gray-700 font-[choco]">{faq.answer}</div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FAQ;
