import { useParams, Link } from "react-router-dom";
import doctors from "../Components/data"; // Import doctor data

const ProfileDetails = () => {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  if (!doctor) {
    return <p className="text-center text-red-500">Profile not found!</p>;
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-5 py-10 text-center mt-15 md:mt-25 ">
      <img src={doctor.image} alt={doctor.name} className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
      <h2 className="text-2xl font-bold">{doctor.name}</h2>
      <p className="text-lg text-gray-600">{doctor.specialty}</p>
      <p className="mt-4 text-sm text-gray-500">{doctor.details}</p>
      <Link to="/" className="mt-6 inline-block px-4 py-2 bg-[#d25c78] text-white rounded-md hover:scale-105 transition-all">
        Back to Experts
      </Link>
    </div>
  );
};

export default ProfileDetails;
