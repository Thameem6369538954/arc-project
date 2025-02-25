import { useState } from "react";
import { motion } from "framer-motion";

const locations = [
  { category: "All", name: "Madurai", address: "No 21-C, 3rd Floor, Singarayar Main Road, Madurai - 625 001" },
  { category: "All", name: "DINDIGUL", address: "1st floor, Bharathi Mission Hospital, 11, 91, NVGB Hall Rd, EB Colony, Dindigul - 624003" },
  { category: "All", name: "KOVILPATTI", address: "593/29, Sri Nayagam mulitiplex, 2nd floor, Opp toold bus stand, Kovilpatti - 628502" },
  { category: "All", name: "RAMANATHAPURAM", address: "Door No.147/6, Second floor, Railway Feeder road, Ramanathapuram-623501 (Landmark-Inside Gani hospital)" },
  { category: "All", name: "TRICHY", address: "50 EVR main road Puthur (Opp to GH), Trichy - 620017" },
  { category: "All", name: "TIRUNELVELI", address: "14A, 1, S Bypass Rd, near Saravana Selvarathinam Stores, Melapalayam, Tirunelveli, Tamil Nadu 627005" },
  { category: "All", name: "TIRUPPUR", address: "2214 4th Floor Pitchaampalayam extn, PN Road, Near New Bus stand., Sri Kumaran Hospital campus, Tiruppur - 641602" },
  { category: "All", name: "ERODE", address: "33/12A, Chinnamuthu 2nd st, Natesar mill compound, Perundurai Road, Erode - 638011" },
  { category: "All", name: "COIMBATORE", address: "644/4 Avinashi Road, Pappanaickenpalayam, Lakshmi Mills Junction Coimbatore - 641037" },
  { category: "All", name: "KUMBAKONAM", address: "Plot No: 197, John Selvaraj Nagar, Kumbakonam Town,Kumbakonam - 612001" },
  { category: "All", name: "SALEM", address: "Door no 52/10-3/5 2nd floor, Jagir Ammapalayam, Near Global Medical center & Hospital, Salem - 636302" },
  { category: "All", name: "NAGERCOIL", address: "Bus Stand, 8A Almighty Towers (Ground Floor), 30/2,8A Distillary road Vadasery Opp to Vadasery, Nagercoil - 629001" },
  { category: "All", name: "THIRUVANNAMALAI", address: "1533 A, Kanji road, Vengikkal Near Vengikkal arch, Tiruvannamalai - 606604" },
  { category: "All", name: "PUDUCHERRY", address: "13-A, Pondy, Villupuram Main Rd, inside Venkateswara Medical College, Ariyur, Puducherry 605102" },
  { category: "All", name: "PUDUCHERRY branch 2", address: "116, Villianur road, Reddiarpalayam, Puducherry, 605010" },
  { category: "All", name: "VELLORE", address: "102/283, New Katpadi Road, Opp New bus stand Vellore - 632 004" },
  { category: "All", name: "SRILANKA", address: "58 Jalan, 16 Joseph Lane, Colombo 20004, Sri Lanka" },
  { category: "All", name: "AMBATTUR", address: "D-22, Madras Thiruvallur High Rd, Old Ambattur, Sai Nagar, Ambattur Industrial Estate, Ambattur, Chennai, Tamil Nadu 600058" },
  { category: "All", name: "EGMORE", address: "No. 19, CASA Major Road, Sulaiman Zackira Avenue, Egmore, Chennai, Tamil Nadu 600008" },
  { category: "All", name: "PERAMBUR", address: "#22/2, ESI Hospital Road, Peravallur (Perambur), Chennai - 600 011" },
  { category: "Tamil Nadu", name: "Madurai", address: "No 21-C, 3rd Floor, Singarayar Main Road, Madurai - 625 001" },
  { category: "Tamil Nadu", name: "DINDIGUL", address: "1st floor, Bharathi Mission Hospital, 11, 91, NVGB HTamil Nadu Rd, EB Colony, Dindigul - 624003" },
  { category: "Tamil Nadu", name: "KOVILPATTI", address: "593/29, Sri Nayagam mulitiplex, 2nd floor, Opp toold bus stand, Kovilpatti - 628502" },
  { category: "Tamil Nadu", name: "RAMANATHAPURAM", address: "Door No.147/6, Second floor, Railway Feeder road, Ramanathapuram-623501 (Landmark-Inside Gani hospital)" },
  { category: "Tamil Nadu", name: "TRICHY", address: "50 EVR main road Puthur (Opp to GH), Trichy - 620017" },
  { category: "Tamil Nadu", name: "TIRUNELVELI", address: "14A, 1, S Bypass Rd, near Saravana Selvarathinam Stores, Melapalayam, Tirunelveli, Tamil Nadu 627005" },
  { category: "Tamil Nadu", name: "TIRUPPUR", address: "2214 4th Floor Pitchaampalayam extn, PN Road, Near New Bus stand., Sri Kumaran Hospital campus, Tiruppur - 641602" },
  { category: "Tamil Nadu", name: "ERODE", address: "33/12A, Chinnamuthu 2nd st, Natesar mill compound, Perundurai Road, Erode - 638011" },
  { category: "Tamil Nadu", name: "COIMBATORE", address: "644/4 Avinashi Road, Pappanaickenpalayam, Lakshmi Mills Junction Coimbatore - 641037" },
  { category: "Tamil Nadu", name: "KUMBAKONAM", address: "Plot No: 197, John Selvaraj Nagar, Kumbakonam Town,Kumbakonam - 612001" },
  { category: "Tamil Nadu", name: "SALEM", address: "Door no 52/10-3/5 2nd floor, Jagir Ammapalayam, Near Global Medical center & Hospital, Salem - 636302" },
  { category: "Tamil Nadu", name: "NAGERCOIL", address: "Bus Stand, 8A Almighty Towers (Ground Floor), 30/2,8A Distillary road Vadasery Opp to Vadasery, Nagercoil - 629001" },
  { category: "Tamil Nadu", name: "THIRUVANNAMALAI", address: "1533 A, Kanji road, Vengikkal Near Vengikkal arch, Tiruvannamalai - 606604" },
  { category: "Tamil Nadu", name: "PUDUCHERRY", address: "13-A, Pondy, Villupuram Main Rd, inside Venkateswara Medical College, Ariyur, Puducherry 605102" },
  { category: "Tamil Nadu", name: "PUDUCHERRY branch 2", address: "116, Villianur road, Reddiarpalayam, Puducherry, 605010" },
  { category: "Tamil Nadu", name: "VELLORE", address: "102/283, New Katpadi Road, Opp New bus stand Vellore - 632 004" },
  { category: "Tamil Nadu", name: "AMBATTUR", address: "D-22, Madras ThiruvTamil Naduur High Rd, Old Ambattur, Sai Nagar, Ambattur Industrial Estate, Ambattur, Chennai, Tamil Nadu 600058" },
  { category: "Tamil Nadu", name: "EGMORE", address: "No. 19, CASA Major Road, Sulaiman Zackira Avenue, Egmore, Chennai, Tamil Nadu 600008" },
  { category: "Tamil Nadu", name: "PERAMBUR", address: "#22/2, ESI Hospital Road, PeravTamil Naduur (Perambur), Chennai - 600 011" },
  { category: "All", name: "SRILANKA", address: "58 Jalan, 16 Joseph Lane, Colombo 20004, Sri Lanka" },
  { category: "All", name: "ANDHRA PRADESH", address: "Air By-Pass, Chittoor District, Tirupati Sub-District,Tirupati 517502" },
  { category: "All", name: "ANDHRA PRADESH", address: "Door No.704 N.V.R.Central, Grand Trunk Road, Dargamitta, Nellore, Andhra Pradesh 524003" },
  { category: "All", name: "TELANGANA", address: "1Door.no.2-9/90/1part/7/1F, Gachibowli Village,SerilingampAlly Mandal,RR district, Hyderabad,Telangana-500032" },
  { category: "All", name: "KOLKATA", address: "1720 Laskarhat, Rudramani building, 4th floor, Near Ruby crossing, EM Bypass, Kolkata - 700039" },
  { category: "All", name: "KERALA", address: "KNS Towers, Door No 38/4010 NH-47 Road, Mamangalam- Palarivattom Kochi - 682025" },
  { category: "All", name: "SRILANKA", address: "58 Jalan, 16 Joseph Lane, Colombo 20004, Sri Lanka" },

  { category: "Chennai", name: "AMBATTUR", address: "D-22, Madras ThiruvTamil Naduur High Rd, Old Ambattur, Sai Nagar, Ambattur Industrial Estate, Ambattur, Chennai, Tamil Nadu 600058" },
  { category: "Chennai", name: "EGMORE", address: "No. 19, CASA Major Road, Sulaiman Zackira Avenue, Egmore, Chennai, Chennai 600008" },
  { category: "Chennai", name: "PERAMBUR", address: "#22/2, ESI Hospital Road, PeravTamil Naduur (Perambur), Chennai - 600 011" },
  
  { category: "Chennai", name: "Anna Nager", address: "Anna Nagar, Chennai - 600 040" },

  // { category: "All", name: "SRILANKA", address: "58 Jalan, 16 Joseph Lane, Colombo 20004, Sri Lanka" },
  { category: "Other State", name: "ANDHRA PRADESH", address: "Air By-Pass, Chittoor District, Tirupati Sub-District,Tirupati 517502" },
  { category: "Other State", name: "ANDHRA PRADESH", address: "Door No.704 N.V.R.Central, Grand Trunk Road, Dargamitta, Nellore, Andhra Pradesh 524003" },
  { category: "Other State", name: "TELANGANA", address: "1Door.no.2-9/90/1part/7/1F, Gachibowli Village,SerilingampOther Statey Mandal,RR district, Hyderabad,Telangana-500032" },
  { category: "Other State", name: "KOLKATA", address: "1720 Laskarhat, Rudramani building, 4th floor, Near Ruby crossing, EM Bypass, Kolkata - 700039" },
  { category: "Other State", name: "KERALA", address: "KNS Towers, Door No 38/4010 NH-47 Road, Mamangalam- Palarivattom Kochi - 682025" },
  { category: "All", name: "SRILANKA", address: "#16, Joseph Lane, Bambalapitiya, Colombo - 04, Srilanka." },

  { category: "International", name: "Sri Lanka", address: "#16, Joseph Lane, Bambalapitiya, Colombo - 04, Srilanka." },
];

