import { useState } from "react";
import { motion } from "framer-motion";
import doctors from "../Components/data"; // Import doctor data
import { FaTrophy } from "react-icons/fa"; // Trophy Icon 🏆


const OurExports = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const openPopup = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const closePopup = () => {
    setSelectedDoctor(null);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-5 py-10 mt-25 md:mt-35 font-[choco] mb-20">
      <h2 className="text-6xl font-bold text-center text-[#1c97c8] font-[belli] mb-8">
        <span className="text-black">Our</span> Experts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-6">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="bg-white p-5 rounded-lg shadow-lg text-center flex flex-col md:flex-row  flex-wrap items-center justify-center gap-8 gap-6">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-40 h-40 rounded-full object-cover border-2 border-[#1c97c8]"
          />
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-[#1c97c8]">{doctor.name}</h3>
            <p className="text-md text-gray-500">MBBS, MD (A&E), MBA (HHSM), PGDAEC (UK), ACTF (US), ACCAM (Aus)
            </p>
            <p className="text-md font-bold text-gray-500">{doctor.specialty}</p>
          </div>
            <p className="text-sm text-gray-500">
            </p>
          <button
            onClick={() => openPopup(doctor)}
            className="px-4 py-2 bg-[#1c97c8] text-white rounded-md hover:scale-105 transition-all"
          >
            Learn More
          </button>
        </div>
        
        ))}
      </div>

      {/* Popup Modal */}
      {selectedDoctor && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0  bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-lg"
        >
          <div className="bg-white bg-opacity-20 backdrop-blur-xl p-8 rounded-lg w-[400px] text-center relative shadow-xl border border-white border-opacity-40">
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 bg-[#1c97c8] text-white w-8 h-8 rounded-full hover:rotate-90 transition"
            >
              ✖
            </button>

            <h3 className="text-2xl font-semibold"> {selectedDoctor.name}</h3>
            <p className="text-lg text-[#1c97c8]">{selectedDoctor.specialty}</p>
            <br />
            {/* <img
              src={selectedDoctor.image}
              alt={selectedDoctor.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 border-2  border-[#1c97c8]"
            /> */}
          {doctors.map((doc)=>(
            <div>
              <p> {doc.des}</p>
            </div>
          ))}
         {/* <p className="mt-3 text-sm">{selectedDoctor.description}</p> */}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default OurExports;
