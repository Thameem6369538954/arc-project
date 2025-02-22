import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Pcod from "../Images/Pcod.jpg";
import ivf from "../Images/ivf.jpg";
import Obesity from "../Images/Obesity.jpg";
import success from "../Images/success.jpg";
import Kid from "../Images/Kid.jpg";

const services = [
  {
    image: Pcod,
    title: "PCOD",
    description: "Will PCOD result in Infertility for Women?",
  },
  {
    image: Obesity,
    title: "Obesity",
    description: "How obesity is directly related to infertility?",
  },
  {
    image: ivf,
    title: "Success",
    description: "What are the factors that affect IVF success rate?",
  },
  {
    image: Kid,
    title: "Dream",
    description: "Give Wings To Your Dream With Infertility Treatments",
  },
  {
    image: success,
    title: "Chances",
    description: "What are the chances of getting pregnant with IVF?",
  },
];

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="relative w-full max-w-lg h-[30rem] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500">
      {/* Image */}
      <img src={image} alt={title} className="w-full h-full object-cover" />

      {/* Content Box */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black/80 flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl font-[Heading] text-white">{title}</h2>
      <p className="text-white/80 font-[choco] mt-2 text-center">{description}</p>
      </div>
    </div>
  );
};

const OurServices = () => {
  return (
    <section className="h-screen bg-[#a9c7b7] p-6 md:p-12  ">
      {/* Title */}
      <h1 className="  text-black text-5xl md:text-7xl font-[Belli] mb-12 ">
        Our <span className="text-black">Blog</span>
      </h1>

      {/* Swiper Slider */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2.5 },
          1280: { slidesPerView: 3 },
        }}
        loop={false}
        className="w-full max-w-7xl"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <ServiceCard {...service} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default OurServices;
