import { motion } from "framer-motion";

const PelvicLaparoscopy = () => {
  return (
    <div className="mt-30 font-[choco]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p>
          Pelvic Laparoscopy is a treatment that is used to examine your reproductive organs. This is a less invasive treatment and involves the use of a tool called laparoscope. A laparoscope is a long, thin tube with an attached high-intensity light and high-resolution camera that is inserted through your abdomen using small cuts on your abdomen area. The patient is given anesthesia so that he doesn't feel anything and the surgery can be conducted without any hassle. This treatment is considered to be less invasive as the surgery can be performed with the help of small minimal incision also. There is no need to opt for invasive surgeries like an open surgery. The surgery is characterized by lesser recovery time, minimal blood loss, and lower post-surgical pain. Hence if your doctor has asked you to undergo a pelvic laparoscopy surgery you don't need to panic about it. The entire thing will be done safely and in a painless manner.
        </p>

        <h2 className="text-xl font-bold text-[#d13a61] mt-5">
          Why is Pelvic Laparoscopy Prescribed?
        </h2>
        <p>
          Your doctor may ask you to undergo a pelvic laparoscopy surgery after you have undergone several noninvasive treatments but still are facing the same problem. The doctor uses pelvic laparoscopy to study conditions affecting your uterus, ovaries, fallopian tubes, and other reproductive organs in your pelvic area. They may prefer pelvic laparoscopy to determine the extent of ovarian cancer or other cancer in your pelvic region, investigate reasons behind infertility, diagnose pelvic inflammatory disease, examine any abnormality related to a tissue mass, ovarian cyst, and even tumor. After finding an abnormal cell in your pelvic region, your doctor can take a biopsy of the abnormal tissue found during Pelvic Laparoscopy. The images that are shown on a monitor with the help of laparoscope help the doctor in identifying the causes of infertility and other related matters.
        </p>

        <h2 className="text-xl font-bold text-[#d13a61] mt-5">
          What Care Measures Need to be Taken Post Surgery?
        </h2>
        <p>
          After the successful surgery, you will be required to stay in the hospital till the time the effect of anesthesia has worn off and doctors have monitored your physical conditions for few days after surgery. Since you will be in the hospital for few days post surgery, the hospital will ensure that all relevant care measures are adhered to and you need to take rest until the time you start feeling normal. The doctor will check your blood pressure levels, pulse, breathing rate, and temperature for few days. If all these things are normal and your body has no adverse reaction to your physical condition then you can be discharged from the hospital.
        </p>

        <h2 className="text-xl font-bold text-[#d13a61] mt-5">
          Why Choose ARC?
        </h2>
        <p>
          Major treatments like operations or surgeries should always be done from a renowned hospital that has carried out several successful surgeries in the past. That way you will be in safe hands. <a href="#" className="text-blue-500">ARC</a> being India's one of the best infertility hospitals is famous for providing relevant and successful treatments and there are many patients who have been benefitted by the treatments of ARC at large. So can rest assured on <a href="#" className="text-blue-500">ARC</a> and give yourself the feeling of content by being with the best medical practitioners.
        </p>

        <div className="mt-5 flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/W8FAVM2mlt8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default PelvicLaparoscopy;
