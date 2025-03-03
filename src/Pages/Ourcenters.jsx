import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { locations } from "../Data/locationData";

// const locations = [
//   { category: "All", name: "MADURAI", address: "No 21-C, 3rd Floor, Singarayar Main Road, Madurai - 625 001" },
//   { category: "All", name: "DINDIGUL", address: "1st floor, Bharathi Mission Hospital, 11, 91, NVGB Hall Rd, EB Colony, Dindigul - 624003" },
//   { category: "All", name: "KOVILPATTI", address: "593/29, Sri Nayagam mulitiplex, 2nd floor, Opp toold bus stand, Kovilpatti - 628502" },
//   { category: "All", name: "RAMANATHAPURAM", address: "Door No.147/6, Second floor, Railway Feeder road, Ramanathapuram-623501 (Landmark-Inside Gani hospital)" },
//   { category: "All", name: "TRICHY", address: "50 EVR main road Puthur (Opp to GH), Trichy - 620017" },
//   { category: "All", name: "TIRUNELVELI", address: "14A, 1, S Bypass Rd, near Saravana Selvarathinam Stores, Melapalayam, Tirunelveli, Tamil Nadu 627005" },
//   { category: "All", name: "TIRUPPUR", address: "2214 4th Floor Pitchaampalayam extn, PN Road, Near New Bus stand., Sri Kumaran Hospital campus, Tiruppur - 641602" },
//   { category: "All", name: "ERODE", address: "33/12A, Chinnamuthu 2nd st, Natesar mill compound, Perundurai Road, Erode - 638011" },
//   { category: "All", name: "COIMBATORE", address: "644/4 Avinashi Road, Pappanaickenpalayam, Lakshmi Mills Junction Coimbatore - 641037" },
//   { category: "All", name: "KUMBAKONAM", address: "Plot No: 197, John Selvaraj Nagar, Kumbakonam Town,Kumbakonam - 612001" },
//   { category: "All", name: "SALEM", address: "Door no 52/10-3/5 2nd floor, Jagir Ammapalayam, Near Global Medical center & Hospital, Salem - 636302" },
//   { category: "All", name: "NAGERCOIL", address: "Bus Stand, 8A Almighty Towers (Ground Floor), 30/2,8A Distillary road Vadasery Opp to Vadasery, Nagercoil - 629001" },
//   { category: "All", name: "THIRUVANNAMALAI", address: "1533 A, Kanji road, Vengikkal Near Vengikkal arch, Tiruvannamalai - 606604" },
//   { category: "All", name: "PUDUCHERRY Branch 1", address: "13-A, Pondy, Villupuram Main Rd, inside Venkateswara Medical College, Ariyur, Puducherry 605102" },
//   { category: "All", name: "PUDUCHERRY Branch 2", address: "116, Villianur road, Reddiarpalayam, Puducherry, 605010" },
//   { category: "All", name: "VELLORE", address: "102/283, New Katpadi Road, Opp New bus stand Vellore - 632 004" },
//   { category: "All", name: "SRILANKA", address: "58 Jalan, 16 Joseph Lane, Colombo 20004, Sri Lanka" },
//   { category: "All", name: "AMBATTUR", address: "D-22, Madras Thiruvallur High Rd, Old Ambattur, Sai Nagar, Ambattur Industrial Estate, Ambattur, Chennai, Tamil Nadu 600058" },
//   { category: "All", name: "EGMORE", address: "No. 19, CASA Major Road, Sulaiman Zackira Avenue, Egmore, Chennai, Tamil Nadu 600008" },
//   { category: "All", name: "PERAMBUR", address: "#22/2, ESI Hospital Road, Peravallur (Perambur), Chennai - 600 011" },
//   { category: "Tamil Nadu", name: "MADURAI", address: "No 21-C, 3rd Floor, Singarayar Main Road, Madurai - 625 001" },
//   { category: "Tamil Nadu", name: "DINDIGUL", address: "1st floor, Bharathi Mission Hospital, 11, 91, NVGB HTamil Nadu Rd, EB Colony, Dindigul - 624003" },
//   { category: "Tamil Nadu", name: "KOVILPATTI", address: "593/29, Sri Nayagam mulitiplex, 2nd floor, Opp toold bus stand, Kovilpatti - 628502" },
//   { category: "Tamil Nadu", name: "RAMANATHAPURAM", address: "Door No.147/6, Second floor, Railway Feeder road, Ramanathapuram-623501 (Landmark-Inside Gani hospital)" },
//   { category: "Tamil Nadu", name: "TRICHY", address: "50 EVR main road Puthur (Opp to GH), Trichy - 620017" },
//   { category: "Tamil Nadu", name: "TIRUNELVELI", address: "14A, 1, S Bypass Rd, near Saravana Selvarathinam Stores, Melapalayam, Tirunelveli, Tamil Nadu 627005" },
//   { category: "Tamil Nadu", name: "TIRUPPUR", address: "2214 4th Floor Pitchaampalayam extn, PN Road, Near New Bus stand., Sri Kumaran Hospital campus, Tiruppur - 641602" },
//   { category: "Tamil Nadu", name: "ERODE", address: "33/12A, Chinnamuthu 2nd st, Natesar mill compound, Perundurai Road, Erode - 638011" },
//   { category: "Tamil Nadu", name: "COIMBATORE", address: "644/4 Avinashi Road, Pappanaickenpalayam, Lakshmi Mills Junction Coimbatore - 641037" },
//   { category: "Tamil Nadu", name: "KUMBAKONAM", address: "Plot No: 197, John Selvaraj Nagar, Kumbakonam Town,Kumbakonam - 612001" },
//   { category: "Tamil Nadu", name: "SALEM", address: "Door no 52/10-3/5 2nd floor, Jagir Ammapalayam, Near Global Medical center & Hospital, Salem - 636302" },
//   { category: "Tamil Nadu", name: "NAGERCOIL", address: "Bus Stand, 8A Almighty Towers (Ground Floor), 30/2,8A Distillary road Vadasery Opp to Vadasery, Nagercoil - 629001" },
//   { category: "Tamil Nadu", name: "THIRUVANNAMALAI", address: "1533 A, Kanji road, Vengikkal Near Vengikkal arch, Tiruvannamalai - 606604" },
//   { category: "Tamil Nadu", name: "PUDUCHERRY Branch 1", address: "13-A, Pondy, Villupuram Main Rd, inside Venkateswara Medical College, Ariyur, Puducherry 605102" },
//   { category: "Tamil Nadu", name: "PUDUCHERRY Branch 2", address: "116, Villianur road, Reddiarpalayam, Puducherry, 605010" },
//   { category: "Tamil Nadu", name: "VELLORE", address: "102/283, New Katpadi Road, Opp New bus stand Vellore - 632 004" },
//   { category: "Tamil Nadu", name: "AMBATTUR", address: "D-22, Madras ThiruvTamil Naduur High Rd, Old Ambattur, Sai Nagar, Ambattur Industrial Estate, Ambattur, Chennai, Tamil Nadu 600058" },
//   { category: "Tamil Nadu", name: "EGMORE", address: "No. 19, CASA Major Road, Sulaiman Zackira Avenue, Egmore, Chennai, Tamil Nadu 600008" },
//   { category: "Tamil Nadu", name: "PERAMBUR", address: "#22/2, ESI Hospital Road, PeravTamil Naduur (Perambur), Chennai - 600 011" },
//   { category: "All", name: "SRILANKA", address: "58 Jalan, 16 Joseph Lane, Colombo 20004, Sri Lanka" },
//   { category: "All", name: "ANDHRA PRADESH", address: "Air By-Pass, Chittoor District, Tirupati Sub-District,Tirupati 517502" },
//   { category: "All", name: "ANDHRA PRADESH", address: "Door No.704 N.V.R.Central, Grand Trunk Road, Dargamitta, Nellore, Andhra Pradesh 524003" },
//   { category: "All", name: "TELANGANA", address: "1Door.no.2-9/90/1part/7/1F, Gachibowli Village,SerilingampAlly Mandal,RR district, Hyderabad,Telangana-500032" },
//   { category: "All", name: "KOLKATA", address: "1720 Laskarhat, Rudramani building, 4th floor, Near Ruby crossing, EM Bypass, Kolkata - 700039" },
//   { category: "All", name: "KERALA", address: "KNS Towers, Door No 38/4010 NH-47 Road, Mamangalam- Palarivattom Kochi - 682025" },
//   { category: "All", name: "SRILANKA", address: "58 Jalan, 16 Joseph Lane, Colombo 20004, Sri Lanka" },

