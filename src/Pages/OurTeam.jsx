import React from "react";
import { useNavigate } from "react-router-dom";
import teamMembers from "../Components/teamMembers"; // Import team data

const OurTeam = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-[#fff8ef] mt-12 flex flex-col items-center">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-[Belli] text-pink-600 mb-4">
          Meet <span className="text-[#1c97c8]">our Leaders</span> Team
        </h2>

        <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-700 mb-12 font-[choco] leading-relaxed">
          The story of ARC curves along the journey of individual Dr. Mahalakshmi.
          She had a common dream to excel in Super Specialty Reproductive Medicine.
          She cultivated complementary skills and became a first-generation doctor,
          handling high-risk pregnancies from early on and pioneering cashless
          insurance in her locality.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-pink-500 shadow-md"
              />
              <h3 className="mt-4 text-xl font-[Heading] text-gray-800">{member.name}</h3>
              <p className="text-pink-600 font-[choco] text-sm">{member.role}</p>
              {member.qualification && (
                <p className="text-gray-600 text-sm mt-1 font-[choco] italic">
                  {member.qualification}
                </p>
              )}
              <p className="text-gray-600 text-sm mt-2 font-[choco]">{member.description}</p>
              <button
                onClick={() => navigate(`/team/${member.name.replace(/\s+/g, "-").toLowerCase()}`)}
                className="mt-4 px-5 py-2 bg-pink-500 text-white rounded-lg font-[choco] hover:bg-pink-600 transition-colors"
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
