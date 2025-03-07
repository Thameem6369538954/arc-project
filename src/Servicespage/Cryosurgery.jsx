import { motion } from "framer-motion";

const TreatmentContent = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="mt-30 font-[choco] space-y-10">
      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <p>
          With the increase in infertility problems, the treatment options are also increasing day by day. The relevant course of treatment totally depends on the type and intensity of problem that the individual is having. Cryosurgery is one type of treatment that is used to treat sexually transmitted diseases and also helps in destroying precancerous cells on the cervix with the help of freezing gas. Once the abnormal cells are removed or destroyed using cryosurgery, the body replaces them with new and healthy cells. The entire treatment requires very less time and can be completed in around 10 minutes.
        </p>
      </motion.div>

      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2 className="text-xl font-bold text-pink-500">Risks associated with Cryosurgery</h2>
        <p>
          As the treatment involves inserting foreign objects into your body through the vagina, there are high chances that you might be exposed to heavy vaginal bleeding, infection, fainting during or after the treatment, the flare-up of an existing pelvic infection, and freeze burns on the vagina. Though, these are some rare risks that have minimum chances of occurrence after treatment. In many cases, the after effects are known after few days of successful treatment taking place.
        </p>
      </motion.div>

      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2 className="text-xl font-bold text-pink-500">Post care ways after Cryosurgery</h2>
        <p>
          After undergoing cryosurgery your doctor will prescribe you some rules that you need to follow for at least one month so that your cervix gets time to heal. Usually, the success rates of cryosurgery are very high but still in order to remain on the safer side doctors conduct Pap smear test for around three to six months to check whether the abnormal cells have been completely removed from your body or not.
        </p>
      </motion.div>

      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2 className="text-xl font-bold text-pink-500">Why choose ARC?</h2>
        <p>
          Cryosurgery involves the use of high-end and quality machines that are not easily available everywhere. <span className="text-blue-500">ARC</span> is well equipped with relevant machines that are needed for carrying out successful treatments and they are also given in the hands of trained professionals who also have years of experience in using them.
        </p>
      </motion.div>
    </div>
  );
};

export default TreatmentContent;
