import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Maha from "../Images/Maha.jpg";
import Arun from "../Images/Arun.png";
import Avanti from "../Images/Avanti.png";
import last from "../Images/last.png";

const teamMembers = [
  {
    name: "Dr.Mahalakshmi",
    education: "MBBS. DGO.FRM.DRM (Germany) Ph.D.",
    position: "FOUNDER & CHAIRPERSON",
    image: Maha,
  },
  {
    name: "Dr.Arun Poornesh",
    education: "M.B.B.S.,M.S.(Obst.& Gynae.)Lap Surgeon",
    position: "GYNAECOLOGIST",
    image: Arun,
  },
  {
    name: "Dr.Avanti SL",
    education: "MBBS,MS,PGDME,FCLS,FRM",
    position: "GYNAECOLOGIST",
    image: Avanti,
  },
  {
    name: "Dr.Divyasree B",
    education: "MBBS,MSOG,FMAS,FRM",
    position: "GYNAECOLOGIST",
    image: last,
  },
];

const Team = () => {
  return (
    <div className="w-full min-h-[85vh] flex flex-col items-center bg-[#ffc9d7] py-16">
      <h2 className="text-3xl md:text-5xl font-[Belli] text-gray-800 text-center mb-12 animate-fade-up">
        Meet Our <span className="text-[#1c97c8]">Expert Team</span>
      </h2>

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
        className="w-[95%] mx-auto"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="bg-white p-10 shadow-xl rounded-2xl w-80 h-[370px] flex flex-col items-center transition-all hover:scale-105 hover:shadow-2xl animate-zoom-in">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-pink-400 shadow-lg mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-[choco] text-gray-900 mb-2 text-center">
                {member.name}
              </h3>
              <p className="text-pink-400 text-center text-sm font-[choco] font-bold leading-relaxed mb-2">
                {member.education}
              </p>
              <p className="text-[#1c97c8] font-[choco] font-bold text-center">
                {member.position}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Team;
