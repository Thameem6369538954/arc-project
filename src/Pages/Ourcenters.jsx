import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { locations } from "../Data/locationData.js";
import LocationDetails from "./LocationDetails.jsx";

const ContactUs = () => {
  const [category, setCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [userCoords, setUserCoords] = useState(null); // 🌍 Store user's location

  const navigate = useNavigate();
  const categories = ["All", "Tamil Nadu", "Other State", "International"];

  // 📍 Get user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserCoords({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    }
  }, []);

  // 🧮 Helper: Calculate distance between two lat/lon points
  const getDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371; // Radius of Earth in km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  // 🧠 Filter and sort locations
  const filteredLocations = Array.from(
    new Map(
      locations
        .filter(
          (location) =>
            (category === "All" ? true : location.category === category) &&
            location.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((location) => [location.name, location]) // Remove duplicates
    ).values()
  ).sort((a, b) => {
    if (!userCoords || !a.latitude || !a.longitude || !b.latitude || !b.longitude) return 0;

    const distA = getDistance(userCoords.lat, userCoords.lon, a.latitude, a.longitude);
    const distB = getDistance(userCoords.lat, userCoords.lon, b.latitude, b.longitude);
    return distA - distB; // Closest comes first
  });

  const openForm = (location) => {
    setSelectedLocation(location);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setSelectedLocation(null);
  };

  return (
    <div className="p-5 mt-30 md:mt-25 w-full font-[choco] bg-[#fff8ef]">
      {/* Category Buttons */}
      <div className="flex gap-4 mb-4 justify-center font-bold flex-wrap">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setCategory(cat)}
            className={`px-6 py-2 rounded-full ${
              category === cat ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search locations..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border rounded w-full max-w-md"
        />
      </div>

      {/* Location Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {filteredLocations.length === 0 ? (
          <p className="text-center col-span-full text-red-500 font-semibold text-lg">
            Sorry, {searchQuery} not found.
          </p>
        ) : (
          filteredLocations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 border rounded-lg shadow-lg cursor-pointer hover:bg-blue-100"
            >
              <h2 className="font-bold text-xl text-center">{location.name}</h2>
              <p className="text-sm text-center mt-2">{location.address}</p>

              {/* Buttons */}
              <div className="flex justify-center gap-6 mt-4">
                <Link to={`/LocationDetails/${location.name}`}>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-full">
                    View Details
                  </button>
                </Link>
                <button
                  onClick={() => openForm(location)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-full"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Booking Form Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg"
            >
              <h2 className="text-xl font-bold mb-4 text-center">
                Book Now - {selectedLocation?.name}
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Form submitted!");
                  closeForm();
                }}
                className="space-y-4"
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 border rounded"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 border rounded"
                />
                <input
                  type="tel"
                  placeholder="Your Mobile"
                  required
                  className="w-full px-4 py-2 border rounded"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-full"
                >
                  Submit Booking
                </button>
              </form>
              <button
                onClick={closeForm}
                className="mt-4 text-sm text-gray-500 hover:underline block mx-auto"
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactUs;
