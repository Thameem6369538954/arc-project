import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import home from "../Images/home.jpg";
import A from "../AwardImg/A.jpeg"
import B from "../AwardImg/B.jpeg"
import C from "../AwardImg/C.jpg"
import D from "../AwardImg/D.png"
import E from "../AwardImg/E.png"
import F from "../AwardImg/F.jpg"
import G from "../AwardImg/G.jpg"
import H from "../AwardImg/H.jpg"
import I from "../AwardImg/I.jpg"
const images = [B,A,C, D, E, F, G,I,H];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-6xl font-[Belli] p-5">Awards & Recognitions</h2>

    <div className="p-6 bg-gray-100 min-h-[70vh]">

      {/* Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[300px]">
        <div className="col-span-2 row-span-2">
          <img
            src={images[0]}
            className="w-full h-full object-cover rounded-lg cursor-pointer hover:scale-105 transition"
            onClick={() => setSelectedImage(images[0])}
          />
        </div>
        <div>
          <img
            src={images[1]}
            className="w-full h-full object-cover rounded-lg cursor-pointer hover:scale-105 transition"
            onClick={() => setSelectedImage(images[1])}
          />
        </div>
        <div>
          <img
            src={images[2]}
            className="w-full h-full object-cover rounded-lg cursor-pointer hover:scale-105 transition"
            onClick={() => setSelectedImage(images[2])}
          />
        </div>
        <div className="row-span-2">
          <img
            src={images[3]}
            className="w-full h-full object-cover rounded-lg cursor-pointer hover:scale-105 transition"
            onClick={() => setSelectedImage(images[3])}
          />
        </div>
        <div className="col-span-2">
          <img
            src={images[4]}
            className="w-full h-full object-cover rounded-lg cursor-pointer hover:scale-105 transition"
            onClick={() => setSelectedImage(images[4])}
          />
        </div>
        <div>
          <img
            src={images[5]}
            className="w-full h-full object-cover rounded-lg cursor-pointer hover:scale-105 transition"
            onClick={() => setSelectedImage(images[5])}
          />
        </div>
        <div>
          <img
            src={images[6]}
            className="w-full h-full object-cover rounded-lg cursor-pointer hover:scale-105 transition"
            onClick={() => setSelectedImage(images[6])}
          />
        </div>
      </div>

      {/* Lightbox Popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white p-4 rounded-lg shadow-xl border-8 border-gray-300"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <img
                src={selectedImage}
                alt="Selected"
                className="max-w-[90vw] max-h-[80vh] rounded-lg"
              />
              <button
                className="absolute top-3 right-3 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600 transition"
                onClick={() => setSelectedImage(null)}
              >
                <AiOutlineClose size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </div>
  );
};

export default ImageGallery;
