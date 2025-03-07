import { motion } from "framer-motion";
import { FaCheckSquare } from "react-icons/fa";

const CryopreservationSection = () => {
  return (
    <motion.div
      className="mt-30 font-[choco]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <p>
        Stem cells are considered as the building blocks of life. They are undifferentiated cells which can undergo further differentiation into specialized cells. Embryos formed during the blastocyst stage of embryonic development are known as embryonic stem cells. It is important to store your stem cells for future use in case of any chronic illness or infertility. Storing your own <span className="font-bold">stem cells</span> is faster, safer and cheaper than receiving another person's stem cells. Stem cell based therapies have been successful in treatment of cancer, anaemia, infertility and so on.
      </p>

      <h2 className="font-bold text-xl mt-8 text-[#d61c4e]">
        Reasons for storing eggs or embryos:
      </h2>
      <ul className="space-y-4 mt-4">
        {[
          "In most couples, embryos and/or eggs remain after IVF treatment. This reproductive tissue can be stored in banks for future use when they may decide to have a child.",
          "This process is very useful for women who are over the reproductive age or who are afflicted with medical conditions.",
          "This advanced technology has increased the number of pregnancies.",
          "The ovarian tissues can be stored in case the woman is afflicted with various diseases like cancer."
        ].map((item, index) => (
          <motion.li
            key={index}
            className="flex items-start gap-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <FaCheckSquare className="text-[#d61c4e] mt-1" />
            {item}
          </motion.li>
        ))}
      </ul>

      <h2 className="font-bold text-xl mt-8 text-[#d61c4e]">
        Egg or oocyte Cryopreservation
      </h2>
      <p>
        Oocyte or egg cryopreservation involves the freezing of eggs that have been directly retrieved from the ovaries of women. The egg retrieval process for oocyte cryopreservation includes several weeks of hormone injections to stimulate ovaries to mature multiple eggs. The final maturation induction is performed by using a GnRH agonist which decreases the risk of ovarian hyperstimulation syndrome. The eggs are then removed from the body by transvaginal oocyte retrieval. The eggs are first dehydrated and then frozen either by a controlled rate, slow cooling method or a flash cooling method known as vitrification.
      </p>

      <h2 className="font-bold text-xl mt-8 text-[#d61c4e]">
        Embryo Cryopreservation
      </h2>
      <p>
        Embryo cryopreservation includes ovarian hyperstimulation, egg retrieval and embryo transfer. The ovarian hyperstimulation is done by using GnRH agonist for final oocyte maturation. It can decrease the risks of ovarian hyperstimulation syndrome. Vitrification is the main technique used for embryo cryopreservation which results in decreased risk of DNA damage. Slow programmable freezing (SPF) is also used for freezing.
      </p>

      <h2 className="font-bold text-xl mt-8 text-[#d61c4e]">
        Reasons for choosing ARC
      </h2>
      <ul className="space-y-4 mt-4">
        {[
          "ARC has been successful in providing the best help and treatment to assist couples facing infertility for over 15 years.",
          "At ARC, we provide assisted reproductive treatments, stem cell banking and gynaecological surgeries at a reasonable price with utmost precision and care.",
          "Cutting edge infrastructure and state of the art laboratory makes ARC one of the best facilities for IVF in the world.",
          "ARC provides fully furnished accommodations with basic amenities and sufficient storage.",
          "We, at ARC, provide a calm and quiet atmosphere to help you heal.",
          "In room dining facilities with telephone and internet facilities is also available here."
        ].map((item, index) => (
          <motion.li
            key={index}
            className="flex items-start gap-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <FaCheckSquare className="text-[#d61c4e] mt-1" />
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default CryopreservationSection;
