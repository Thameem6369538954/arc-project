import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { PiBabyLight } from "react-icons/pi";
import { FaUserDoctor } from "react-icons/fa6";
import { FaRegHospital } from "react-icons/fa6";

const NumberRolling = () => {
  const stats = [
    { value: 40520, label: "Babies", icon: <PiBabyLight size={40} /> },
    { value: 610, label: "Specialists", icon: <FaUserDoctor size={40} /> },
    { value: 30, label: "Branches", icon: <FaRegHospital size={40} /> },
  ];

  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers every time it's in view
    threshold: 0.3, // Starts animation when 30% of the element is visible
  });

  return (
    <div className="flex items-center justify-center">
 <div ref={ref} className="flex flex-col md:flex-row justify-around items-center gap-8 p-10 m-2 rounded-lg bg-white shadow-md w-[80%]">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center font-[choco] gap-2 ">
          <div className="text-pink-400 p-3">{stat.icon}</div>
          {inView ? (
            <CountUp
              start={stat.value - 50}
              end={stat.value}
              duration={2.5}
              separator=","
              suffix="+"
              className="text-4xl font-bold"
            />
          ) : (
            <span className="text-4xl font-bold ">0+</span> // Placeholder when out of view
          )}
          <p className="text-lg font-semibold  mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
    </div>

   
  );
};

export default NumberRolling;
