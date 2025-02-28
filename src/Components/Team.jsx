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
    <div className="w-full min-h-[85vh] grid place-items-center bg-[#e1f4fb] py-10">
      <h2 className="text-3xl md:text-5xl font-[Belli] text-gray-800 text-center mb-10">
        Meet Our <span className="text-blue-500">Expert Team</span>
      </h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-[95%] mx-auto"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="bg-white p-10 shadow-xl rounded-2xl w-80 h-[400px] flex flex-col items-center  transition-all hover:scale-105 hover:shadow-2xl">
              {/* Image */}
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <h3 className="text-xl font-semibold text-gray-900 font-[new]">
                {member.name}
              </h3>
              <p className="text-gray-600 text-center text-sm font-[newa] leading-relaxed">
                {member.education}
              </p>
              <p className="text-blue-500 font-medium font-[newa]">
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
