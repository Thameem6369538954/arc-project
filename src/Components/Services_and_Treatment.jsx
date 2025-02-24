import React, { useState } from "react";
import { motion } from "framer-motion";
import Clock from "../SerImg/Serv/Clock.jpg";
import Adice from "../SerImg/Serv/Adice.jpg";
import Yoh from "../SerImg/Serv/Yoh.jpg";
import Conselt from "../SerImg/Serv/Conselt.jpg";
import Tools from "../SerImg/Serv/Tools.jpg";
import Social from "../SerImg/Serv/Social.jpg";
import Clinic from "../SerImg/Serv/Clinic.jpg";
import Surgery from "../SerImg/Serv/Surgery.jpg";
import Bank from "../SerImg/Serv/Bank.jpg";

import ooci from "../SerImg/Tret/ooci.jpeg";
import Consul from "../SerImg/Tret/Consul.jpg";
import IVF from "../SerImg/Tret/IVF.jpg";
import cancer from "../SerImg/Tret/cancer.jpg";
import UN from "../SerImg/Tret/UN.jpg";
import Ind from "../SerImg/Tret/Ind.jpg";
import BBBG from "../SerImg/Tret/BBBG.jpg";

const ServicesAndTreatment = () => {
  const [activeTab, setActiveTab] = useState("services");

  const data = {
    services: [
      { title: "Extending the biological clock", image: Clock, link: "/services/consulting" },
      { title: "Life style and conceptoon advice", image: Adice, link: "/services/support" },
      { title: "Therapeutic activity for patients", image: Yoh, link: "/services/planning" },
      { title: "Counsellings", image: Conselt, link: "/services/planning" },
      { title: "Fertility tools", image: Tools, link: "/services/planning" },
      { title: "Corporate social responsibility", image: Social, link: "/services/planning" },
      { title: "Sexual dysfunction Clinic", image: Clinic, link: "/services/planning" },
      { title: "Gynaecologics surgery", image: Surgery, link: "/services/planning" },
      { title: "Stem cell banking", image: Bank, link: "/services/planning" },
    ],
    treatment: [
      { title: "Controlled Ovarian stimulation", image: ooci, link: "/treatment/skin-therapy" },
      { title: "Intrauterine insemination", image: Consul, link: "/treatment/physiotherapy" },
      { title: "In vitro fertilization(IVF) For Fertility", image: IVF, link: "/treatment/mental-wellness" },
      { title: "Fertility preservation for cancer patients", image: cancer, link: "/treatment/mental-wellness" },
      { title: "Unexplained infertility", image: UN, link: "/treatment/mental-wellness" },
      { title: "Ovalation induction", image: "https://source.unsplash.com/300x200/?meditation", link: "/treatment/mental-wellness" },
      { title: "Ovalation induction", image: "https://source.unsplash.com/300x200/?meditation", link: "/treatment/mental-wellness" },
      { title: "Donor and gestational carrier", image: "https://source.unsplash.com/300x200/?meditation", link: "/treatment/mental-wellness" },
      { title: "The Healthiest Embryo", image: "https://source.unsplash.com/300x200/?meditation", link: "/treatment/mental-wellness" },
    ],
    packages: [
      { title: "India", image: Ind, link: "/packages/basic" },
      { title: "International", image: "https://source.unsplash.com/300x200/?standard", link: "/packages/standard" },
    ],
  };

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center p-6 bg-[#fed9c9]"
    >
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md p-6 text-center">
        {/* Responsive Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {["services", "treatment", "packages"].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 font-semibold rounded-full transition-all ${
                activeTab === tab
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Animated Content Boxes */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {data[activeTab].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-white/20 backdrop-blur-lg rounded-xl shadow-lg text-lg font-semibold text-gray-900 flex flex-col items-center"
            >
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-lg mb-3" />
              <h3 className="text-lg font-bold">{item.title}</h3>
              <a href={item.link}>
                <button className="mt-3 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-md transition hover:shadow-lg">
                  Learn More
                </button>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesAndTreatment;
