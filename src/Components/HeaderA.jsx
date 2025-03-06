import { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa"; // Close icon
import HeaderBg from "../Images/HeaderBg.jpg";
import Fart from "../Images/Fart.png";
import wave from "../Images/wave.png";

const HeaderA = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({ fullName: "", phone: "" });
    const [submitted, setSubmitted] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        // Show success popup
        setShowSuccess(true);
        setTimeout(() => {
            setShowSuccess(false);
        }, 3000);

        // Close form after submitting
        setTimeout(() => {
            setSubmitted(false);
            setIsFormOpen(false);
            setFormData({ fullName: "", phone: "" });
        }, 2000);
    };

    return (
        <div className="relative">
            {/* Header Section */}
            <motion.div
                className="w-full md:min-h-[100vh]  mt-20 md:mt-5 lg:mt-5 md:min-h-[120vh] min-h-[110vh] bg-[#fff8ef] flex flex-col md:flex-row items-center justify-center p-5 md:p-10 relative text-center md:text-left"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.img
                    src={Fart}
                    className="absolute w-[50px] sm:w-[120px] md:w-[150px] sm:top-70  md:top-60 lg:top-40  top-130  right-5 sm:right-10 animate-bounce"
                    alt="Decoration"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                />
                <motion.div
                    className="w-full md:w-1/2 px-4"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="font-[Belli] text-3xl sm:text-3xl md:text-3xl  lg:text-4xl xl:text-5xl p-3 text-black  tracking-wide">
                        <span className="text-[#1c97c8]">We take care of your dreams</span>{" "}
                        <span className="text-black">&</span> turn them into families
                    </h1>
                    <p className="tracking-wide font-[choco] text-xl sm:text-2xl md:text-3xl lg:text-3xl p-3 ">
                        "Building bonds, creating love, and making dreams come true."
                    </p>
                    <motion.button
                        onClick={() => setIsFormOpen(true)}
                        className="mt-5 px-6 py-4 sm:py-5 md:py-6 bg-[#1c97c8] font-[choco] text-1xl sm:text-3xl text-white rounded-lg shadow-lg transition-all"
                        whileHover={{
                            scale: 1.1,
                            backgroundColor: "#147a9d",
                            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Request to call back
                    </motion.button>
                </motion.div>
                <motion.div
                    className="bg-[#ffb6c6] p-1  rounded-lg shadow-lg w-full md:w-[60%] lg:w-1/2 mx-auto mt-10 md:mt-0"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <img src={HeaderBg} alt="Header Background" className="w-full h-auto rounded-md" />
                </motion.div>
            </motion.div>

            {/* Appointment Form (Popup) */}
            {isFormOpen && (
                <motion.div
                className="fixed inset-0 top-0 z-20 flex items-center justify-center p-4 bg-white/30 backdrop-blur-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="relative bg-white/20 backdrop-blur-xl rounded-lg shadow-2xl p-6 w-full max-w-md border border-white/30"
                >
                    {/* Close Button */}
                    <button
                        onClick={() => setIsFormOpen(false)}
                        className="absolute top-4 right-4 text-black text-2xl hover:text-gray-600 transition-all"
                    >
                        <FaTimes />
                    </button>
            
                    <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">Book an Appointment</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <motion.input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full p-3 bg-white/50 backdrop-blur-md rounded-lg border border-gray-300 text-black placeholder-gray-500 focus:outline-none text-lg"
                            required
                            whileFocus={{ scale: 1.05, borderColor: "#1c97c8" }}
                        />
                        <motion.input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-3 bg-white/50 backdrop-blur-md rounded-lg border border-gray-300 text-black placeholder-gray-500 focus:outline-none text-lg"
                            required
                            whileFocus={{ scale: 1.05, borderColor: "#1c97c8" }}
                        />
                        <motion.button
                            type="submit"
                            className="w-full bg-[#1c97c8] text-white py-3 text-lg rounded-lg shadow-lg transition-all"
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "#147a9d",
                                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {submitted ? "Submitting..." : "Submit"}
                        </motion.button>
                    </form>
                </motion.div>
            </motion.div>
            
            )}

            {/* Success Message Popup */}
            {showSuccess && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed top-10 right-10 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg text-lg"
                >
                    ✅ Your appointment was successfully submitted!
                </motion.div>
            )}
            <div className="absolute w-[100%] md:-bottom-32 lg:-bottom-40  xl:-bottom-52 "> 
                <img src={wave} className="w-[100%]" alt="" />
            </div>
        </div>
    );
};

export default HeaderA;
