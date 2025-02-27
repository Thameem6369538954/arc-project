import { Link } from "react-router-dom";
import doctors from "../Components/data"; // Import doctor data

const OurExports = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-5 py-10 mt-15 md:mt-25">
      <h2 className="text-3xl font-bold text-center text-[#d25c78] mb-8">Our Experts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="bg-white p-5 rounded-lg shadow-lg text-center">
            <img src={doctor.image} alt={doctor.name} className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
            <h3 className="text-lg font-semibold">{doctor.name}</h3>
            <p className="text-sm text-gray-500">{doctor.specialty}</p>
            <Link to={`/profile/${doctor.id}`} className="mt-4 inline-block px-4 py-2 bg-[#d25c78] text-white rounded-md hover:scale-105 transition-all">
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurExports;
