import React, { useState } from "react";

const services = [
  {
    name: "Timing & Frequency Of Intercourse",
    relatedImages: [
      "https://via.placeholder.com/300x200?text=Timing+%26+Frequency",
    ],
  },
  {
    name: "Exercise In Moderation",
    relatedImages: [
      "https://via.placeholder.com/300x200?text=Exercise+In+Moderation",
    ],
  },
  {
    name: "Nutrition & Fertility",
    relatedImages: [
      "https://via.placeholder.com/300x200?text=Nutrition+%26+Fertility",
    ],
  },
  {
    name: "BMI & Fertility",
    relatedImages: [
      "https://via.placeholder.com/300x200?text=BMI+%26+Fertility",
    ],
  },
  {
    name: "Alcohol & Drug Use",
    relatedImages: [
      "https://via.placeholder.com/300x200?text=Alcohol+%26+Drug+Use",
    ],
  },
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Services List */}
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Our Services
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() => setSelectedService(service)}
            className={`px-4 py-2 border-2 rounded-lg transition ${
              selectedService.name === service.name
                ? "bg-pink-500 text-white border-pink-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-pink-200"
            }`}
          >
            {service.name}
          </button>
        ))}
      </div>

      {/* Related Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {selectedService.relatedImages.map((img, index) => (
          <div
            key={index}
            className="relative border-4 border-pink-500 rounded-lg overflow-hidden"
          >
            <img src={img} alt="Related" className="w-full h-auto object-cover" />
            <p className="absolute bottom-0 left-0 w-full text-white bg-pink-500 text-center py-2 font-semibold">
              {selectedService.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
