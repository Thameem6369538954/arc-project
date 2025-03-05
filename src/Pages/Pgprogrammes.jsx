import { motion } from 'framer-motion';
import Docter from '../Images/Docter.png';

const AdmissionForm = () => {
  return (
    <div className="bg-pink-50 mt-30 min-h-screen py-10 font-[choco]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left "
          >
            <div>
            <h2 className="text-4xl font-bold text-pink-600">M.SC Clinical Embryology</h2>
            <p className="mt-3 text-gray-700">
              Duration: 2 Years (as per ART law)<br />
              
            </p>
            <p>
            Entrance Exam Date: 07th June 2024<br />
            </p>
          <p>

          Eligibility Criteria: Any life sciences graduate MBBS/BDS/BNYS/BGMS/BAMS
          </p>
            <p className="mt-4 text-lg text-pink-700 font-semibold">
              Admissions Open 2024-2025<br />
              In Affiliation With Sri Venkateswara University
            </p>
            </div>
           
          </motion.div>
            <img src={Docter} alt="Doctor" className=" mb-6" />

        
        </div>
          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <form className="grid grid-cols-1 gap-6">
              <input type="text" placeholder="Applicant Name" className="p-3 border rounded-md" />
              <div className="grid grid-cols-2 gap-4">
                <input type="date" placeholder="DOB" className="p-3 border rounded-md" />
                <select className="p-3 border rounded-md">
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>
              </div>
              <input type="text" placeholder="Contact Number" className="p-3 border rounded-md" />
              <input type="email" placeholder="Email Id" className="p-3 border rounded-md" />
              <select className="p-3 border rounded-md">
                <option>Select State</option>
                <option>Tamil Nadu</option>
                <option>Kerala</option>
                <option>Karnataka</option>
              </select>
              <div className="flex items-center gap-4">
                <input type="checkbox" /> I'm not a robot
              </div>
              <button className="bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700 transition">
                Submit
              </button>
            </form>
          </motion.div>
      </div>
    </div>
  );
};

export default AdmissionForm;
