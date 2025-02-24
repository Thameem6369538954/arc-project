import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import A from "../AwardImg/A.jpeg";
import B from "../AwardImg/B.jpeg";
import C from "../AwardImg/C.jpg";
import D from "../AwardImg/D.png";
import E from "../AwardImg/E.png";
import F from "../AwardImg/F.jpg";
import G from "../AwardImg/G.jpg";
import H from "../AwardImg/H.jpg";
import I from "../AwardImg/I.jpg";

const images = [A, B, C, D, E, F, G, H, I];

const ImageGallery = () => {
  return (
    <div>
<div className="w-full h-screen bg-gray-100 flex items-center justify-center">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
    
  );
};

export default ImageGallery;
