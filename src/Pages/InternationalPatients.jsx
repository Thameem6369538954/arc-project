import { motion } from 'framer-motion';
import ARC from "../Images/ARC.jpg"

const hospitalData = [
  {
    id: 1,
    name: 'Global Care Hospital',
    location: 'New York, USA',
    contact: '+1 234 567 890',
    image: ARC,
  },
  {
    id: 2,
    name: 'Royal Health Clinic',
    location: 'London, UK',
    contact: '+44 123 456 789',
    image: ARC,
  },
  {
    id: 3,
    name: 'Asian Medical Center',
    location: 'Chennai, India',
    contact: '+91 987 654 3210',
    image: ARC,
  },
];

const InternationalPatients = () => {
  return (
    <div className="py-10  mt-35 font-[choco] w-full bg-[#fff8ef] min-h-[100vh]">
      <h2 className="md:text-6xl text-3xl p-2 font-[belli] text-center mb-8">International <span className='text-[#1c97c8]'>Patients</span></h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-w-6xl mx-auto px-4">
        {hospitalData.map((hospital) => (
          <motion.div whileHover={{ scale: 1.05 }} key={hospital.id} className="overflow-hidden shadow-lg rounded-2xl bg-white">
            <img src={hospital.image} alt={hospital.name} className="w-full h-48 object-cover rounded-t-2xl" />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{hospital.name}</h3>
              <p className="text-gray-600">📍 {hospital.location}</p>
              <p className="text-gray-600">☎️ {hospital.contact}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InternationalPatients;
