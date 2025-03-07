import { motion } from "framer-motion";

const SexualDisorderSection = ({ title, content }) => {
  return (
    <motion.div
      className=" font-[choco]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-xl font-bold text-pink-600 mb-4">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{content}</p>
    </motion.div>
  );
};

const SexualDisorderInfo = () => {
  const sections = [
    {
      title: "Factors affecting patients after surgery",
      content:
        "A surgery can be sometimes a difficult decision to take. Most of the patients prefer to get themselves cured with the help of medicines or therapeutic activities only as they consider it to be safe. Surgeries also have positive results on patients but the after results may vary from one patient to another. There are several factors that affect patients after surgery like disfigurement or mutilation altering the body image, hormonal imbalances, damage to both vascular and nervous system, and increased pain. However, these symptoms are not consistent with every case. There are also some cases where the patients didn’t feel any adverse after effects after the surgery and are living a normal healthy life today.",
    },
    {
      title: "How surgery affects sexual life of patients?",
      content:
        "Post surgery the patient might undergo several changes in his body and also experience mixed feelings like anxiety, stress depression, happiness and many others. At this stage, it becomes important for the other partner to take good care of the partner who has undergone surgery. The couple might not be able to indulge in sexual activities for few days or may be months, in some cases, if a partner has undergone a surgery. He will require time to adapt to the changes that have taken place within his body. Dyspareunia can be a major problem faced by the patient after surgery and it may disrupt the relationship between the two as the problem results in a lack of arousal which greatly affects an intercourse process.",
    },
    {
      title: "Why choose ARC?",
      content:
        "Post surgery the patient might undergo several changes in his body and also experience mixed feelings like anxiety, stress depression, happiness and many others. At this stage, it becomes important for the other partner to take good care of the partner who has undergone surgery. The couple might not be able to indulge in sexual activities for few days or may be months, in some cases, if a partner has undergone a surgery. He will require time to adapt to the changes that have taken place within his body. Dyspareunia can be a major problem faced by the patient after surgery and it may disrupt the relationship between the two as the problem results in a lack of arousal which greatly affects an intercourse process.",
    },
  ];

  return (
    <div className="p-5 font-[choco] mt-30">
        <h1 className="text-6xl text-center p-5">Surgeries in Sexual Disorders</h1>
        <p>Sexual disorders in both men and women are becoming increasingly common. The causes may be different from one individual to another. There exists a large list of both physical and psychological factors that result in the development of sexual disorders in both the partners. However, not all cases require surgery for treatment. Most of the sexual disorder cases are treated with the help of drugs and therapeutic activities. But if the intensity of sexual disorder has turned to chronic then surgery might be needed for proper treatment. ARC can help you out with all such problems and is well equipped with every necessary tool, equipment, trained nursing staff, and specialized doctors can carry out your surgery effectively. Surgeries can leave the patient with some temporary or long lasting effects which may not be experienced initially. So make sure to approach only a renowned hospital that has a track record of carrying out successful surgeries in past so that you can rest assure on the after results of a surgery.</p>
      {sections.map((section, index) => (
        <SexualDisorderSection
          key={index}
          title={section.title}
          content={section.content}
        />
      ))}
    </div>
  );
};

export default SexualDisorderInfo;
