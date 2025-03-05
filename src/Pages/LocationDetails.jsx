import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";



const LocationDetails = () => {
  const location = useLocation();
  const [data, setData] = useState(
    location.state || JSON.parse(localStorage.getItem("locationData"))
  );
  const [activeTab, setActiveTab] = useState("OverView");

  useEffect(() => {
    if (location.state) {
      setData(location.state);
      localStorage.setItem("locationData", JSON.stringify(location.state));
    } else {
      const storedData = JSON.parse(localStorage.getItem("locationData"));
      if (storedData) {
        setData(storedData);
      }
    }
  }, [location.state]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedData = JSON.parse(localStorage.getItem("locationData"));
      if (updatedData && JSON.stringify(updatedData) !== JSON.stringify(data)) {
        console.log("Data Updated ✅");
        setData(updatedData);
      }
    }, 1000);
  
    return () => clearInterval(interval);
  }, [data]);

  window.addEventListener("storage", () => {
    const updatedData = JSON.parse(localStorage.getItem("locationData"));
    setData(updatedData);
  });
  
  
  

  if (!data) {
    return <p>No Data Found</p>;
  }

  const tabs = ["OverView", "Our Specialist", "Gallery", "Contact Details", "Testimonial"];
  const galleryImages = [data.imga, data.imgb, data.imgc, data.imgd];

  return (
    <div className="p-5 md:p-10 mt-27 md:mt-37 mb-15 font-[choco] w-full min-h-[100vh] bg-[#f5efe1]">
      <div className="flex flex-col md:flex-row items-center justify-around gap-5">
        <div className="w-full md:w-1/2 min-h-[400px]">
          <h1 className="text-xl md:text-2xl font-bold text-center md:text-left p-2">{data.name}</h1>
          {/* <p className="text-lg text-center md:text-left p-2">{data.address}</p> */}

          <ul className="rounded flex flex-wrap justify-between gap-2">
            {tabs.map((tab, i) => (
              <li
                key={i}
                className={`cursor-pointer p-2 text-center ${
                  activeTab === tab ? "bg-pink-400 text-white rounded" : "border px-6 border-pink-400 rounded text-pink-400"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>

          <div className="p-5">
            {activeTab === "OverView" && (
              <div>
                <h1>Services offered</h1>
                <p>{data.vanakkam}</p>
                <ul>
                  {data.services?.length > 0 ? (
                    data.services.map((ser, i) =>
                      Object.values(ser).map((value, index) => (
                        <li key={`${i}-${index}`}>{value}</li>
                      ))
                    )
                  ) : (
                    <p>No Services Found</p>
                  )}
                </ul>
              </div>
            )}

            {activeTab === "Our Specialist" && (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {data.spldoctors?.length > 0 ? (
                  data.spldoctors.map((doc, i) => (
                    <div key={i} className="mb-4 border border-pink-400 grid place-items-center rounded-sm">
                      <img src={doc.docImg} className="h-[100px]" alt="" />
                      <p>{doc.docname}</p>
                      <p>{doc.qualification}</p>
                      <p>{doc.from}</p>
                    </div>
                  ))
                ) : (
                  <p>No Doctors Found</p>
                )}
              </div>
            )}

            {activeTab === "Gallery" && (
              <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {galleryImages.map((img, i) =>
                  img ? (
                    <SwiperSlide key={i}>
                      <img src={img} alt={`Gallery ${i}`} className="w-full h-[200px] md:h-[300px] object-cover" />
                    </SwiperSlide>
                  ) : null
                )}
              </Swiper>
            )}

            {activeTab === "Contact Details" && (
              <div className="font-[choco] flex flex-col items-start justify-start gap-2">
                <label>Address</label>
                <p>{data.address}</p>
                <label>Phone Number</label>
                <p>{data.phonenumber}</p>
                <label className="p-2">Google Map</label>
                <a href={data.map} className="border border-pink-400 p-2 rounded" target="_blank" rel="noopener noreferrer">Click Here</a>
              </div>
            )}
        {activeTab === "Testimonial" && (
  <div className="text-center">
    <h1 className="text-xl font-bold mb-4">
      {data?.testimonials?.heading ? data.testimonials.heading : "Testimonial"}
    </h1>

    {data?.testimonials?.paragraph ? (
      <p className="mb-4">{data.testimonials.paragraph}</p>
    ) : (
      <p>No Testimonial Description Found</p>
    )}

<div>
      {data?.testimonials?.items?.length > 0 ? (
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {data.testimonials.items.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="shadow-lg p-4 rounded-lg bg-white">
                <h2 className="text-lg font-semibold mb-2">{item.heading}</h2>
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
                  ></iframe>
                ) : (
                  <p>No Video Available</p>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-center">No Testimonials Found</p>
      )}
    </div>
  </div>
)}



          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img src={data.imga} className="w-full object-cover rounded-lg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;