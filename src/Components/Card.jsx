import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
// import Card from "../Images/Card.jpg"
import JJ from "../Images/JJ.jpg"
import womensday from "../Animations/womensday.json"
import Lottie from 'lottie-react';
const WomensDayCard = () => {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const today = new Date();
    if (today.getDate() === 8 && today.getMonth() === 2) {
      setShowCard(true);
    }
  }, []);

  const handleClose = () => {
    setShowCard(false);
  };

  if (!showCard) return null;

  return (
    <div className="fixed top-10 left-0 w-full h-[90vh]  bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg shadow-lg p-5 max-w-4xl  animate-fadeIn h-[100vh] flex flex-col items-center justify-center  ">
        <button onClick={handleClose} className="absolute top-2 right-2 text-red-500 hover:text-red-700">
          <X size={34} className='bg-white rounded-full ' />
        </button>
        <Lottie animationData={womensday} className='absolute'/>
        <img src={JJ} alt="Women's Day" className="rounded-lg h-[90vh] w-[]" />
        <p className="text-center text-lg font-[newa] mt-4">Happy Women's Day</p>
      </div>
    </div>
  );
};

export default WomensDayCard;

// Add this CSS to your global CSS or component's CSS
// .animate-fadeIn {
//   animation: fadeIn 1s ease-in-out;
// }
// @keyframes fadeIn {
//   from { opacity: 0; transform: scale(0.9); }
//   to { opacity: 1; transform: scale(1); }
// }
