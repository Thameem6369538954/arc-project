import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const LocationDetails = () => {
  const location = useLocation();

  const tabs = [
    "OverView",
    "Our Specialist",
    "Gallery",
    "Contact Details",
    "Testimonial",
  ];

  const [data, setData] = useState(
    location.state || JSON.parse(localStorage.getItem("locationData"))
  );
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const sections = {
    OverView: useRef(null),
    "Our Specialist": useRef(null),
    Gallery: useRef(null),
    "Contact Details": useRef(null),
    Testimonial: useRef(null),
  };

  const scrollToSection = (tab) => {
    sections[tab]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (location.state) {
      setData(location.state);
      localStorage.setItem("locationData", JSON.stringify(location.state));
    } else {
      const storedData = JSON.parse(localStorage.getItem("locationData"));
      if (storedData) setData(storedData);
    }
  }, [location.state]);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedData = JSON.parse(localStorage.getItem("locationData"));
      if (updatedData && updatedData.name !== data?.name) {
        setData(updatedData);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [data]);

  if (!data) return <p className="text-center mt-10">No Data Found</p>;

  const galleryImages = [data.imga, data.imgb, data.imgc, data.imgd];

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="md:p-10 mt-20 font-[choco] w-full min-h-[60vh] bg-[#f5efe1] scroll-smooth">
      <div className="relative w-full h-[300px] bg-cover bg-center" style={{ backgroundImage: `url(${data.headerImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex justify-center items-center z-10 text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold">{data.name}</h1>
            <p className="mt-2 text-xl">{data.description}</p>
            <button className="mt-4 px-6 py-3 bg-pink-500 rounded-full text-white hover:bg-pink-600 transition-all">
              Get More Info
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-around gap-5 w-full mt-10">
        <div className="w-full">
          {/* Sticky Tabs */}
          <ul className="flex flex-wrap justify-center md:justify-start border-b bg-pink-500 text-white sticky top-16 z-30 shadow-md">
            {tabs.map((tab, i) => (
              <li
                key={i}
                onClick={() => {
                  setActiveTab(tab);
                  scrollToSection(tab);
                }}
                className={`cursor-pointer px-4 py-2 text-sm md:px-6 md:py-3 md:text-base transition-all whitespace-nowrap
                ${activeTab === tab
                  ? "bg-white text-pink-600 border-l border-r border-t rounded-t-md"
                  : "hover:bg-pink-400"
                }`}
              >
                {tab}
              </li>
            ))}
          </ul>

          {/* Overview Section */}
          <section ref={sections["OverView"]} className="p-5 scroll-mt-120">
            <h2 className="text-4xl font-bold mb-2">Treatments Offered</h2>
            <p className="mb-4">{data.vanakkam}</p>
            {data.services?.length > 0 ? (
              <ul className="list-disc pl-5 space-y-3 text-xl">
                {data.services.map((ser, i) =>
                  Object.values(ser).map((val, idx) => (
                    <li key={`${i}-${idx}`}>{val}</li>
                  ))
                )}
              </ul>
            ) : (
              <p>No Services Found</p>
            )}
          </section>

          {/* Our Specialist */}
          <section ref={sections["Our Specialist"]} className="p-5 scroll-mt-45">
            <h2 className="text-xl font-bold mb-2">Our Specialist</h2>
            <Swiper
              navigation
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {data.spldoctors?.length > 0 ? (
                data.spldoctors.map((doc, i) => (
                  <SwiperSlide key={i}>
                    <div className="border border-pink-400 p-4 rounded text-center bg-white">
                      <img
                        src={doc.docImg}
                        alt={doc.docname}
                        className="h-[400px] w-auto mx-auto object-contain"
                      />
                      <p className="font-semibold mt-2">{doc.docname}</p>
                      <p className="text-sm">{doc.qualification}</p>
                      <p className="text-xs text-gray-500">{doc.from}</p>
                      <p className="mt-2 text-sm">{doc.description}</p>
                      <p className="mt-1 text-xs">Experience: {doc.experience} years</p>
                      <p className="mt-1 text-xs">Contact: {doc.contact}</p>
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <p>No Doctors Found</p>
              )}
            </Swiper>
          </section>

          {/* Gallery Section */}
          <section ref={sections["Gallery"]} className="p-5 scroll-mt-40">
            <h2 className="text-xl font-bold mb-2">Gallery</h2>
            <Swiper navigation modules={[Navigation]} className="mySwiper">
              {galleryImages.map((img, i) =>
                img ? (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt={`Gallery ${i}`}
                      className="w-full h-[300px] object-cover rounded-lg"
                    />
                  </SwiperSlide>
                ) : null
              )}
            </Swiper>
          </section>

          {/* Contact Details */}
          <section ref={sections["Contact Details"]} className="p-5 scroll-mt-45">
            <h2 className="text-xl font-bold mb-2">Contact Details</h2>
            <p><strong>Address:</strong> {data.address}</p>
            <p><strong>Phone:</strong> {data.phonenumber}</p>
            <a
              href={data.map}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-pink-500 underline"
            >
              Open in Google Maps
            </a>

            {/* Contact Form */}
            <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows={4}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
                <button
                  type="submit"
                  className="w-full bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600"
                >
                  Submit
                </button>
              </form>
            </div>
          </section>

          {/* Testimonial Section */}
          <section ref={sections["Testimonial"]} className="p-5 scroll-mt-50">
            <h2 className="text-xl font-bold mb-2">
              {data?.testimonials?.heading || "Testimonials"}
            </h2>
            {data?.testimonials?.paragraph && (
              <p className="mb-4">{data.testimonials.paragraph}</p>
            )}
            {data?.testimonials?.items?.length > 0 ? (
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{ 768: { slidesPerView: 2 } }}
              >
                {data.testimonials.items.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="shadow-lg p-4 rounded-lg bg-white">
                      <h3 className="text-lg font-semibold mb-2">{item.heading}</h3>
                      <p className="text-sm mb-4">{item.paragraph}</p>
                      {item.youtubeVideo ? (
                        <iframe
                          width="100%"
                          height="300"
                          src={item.youtubeVideo}
                          title={`Testimonial Video ${i + 1}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg"
                        />
                      ) : (
                        <p>No Video Available</p>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <p>No Testimonials Found</p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
