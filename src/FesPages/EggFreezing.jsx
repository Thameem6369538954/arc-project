import React from "react";
import { FaSnowflake, FaHeartbeat, FaCalculator } from "react-icons/fa";
import eggfreezing from "../FecImg/eggfreezing.jpg";

const EggFreezingPage = () => {
  return (
    <div className="min-h-screen bg-[#f5efe1] text-gray-700 font-[choco] mt-10 md:mt-28">
      {/* Header Image */}
      <div className="w-full">
        <img
          src={eggfreezing}
          alt="Egg Freezing"
          className="w-[30%] object-fit mt-5 p-5"
        />
      </div>

      <div className="container mx-auto p-6 md:flex gap-10">
        {/* Left Content */}
        <div className="md:w-3/4">
          <h1 className="text-3xl font-bold text-pink-600 mb-4">Egg Freezing</h1>
          <p className="mb-6 text-justify">
            The process of egg freezing or oocyte cryopreservation involves the
            extraction of the eggs of a woman, freezing them and then storing
            them. This is a method to preserve the reproductive potential of
            women who are in their reproductive age. The first successful such
            attempt was made in 1986. The process has greatly improved through
            the ages with the success of eggs surviving the freezing process.
            The process is no longer in an experimental theory. The techniques
            that have led to an increase in the amount of gamete survival and
            potential fertilization have allowed women a much greater chance
            that what have been possible a decade ago. The seasoned
            professionals at ARC can help you with the process once you make up
            your mind.
          </p>

          <h2 className="text-2xl font-bold text-pink-600 mb-4">
            Who are the possible candidates for Egg Freezing?
          </h2>
          <p>
            Cryopreservation of eggs is considered for a variety of reasons in
            different persons:
          </p>
          <ul className="list-none ml-6 mb-6">
            <li>
              <FaSnowflake className="inline mr-2 text-pink-600" /> Genetic
              mutations that might require the removal of the ovaries
            </li>
            <li>
              <FaSnowflake className="inline mr-2 text-pink-600" /> Some might
              need to go through surgeries that may cause damage to ovaries
            </li>
            <li>
              <FaSnowflake className="inline mr-2 text-pink-600" /> Women
              affected by cancer might need chemotherapy and radiation therapy
            </li>
            <li>
              <FaSnowflake className="inline mr-2 text-pink-600" /> The chance
              of premature ovarian failure from chromosomal abnormalities
            </li>
            <li>
              <FaSnowflake className="inline mr-2 text-pink-600" /> Fertility
              preservation to delay child-bearing for social or personal choice
            </li>
            <li>
              <FaSnowflake className="inline mr-2 text-pink-600" /> Any disease
              of the ovaries that might harm the ovaries
            </li>
          </ul>
          <p>
            These are some of the cases when eggs preservation comes in quite
            handy.
          </p>
          <h2 className="text-2xl font-bold text-pink-600 mb-4">
            How is the process of egg freezing achieved?
          </h2>
          <p className="mb-6 text-justify">
            First of all, there would be some tests conducted to check the
            ovarian reserve. This is to make an estimation of the potential
            yield of the oocytes prior to the stimulation cycle. The assessment
            is very much necessary as it would also help to determine the
            required dosage and other criteria. The process takes a similar
            route like that of in vitro fertilisation. The process includes the
            use of injectable hormonal medicines, followed by the aspiration of
            the oocytes and the surrounding fluid through the vagina. The mature
            eggs are recognised under the microscope and cryopreserved by
            storing in liquid nitrogen.
          </p>

          <h2 className="text-2xl font-bold text-pink-600 mb-4">
            What is the next procedure?
          </h2>
          <p className="mb-6 text-justify">
            When the woman wants to achieve pregnancy, the preserved eggs are
            placed into warming solution and assessed. The eggs which survive
            the process are fertilized by the process of intracytoplasmic sperm
            injection. The fertilised eggs are cultured and then placed in the
            embryo when ready. The success rate is about 4% - 12% at the
            present. The determining factors are the age of the woman at the
            time of freezing and the number of eggs. There have not been any
            risks that have been assessed as of yet. The eggs can be stored for
            about 4 years, though it has not been found that storing them for a
            long time can have adverse effects. However, the maternal age can
            have risks associated with the pregnancy, like diabetes and high
            blood pressure.
          </p>
          <p>
            ARC can take care of all the associated steps needed for oocyte
            cryopreservation. The expert professionals at the facility will take
            care of all the problems for you. If you want to have the process
            done for yourself, you need not worry at all.
          </p>
        </div>

        {/* Right Sidebar */}
        <div className="md:w-1/4 bg-pink-100 p-4 rounded-lg shadow-md h-[220px]">
          <h3 className="text-xl font-semibold text-pink-600 mb-4">
            Our Services
          </h3>
          <ul className="space-y-3">
            <li className="hover:text-pink-600 cursor-pointer">
              <FaSnowflake className="inline mr-2 text-pink-600" /> Egg Freezing
            </li>
            <li className="hover:text-pink-600 cursor-pointer">
              <FaHeartbeat className="inline mr-2 text-pink-600" /> Fertility
              Preservation
            </li>
            <li className="hover:text-pink-600 cursor-pointer">
              <FaCalculator className="inline mr-2 text-pink-600" /> BMI
              Calculator
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EggFreezingPage;
