import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

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
    } else if (localStorage.getItem("locationData")) {
      setData(JSON.parse(localStorage.getItem("locationData")));
    }
  }, [location.state]);

  if (!data) {
    return <p>No Data Found</p>;
  }

  const tabs = ["OverView", "Doctors", "Gallery", "Contact Details"];
  const galleryImages = [data.imga, data.imgb, data.imgc, data.imgd];

  return (
    <div className="p-5 md:p-10 mt-30">
      <div className="flex flex-col md:flex-row items-center justify-around gap-5">
        <div className="w-full md:w-1/2  border-2 border-red-400 min-h-[400px]">
          <h1 className="text-xl md:text-2xl font-bold text-center md:text-left p-2">{data.name}</h1>
          <p className="text-lg text-center md:text-left p-2">{data.address}</p>

          {/* Tabs */}
          <ul className="border border-black rounded flex flex-wrap justify-between gap-2">
            {tabs.map((tab, i) => (
              <li
                key={i}
                className={`cursor-pointer p-2 text-center ${
                  activeTab === tab ? "bg-pink-400 text-white" : "border px-6 border border-pink-400 rounded text-pink-400"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>

          {/* Tab Content */}
          <div className="p-5 ">
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

            {activeTab === "Doctors" && (
              <div className="grid grid-cols-4 gap-4">
                {data.spldoctors?.length > 0 ? (
                  data.spldoctors.map((doc, i) => (
                    <div key={i} className="mb-4 border border-pink-400 grid place-items-center">
                      <img src={doc.docImg}  className="h-[100px]" alt="" />
                      <p>{doc.docname}</p>
                      <p>{doc.qualification}</p>
                      <p>{doc.from}</p>
                      {/* <p>{doc.docnameA}</p> */}
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
              <div>
                <p>{data.address}</p>
                <p>{data.phonenumber}</p>
              </div>
            )}
          </div>
        </div>

        {/* Side Image */}
        <div className="w-full md:w-1/2">
          <img src={data.imga} className="w-full object-cover rounded-lg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
