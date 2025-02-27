import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Maha from "../Images/Maha.jpg"
import Arun from "../Images/Arun.png"
import Avanti from "../Images/Avanti.png"
import last from "../Images/last.png"

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
    <div className="w-full min-h-[80vh] bg-[#e1f4fb]  py-10">
      {/* Heading */}
      <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-6xl font-[Belli]  text-gray-800 m-10">
        Meet Our <span className="text-blue-500">Expert Team</span>
      </h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-[90%]"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="relative bg-white shadow-xl rounded-2xl p-6 text-center w-96 transition-all transform hover:scale-105 hover:shadow-2xl">
              {/* Enlarged Profile Image */}
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto border-4 border-blue-500 shadow-lg ">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <h3 className="text-xl font-semibold text-gray-900 mt-4 font-[new]">
                {member.name}
              </h3>
              <p className="text-gray-600 text-sm font-[newa]">{member.education}</p>
              <p className="text-blue-500 font-medium mt-2 font-[newa]">{member.position}</p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-20 transition-all rounded-2xl"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Team;
