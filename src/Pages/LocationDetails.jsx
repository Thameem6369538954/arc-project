import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { locations } from '../Data/locationData';

const LocationDetails = () => {
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
    return <div className="p-6 text-red-500">No data found for {name}</div>;
  }

  return (
    <div className="relative">
      {/* Sticky Top Nav */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex flex-wrap justify-center gap-4 p-4 text-sm sm:text-base">
          <button onClick={() => scrollToSection(overviewRef)} className="text-blue-600 hover:underline">Overview</button>
          <button onClick={() => scrollToSection(doctorsRef)} className="text-blue-600 hover:underline">Doctors</button>
          <button onClick={() => scrollToSection(servicesRef)} className="text-blue-600 hover:underline">Services/Treatments</button>
          <button onClick={() => scrollToSection(testimonialsRef)} className="text-blue-600 hover:underline">Testimonials</button>
        </div>
      </div>

      <div className="p-6 max-w-6xl mx-auto space-y-10">
        {/* Title & Address */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">
            {location.name} <span className="text-gray-500">({location.lang})</span>
          </h1>
          <p className="text-lg text-gray-700">{location.address}</p>
          <p className="text-md text-blue-600">📞 {location.phonenumber}</p>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[location.imga, location.imgb, location.imgc, location.imgd].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Image ${idx + 1}`}
              className="rounded-lg shadow-lg w-full h-48 object-cover"
            />
          ))}
        </div>

        {/* Overview */}
        <div ref={overviewRef}>
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          {location.overview.map((item, i) => (
            <p key={i} className="text-gray-800">{item.overviewtxt}</p>
          ))}
        </div>

        {/* Doctors */}
        <div ref={doctorsRef}>
          <h2 className="text-2xl font-semibold mb-4">Special Doctors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {location.spldoctors.map((doc) => (
              <div key={doc.id} className="bg-white rounded-lg shadow p-4 text-center">
                <img
                  src={doc.docImg}
                  alt={doc.docname}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-2"
                />
                <h3 className="font-semibold">{doc.docname}</h3>
                <p className="text-sm text-gray-500">{doc.qualification}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services & Treatments Toggle */}
        <div ref={servicesRef}>
          <div className="flex gap-4 mb-4">
            <button
              onClick={() => setView("services")}
              className={`px-4 py-2 rounded ${
                view === "services" ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => setView("treatments")}
              className={`px-4 py-2 rounded ${
                view === "treatments" ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              Treatments
            </button>
          </div>

          {view === "services" && (
            <div>
              <h2 className="text-2xl font-semibold mb-2">Services</h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                {Object.values(location.services[0]).map((service, i) => (
                  <li key={i}>{service}</li>
                ))}
              </ul>
            </div>
          )}

          {view === "treatments" && (
            <div>
              <h2 className="text-2xl font-semibold mb-2">Treatments</h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                {Object.values(location.treatments[0]).map((treat, i) => (
                  <li key={i}>{treat}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Testimonials */}
        <div ref={testimonialsRef}>
          <h2 className="text-2xl font-semibold mb-2">{location.testimonials.heading}</h2>
          <p className="text-gray-600 mb-4">{location.testimonials.paragraph}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {location.testimonials.items.map((testi, i) => (
              <div key={i} className="bg-white p-4 shadow rounded">
                <h3 className="text-lg font-semibold">{testi.heading}</h3>
                <p className="text-sm text-gray-600 mb-2">{testi.paragraph}</p>
                <iframe
                  className="w-full h-48 rounded"
                  src={testi.youtubeVideo}
                  title={testi.heading}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
