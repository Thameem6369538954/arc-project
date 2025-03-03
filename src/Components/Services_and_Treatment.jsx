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
          { title: "Fertility Preservation", image: Adice, link: "/Fertility_preservation" },
          { title: "BMI Calculator", image: Yoh, link: "/services/consultation" },
        ],
      },
      {
        title: "Lifestyle and conception advice",
        image: Adice,
        innerBoxes: [
          { title: "Timing & Frequency Of Intercourse", image: Conselt, link: "/services/diet-plans" },
          { title: "Exercise In Moderation", image: Tools, link: "/services/fitness-advice" },
          { title: "Nutrition & Fertility", image: Tools, link: "/services/fitness-advice" },
          { title: "BMI & Fertility", image: Tools, link: "/services/fitness-advice" },
          { title: "Alcohol & Drug Use", image: Tools, link: "/services/fitness-advice" },
        ],
      },
      {
        title: "Therapeutic Activity For Patients",
        image: Adice,
        innerBoxes: [
          { title: "Yoga", image: Conselt, link: "/services/diet-plans" },
          { title: "Massage Therapy", image: Tools, link: "/services/fitness-advice" },
          { title: "Acupuncture", image: Tools, link: "/services/fitness-advice" },
          { title: "Medication", image: Tools, link: "/services/fitness-advice" },
          { title: "Fertility Preservation", image: Tools, link: "/services/fitness-advice" },
          { title: "Walking/Hiking ", image: Tools, link: "/services/fitness-advice" },
        ],
      },
      {
        title: "Counselling",
        image: Adice,
        innerBoxes: [
          { title: "Emotional Considerations", image: Conselt, link: "/services/diet-plans" },
          { title: "Premarital Counselling", image: Tools, link: "/services/fitness-advice" },
        ],
      },
      {
        title: "Fertility Tools",
        image: Adice,
        innerBoxes: [
          { title: "Due Date Calculator", image: Conselt, link: "/services/diet-plans" },
          { title: "Fertility Assessment", image: Tools, link: "/services/fitness-advice" },
          { title: "Gynaecological Condition", image: Tools, link: "/services/fitness-advice" },
          { title: "Monthly Ovulation Cycle ", image: Tools, link: "/services/fitness-advice" },
          { title: "Ovulation Calculator", image: Tools, link: "/services/fitness-advice" },
        ],
      },
      {
        title: "Corporate Social Responsibility",
        image: Adice,
        innerBoxes: [
          { title: "Corporate Social Responsibility", image: Conselt, link: "/services/diet-plans" },
          // { title: "Fitness Advice", image: Tools, link: "/services/fitness-advice" },
        ],
      },
      {
        title: "Sexual Dysfunction Clinic",
        image: Adice,
        innerBoxes: [
          { title: "Male Sexual Dysfunctions", image: Conselt, link: "/services/diet-plans" },
          { title: "Female Sexual Dysfunctions", image: Conselt, link: "/services/diet-plans" },
          { title: "Surgeries In Sexual Disorders", image: Conselt, link: "/services/diet-plans" },
          { title: "Medications for Sexual Dysfunction", image: Conselt, link: "/services/diet-plans" },
          { title: "Sexual Hygiene", image: Conselt, link: "/services/diet-plans" },
          { title: "Erectile Dysfunctions", image: Conselt, link: "/services/diet-plans" },
          { title: "Ejaculatory Failures", image: Conselt, link: "/services/diet-plans" },
          { title: "Decreased Sexual Desire", image: Conselt, link: "/services/diet-plans" },
          { title: "Drug-Induced Sexual Dysfunction", image: Conselt, link: "/services/diet-plans" },
          { title: "Sex-Related Diseases", image: Conselt, link: "/services/diet-plans" },
        ],
      },
      {
        title: "Gynaecologic Surgery",
        image: Adice,
        innerBoxes: [
          { title: "Colposcopy", image: Conselt, link: "/services/diet-plans" },
          { title: "Cryosurgery", image: Conselt, link: "/services/diet-plans" },
          { title: "Leep", image: Conselt, link: "/services/diet-plans" },
          { title: "Hysteroscopy", image: Conselt, link: "/services/diet-plans" },
          { title: "Pelvic laparoscopy", image: Conselt, link: "/services/diet-plans" },
          { title: "Dilation and Curretage", image: Conselt, link: "/services/diet-plans" },
        ],
      },
      {
        title: "Stem Cell Banking",
        image: Adice,
        innerBoxes: [
          { title: "Sperm/Semen", image: Conselt, link: "/services/diet-plans" },
          { title: "Egg/Oocyte/Embryo", image: Tools, link: "/services/fitness-advice" },
        ],
      },
    ],
    treatments: [
      {
        title: "Controlled Ovarian Stimulation",
        image: Clock,
        link: "/services/consulting",
        innerBoxes: [
          { title: "Meditation can help you regain fertility", image: Clock, link: "Meditation_Can_Help_You_Regain_Fertility" },
          // { title: "IVF Process", image: Adice, link: "/services/ivf-process" },
          // { title: "Consultation", image: Yoh, link: "/services/consultation" },
        ],
      },
      {
        title: "Intrauterine Insemination",
        image: Adice,
        innerBoxes: [
          { title: "Intrauterine Insemination", image: Conselt, link: "/Intrauterine_Insemination" },
          // { title: "Fitness Advice", image: Tools, link: "/services/fitness-advice" },
        ],
      },
      {
        title: "In Vitro Fertilization(IVF) For FertilIity",
        image: Adice,
        innerBoxes: [
          { title: "In Vitro Fertilization(IVF) For FertilIity", image: Conselt, link: "/FertilizationIVF" },
          // { title: "Fitness Advice", image: Tools, link: "/services/fitness-advice" },
        ],
      },
      {
        title: "Fertility Preservation For Cancer Patients",
        image: Adice,
        innerBoxes: [
          { title: "Fertility preservation for cancer patients", image: Conselt, link: "/Fertility_Preservation_For_Cancer_Patients" },
          // { title: "Fitness Advice", image: Tools, link: "/services/fitness-advice" },
        ],
      },
      {
        title: "Preventing Miscarriages",
        image: Adice,
        innerBoxes: [
          { title: "Preventing Miscarri", image: Conselt, link: "/Preventing_Miscarriages" },
          // { title: "Fitness Advice", image: Tools, link: "/services/fitness-advice" },
        ],
      },
      {
        title: "Unexplained Infertility ",
        image: Adice,
        innerBoxes: [
          { title: "Unexplained Infertility", image: Conselt, link: "/Unexplained_Infertility" },
          // { title: "Fitness Advice", image: Tools, link: "/services/fitness-advice" },
        ],
      },
      {
        title: "Ovulation Induction ",
        image: Adice,
        innerBoxes: [
          { title: "Ovulation Induction", image: Conselt, link: "/services/diet-plans" },
          // { title: "Fitness Advice", image: Tools, link: "/services/fitness-advice" },
        ],
      },
      {
        title: "Donor And Gestational Carrier ",
        image: Adice,
        innerBoxes: [
          { title: "Using a sperm-donor", image: Conselt, link: "/Sperm_donor" },
          { title: "Using an egg-donor ", image: Tools, link: "/Egg_donor" },
          { title: "Using donor-embryo", image: Tools, link: "/Donor_Embryo" },
          { title: "Using a gestational carrier", image: Tools, link: "/Gestational_Carrier" },
        ],
      },
      {
        title: "The Healthiest Embryo",
        image: Adice,
        innerBoxes: [
          { title: "The Healthiest Embryo", image: Conselt, link: "/Healthiest_Embryo" },
        ],
      },
    ],
    payments: [
      {
        title: "India",
        image: Clock,
        link: "/services/consulting",
        innerBoxes: [
          { title: "Egg Freezing", image: Clock, link: "/services/egg-freezing" },
          { title: "IVF Process", image: Adice, link: "/services/ivf-process" },
          { title: "Consultation", image: Yoh, link: "/services/consultation" },
        ],
      },
      {
        title: "International",
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
    <div className="w-full min-h-screen bg-[#fed9c9] flex items-center justify-center py-12 mt-45">
      <div className="w-full max-w-6xl bg-white p-6 text-center rounded-lg shadow-lg">
        {/* Tabs */}
        <div className="flex bg-black rounded-full w-fit p-1 m-5 gap-1 max-w-full overflow-x-auto sm:justify-center">
  {["services", "treatments", "payments"].map((tab) => (
    <button
      key={tab}
      className={`px-6 py-2 text-sm rounded-full transition-all uppercase whitespace-nowrap ${
        activeTab === tab
          ? "bg-white text-black font-semibold"
          : "text-gray-400 hover:text-white"
      }`}
      onClick={() => setActiveTab(tab)}
    >
      {tab}
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
