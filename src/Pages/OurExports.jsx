import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import doctors from "../Components/data";
import { FaTrophy } from "react-icons/fa";

const OurExperts = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const openPopup = (doctor) => setSelectedDoctor(doctor);
  const closePopup = () => setSelectedDoctor(null);

  return (
    
    <div className="w-full bg-[#fff8ef] min-h-screen py-20 font-[choco]">
      <div className="max-w-8xl mx-auto px-5">
        <h2 className="text-5xl font-bold text-center text-[#1c97c8] font-[belli] mb-12">
          <span className="text-black">Our</span> Experts
        </h2>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {doctors.map((doctor) => (
            <motion.div
              key={doctor.id}
              className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-xl duration-300 relative"
              whileHover={{ y: -5 }}
            >

            </motion.div>
          ))}
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
  {[...doctors]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((doctor) => (
      <motion.div
        key={doctor.id}
        className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-xl duration-300 relative"
        whileHover={{ y: -5 }}
      >
        {/* Card content here */}
        <img
                src={doctor.image}
                alt={doctor.name}
                className="w-82 h-82 rounded-full object-cover border-4 border-[#1c97c8] mb-4"
              />
              <h3 className="text-3xl font-bold text-[#1c97c8]">{doctor.name}</h3>
              <p className="text-md font-bold text-pink-400 p-1">{doctor.edu}</p>
             
              <p className="text-xl font-semibold text-[#1c97c8]">{doctor.specialty}</p>

              {doctor.isTop && (
                <div className="absolute top-3 left-3 bg-yellow-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                  <FaTrophy /> Top Expert
                </div>
              )}

              <button
                onClick={() => openPopup(doctor)}
                className="mt-4 px-5 py-2 bg-[#1c97c8] text-white rounded-full hover:bg-[#0d6d99] transition"
              >
                Learn More
              </button>
      </motion.div>
    ))}
</div>


        {/* Popup Modal */}
        <AnimatePresence>
  {selectedDoctor && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-r from-[#0e7490] via-[#3b82f6] to-[#4f46e5] flex items-center justify-center z-50 px-4"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-white/30 backdrop-blur-xl border border-white/20 shadow-2xl p-6 sm:p-8 md:p-10 rounded-3xl w-full max-w-3xl sm:max-w-2xl md:max-w-4xl relative text-center"
      >
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 text-[#1c97c8] bg-white rounded-full w-10 h-10 text-lg cursur-pointer transition"
        >
          ✖
        </button>

        <img
          src={selectedDoctor.image}
          alt={selectedDoctor.name}
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full mx-auto border-4 border-white mb-4 object-cover"
        />

        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">{selectedDoctor.name}</h3>
        <p className="text-md sm:text-lg md:text-xl text-gray-200 mt-2">{selectedDoctor.specialty}</p>
        <p className="text-sm sm:text-base md:text-md text-gray-100 mt-2">{selectedDoctor.details}</p>

        <p className="mt-5 text-white/90 text-sm sm:text-base leading-relaxed">
          {selectedDoctor.des}
        </p>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


      </div>
    </div>
  );
};

export default OurExperts;
