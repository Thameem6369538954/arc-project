import { useLocation, useNavigate } from "react-router-dom";

const LocationDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, address, image } = location.state || {};
  console.log('details',name, address, image);
  

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {name ? (
        <>
          <h1 className="text-4xl font-bold mb-6 animate-bounce">{name}</h1>
          <img
            src={image}
            alt={name}
            className="w-[400px] h-[300px] object-cover rounded-xl shadow-lg mb-4"
          />
          <p className="text-lg mb-4">{address}</p>
          <ul className="list-disc text-lg text-left">
            <li>Location Available</li>
            <li>High Quality Services</li>
            <li>24/7 Customer Support</li>
            <li>Best Offers in {name}</li>
          </ul>

          <button
            onClick={() => navigate(-1)}
            className="bg-blue-500 text-white px-4 py-2 mt-6 rounded-lg hover:bg-blue-700 transition-all"
          >
            Go Back 🔙
          </button>
        </>
      ) : (
        <h2 className="text-red-500 text-3xl">No Location Found</h2>
      )}
    </div>
  );
};

export default LocationDetails;
