import { useState, useEffect } from "react";
import Plus from "../Images/Plus.png";
import Triangle from "../Images/Triangle.png";
import HeaderImg from "../Images/HeaderImg.png"
import home from "../Images/home.jpg"

export default function Header() {
  // Creating an array with alternating Plus and Triangle images
  const images = Array.from({ length: 10 }, (_, i) => (i % 2 === 0 ? Plus : Triangle));

  // State to track mouse movement
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle Mouse Move
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Positions for images
  const positions = [
    "top-10 left-10", "top-20 right-16", "bottom-10 left-20", "bottom-32 right-32",
    "top-1/2 left-10", "top-1/3 right-1/4", "bottom-20 left-1/2", "top-10 right-1/2",
    "bottom-1/4 right-10", "top-1/4 left-1/3"
  ];
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Hide success message after 3 sec
  };



  return (
    <div className="-mt-55">
    <header className="relative w-full min-h-[90vh]  bg-white overflow-hidden flex items-center justify-center ">
      {/* Blurred Glass Effect */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-2xl border border-gray-200 rounded-lg shadow-lg"></div>

      {/* Floating Images with Mouse Hover Effect */}
      {images.map((src, index) => (
        <img 
          key={index} 
          src={src} 
          alt={`Shape ${index + 1}`} 
          className={`absolute w-16 h-16 sm:w-20 sm:h-20 md:w-17 md:h-17 object-cover rounded-full transition-transform duration-500 ease-out hover:scale-110 ${positions[index]}`}
          style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
        />
      ))}

      {/* Centered Text with Glassmorphism Effect */}
      <div className="relative min-h-[90vh] w-full border border-white/30 rounded-2xl shadow-xl flex items-center justify-center p-6">
  <div className="relative min-h-[550px] md:w-[90%] w-full border border-white/30 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-around p-6 bg-cover bg-center">
    
    {/* Left Side: Text Section */}
    <div className="w-full md:w-1/3 flex justify-center items-center p-6">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl lg:text-8xl text-bold font-[Heading] leading-tight">
          We take dreams & turn them into families
        </h1>
        <button className="mt-6 px-6 py-3 bg-pink-400 text-white text-lg font-[MyCustomFont] rounded-lg shadow-md transition-all duration-500 ease-in-out transform hover:bg-pink-500 hover:scale-110 hover:shadow-xl">
          Book Now
        </button>
      </div>
    </div>

    {/* Center: Responsive Image */}
    

    {/* Right Side: Appointment Form */}
    <div className="relative w-full md:w-1/3 md:min-h-auto bg-white p-6 rounded-lg shadow-md font-[MyCustomFont]">

    <div className="absolute  w-full md:w-1/3 flex justify-center items-center p-6">
      <img src={HeaderImg} alt="Doctor or Healthcare" className="w-full max-w-xs md:max-w-md lg:max-w-xl object-cover " />
    </div>


      <h2 className="font-[Heading] text-3xl font-semibold text-center text-gray-800 mb-4">For Appointment</h2>
      {submitted ? (
        <div className="text-center text-green-600 font-semibold p-3 border border-green-300 rounded-md">
          ✅ Appointment Request Submitted Successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md outline-none focus:border-pink-400 transition duration-300"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md outline-none focus:border-pink-400 transition duration-300"
          />
          <button
            type="submit"
            className="w-full bg-pink-400 text-white p-3 rounded-md hover:bg-pink-500 hover:scale-105 transition-all duration-300 shadow-md"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  </div>
</div>

    </header>

    </div>
  );
}
