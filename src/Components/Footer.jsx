import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import arclogo from "../Images/arclogo.png"
import waveA from "../Images/waveA.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#ffc9d7]  lg:pt-10 pb-6 relative font-[choco]">
      <div className=" absolute -top-15 md:top-0 w-full ">
      <img src={waveA} className="w-full md:bg-[#bed1e3]" alt="" />
      </div>
      <div className="container mx-auto px-4 mt-5  sm:mt-70">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div>
            <img src={arclogo} className="w-40 h-40 p-5" alt="" />
            <p className="text-sm mb-4">
              All content on this website is protected by copyright and may not be used without permission from Arc.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <FaFacebookF className="cursor-pointer hover:text-pink-400 text-2xl" />
              <FaInstagram className="cursor-pointer hover:text-pink-400 text-2xl" />
              <FaTwitter className="cursor-pointer hover:text-pink-400 text-2xl" />
            </div>
          </div>

          {/* IVF Centres */}
          <div>
            <h2 className="text-lg font-bold mb-4">Our IVF Centres</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
              {["Ariyur", "Bengaluru", "Coimbatore", "Dindigul", "Egmore", "Erode", "Hyderabad", "Kochi", "Kolkata", "Kovilpatti", "Sri Lanka", "Madurai", "Nagercoil", "Nellore", "Ongole", "Perambur","Tambaram",  "Reddiyarpalayam", "Salem", "Trichy", "Ambattur", "Tiruvannamalai", "Tirunelveli", "Tirupathi", "Tiruppur", "Vellore", "Kumbakonam","Ramanathapuram"].map((centre, index) => (
                <p key={index} className="flex items-center gap-2 text-1xl">
                  <span className="text-pink-400 ">&#9679;</span> {centre}
                </p>
              ))}
            </div>
          </div>

          {/* Appointment & Subscription */}
          <div className="flex flex-col gap-4">
            <Link to="/Contactus">
            
            <button className="bg-pink-500 hover:bg-pink-600 text-white  py-2 px-6 rounded-lg">
              Appointment
            </button>
            </Link>
            <h2 className="text-lg font-bold ">Subscribe to our Newsletter</h2>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-l-lg outline-black border bg-white border-black text-black"
              />
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 rounded-r-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="text-center text-sm mt-10">
          Copyright © 2025 ARC Fertility. All Rights Reserved.
          <p className="text-[#5b3a94] font-bold">Created By Disha Medias</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
