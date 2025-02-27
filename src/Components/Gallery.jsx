import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { Autoplay, EffectCoverflow } from "swiper/modules";
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
    <div className="w-full min-h-[70vh] bg-[#8bd2f1] flex flex-col items-center">
      <h1 className="font-[Belli] text-3xl p-5 sm:text-4xl lg:text-5xl xl:text-6xl mt-5 px-5 text-white tracking-wide text-center">
        Awards <span className="text-black">&</span> Recognitions
      </h1>

      <div className="w-full flex flex-col items-center">
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1} // Default for mobile
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
          }}
          className="w-full max-w-5xl"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full max-h-[100vh] sm:max-h-[60vh] object-contain rounded-xl shadow-xl border-4 border-white transition-transform duration-500 hover:scale-105"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="p-5">
        <button className="group relative inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-gradient-to-r from-pink-600 via-[#1c97c8]to-white"></span>
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-3 text-sm font-medium backdrop-blur-3xl transition-all duration-300 group-hover:bg-slate-950/90">
            <svg
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              className="mr-2 h-5 w-5 text-pink-500 transition-transform duration-300 group-hover:-translate-x-1"
            >
              <path
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
            <span className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold">
              Know More
            </span>
            <svg
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              className="ml-2 h-5 w-5 text-blue-500 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
