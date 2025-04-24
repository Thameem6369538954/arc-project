import React, { useState } from "react";
import { motion } from "framer-motion";
import Clock from "../SerImg/Serv/Clock.jpg";
import Adice from "../SerImg/Serv/Adice.jpg";
import Yoh from "../SerImg/Serv/Yoh.jpg";
import Conselt from "../SerImg/Serv/Conselt.jpg";
import Tools from "../SerImg/Serv/Tools.jpg";

import flat from "../Servicespage/ServicesImages/flat.jpg"
import tp from "../Servicespage/ServicesImages/tp.jpg"
import drunk from "../Servicespage/ServicesImages/drunk.jpg"
import Frez from "../Servicespage/ServicesImages/Frez.jfif"
import bmi from "../Servicespage/ServicesImages/bmi.jfif"
import Time from "../Servicespage/ServicesImages/Time.jfif"
import Ex from "../Servicespage/ServicesImages/Ex.jfif"
import Neut from "../Servicespage/ServicesImages/Neut.jfif"
import yoga from "../Servicespage/ServicesImages/yoga.jfif"
import thero from "../Servicespage/ServicesImages/thero.jfif"
import Acup from "../Servicespage/ServicesImages/Acup.jfif"
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
          { title: "Egg Freezing", image:Frez, link: "/EggFreezing" },
          { title: "Fertility Preservation", image: flat, link: "/Fertility_preservation" },
          { title: "BMI Calculator", image: bmi, link: "/BMIandfertility" },
        ],
      },
      {
        title: "Lifestyle and conception advice",
        image: Adice,
        innerBoxes: [
          { title: "Timing & Frequency Of Intercourse", image: Time, link: "/TimingandFrequencyOfIntercourse" },
          { title: "Exercise In Moderation", image: Ex, link: "/Exercise_in_Moderation" },
          { title: "Nutrition & Fertility", image: Neut, link: "/NutritionandFertility" },
          { title: "BMI & Fertility", image: bmi, link: "/BMIandfertility" },
          { title: "Alcohol & Drug Use", image: drunk, link: "/Alcoholanddrug" },
        ],
      },
      {
        title: "Therapeutic Activity For Patients",
        image: tp,
        innerBoxes: [
          { title: "Yoga", image: yoga, link: "/Yoga" },
          { title: "Massage Therapy", image: thero, link: "/MassageTherapy" },
          { title: "Acupuncture", image: Acup, link: "/Acupuncture" },
          { title: "Medication", image: Tools, link: "/Medication" },
          // { title: "Fertility Preservation", image: Tools, link: "/services/fitness-advice" },
          { title: "Walking/Hiking ", image: Tools, link: "/Walking_Hiking" },
        ],
      },
      {
        title: "Counselling",
        image: Adice,
        innerBoxes: [
          { title: "Emotional Considerations", image: Conselt, link: "/EmotionalConsiderations" },
          { title: "Premarital Counselling", image: Tools, link: "/PremaritalCounseling" },
        ],
      },
      {
        title: "Fertility Tools",
        image: Adice,
        innerBoxes: [
          { title: "Due Date Calculator", image: Conselt, link: "/services/diet-plans" },
          { title: "Fertility Assessment", image: Tools, link: "/FertilityAssessment" },
          { title: "Gynaecological Condition", image: Tools, link: "/GynecologicalConditions" },
          { title: "Monthly Ovulation Cycle ", image: Tools, link: "/MonthlyOvulationCycle" },
          { title: "Ovulation Calculator", image: Tools, link: "/services/fitness-advice" },
        ],
      },
      {
        title: "Corporate Social Responsibility",
        image: Adice,
        innerBoxes: [
          { title: "Corporate Social Responsibility", image: Conselt, link: "/CorporateSocialResponsibility" },
          // { title: "Fitness Advice", image: Tools, link: "/services/fitness-advice" },
        ],
      },
      {
        title: "Sexual Dysfunction Clinic",
        image: Adice,
        innerBoxes: [
          { title: "Male Sexual Dysfunctions", image: Conselt, link: "/Male_Sexual_Dysfunction" },
          { title: "Female Sexual Dysfunctions", image: Conselt, link: "/FemaleSexualDysfunction" },
          { title: "Surgeries In Sexual Disorders", image: Conselt, link: "/Surgeries_in_Sexual_Disorders" },
          { title: "Medications for Sexual Dysfunction", image: Conselt, link: "/Medications_for_Sexual_Dysfunction" },
          { title: "Sexual Hygiene", image: Conselt, link: "/Sexual_Hygiene" },
          { title: "Erectile Dysfunctions", image: Conselt, link: "/Erectile_Dysfunction" },
          { title: "Ejaculatory Failures", image: Conselt, link: "/Ejaculatory_Failures " },
          { title: "Decreased Sexual Desire", image: Conselt, link: "/Decreased_Sexual_Desire" },
          { title: "Drug-Induced Sexual Dysfunction", image: Conselt, link: "/Drug_Induced_Sexual_Dysfunction" },
          { title: "Sex-Related Diseases", image: Conselt, link: "/Sex_Related_Diseases" },
        ],
      },
      {
        title: "Gynaecologic Surgery",
        image: Adice,
        innerBoxes: [
          { title: "Colposcopy", image: Conselt, link: "/Colposcopy" },
          { title: "Cryosurgery", image: Conselt, link: "/Cryosurgery" },
          { title: "Leep", image: Conselt, link: "/Leep" },
          { title: "Hysteroscopy", image: Conselt, link: "/Hysteroscopy" },
          { title: "Pelvic laparoscopy", image: Conselt, link: "/PelvicLaparoscopy" },
          { title: "Dilation and Curretage", image: Conselt, link: "/Dilation_and_Curretage" },
        ],
      },
      {
        title: "Stem Cell Banking",
        image: Adice,
        innerBoxes: [
          { title: "Sperm/Semen", image: Conselt, link: "/Sperm_Semen" },
          { title: "Egg/Oocyte/Embryo", image: Tools, link: "/Egg_Oocyte_Embryo" },
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
    procedures: [
      {
        title: "Fertility-Related Laparoscopic Procedures",
        image: Clock,
        link: "/FertilityProcedures",
        innerBoxes: [
          { title: "Fertility-Related Laparoscopic Procedures", image: Conselt, link: "/FertilityProcedures" },
          // { title: "Fitness Advice", image: Tools, link: "/services/fitness-advice" },
        ],
      },
      {
        title: "Advanced Rejuvenative Therapy",
        image: Adice,
        link: "/AdvancedRejuvenativeTherapy",
        innerBoxes: [
          { title: "Advanced Rejuvenative Therapy", image: Conselt, link: "/AdvancedRejuvenativeTherapy" },
          // { title: "Fitness Advice", image: Tools, link: "/services/fitness-advice" },
        ],
      },
      {
        title: "Assisted Reproductive Technology (ART) Procedures",
        image: Adice,
        link: "/ARTProcedures",
        innerBoxes: [
          { title: "Assisted Reproductive Technology (ART) Procedures", image: Conselt, link: "/ARTProcedures" },
          // { title: "Fitness Advice", image: Tools, link: "/services/fitness-advice" },
        ],
      },
      {
        title: "Obstetrics",
        image: Adice,
        link: "/Obstetrics",
        innerBoxes: [
          { title: "Obstetrics", image: Conselt, link: "/Obstetrics" },
          // { title: "Fitness Advice", image: Tools, link: "/services/fitness-advice" },
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
    <div className="w-full min-h-screen bg-[#fed9c9] flex items-center justify-center py-12 mt-25">
      <div className="w-full max-w-8xl bg-white p-6 text-center rounded-lg shadow-lg">
        <h1 className=""></h1>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-[Belli] text-gray-900 tracking-wide">
        Services  & <span className="text-[#1c97c8]">Treatment</span>
        </h1>
        {/* Tabs */}
        <div className="flex bg-black rounded-full w-fit font-[choco] font-bold p-1 m-5 gap-1 max-w-full overflow-x-auto sm:justify-center">
  {["services", "treatments","procedures", "payments"].map((tab) => (
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
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-[choco] text-xl">
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
                className="w-full h-70 object-cover rounded-lg mb-3"
              />
              <h3>{item.title}</h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Popup */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-4xl max-h-[80vh] overflow-y-auto scrollbar-hide">
            <h3 className="text-2xl mb-4">{selectedItem.title}</h3>
        
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedItem.innerBoxes.map((box, index) => (
                <a
                  key={index}
                  href={box.link}
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
