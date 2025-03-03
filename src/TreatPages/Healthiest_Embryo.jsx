import { FaCheckCircle } from "react-icons/fa";

const HealthiestEmbryo = () => {
  const reasons = [
    "At ARC, we provide affordable, evidence-based fertility treatments and financing options for people facing infertility.",
    "ARC has the largest network of board-certified fertility specialists",
    "Presence of cutting-edge infrastructure and state-of-the-art laboratories for IVF.",
    "We provide a calm and quiet atmosphere to help you heal."
  ];

  return (
    <div className="p-4 md:p-8 text-gray-700 mt-50 font-[choco]">
        <p className="mb-4 leading-relaxed">
        Infertility is a major problem that plagues most men and women nowadays. Many lifestyle factors can affect fertility such as age, nutrition, weight, stress, cigarette smoking, use of illicit drugs, alcohol, and caffeine consumption. Infertility in men and woman can be treated by several methods which include IVF, and ARM.
        </p>
      <h1 className="text-pink-400 text-3xl font-bold text-center my-4">What is Meant by the Healthiest Embryo?</h1>
      <p className="mb-4 leading-relaxed">
      In the early stage of development, a multicellular diploid eukaryotic organism is called an embryo. The embryo develops from a zygote which results from the fertilization of the egg cell by the male sperm cell. The zygote divides mitotically to produce a multicellular organism known as the zygote. Not all embryos formed are of good chemistry. Embryos having a good shape and rapidly dividing cells are the healthiest embryos. Healthy embryos multiply into four to eight progressions and eventually into a promising blastomere, rapidly dividing the mass of over 100 cells. The cluster of cells forms a well-defined inner mass which forms the baby and an outer circle of cells from the placenta      </p>

      <h2 className="text-pink-400 text-2xl font-bold mt-6">Uses of Healthy Embryos in Assisted Reproductive Methods</h2>
      <p className="mb-4 leading-relaxed">
      Choosing a healthy embryo for assisted reproductive methods like in-vitro fertilisation(IVF), intracytoplasmic sperm injection (ICSI) is important. During an IVF insemination process, thousands of washed swimming sperms are mixed with all the eggs and then natural sperm selection goes to work. Female eggs are fertilised by male sperm in a petri dish and allowed to grow for about 5 days until a blastocyst of 50 to 65 cells is formed. During ICSI insemination process, firstly the mature eggs are separated from the immature eggs. A suitable sperm candidate is selected and then injected into the mature egg. The sperm sample is carefully analysed to choose the sperm that has strong motility and a good morphology which is then injected into the middle of the egg. The best quality embryo needs to be selected to return back into the uterus for the greatest possible chance.      </p>

      <h2 className="text-pink-400 text-2xl font-bold mt-6">How to Choose the Healthiest Embryo?</h2>
      <p className="mb-4 leading-relaxed">
      Selecting the healthiest embryo for embryo transfer is important as it increases the live birth rate of children born as a result of IVF. Genetic screening, preimplantation genetic diagnosis (PGD), preimplantation genetic screening (PGS) have increased a patient’s chances of having pregnancies and healthy babies. These techniques are used to understand and analyze the health of your embryo before transfer into the uterus. Multiple embryos can increase the risk of complications during pregnancy and delivery.
<br /> <br />
PGD involves the testing of a 5-day embryo for a specific genetic abnormality while PGS is the screening of the blastocyst to determine whether the chromosomes are normal. Genetic screening enables us to test the embryos before implantation and avoid implantation of an embryo that has an abnormality.      </p>

      <h2 className="text-pink-400 text-2xl font-bold mt-6">Reasons for Choosing ARC</h2>
      <ul className="list-none pl-0">
        {reasons.map((reason, index) => (
          <li key={index} className="flex items-center gap-2 py-2">
            <FaCheckCircle className="text-pink-400" />
            {reason}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthiestEmbryo;