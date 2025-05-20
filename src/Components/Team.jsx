import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import Maha from "../Images/Maha.jpg";
import Arun from "../Images/Arun.png";
import Avanti from "../Images/Avanti.png";
import last from "../Images/last.png";
import Img1 from "../Doctors Photos/Priyasenthilcir.jpg"
import Img2 from "../Doctors Photos/Dr.Shalisha_cir.png"

const teamMembers = [
  {
    name: "Dr. Mahalakshmi",
    education: "MBBS. DGO.FRM.DRM (Germany) Ph.D.",
    position: "FOUNDER & CHAIRPERSON",
    image: Maha,
  },
  {
    name: "Dr. Priya Senthil",
    education: "MBBS, MSOG, FRM (PhD), FMAS, DMAS, DRM (Germany), DMIS (Germany), PGDMLE (Law), DSBM (Business, USA)",
    position: "DEPUTY CLINICAL HEAD",
    image: Img1,
  },
  {
    name: "Dr. Shailsha John Weasley",
    education: "MBBS DGO FRM",
    position: "GYNAECOLOGIST",
    image: Img2,
  },
  {
    name: "Dr. Arun Poornesh",
    education: "MBBS, M.S.(Obst.& Gynae.) Lap Surgeon",
    position: "GYNAECOLOGIST",
    image: Arun,
  },
  {
    name: "Dr. Avanti SL",
    education: "MBBS, MS, PGDME ,FCLS, FRM",
    position: "GYNAECOLOGIST",
    image: Avanti,
  },
  {
    name: "Dr. Divyasree B",
    education: "MBBS, MSOG, FMAS, FRM",
    position: "GYNAECOLOGIST",
    image: last,
  },
];

const Team = () => {
  return (
    <div className="w-full min-h-[70vh] flex flex-col justify-center items-center bg-[#ffc9d7] py-16">
   
      <h1 className="font-[Belli] text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-6xl mt-5 p-7 text-black tracking-wide text-center">
      Meet Our  <span className='text-[#1c97c8]'>Expert Team</span> 
        </h1>

      <div className="w-full flex justify-center">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%]"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index} className="flex justify-center w-full h-[80vh]">
              <motion.div
                className="bg-white p-10 shadow-xl rounded-2xl tracking-wide w-full h-[390px] flex flex-col items-center transition-all hover:scale-105 hover:shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  className="h-45 w-45 border-5 border-pink-400 rounded-full mb-5"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className=""
                  />
                </motion.div>
                <h3 className="text-xl font-[choco] text-gray-900 mb-2 text-center">
                  {member.name}
                </h3>
                <p className="text-pink-400 text-center text-sm font-[choco] font-bold leading-relaxed mb-2">
                  {member.education}
                </p>
                <p className="text-[#1c97c8] font-[choco] font-bold text-center">
                  {member.position}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
   