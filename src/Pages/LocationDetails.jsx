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
      <div className="p-6 text-red-600 text-center">
        No data found for <strong>{name}</strong>
      </div>
    );
  }

  const {
    address,
    phonenumber,
    lang,
    heroImage,
    imga,
    imgb,
    imgc,
    imgd,
    overview,
    spldoctors,
    services,
    treatments,
    testimonials,
  } = location;

  return (
    <div className="relative font-[choco]">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 bg-white shadow-md border-b z-10 p-5 flex justify-center gap-6 font-medium">
        {[ 
          { label: 'Overview', ref: overviewRef },
          { label: 'Doctors', ref: doctorsRef },
          { label: 'Services', ref: servicesRef },
          { label: 'Testimonials', ref: testimonialsRef },
        ].map(({ label, ref }) => (
          <button
            key={label}
            onClick={() => scrollToSection(ref)}
            className="text-pink-600 hover:underline text-xl font-[choco] rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            {label}
          </button>
        ))}
      </nav>

      {/* Hero Section */}
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage || imga || ''})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[#be185d] via-[#f472b6] to-[#fbcfe8] flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-[bebas]">{location.name}</h1>
          <h2 className="text-white text-4xl md:text-5xl font-[new] mt-2">({lang})</h2>

          <button
            onClick={toggleForm}
            className="mt-6 bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition"
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
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert('Appointment submitted!');
                    setShowForm(false);
                  }}
                >
                  {[ 
                    { id: 'name', label: 'Name', type: 'text', placeholder: 'Your Name', required: true },
                    { id: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', required: true },
                    { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '9876543210', required: true },
                    { id: 'date', label: 'Preferred Date', type: 'date', required: true },
                  ].map(({ id, label, type, placeholder, required }) => (
                    <div key={id}>
                      <label htmlFor={id} className="block text-pink-600 font-semibold mb-2">
                        {label}
                      </label>
                      <input
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        required={required}
                        className="w-full rounded-lg px-4 py-3 border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                      />
                    </div>
                  ))}

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

      {/* Main Content */}
      <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-12">
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[ 
            { title: 'Address', content: address },
            { title: 'Contact', content: phonenumber },
            { title: 'Language', content: lang },
          ].map(({ title, content }, i) => (
            <div key={i} className="bg-white shadow-md p-6 rounded-xl border border-gray-100">
              <h2 className="text-lg font-semibold text-pink-500 mb-2">{title}</h2>
              <p className="text-gray-700">{content}</p>
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
          {[imga, imgb, imgc, imgd].filter(Boolean).map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="rounded-xl w-full h-56 object-cover shadow-md"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Overview */}
        <section ref={overviewRef}>
          <h2 className="text-2xl font-bold text-pink-600 mb-4">Overview</h2>
          {Array.isArray(overview) && overview.length > 0 ? (
            overview.map(({ overviewtxt }, i) => (
              <p key={i} className="text-gray-800 mb-2 leading-relaxed">
                {overviewtxt}
              </p>
            ))
          ) : (
            <p>No overview available.</p>
          )}
        </section>

        {/* Doctors */}
        <section ref={doctorsRef}>
          <h2 className="text-2xl font-bold text-pink-600 mb-4">Doctors</h2>
          {spldoctors?.length > 0 ? (
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            >
              {spldoctors.map(({ id, docImg, docname, qualification }) => (
                <SwiperSlide key={id}>
                  <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-200">
                    <img src={docImg} alt={docname} className="mx-auto rounded-full w-28 h-28 object-cover" />
                    <h3 className="mt-4 text-lg font-semibold">{docname}</h3>
                    <p className="text-pink-600">{qualification}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p>No doctors available.</p>
          )}
        </section>

        {/* Services & Treatments */}
        <section ref={servicesRef}>
          <h2 className="text-2xl font-bold text-pink-600 mb-4">Services & Treatments</h2>

          <div>
            <h3 className="text-xl font-semibold text-pink-500 mb-2">Services</h3>
            {Array.isArray(services) && services.length > 0 ? (
              <ul className="list-disc list-inside text-gray-700 mb-6">
                {services.map(({ name }, i) => (
                  <li key={i}>{name}</li>
                ))}
              </ul>
            ) : (
              <p>No services available.</p>
            )}
          </div>

          <div>
            <h3 className="text-xl font-semibold text-pink-500 mb-2">Treatments</h3>
            {Array.isArray(treatments) && treatments.length > 0 ? (
              <ul className="list-disc list-inside text-gray-700">
                {treatments.map(({ name }, i) => (
                  <li key={i}>{name}</li>
                ))}
              </ul>
            ) : (
              <p>No treatments available.</p>
            )}
          </div>
        </section>

        {/* Testimonials */}
       {/* Testimonials */}
<section ref={testimonialsRef}>
  <h2 className="text-2xl font-bold text-pink-600 mb-4">
    {testimonials.heading}
  </h2>
  <p className="text-gray-600 mb-6">{testimonials.paragraph}</p>

  {Array.isArray(testimonials.items) && testimonials.items.length > 0 ? (
    <Swiper
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {testimonials.items.map(({ heading, paragraph, youtubeVideo }, index) => (
        <SwiperSlide key={index}>
          <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-md text-center">
            <div className="mb-4 aspect-video overflow-hidden rounded-lg">
              <iframe
                width="100%"
                height="100%"
                src={youtubeVideo}
                title={heading}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <h4 className="font-semibold text-pink-600 mb-2">{heading}</h4>
            <p className="text-gray-700 italic">{paragraph}</p>
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
