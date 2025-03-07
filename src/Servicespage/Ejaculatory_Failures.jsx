import { motion } from 'framer-motion';

const AneJaculation = () => {
  return (
    <div className="mt-30 font-[choco]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <p>Most of the men face ejaculatory failures but don’t share this problem with their doctors as feel ashamed in disclosing such problems. Ejaculatory failure is the inability to ejaculate semen despite stimulation of the penis. Even if your penis is stimulated during intercourse or masturbation, a male is unable to ejaculate. This becomes a big problem in the process of conception. Ejaculation leads to discharging of sperms into a female body and is followed by mixing up with the female egg and it results in the process of fertilization. But if men are unable to ejaculate then the entire process of fertilization ceases. This is a big problem faced by men and needs immediate medical attention. If you overlook and delay the treatment then it may lead to even more chronic problems in near future. Occasional inability to ejaculate cannot be considered as a disorder but if it continues for a longer period then the matter needs to be taken seriously. Ejaculation failure, also known as Anejaculation is of two types.</p>

        <h2 className="text-[20px] font-bold text-[#e44063]">Situational Anejaculation</h2>
        <p>Situational anejaculation refers to the phenomena where men can ejaculate in some situations but not in others. It might happen that the men are able to ejaculate at home but when it is required at a clinic for some medical testing the men might not be able to ejaculate. This can be a result of psychological conditions like stress and anxiety. It is even seen in some cases, that the men are able to ejaculate with one partner but not with another partner. That is why the term has been given “situational” anejaculation as in this case ejaculation totally depends on a particular situation. Unavailability of the desired situation may often lead to ejaculation failure. Whenever such cases are apparent, they should be reported to the concerned doctor on an immediate basis.</p>

        <h2 className="text-[20px] font-bold text-[#e44063]">Total Anejaculation</h2>
        <p>Total anejaculation can be further sub-divided into anorgasmic anejaculation and orgasmic ejaculation. In the former condition, the man is unable to reach the desired level of orgasm during intercourse or masturbation resulting in no ejaculation. Inability to reach the desired orgasm might be characterized by some psychological conditions or psychotropic medications. In case of orgasmic anejaculation, a man experience orgasm but are still unable to ejaculate. The reason behind it could be the failure of emission of semen as a result of a blockage in the ejaculatory ducts or damage in the ejaculatory nerves.</p>

        <h2 className="text-[20px] font-bold text-[#e44063]">Why Choose ARC?</h2>
        <p>Sexual problems are a delicate issue and need to be looked after with utmost care. <span className="text-[#007bff]">ARC</span> in its capacity as India’s best infertility hospitals ensures that all the patients are made comfortable so that they can derive the most out of their treatment. The knowledgeable and certified doctors at ARC go through the medical history of each patient and conduct some tests so that they accurately address the root cause of the problem and suggest the treatment course accordingly. They have also conducted several successful <span className="text-[#007bff]">treatments</span> in the past, so you have nothing to worry about in terms of efficiency of the treatment.</p>
      </motion.div>
    </div>
  );
};

export default AneJaculation;
