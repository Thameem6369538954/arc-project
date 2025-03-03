import React from "react";
import { FaHeartbeat, FaBabyCarriage, FaExclamationCircle, FaShieldAlt, FaSadTear, FaCheckCircle } from "react-icons/fa";

const PreventingMiscarriages = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-pink-400 mb-4">
          Preventing Miscarriages
        </h1>
        <p className="text-gray-700">
          Miscarriage is a serious and devastating situation for any to-be-mother. It is a term used to refer to a pregnancy that ends on its own.
          Miscarriage generally happens within the first 20 weeks of gestation.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold text-pink-400 mb-4">What is the cause of a Miscarriage?</h2>
        <p className="text-gray-700">
          The most common cause of a miscarriage is a chromosomal abnormality, meaning that the baby’s chromosomes might have some defects.
          Other causes of miscarriage include hormonal problems, infections, and the health of the mother.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold text-pink-400 mb-4">Chances of Miscarriage</h2>
        <p className="text-gray-700">
          The chances of miscarriage are about 10% - 25% on average but increase with maternal age.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold text-pink-400 mb-4">The Warning Signs</h2>
        <ul className="text-gray-700 space-y-3">
          <li className="flex items-center">
            <FaExclamationCircle className="text-pink-400 mr-3" /> Back pain, anything from mild to severe
          </li>
          <li className="flex items-center">
            <FaExclamationCircle className="text-pink-400 mr-3" /> Loss of weight
          </li>
          <li className="flex items-center">
            <FaExclamationCircle className="text-pink-400 mr-3" /> Pinkish white mucus
          </li>
          <li className="flex items-center">
            <FaExclamationCircle className="text-pink-400 mr-3" /> Contractions every 5 to 20 minutes
          </li>
          <li className="flex items-center">
            <FaExclamationCircle className="text-pink-400 mr-3" /> Tissue with clot passing out of the vagina
          </li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold text-pink-400 mb-4">Types of Miscarriage</h2>
        <ul className="text-gray-700 space-y-3">
          <li className="flex items-center">
            <FaHeartbeat className="text-pink-400 mr-3" /> Threatened Miscarriage
          </li>
          <li className="flex items-center">
            <FaBabyCarriage className="text-pink-400 mr-3" /> Inevitable Miscarriage
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-pink-400 mr-3" /> Complete Miscarriage
          </li>
          <li className="flex items-center">
            <FaSadTear className="text-pink-400 mr-3" /> Missed Miscarriage
          </li>
          <li className="flex items-center">
            <FaShieldAlt className="text-pink-400 mr-3" /> Recurrent Miscarriage
          </li>
        </ul>
      </div>

      <div className="text-center">
        <p className="text-gray-700">
          Staying healthy is an option. Eating healthy, regular exercise, managing stress, avoiding smoking, and maintaining proper body weight can go a long way.
        </p>
      </div>
    </div>
  );
};

export default PreventingMiscarriages;
