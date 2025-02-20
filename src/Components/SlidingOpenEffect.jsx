import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SlidingOpenEffect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsOpen(true), 500); // Delay before sliding
    setTimeout(() => setShowContent(true), 1800); // Show content after sliding completes
  }, []);

  return (
    <div className="w-full min-h-[100vh] bg-white flex items-center justify-center relative overflow-hidden">
      {/* Left Panel */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isOpen ? "-100%" : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute left-0 top-0 h-full w-1/2 bg-pink-300"
      />

      {/* Right Panel */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isOpen ? "100%" : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute right-0 top-0 h-full w-1/2 bg-pink-300"
      />

      {/* Content */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute w-full h-full flex items-center justify-center text-4xl text-pink-600"
        >
          <div>
            <h1>Welcome to My Website</h1>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SlidingOpenEffect;
