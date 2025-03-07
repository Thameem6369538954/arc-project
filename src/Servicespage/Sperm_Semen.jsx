import { motion } from 'framer-motion';

export default function SpermBankingSection() {
  return (
    <div className="mt-30 font-[choco]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <p>
          Stem cells are the building blocks of life. They are undifferentiated cells that can further differentiate into specialized types of cells. It is important to store your stem cells for future use in case of any chronic illness or infertility. Storing your own stem cells is faster, safer, and less costly than receiving anyone else's stem cell.
        </p>
        <h2 className="text-[red] text-xl font-bold">Sperm Banking</h2>
        <motion.div whileHover={{ scale: 1.05 }}>
          <h3 className="flex items-center gap-2 text-lg font-semibold">
            🩸 Semen Collection
          </h3>
          <p>
            Semen needed for sperm banking is usually obtained by masturbation. The sample is collected and sent to the laboratory for preservation.
          </p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <h3 className="flex items-center gap-2 text-lg font-semibold">
            🧑‍⚕️ Sperm Donation
          </h3>
          <p>
            Sperm donation is the process of third-party reproduction. It is donation by a man for the purpose of artificially inseminating a female.
          </p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <h3 className="flex items-center gap-2 text-lg font-semibold">
            🔬 Preparing the Sperm
          </h3>
          <p>
            The semen specimen is washed to extract the sperm from the rest of the material in the semen. The samples are then used in artificial insemination or IVF procedures.
          </p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <h3 className="flex items-center gap-2 text-lg font-semibold">
            ❄️ Sperm Cryopreservation
          </h3>
          <p>
            The freezing of sperm prior to vasectomy or engaging in life-threatening activities is known as sperm cryopreservation.
          </p>
        </motion.div>

        <h2 className="text-[red] text-xl font-bold">Reasons for Choosing ARC</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>15+ years of experience in infertility treatments</li>
          <li>Affordable pricing with advanced technology</li>
          <li>Top-notch laboratory infrastructure</li>
          <li>Fully furnished accommodations</li>
          <li>Calm and quiet atmosphere to aid healing</li>
        </ul>
        <div className="flex justify-center mt-5">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6NxS6xQU7X0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl shadow-lg"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
}
