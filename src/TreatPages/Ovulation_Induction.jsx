import { FaCheckCircle } from "react-icons/fa";

const OvulationInduction = () => {
  const treatments = [
    "Clomid or Serophene",
    "Femara or Letrozole",
    "Injectable Gonadotropins or Follicle Stimulating Hormones",
    "The GnRH pump",
    "Bromocriptine",
  ];

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto mt-60 font-[choco]">
      <div className="text-center">
        <h1 className="text-pink-400 text-4xl md:text-5xl font-extrabold my-6">Ovulation Induction</h1>
        <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
          Many couples find it difficult to conceive. This could be a matter of male factor as well as female factor infertility. Whatever the cause, the couple would need to boost the chances of fertility through various treatment procedures. Among the various steps to increase the chances of pregnancy, the induction of ovulation is one of the major ones.
        </p>
        <div className="my-6 ">
          <img
            src="https://img.youtube.com/vi/Qs8Yh8Qe8v4/hqdefault.jpg"
            alt="Ovulation Induction Video"
            className="mx-auto w-full md:w-1/3 rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition duration-300"
            onClick={() => window.open("https://www.youtube.com/watch?v=Qs8Yh8Qe8v4", "_blank")}
          />
        </div>
      </div>

      <div className="text-lg md:text-xl text-gray-700 space-y-6">
        <h2 className="text-pink-400 text-3xl font-bold">More about Ovulation Induction</h2>
        <p>
          Some females would have ovulation due to polycystic ovarian syndrome are affected by these conditions and often have very irregular menstrual cycles, infertility, or increased body hair.
        </p>

        <h2 className="text-pink-400 text-3xl font-bold">Who should have a Treatment of Ovulation Induction?</h2>
        <p>
          There are plenty of infertile women who do not ovulate on their own but still would want to get pregnant. Such people are in need of ovulation induction, which would induce the ovaries to release mature eggs that can help women get pregnant.
        </p>

        <h2 className="text-pink-400 text-3xl font-bold">The Process of Ovarian Stimulation</h2>
        <ul className="space-y-4">
          {treatments.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <FaCheckCircle className="text-pink-400 text-xl" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-pink-400 text-3xl font-bold">Increase in Success Rates after Ovulation Induction</h2>
        <p>
          The success rates of pregnancy are increased considerably after the stimulation of the ovarian follicles through the process of ovarian stimulation. The medication used in the induction of ovulation increases the release of mature eggs to a many as three per ovulation cycle.
        </p>
      </div>
    </div>
  );
};

export default OvulationInduction;
