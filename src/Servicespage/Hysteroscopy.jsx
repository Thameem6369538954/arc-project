import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const HysteroscopyInfo = () => {
  const hysteroscopyData = [
    {
      title: 'Operative Hysteroscopy',
      description: 'In operative hysteroscopy, an operation is done to treat the abnormalities in the female reproductive system. These abnormalities may include polyps, fibroids and many other things.',
      image: '/images/operative-hysteroscopy.png',
    },
    {
      title: 'Diagnostic Hysteroscopy',
      description: 'Diagnostic hysteroscopy, as the name suggests, is used only for the diagnosis purpose. The results of other tests can also be confirmed with the help of this process.',
      image: '/images/diagnostic-hysteroscopy.png',
    },
  ];

  const hysteroscopyCases = [
    'Non-cancerous growth of tissues like polyps and fibroids.',
    "Asherman's Syndrome - bands of scarred tissues are formed in the uterus.",
    'Abnormality of the uterus like uterine septum.',
    'Abnormal bleeding during the menstrual cycle.',
  ];

  return (
    <div className="bg-white p-6 md:p-12">
      <h2 className="text-pink-400 text-3xl font-bold text-center mb-8">What are the Types of Hysteroscopy?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hysteroscopyData.map((item, index) => (
          <div key={index} className="shadow-lg rounded-lg overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-pink-400 text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-pink-400 text-3xl font-bold text-center mt-12 mb-8">When is Hysteroscopy Done?</h2>
      <ul className="list-none">
        {hysteroscopyCases.map((caseItem, index) => (
          <li key={index} className="flex items-center text-gray-700 mb-4">
            <FaCheckCircle className="text-pink-400 mr-2" /> {caseItem}
          </li>
        ))}
      </ul>

      <h2 className="text-pink-400 text-3xl font-bold text-center mt-12 mb-8">Why choose ARC?</h2>
      <p className="text-gray-700 text-center">
        ARC is the umbrella where you will get all the possible ways for diagnosis of infertility and the best world-class treatment to optimize diagnosis.
      </p>
    </div>
  );
};

export default HysteroscopyInfo;
