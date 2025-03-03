import { FaCheckCircle } from "react-icons/fa";

const EggDonor = () => {
  const factors = [
    "Physical characteristics that would much resemble that of the female partner",
    "The beauty of the individual",
    "A certain intelligence quotient in the individual",
    "Successful egg donation in the past",
    "Personality of the donor",
  ];

  return (
    <div className="mt-40 mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-3xl font-bold text-pink-600 mb-4 text-center">
        What are the Criteria for Choosing an Egg Donor?
      </h2>
      <p className="text-gray-700 text-lg mb-6">
        The most important aspect of the process of egg donation is finding the donor. Choosing the donor might be quite easy and straightforward for some individuals, while it could be a little complicated for the others.
      </p>

      <h3 className="text-2xl font-semibold text-pink-600 mb-4">
        What are the Factors that Couples Tend to Consider?
      </h3>
      <ul className="space-y-4">
        {factors.map((factor, index) => (
          <li key={index} className="flex items-start space-x-3">
            <FaCheckCircle className="text-pink-500 text-xl mt-1" />
            <p className="text-gray-700">{factor}</p>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-pink-600 mb-3">
          Aspects of Egg Donor Screening
        </h3>
        <p className="text-gray-700">
          Apart from the traits of the egg donor, a few screening and tests are to be conducted before the egg donation is performed. These screening tests are performed to check whether the donors have any infectious disease or would pass on characteristics of a defective gene.
        </p>
      </div>

      <p className="text-center text-blue-500 mt-6 cursor-pointer hover:underline">
        ARC considers all these points about using egg donors.
      </p>
    </div>
  );
};

export default EggDonor;
