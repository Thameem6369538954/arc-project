import { useParams } from "react-router-dom";
import teamMembers from "../Components/teamMembers"; // Import team data
import { motion } from "framer-motion"; // Import Framer Motion
import { FaTrophy } from "react-icons/fa"; // Trophy Icon 🏆
import { MdCheckCircle } from "react-icons/md"; // Checkmark Icon ✅

const TeamMemberProfile = () => {
  const { name } = useParams();
  const member = teamMembers.find(
    (member) => member.name.replace(/\s+/g, "-").toLowerCase() === name
  );

  if (!member) {
    return <h2 className="text-center text-3xl text-red-500">Member Not Found</h2>;
  }

  return (
    <motion.section 
      className="py-12 bg-[#fff8ef]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-center gap-8 mt-25 md:mt-35">
        
        {/* Image and Name Section */}
        <motion.div 
          className="w-full md:w-1/2 flex flex-col items-center text-center "
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.img
            src={member.image}
            alt={member.name}
            className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-full border-2 border-pink-500"
            whileHover={{ scale: 1.1, rotate: 3 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          <h1 className="text-2xl sm:text-3xl font-[Heading] text-gray-900 mt-4">{member.name}</h1>
          <p className="text-pink-500 font-[choco] font-medium text-lg">{member.role}</p>
          {member.qualification && (
            <p className="text-gray-700 text-sm mt-1 font-[choco]">{member.qualification}</p>
          )}
          <p className="text-gray-600 text-sm mt-2 font-[choco] max-w-md">{member.description}</p>
        </motion.div>

        {/* Achievements Section */}
        <motion.div 
          className="w-full md:w-1/1"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {member.achievements && (
            <div className="mt-6 md:mt-0">
              <h3 className="text-2xl font-[Heading] text-gray-800 text-center md:text-left">
                Key Achievements
              </h3>
              <motion.ul 
  className="list-none text-gray-600 font-[choco] mt-3 text-left max-w-full mx-auto md:mx-0"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.6 }}
>
  {member.achievements.map((achievement, index) => (
    <motion.li 
      key={index} 
      className="flex items-center gap-2 text-gray-700 mb-1 p-2"
      whileHover={{ scale: 1.05, x: 5 }}
      transition={{ type: "spring", stiffness: 150 }}
    >
      {achievement.includes("Award") || achievement.includes("Winner") ? (
        <FaTrophy className="text-yellow-500 text-xl min-w-[25px]" /> 
      ) : (
        <MdCheckCircle className="text-green-500 text-xl min-w-[25px]" />
      )}
      {achievement}
    </motion.li>
  ))}
</motion.ul>

            </div>
          )}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default TeamMemberProfile;
