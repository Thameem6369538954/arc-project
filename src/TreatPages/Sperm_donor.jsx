import { FaCheckCircle } from "react-icons/fa";

const DonorInsemination = () => {
  const steps = [
    "The sperm donors are thoroughly screened by the sperm bank to make sure that infectious diseases like HIV, gonorrhoea and hepatitis would not be passed along. There are other similar tests to make sure that the sperms that are donated are healthy and can be used for donation.",
    "The sperm is frozen and the sample is kept for about 6 months. After that, the donor is tested again for HIV and other diseases to make sure that he did not have a recent HIV infection. This could mean that the disease has taken effect afterwards and the semen that he has produced has a high chance of showing signs of HIV.",
    "The sperm donor would be selected on the basis of his or her ethnic background, the colour of his hair, the eye colour, weight, height, blood group, Rhesus factors and others.",
    "The frozen sperms are then purchased from the sperm banks, transported and then stored in special facilities in the facility centres.",
    "When the woman is ready to be impregnated, various methods would be employed to find out the time of ovulation.",
    "The washed semen specimen is placed in the uterine cavity using a very thin and soft catheter through the cervix on the day of ovulation. The procedure is not very uncomfortable for the woman. The process is known asintrauterine insemination."
  ];

  return (
    <div className=" mx-auto p-6 bg-white shadow-lg rounded-xl mt-40">
      <p className="text-gray-700 text-lg mb-6">The washed semen specimen is placed in the uterine cavity using a very thin and soft catheter through the cervix on the day of ovulation. The procedure is not very uncomfortable for the woman. The process is known asintrauterine insemination.</p>
      <h2 className="text-3xl font-bold text-pink-600 mb-4 text-center">
        What is the Process of Donor Insemination?
      </h2>
      <p className="text-gray-700 text-lg mb-6">
      The washed semen specimen is placed in the uterine cavity using a very thin and soft catheter through the cervix on the day of ovulation. The procedure is not very uncomfortable for the woman. The process is known asintrauterine insemination. </p>

      <ul className="space-y-4">
        {steps.map((step, index) => (
          <li key={index} className="flex items-start space-x-3">
            <FaCheckCircle className="text-pink-500 text-xl mt-1" />
            <p className="text-gray-700">{step}</p>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-pink-600 mb-3">
          Rate of Success of Intrauterine Insemination
        </h3>
        <p className="text-gray-700">
        The success rate of the process varies a lot depending on the age of the woman and if she has any prevalent factors that affect her fertility. The monthly pregnancy success rates using the frozen donor sperms are about 10%. The success rates of the donated sperms would become lesser with the increasing age of the woman. Thus women above 35 would have much lower success rates, and those above 41 would be in need of donor eggs to have a baby. It has, however, been found that fresh semen is more effective than the frozen samples. But the use of fresh samples is not allowed because there might be cases of transmission of HIV.        </p>
      </div>

      <p className="text-center text-blue-500 mt-6 cursor-pointer hover:underline">
      ARC is the perfect destination if you require help with donated sperms. The professionals at the facility would help you with the entire process.      </p>
    </div>
  );
};

export default DonorInsemination;
