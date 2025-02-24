import React from "react";
import Maha from "../Images/Maha.jpg"
import sundar from "../Images/sundar.jpg"
import riyaz from "../Images/riyaz.jpg"
import cso from "../Images/cso.jpg"
import krish from "../Images/krish.jpg"
import sathya from "../Images/sathya.jpg"
import Doctor from '../Animations/Doctor.json'
import Lottie from "lottie-react";


const teamMembers = [
  {
    name: "Dr. Mahalakshmi",
    role: "Founder & Chairperson",
    qualification: "MBBS, DGO, FMR, DIRM (Germany) Ph.D.",
    description: "Professor- Dept of Reproductive Medicine, Saveetha Medical College & Received ...",
    image: Maha,
  },
  {
    name: "Mr. N. Sundar",
    role: "Chief Financial Officer",
    description: "Mr. N. Sundar is the CFO of the organization. He is well-versed in all aspects of financial management...",
    image: sundar,
  },
  {
    name: "Dr. Riyas Mohamed",
    role: "Vice Chairman & Director of Clinical Operations & Academics",
    qualification: "MBBS, MD (AM), MBA (HM), PGDACE (UK), ACTT (US), ACCAM (AMS)",
    description: "Dr. Riyas is a highly accomplished medical professional with extensive...",
    image: riyaz,
  },
  {
    name: "Mr. Balasubramanian",
    role: "Chief Strategy Officer",
    description: "Mr. Balasubramanian is our Chief Strategy Officer. He has a rich experience of more than 3 decades...",
    image: cso,
  },
  {
    name: "Mr. Krishnamoorthy",
    role: "Director of Hospital Administration",
    description: "Mr. Krishnamoorthy is the CEO of the organization. He has completed his B. Tech in Biotechnology...",
    image: krish,
  },
  {
    name: "Mr. Sathya Narayanan",
    role: "Chief Revenue Officer",
    description: "Mr. Sathya Narayanan, as a CRO of the organization, oversees end-to-end finance operations, financial planning...",
    image: sathya,
  },
];

const OurTeam = () => {
  return (
    <section className="py-12 bg-[#fff8ef]">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-[Belli] text-pink-600 mb-6">Meet Our Team</h2>
        <div className="grid place-items-center">
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12 font-[choco]">
          Meet our esteemed team of professionals dedicated to excellence in reproductive medicine and healthcare.
        </p>
        <Lottie animationData={Doctor} className="max-w-[300px] md:max-w-1/2" />

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-42 h-42 object-cover rounded-full mx-auto border-4 border-pink-500"
              />
              <h3 className="text-xl font-[Heading] text-gray-900 mt-4">{member.name}</h3>
              <p className="text-pink-500 font-[choco] font-medium text-sm">{member.role}</p>
              {member.qualification && <p className="text-gray-600 text-sm mt-1 font-[choco]">{member.qualification}</p>}
              <p className="text-gray-600 text-sm mt-2 font-[choco]">{member.description}</p>
              <button className=" font-[choco] mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600">
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
