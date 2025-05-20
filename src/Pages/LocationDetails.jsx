import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { locations } from '../Data/locationData';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const LocationDetails = () => {
  const { name } = useParams();
  const [showForm, setShowForm] = useState(false);
  const [view, setView] = useState('services');

  const overviewRef = useRef(null);
  const doctorsRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);

  const location = locations.find(
    (loc) => loc.name.toLowerCase() === name.toLowerCase()
  );

  const toggleForm = () => setShowForm((prev) => !prev);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!location) {
    return (
      <div className="p-6 text-red-500 text-center">
        No data found for <strong>{name}</strong>
      </div>
    );
  }

  return (
    <div className="relative font-[choco]">
      {/* Sticky Navigation */}
      <nav className="sticky top-40 z-10 bg-white shadow-md border-b">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 p-2 sm:p-4 text-sm sm:text-base font-medium">
          {[
            { label: 'Overview', ref: overviewRef },
            { label: 'Doctors', ref: doctorsRef },
            { label: 'Services', ref: servicesRef },
            { label: 'Testimonials', ref: testimonialsRef },
          ].map(({ label, ref }) => (
            <button
              key={label}
              onClick={() => scrollToSection(ref)}
              className="text-pink-600 hover:underline focus:outline-none focus:ring-2 focus:ring-pink-400 rounded"
            >
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${location.heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[#be185d] via-[#f472b6] to-[#fbcfe8] flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-[bebas]">{location.name}</h1>
          <h2 className="text-white text-4xl md:text-5xl font-[new] mt-2">({location.lang})</h2>

          <button
            onClick={toggleForm}
            className="mt-6 bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition focus:outline-none focus:ring-2 focus:ring-pink-400"
            aria-expanded={showForm}
            aria-controls="appointment-form"
          >
            {showForm ? 'Close Appointment Form' : 'Book an Appointment'}
          </button>

          {showForm && (
            <div
              id="appointment-form"
              className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50 p-4"
            >
              <div className="max-w-3xl w-full p-8 bg-white rounded-xl border border-pink-300 shadow-lg overflow-auto max-h-[70vh]">
                <h2 className="text-3xl font-bold text-pink-600 mb-8 text-center">
                  Book an Appointment
                </h2>
                <form className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-pink-600 font-semibold mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      className="w-full rounded-lg px-4 py-3 border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-pink-600 font-semibold mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-lg px-4 py-3 border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-pink-600 font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="9876543210"
                      className="w-full rounded-lg px-4 py-3 border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                      required
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label htmlFor="date" className="block text-pink-600 font-semibold mb-2">
                      Preferred Date
                    </label>
                    <input
                      id="date"
                      type="date"
                      className="w-full rounded-lg px-4 py-3 border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-pink-600 font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      placeholder="Any specific concern..."
                      className="w-full rounded-lg px-4 py-3 border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-pink-600 hover:bg-pink-700 transition text-white font-semibold py-3 rounded-full"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-12">
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Address', content: location.address },
            { title: 'Contact', content: location.phonenumber },
            { title: 'Language', content: location.lang },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md hover:shadow-xl transition p-6 rounded-xl border border-gray-100"
            >
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

        {/* Overview Section */}
        <section ref={overviewRef}>
          <h2 className="text-2xl font-bold text-pink-600 mb-4">Overview</h2>
          {location.overview.map((item, i) => (
            <p key={i} className="text-gray-800 mb-2 leading-relaxed">
              {item.overviewtxt}
            </p>
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
                  <img
                    src={doc.docImg}
                    alt={doc.docname}
                    className="w-24 h-24 mx-auto rounded-full object-cover mb-3 border-2 border-pink-300"
                  />
                  <h3 className="font-semibold text-lg">{doc.docname}</h3>
                  <p className="text-sm text-gray-500">{doc.qualification}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Services & Treatments */}
        <section ref={servicesRef}>
          <div className="flex justify-center gap-6 mb-6 text-lg font-semibold text-pink-600">
            <button
              className={`px-4 py-2 rounded-full ${
                view === 'services' ? 'bg-pink-600 text-white' : 'bg-pink-100 hover:bg-pink-200'
              } transition`}
              onClick={() => setView('services')}
            >
              Services
            </button>
            <button
              className={`px-4 py-2 rounded-full ${
                view === 'treatments' ? 'bg-pink-600 text-white' : 'bg-pink-100 hover:bg-pink-200'
              } transition`}
              onClick={() => setView('treatments')}
            >
              Treatments
            </button>
          </div>

          {view === 'services' ? (
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {location.services.map((srv) => (
                <li key={srv.id}>{srv.servicetxt}</li>
              ))}
            </ul>
          ) : (
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {location.treatments.map((treat) => (
                <li key={treat.id}>{treat.treatmenttxt}</li>
              ))}
            </ul>
          )}
        </section>

        {/* Testimonials */}
       <section ref={testimonialsRef}>
  <h2 className="text-2xl font-bold text-pink-600 mb-6">Testimonials</h2>
  {Array.isArray(location.testimonials) && location.testimonials.length > 0 ? (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      loop
      pagination={{ clickable: true }}
      breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
    >
      {location.testimonials.map((test) => (
        <SwiperSlide key={test.id || test.testName}>
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
            <img
              src={test.testImg}
              alt={test.testName}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-pink-300"
            />
            <h3 className="font-semibold text-lg mb-2">{test.testName}</h3>
            <p className="text-gray-600 text-sm italic">{test.testDesc}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <p>No testimonials available.</p>
  )}
</section>

      </div>
    </div>
  );
};

export default LocationDetails;