const ContactUs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="w-full mx-auto px-5 py-10 bg-[#94bfa4]">
      {/* Contact Form */}
      <h1 className="font-[Belli] text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-6xl mt-5 px-5 text-white tracking-wide p-5">Contact US</h1>
      <div className="flex flex-col lg:flex-row items-center justify-around gap-4">
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[60%]">
      <motion.div
             
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-5 rounded-lg  shadow-lg border"
            >
              <h3 className="text-lg font-bold mb-2">India</h3>
              <p className="text-sm mb-3">+91 78 11 999 999</p>
              <button className="px-4 py-2 bg-[#d25c78] text-white rounded-md hover:scale-105 transition-all w-full sm:w-auto">
                View Map
              </button>
            </motion.div>
      <motion.div
             
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-5 rounded-lg shadow-lg border"
            >
              <h3 className="text-lg font-bold mb-2">Canada</h3>
              <p className="text-sm mb-3">+1(647)948-8116</p>
              <button className="px-4 py-2 bg-[#d25c78] text-white rounded-md hover:scale-105 transition-all w-full sm:w-auto">
                View Map
              </button>
            </motion.div>
      <motion.div
             
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-5 rounded-lg shadow-lg border"
            >
              <h3 className="text-lg font-bold mb-2">USA(Toll-Free-Number)</h3>
              <p className="text-sm mb-3">+1 (833) 387-7445</p>
              <button className="px-4 py-2 bg-[#d25c78] text-white rounded-md hover:scale-105 transition-all w-full sm:w-auto">
                View Map
              </button>
            </motion.div>
      <motion.div
             
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-5 rounded-lg shadow-lg border"
            >
              <h3 className="text-lg font-bold mb-2">Srilanka</h3>
              <p className="text-sm mb-3">94 757333666</p>
              <button className="px-4 py-2 bg-[#d25c78] text-white rounded-md hover:scale-105 transition-all w-full sm:w-auto">
                View Map
              </button>
            </motion.div>
      <motion.div
             
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-5 rounded-lg shadow-lg border"
            >
              <h3 className="text-lg font-bold mb-2">Malaysia</h3>
              <p className="text-sm mb-3">+60 109 429 034</p>
              <button className="px-4 py-2 bg-[#d25c78] text-white rounded-md hover:scale-105 transition-all w-full sm:w-auto">
                View Map
              </button>
            </motion.div>
      <motion.div
             
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-5 rounded-lg shadow-lg border"
            >
              <h3 className="text-lg font-bold mb-2">Bangladesh</h3>
              <p className="text-sm mb-3">+91 7305019268</p>
              <button className="px-4 py-2 bg-[#d25c78] text-white rounded-md hover:scale-105 transition-all w-full sm:w-auto">
                View Map
              </button>
            </motion.div>
            </motion.div>
      <div className="bg-red-100 p-6 rounded-lg shadow-md mb-10">
        <h2 className="text-2xl font-bold text-[#d25c78] mb-5">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Name" className="p-3 border rounded-md" />
          <input type="text" placeholder="Phone number" className="p-3 border rounded-md" />
          <input type="text" placeholder="Location" className="p-3 border rounded-md" />
          <textarea placeholder="Message" className="p-3 border rounded-md" rows="3"></textarea>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" />
          <span>Opt-in for WhatsApp updates</span>
        </div>
        <button className="mt-4 px-6 py-2 bg-[#d25c78] text-white rounded-md hover:scale-105 transition-all w-full sm:w-auto">
          Submit
        </button>
      </div>
      </div>

      {/* Responsive Tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {["All", "Tamil Nadu","Chennai", "Other State", "International"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 m-5 rounded-md transition-all ${
              selectedCategory === category ? "bg-[#d25c78] text-white" : "bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Location Cards */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {locations
          .filter((loc) => loc.category === selectedCategory)
          .map((loc, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-5 rounded-lg shadow-lg border"
            >
              <h3 className="text-lg font-bold mb-2">{loc.name}</h3>
              <h3 className="text-lg font-bold mb-2">ARC International Fertility and Research Centre</h3>
              <p className="text-sm mb-3">{loc.address}</p>
              <button className="px-4 py-2 bg-[#d25c78] text-white rounded-md hover:scale-105 transition-all w-full sm:w-auto">
                View Map
              </button>
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
};

export default ContactUs;
