import { motion } from "framer-motion";

export default function ErectileDysfunction() {
  return (
    <motion.div
      className="mt-30 font-[choco]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div>
        <h2 className="text-2xl font-bold text-pink-600">Symptoms of Erectile Dysfunction</h2>
        <p>
          If you are able to identify symptoms of erectile dysfunction at an early stage then you can approach a doctor for timely treatment.
        </p>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-pink-600">Causes of Erectile Dysfunction</h2>
        <p>
          The causes of Erectile Dysfunction could be many and they vary from case to case. Cardiovascular disease, diabetes, hypertension, and more.
        </p>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-pink-600">Why Choose ARC?</h2>
        <p>
          In matters like sexual problems, it becomes really important to consult the right professional.
        </p>
      </div>
    </motion.div>
  );
}