//   { category: "Chennai", name: "AMBATTUR", address: "D-22, Madras ThiruvTamil Naduur High Rd, Old Ambattur, Sai Nagar, Ambattur Industrial Estate, Ambattur, Chennai, Tamil Nadu 600058" },
//   { category: "Chennai", name: "EGMORE", address: "No. 19, CASA Major Road, Sulaiman Zackira Avenue, Egmore, Chennai, Chennai 600008" },
//   { category: "Chennai", name: "PERAMBUR", address: "#22/2, ESI Hospital Road, PeravTamil Naduur (Perambur), Chennai - 600 011" },
  
//   { category: "Chennai", name: "ANNA NAGAR", address: "Anna Nagar, Chennai - 600 040" },

//   // { category: "All", name: "SRILANKA", address: "58 Jalan, 16 Joseph Lane, Colombo 20004, Sri Lanka" },
//   { category: "Other State", name: "ANDHRA PRADESH", address: "Air By-Pass, Chittoor District, Tirupati Sub-District,Tirupati 517502" },
//   { category: "Other State", name: "ANDHRA PRADESH", address: "Door No.704 N.V.R.Central, Grand Trunk Road, Dargamitta, Nellore, Andhra Pradesh 524003" },
//   { category: "Other State", name: "TELANGANA", address: "1Door.no.2-9/90/1part/7/1F, Gachibowli Village,SerilingampOther Statey Mandal,RR district, Hyderabad,Telangana-500032" },
//   { category: "Other State", name: "KOLKATA", address: "1720 Laskarhat, Rudramani building, 4th floor, Near Ruby crossing, EM Bypass, Kolkata - 700039" },
//   { category: "Other State", name: "KERALA", address: "KNS Towers, Door No 38/4010 NH-47 Road, Mamangalam- Palarivattom Kochi - 682025" },
//   { category: "All", name: "SRI LANKA", address: "#16, Joseph Lane, Bambalapitiya, Colombo - 04, Srilanka." },

