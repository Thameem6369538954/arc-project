import { motion } from 'framer-motion';
import EX from "../Images/BlogFertilityPreservation.jpeg"; // Replace with your local image path if needed

export default function EmotionalSession() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="container mx-auto px-4 py-10 font-[choco] mt-25">
        <div className="w-full h-[500px] relative">
                          <img
                            src={EX}
                            alt="Exercise in Moderation"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30 bg-opacity-40 flex items-center justify-center"></div>
                        </div>
                  <h1 className="text-3xl font-bold text-center mb-6 text-pink-400 p-5" >
                  Emotional Considerations
                  </h1>
       
      <motion.p
        className="text-xl  mb-6 text-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
Dealing with infertility problem can be sometimes much more strenuous than expected and often lead to emotional failure in certain cases. Recognizing and accepting the fact that the entire process of infertility treatment involves a lot of emotional ups and downs is very important. If you are dealing with such mental conditions then you are not alone. There are several couples who often feel mentally stressed out due to infertility problems. Though, it will be incorrect to say that the entire treatment involves feelings related to anxiety and stress only. Excitement, uncertainty, elation, depression are few of the feelings that are felt by the couples. ARC aims at reducing their stress levels so that they have a healthy and stable mental condition and are able to cope up with emotionally worsen situations.      </motion.p>
      <motion.h2
        className="text-2xl font-bold text-pink-600 mb-6 text-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        How does emotional consideration session help patients?
      </motion.h2>
      <motion.p
        className="text-gray-700 mb-6 text-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
      It is seen in many cases that people facing infertility problems often start blaming themselves for their condition and as a result, their mental condition starts deteriorating which makes the treatment even more intricate and difficult. These sessions are taken by experienced professionals who have a deep understanding of human behavior and can also understand people's psychological conditions. They ensure that by the end of each session you start feeling good about yourself and gain knowledge about emotional problems that are usually faced by all patients. Also, various other alternative treatments are introduced to them so that they have a clear understanding of what they are actually going through and what is the way out of all such problems.
      </motion.p>
      <motion.h3
        className="text-2xl font-bold text-pink-600 mb-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        Why should patients attend these sessions?
      </motion.h3>
      <motion.p
        className="text-gray-700 mb-6 text-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
When undergoing infertility treatments you might feel frustrated, depressed, stressed out, and a plethora of mix emotions at each stage of your treatment process. If they attend counseling sessions conducted primarily for emotional considerations then the fertility counselors can help patient's real time to cope up with all their mental problems. If patients attend these sessions then they can learn more about various other treatment procedures, work through tough decisions, get referrals to appropriate sources, simply be heard by an understanding person, and also improve communication and their relationship with others. People tend to isolate themselves at such life stages and the communication gap grows considerably between the patient and the society. These sessions ensure that this gap is reduced to a minimum.
      </motion.p>
      <motion.h3
        className="text-2xl font-bold text-pink-600 mb-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        Why choose ARC?
      </motion.h3>
      <motion.p
        className="text-gray-700 mb-6 text-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
ARC has a pool of talented professionals who are well skilled and possess relevant certifications to handle your case effectively. Healing a patient by improving his mental level is a very delicate job and can be conducted by veterans only. Doctors at ARC have arranged for several emotional consideration sessions for its patients so that the patients are able to voice their feelings and also have a sense of content as they have someone to listen to them. Moreover, they have experienced fertility counselors who have been counseling patients for years and understand each and every about human behavior and also possess knowledge of psychological conditions of humans. So at ARC, you can be sure that all your mental problems will reduce apart from having effective infertility treatment.      </motion.p>
      <motion.img
        src="https://via.placeholder.com/600x400"
        alt="Emotional Session Image"
        className="rounded-lg shadow-lg w-full max-w-md mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      />
    </div>
  );
}
