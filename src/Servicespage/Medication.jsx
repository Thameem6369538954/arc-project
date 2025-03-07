import { motion } from "framer-motion";

const ImageContent3 = () => {
  return (
    <motion.div 
      className="p-6 bg-white rounded-lg shadow-lg space-y-6 mt-30 font-[choco]"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
    >
      <h2 className="text-xl font-bold text-pink-600">Induction of Ovulation</h2>
      <p>
        The induction of ovulation refers to the use of medication to stimulate the release of one or more mature eggs from the follicles in the ovaries of women. Women who are suffering from infertility mostly do not develop mature follicles on a regular basis. Some of them have anovulation conditions like polycystic ovarian syndrome. Such women would have irregular menstrual cycles and abnormal body hair and of course, infertility.
      </p>

      <h2 className="text-xl font-bold text-pink-600">Controlled Ovarian Hyperstimulation</h2>
      <p>
        This process uses almost the same medication as that used in <span className="text-blue-600">ovulation induction</span> to stimulate the development of mature follicles and release eggs. These would lead to greater chances of a successful pregnancy.
      </p>

      <h2 className="text-xl font-bold text-pink-600">What are the drug therapies involved in the processes?</h2>
      <ul className="list-disc ml-6">
        <li>Clomid or Serophene</li>
        <li>Femara or Letrozole</li>
        <li>Injectable FSH (follicle stimulating hormones)</li>
        <li>The GnRH pump</li>
        <li>Bromocriptine</li>
      </ul>

      <h2 className="text-xl font-bold text-pink-600">What are the roles of the various medicines?</h2>
      <ul className="space-y-4">
        <li>✅ Clomid or Serophene - The medicine is used to try and induce ovulation through an oral dosage.</li>
        <li>✅ Metformin - Another medicine that has been used over the ages to assist women in ovulation who have shown signs of anovulation and polycystic ovaries.</li>
        <li>✅ Femara - Femara is used to stimulate the release of multiple eggs rather than a single egg to increase the chances of conception and pregnancy.</li>
        <li>✅ Injectable Gonadotropins - Injectable gonadotropins cause the development of multiple follicles when they are injected into women who do not ovulate.</li>
        <li>✅ Bromocriptine - Sometimes anovulation can be caused by elevated levels of the pituitary hormone prolactin in the blood.</li>
      </ul>

      <p>
        All these medications play an important role in helping the process of ovulation and can go a long way in conception for the infertile couple.
      </p>

      <p>
        <span className="text-blue-600">ARC</span> provides a proper guide on how to use the medication to optimise the chances of getting pregnant. It provides best-in-class facilities and professionals who would take utmost care and help you embark on the journey to parenthood.
      </p>
    </motion.div>
  );
};

export default ImageContent3;
