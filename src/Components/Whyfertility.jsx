import React from 'react';
import Lottie from 'lottie-react';
import Ani from '../Animations/Ani.json';
import { FaArrowUpRightDots, FaUserDoctor } from 'react-icons/fa6';
import { GiReceiveMoney } from 'react-icons/gi';

const Whyfertility = () => {
  const treeData = [
    {
      icon: <FaUserDoctor className="text-green-500 text-4xl" />,
      title: 'Acclaimed IVF Experts',
      description: 'A balanced diet and exercise can improve fertility.',
    },
    {
      icon: <FaArrowUpRightDots className="text-red-500 text-4xl" />,
      title: 'High Success Rate',
      description: 'Mental health plays a key role in reproductive health.',
    },
    {
      icon: <GiReceiveMoney className="text-blue-500 text-4xl" />,
      title: 'Affordable Treatment',
      description: 'Guidance and support for those on their fertility journey.',
    },
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 md:px-0">
      <div className="w-full max-w-7xl min-h-[500px] bg-[#fed9c9] bg-opacity-5 rounded-xl  relative p-6 md:p-10">
        <div className="absolute top-0 right-0 w-[30%] max-w-[200px] md:max-w-[300px]">
          <Lottie animationData={Ani} loop={true} />
        </div>
        <h1 className="font-[Belli] text-4xl md:text-6xl mt-5 px-5 text-black tracking-wide text-center">
          Why <span className='text-pink-400'>ARC</span> Fertility
        </h1>
        <div className="flex justify-center text-center w-full p-5 font-[choco] text-lg">
          <p className="max-w-3xl">
            ARC Fertility is equipped with advanced and world-class facilities, offering quality services to its patients. At ARC, we care for our patients with years of experience, benefiting thousands to conceive through essential treatment.
          </p>
        </div>
        {/* Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-12">
          {treeData.map((item, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-3xl px-8 py-12 flex flex-col items-center text-center border border-gray-200"
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-lg border-2 border-gray-200">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mt-8">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whyfertility;
