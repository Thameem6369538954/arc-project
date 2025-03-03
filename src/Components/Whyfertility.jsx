import React from 'react';
import Lottie from 'lottie-react';
import Ani from '../Animations/Ani.json';
import { FaArrowUpRightDots, FaUserDoctor } from 'react-icons/fa6';
import { GiReceiveMoney } from 'react-icons/gi';
import NumberRolling from './NumberRolling';

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
    <>
    <div className="w-full min-h-[100vh] flex items-center justify-center px-4 md:px-0 bg-[#ffc9d7]">
      <div className="w-full max-w-7xl min-h-[600px]  bg-opacity-5 rounded-xl  relative p-6 md:p-10 mt-40 ">
        <div className="absolute -top-10 md:top-0 -left-10 z-10 w-[30%] max-w-[250px] md:max-w-[300px]">
          <Lottie animationData={Ani} loop={true} />
        </div>
        <h1 className="font-[Belli] text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-6xl mt-5 px-5 text-black tracking-wide text-center">
          Why <span className='text-pink-400'>ARC</span> Fertility
        </h1>
        <div className="flex justify-center text-center w-full md:p-5 p-1 font-[choco] text-lg">
          <p className="max-w-3xl text-1xl md:text-3xl">
            ARC Fertility is equipped with advanced and world-class facilities, offering quality services to its patients. At ARC, we care for our patients with years of experience, benefiting thousands to conceive through essential treatment.
          </p>
          




        </div>
        <div className='grid place-items-center'>
        <button class="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-[choco]">
  <div class="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
  <div class="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
  <div class="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
  <div class="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
  <div class="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
  <p class="z-10">Discover More</p>
</button>
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
              <h3 className="text-2xl font-[choco] font-bold mt-8">{item.title}</h3>
              <p className="text-gray-600 text-xl font-[choco] mt-2">{item.description}</p>
            </div>
          ))}
        </div>
        
      </div>
      
    </div>
    <div className="w-full min-h-[10vh]  px-4 md:px-0 bg-[#ffc9d7]">
        <NumberRolling />
      </div>
    </>
  );
};

export default Whyfertility;
