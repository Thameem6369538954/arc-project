import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { locations } from '../Data/locationData';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const LocationDetails = () => {
  const [showForm, setShowForm] = useState(false);
const toggleForm = () => setShowForm(!showForm);

  const { name } = useParams();
  const [view, setView] = useState("services");

  const overviewRef = useRef(null);
  const doctorsRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);

  const location = locations.find(
    (loc) => loc.name.toLowerCase() === name.toLowerCase()
  );

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!location) {
    return <div className="p-6 text-red-500 text-center">No data found for {name}</div>;
  }

  return (
    <div className="relative font-[choco]">
   

      {/* Sticky Nav */}
      <div className="sticky md:top-40 z-10 bg-white shadow-md border-b">
  <div className="flex flex-wrap justify-center gap-4 sm:gap-6 p-2 sm:p-4 text-sm sm:text-base font-medium">
    <button onClick={() => scrollToSection(overviewRef)} className="text-pink-600 hover:underline">
      Overview
    </button>
    <button onClick={() => scrollToSection(doctorsRef)} className="text-pink-600 hover:underline">
      Doctors
    </button>
    <button onClick={() => scrollToSection(servicesRef)} className="text-pink-600 hover:underline">
      Services
    </button>
    <button onClick={() => scrollToSection(testimonialsRef)} className="text-pink-600 hover:underline">
      Testimonials
    </button>
  </div>
</div>


      {/* Hero */}
      <div className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${location.heroImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-tr from-[#be185d] via-[#f472b6] to-[#fbcfe8] flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-[bebas]">{location.name}</h1>
          <br />
          <h1 className="text-white text-4xl md:text-5xl font-[new]">({location.lang})</h1>
          <div className="text-center mt-6">
  <button
    onClick={toggleForm}
    className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition"
  >
    {showForm ? "Close Appointment Form" : "Book an Appointment"}
  </button>
</div>

        </div>
      </div>
      {showForm && (
  <div className="max-w-6xl mx-auto mt-6 p-6 bg-white shadow-md rounded-xl border border-gray-100">
    <h2 className="text-xl font-bold text-pink-600 mb-4">Book an Appointment</h2>
    <form className="space-y-4">
      <div>
        <label className="block text-gray-700 font-medium mb-1">Name</label>
        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Your Name" />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">Email</label>
        <input type="email" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="you@example.com" />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
        <input type="tel" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="9876543210" />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">Preferred Date</label>
        <input type="date" className="w-full border border-gray-300 rounded px-3 py-2" />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">Message</label>
        <textarea className="w-full border border-gray-300 rounded px-3 py-2" rows="3" placeholder="Any specific concern..."></textarea>
      </div>
      <button type="submit" className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition">
        Submit
      </button>
    </form>
  </div>
)}

      <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-12">

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Address", content: location.address },
            { title: "Contact", content: location.phonenumber },
            { title: "Language", content: location.lang }
          ].map((item, idx) => (
            <div key={idx} className="bg-white shadow-md hover:shadow-xl transition p-6 rounded-xl text-left border border-gray-100">
              <h2 className="text-lg font-semibold text-pink-500 mb-2">{item.title}</h2>
              <p className="text-gray-700">{item.content}</p>
            </div>
          ))}
        </div>

        {/* Image Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          loop
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        >
          {[location.imga, location.imgb, location.imgc, location.imgd].map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="rounded-xl w-full h-56 object-cover shadow-md hover:shadow-xl transition"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Overview */}
        <section ref={overviewRef}>
          <h2 className="text-2xl font-bold text-pink-600 mb-4">Overview</h2>
          {location.overview.map((item, i) => (
            <p key={i} className="text-gray-800 mb-2 leading-relaxed">{item.overviewtxt}</p>
          ))}
        </section>

        {/* Doctors Carousel */}
        <section ref={doctorsRef}>
          <h2 className="text-2xl font-bold text-pink-600 mb-6">Special Doctors</h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            loop
            pagination={{ clickable: true }}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }}
          >
            {location.spldoctors.map((doc) => (
              <SwiperSlide key={doc.id}>
                <div className="bg-white p-4 rounded-xl shadow-md text-center hover:shadow-lg transition">
                  <img src={doc.docImg} alt={doc.docname} className="w-24 h-24 mx-auto rounded-full object-cover mb-3 border-2 border-pink-300" />
                  <h3 className="font-semibold text-lg">{doc.docname}</h3>
                  <p className="text-sm text-gray-500">{doc.qualification}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Services & Treatments */}
        <section ref={servicesRef}>
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => setView("services")}
              className={`px-5 py-2 rounded-full font-medium transition ${view === "services" ? "bg-pink-600 text-white" : "bg-gray-200 text-gray-700"}`}
            >
              Services
            </button>
            <button
              onClick={() => setView("treatments")}
              className={`px-5 py-2 rounded-full font-medium transition ${view === "treatments" ? "bg-pink-600 text-white" : "bg-gray-200 text-gray-700"}`}
            >
              Treatments
            </button>
          </div>

          {view === "services" && (
            <div>
              <h2 className="text-xl font-bold text-pink-600 mb-3">Services We Offer</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-left">
                {Object.values(location.services[0]).map((service, i) => (
                  <li key={i}>{service}</li>
                ))}
              </ul>
            </div>
          )}

          {view === "treatments" && (
            <div>
              <h2 className="text-xl font-bold text-pink-600 mb-3">Treatments Available</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-left">
                {Object.values(location.treatments[0]).map((treat, i) => (
                  <li key={i}>{treat}</li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Testimonials */}
        <section ref={testimonialsRef}>
          <h2 className="text-2xl font-bold text-pink-600 mb-2">{location.testimonials.heading}</h2>
          <p className="text-gray-600 mb-6">{location.testimonials.paragraph}</p>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          >
            {location.testimonials.items.map((testi, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition h-full flex flex-col justify-between">
                  <h3 className="text-lg font-semibold text-pink-500 mb-2">{testi.heading}</h3>
                  <p className="text-sm text-gray-700 mb-3">{testi.paragraph}</p>
                  <div className="w-full aspect-video overflow-hidden rounded">
                    <iframe
                      src={testi.youtubeVideo}
                      title={testi.heading}
                      className="w-full h-full"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </div>
  );
};

export default LocationDetails;
