import React from "react";
import Wnbg from "../Images/Wnbg.jpg"
import ofa from "../Images/ofa.jpeg"
import ofb from "../Images/ofb.jpeg"

const offers = [
  {
    id: 1,
    image: ofa,
    title: "Flash Sale! ⚡",
    description: "Get 60% off on selected items. Limited time only!",
  },
  {
    id: 2,
    image: ofb,
    title: "Buy 1 Get 1 Free 🎁",
    description: "Shop now and grab amazing deals on top brands!",
  },
 
];

const OfferShowcase = () => {
  return (
    <div
    className="min-h-screen bg-cover bg-center bg-no-repeat flex justify-end items-center relative py-10"
    style={{ backgroundImage: `url(${Wnbg})` }} // Use the correct path
  >
      {/* Overlay for better readability */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-2 gap-6 px-6 ">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center justify-start text-center hover:scale-105 transition-transform"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-88 h-88 object-fit rounded-lg shadow-md"
            />
            {/* <h2 className="text-xl font-bold text-gray-800 mt-4">
              {offer.title}
            </h2> */}
            {/* <p className="text-gray-600 mt-2">{offer.description}</p> */}
            {/* <button className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-all">
              Claim Offer 🚀
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferShowcase;
