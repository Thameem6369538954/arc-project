import { motion } from "framer-motion";

const Section4 = () => {
  return (
    <div className="mt-30 font-[choco]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-[17px] text-justify leading-7 text-[#555]"
      >
        <p>
          There are many individuals who have undergone several treatments for
          coping up with their infertility problems. But in several cases, it was
          found that the drugs prescribed to patients resulted in additional sexual
          dysfunction problems. The reason behind various sexual dysfunction
          problems are different from one individual to another and hence requires
          separate treatment. Drugs should be prescribed according to the nature
          and cause of the problem. There are some doctors who refer drugs on the
          basis of the overall problem being faced by individual and not doing an
          in-depth analysis before prescribing. Doctors at ARC don't prescribe any
          drug until and unless they have found the exact cause of the problem.
          The medicines are suggested after confirming that they are completely
          safe and won't cause any health hazards to the patient. Drug induced
          sexual dysfunction can even worsen the patient's situation and relevant
          measures are not taken timely. Usually, antidepressants, blood pressure,
          and other medicines are behind the cause of sexual dysfunction.
        </p>

        <h2 className="text-[22px] text-[#f5487f] font-bold mt-5">
          Drugs responsible for causing Sexual dysfunction
        </h2>
        <p>
          There are some antidepressants like amitriptyline, clomipramine,
          fluoxetine, and others that are responsible for decreasing sexual desire
          in a patient. There are other medicines also which belong to the
          anti-depressant category and result in decreased arousal and orgasm or
          ejaculatory difficulties. If you have been taking up psychotropic drugs
          like alprazolam that you may be left with any of the problems related to
          reduced sexual desire, decreased arousal, and orgasm or ejaculatory
          problems. Today unhealthy lifestyle has forced many people to depend
          largely on drugs for leading a normal and healthy life. Many times such
          drugs react within your body and start functioning in the wrong
          direction. Even if you have been taking cardiovascular drugs or other
          drugs for maintaining proper health conditions, then you might be prone
          to drug induced sexual dysfunction.
        </p>

        <h2 className="text-[22px] text-[#f5487f] font-bold mt-5">
          Points to keep in mind
        </h2>
        <p>
          Whether the patient is comfortable in disclosing or discussing this
          problem clearly with his doctor is one of the major concerns. There are
          many patients on long term medication who don't even have an idea that
          the drugs that they are taking are responsible for their
          <span className="text-[#f5487f]"> sexual dysfunction</span>. It can only
          be cured properly if you share your problems clearly with the doctor. If
          after taking drugs, you have noticed some adverse effects in your body
          during intercourse, then immediately discuss this with your doctor. It
          might happen that the drug being taken by you has started to react
          negatively rather than curing. The doctor will immediately change your
          existing drugs.
        </p>

        <h2 className="text-[22px] text-[#f5487f] font-bold mt-5">Why choose ARC?</h2>
        <p>
          If you have been taking some drugs which have started to adversely affect
          your life then you can easily consult doctors at
          <span className="text-[#f5487f]"> ARC</span>. They will go through your
          medical history properly and make necessary changes in your drugs list.
          They will make sure that you don't take any drug that in order to cure
          disease gives rise to another by reacting within your body. The doctors
          are well certified and make sure that their patients feel comfortable
          throughout the treatment process so that they can share relevant details
          and their problems clearly. This will help in deciding the best
          treatment course for you.
        </p>
      </motion.div>
    </div>
  );
};

export default Section4;