//   { category: "International", name: "SRI LANKA", address: "#16, Joseph Lane, Bambalapitiya, Colombo - 04, Srilanka." },
// ];

const ContactUs = () => {
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();
  const categories = ["Tamil Nadu", "Other State", "International", "All"];

  console.log("jidataaaaaaaa",locations);
  

  const filteredLocations = locations.filter((location) =>
    category === "All" ? true : location.category === category
  );

  const handleClick = (location) => {
    navigate(`/LocationDetails/${location.name}`, { state: location });
  };

  return (
    <div className="p-5 mt-30 md:mt-40 w-full font-[choco] bg-[#fff8ef]">
    {/* Category Buttons */}
    <div className="flex gap-4 mb-6 justify-center font-bold ">
      {categories.map((cat, index) => (
        <button
          key={index}
          onClick={() => setCategory(cat)}
          className={`px-6 py-2 rounded-full ${category === cat ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          {cat}
        </button>
      ))}
    </div>

    {/* Location Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
      {filteredLocations.map((location, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => handleClick(location)}
          className="p-6 border rounded-lg shadow-lg cursor-pointer hover:bg-blue-100"
        >
          <h2 className="font-bold text-xl text-center">{location.name}</h2>
          <p className="text-sm text-center mt-2">{location.address}</p>
        </motion.div>
      ))}
    </div>
  </div>
  );
};

export default ContactUs;
