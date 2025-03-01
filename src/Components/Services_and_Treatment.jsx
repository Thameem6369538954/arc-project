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

const ServicesAndTreatment = () => {
  const [activeTab, setActiveTab] = useState("services");
  const [selectedItem, setSelectedItem] = useState(null);

  const data = {
    services: [
      {
        title: "Extending the biological clock",
        image: Clock,
        link: "/services/consulting",
        innerBoxes: [
          { title: "Egg Freezing", image: Clock, link: "/EggFreezing" },
          { title: "IVF Process", image: Adice, link: "/services/ivf-process" },
          { title: "Consultation", image: Yoh, link: "/services/consultation" },
        ],
      },
      {
        title: "Lifestyle and conception advice",
        image: Adice,
        innerBoxes: [
          { title: "Diet Plans", image: Conselt, link: "/services/diet-plans" },
          { title: "Fitness Advice", image: Tools, link: "/services/fitness-advice" },
        ],
      },
    ],
    vicom: [
      {
        title: "Extending the biological clock",
        image: Clock,
        link: "/services/consulting",
        innerBoxes: [
          { title: "new services", image: Clock, link: "/services/egg-freezing" },
          { title: "IVF Process", image: Adice, link: "/services/ivf-process" },
          { title: "Consultation", image: Yoh, link: "/services/consultation" },
        ],
      },
      {
        title: "Lifestyle and conception advice",
        image: Adice,
        innerBoxes: [
          { title: "Diet Plans", image: Conselt, link: "/services/diet-plans" },
          { title: "Fitness Advice", image: Tools, link: "/services/fitness-advice" },
        ],
      },
    ],
    cuscom: [
      {
        title: "Extending the biological clock",
        image: Clock,
        link: "/services/consulting",
        innerBoxes: [
          { title: "Egg Freezing", image: Clock, link: "/services/egg-freezing" },
          { title: "IVF Process", image: Adice, link: "/services/ivf-process" },
          { title: "Consultation", image: Yoh, link: "/services/consultation" },
        ],
      },
      {
        title: "Lifestyle and conception advice",
        image: Adice,
        innerBoxes: [
          { title: "Diet Plans", image: Conselt, link: "/services/diet-plans" },
          { title: "Fitness Advice", image: Tools, link: "/services/fitness-advice" },
        ],
      },
    ],
  };

  const handleBoxClick = (item) => {
    setSelectedItem(item);
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  return (
    <div className="w-full min-h-screen bg-[#fed9c9] flex items-center justify-center py-12">
      <div className="w-full max-w-6xl bg-white p-6 text-center rounded-lg shadow-lg">
        {/* Tabs */}
        <div className="flex gap-4 justify-center mb-6">
          {["services","vicom","cuscom"].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-full ${
                activeTab === tab
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Cards */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data[activeTab].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-white shadow-lg rounded-xl cursor-pointer"
              onClick={() => handleBoxClick(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <h3>{item.title}</h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Popup */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-4xl">
              <h3 className="text-2xl mb-4">{selectedItem.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedItem.innerBoxes.map((box, index) => (
                  <a
                    key={index}
                    href={box.link}
                    // target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-gray-100 rounded-lg shadow-md text-center"
                  >
                    <img
                      src={box.image}
                      alt={box.title}
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <h4>{box.title}</h4>
                  </a>
                ))}
              </div>
              <button
                onClick={closePopup}
                className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-full"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesAndTreatment;
