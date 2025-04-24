import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import arclogo from "../Images/arclogo.png";
import waveA from "../Images/waveA.png";

const Footer = () => {
  return (
    <footer className="bg-[#ffc9d7] pb-10 pt-10 font-[choco] relative text-gray-800">
      {/* Optional Decorative Wave */}
      {/* <div className="absolute top-0 -translate-y-full w-full z-0">
        <img src={waveA} className="w-full" alt="wave" />
      </div> */}

      <div className="w-[90%] mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Left Section - Brand Info */}
          <div>
            <img src={arclogo} className="w-36 h-36 mx-auto md:mx-0 p-3" alt="ARC Logo" />
            <p className="text-sm mb-4 leading-relaxed">
              All content on this website is protected by copyright and may not be used without permission from ARC.
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <FaFacebookF className="text-2xl cursor-pointer hover:text-[#3b5998] transition" />
              <FaInstagram className="text-2xl cursor-pointer hover:text-[#E1306C] transition" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-[#1DA1F2] transition" />
            </div>
          </div>

          {/* Center Section - IVF Centres */}
          <div>
            <h2 className="text-lg font-bold mb-4 text-pink-600">Our IVF Centres</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 text-sm max-h-64 overflow-y-auto pr-1">
              {[
                "Ariyur", "Bengaluru", "Coimbatore", "Dindigul", "Egmore", "Erode", "Hyderabad", "Kochi", "Kolkata",
                "Kovilpatti", "Sri Lanka", "Madurai", "Nagercoil", "Nellore", "Ongole", "Perambur", "Tambaram",
                "Reddiyarpalayam", "Salem", "Trichy", "Ambattur", "Tiruvannamalai", "Tirunelveli", "Tirupathi",
                "Tiruppur", "Vellore", "Kumbakonam", "Ramanathapuram"
              ].map((centre, index) => (
                <p key={index} className="flex items-center gap-2">
                  <span className="text-pink-500 text-lg">&#9679;</span> {centre}
                </p>
              ))}
            </div>
          </div>

          {/* Right Section - Contact & Subscribe */}
          <div className="flex flex-col justify-start items-center md:items-start gap-4">
            <Link to="/Contactus">
              <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-lg transition">
                Book Appointment
              </button>
            </Link>

            <h2 className="text-lg font-bold text-pink-600">Subscribe to our Newsletter</h2>
            <div className="flex w-full max-w-xs">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-l-lg border border-black outline-none"
              />
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 rounded-r-lg transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-sm mt-10">
          <p>© 2025 ARC Fertility. All Rights Reserved.</p>
          <p className="text-[#5b3a94] font-bold mt-1">Created By Disha Medias</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
