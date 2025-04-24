import React, { useState } from "react";
import { motion } from "framer-motion";
import appointment from "../Images/appointment.png"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    service: "",
    doctor: "",
    message: "",
  });

  const services = ["General Consultation", "IVF Treatment", "Prenatal Care"];
  const doctors = ["Dr. Smith", "Dr. Johnson", "Dr. Emily"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your message has been sent!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      service: "",
      doctor: "",
      message: "",
    });
  };

  return (
    <div className="bg-[#bed1e3] w-full min-h-[100vh] ">
      <div className="p-5 bg-white grid place-items-center">
        <h1 className="font-[Belli] text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl  p-2">We Are Always Ready to Help You. Book An Appointment.</h1>
        <p className="font-[choco] md:text-4xl text-3xl  rounded text-center text-pink-400 p-5 font-bold"> Get Flat 100% Off On investigation<span className="text-pink-400">* </span> </p>
        <p className="font-[choco] md:text-3xl text-1xl  rounded text-center " >*First-Time-Visit</p>
      </div>
<div className="flex flex-col md:flex-row items-center justify-center min-h-[600px] p-5">
      {/* Form Section */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="w-full md:w-[35%] bg-white shadow-xl rounded-lg p-6 md:p-8"
      >
        <h2 className="text-2xl md:text-3xl font-[Belli] text-center text-blue-600 mb-4 md:mb-6">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 font-[choco]">
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
          <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
          <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
          <select name="service" value={formData.service} onChange={handleChange} required className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
            <option value="">Select a service</option>
            {services.map((service, index) => <option key={index} value={service}>{service}</option>)}
          </select>
          <select name="doctor" value={formData.doctor} onChange={handleChange} required className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
            <option value="">Select a doctor</option>
            {doctors.map((doctor, index) => <option key={index} value={doctor}>{doctor}</option>)}
          </select>
          <textarea name="message" placeholder="Type Your Message" value={formData.message} onChange={handleChange} required rows="3" className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white font-semibold p-2 md:p-3 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </motion.div>

      {/* Right Side Image */}
      <motion.div 
       
        className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0"
      >
        <img src={appointment} alt="Contact Us" className="w-[80%] md:w-[90%] rounded-lg " />
      </motion.div>
    </div>
    </div>
    
  );
};

export default ContactForm;
