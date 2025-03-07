import { motion } from "framer-motion";

const Section5 = () => {
  return (
    <motion.div
      className="mt-30 font-[choco]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <p>
        There are many couples who have been complaining lately about being infected with a disease after having an intercourse. The disease obviously develops after few days of having unprotected sex. But the main problem associated with these diseases is that you cannot find out easily whether the disease is developed due to unprotected intercourse or some other health conditions. There are many cases where there are no apparent symptoms of sex related diseases or diseases that have been transmitted due to sexual activities. There are various diseases that can target you and you won’t be able to address them timely due to lack of knowledge. ARC helps all individuals who feel skeptic about their sexual life by giving right consultation and making them aware of the symptoms and causes of the same. They help to identify possible threats and start treatments accordingly for more effective results.
      </p>
      <p>
        There are some of the most common sex related diseases that have been apparent in numerous cases
      </p>
      <h2 className="text-[#eb5775] font-bold text-[25px] mt-5">Chlamydia</h2>
      <p>
        This is the most sexually transmitted disease that affects both the partner. A number of affected patients don’t have an apparent symptom for years but still, continue to be affected by the disease. But the best part is, the disease is easily curable. Abnormal vaginal discharge, vaginal bleeding, discharges from the tip of the penis, and feeling of pain during sexual activities is usually characterized by Chlamydia. This disease can considerably stimulate other infertility problems in your body if you don’t get it treated timely.
      </p>
      <h2 className="text-[#eb5775] font-bold text-[25px] mt-5">Gonorrhoea</h2>
      <p>
        This disease is usually caught alongside other sexually transmitted diseases like Chlamydia and possesses the same irregular discharge problems. Painful urination, irregular discharges, and uneasiness are some of the common problems associated with this disease and it is caused by bacteria that need to be within your body to survive. If the bacteria are not treated timely, then it may spread across your entire body and also affect your muscles and joints.
      </p>
      <h2 className="text-[#eb5775] font-bold text-[25px] mt-5">Genital Herpes</h2>
      <p>
        There are over 80% of infected people, who don’t even know that they a virus within their body and it is the main causative agent of Genital Herpes. During sexual intercourse, there are high chances that this virus can be transmitted from one partner’s body to another and cause soreness and painful blisters around the genitals.
      </p>
      <h2 className="text-[#eb5775] font-bold text-[25px] mt-5">HIV</h2>
      <p>
        HIV or Human Immunodeficiency virus is also a common disease that can be spread through sexual activities. In this disease, the virus attacks the immune system and if not treated early can also lead to the death of a partner in some cases.
      </p>
      <h2 className="text-[#eb5775] font-bold text-[25px] mt-5">Why choose ARC?</h2>
      <p>
        The professionals working at <span className="text-[#4e92eb]">ARC</span> have extensive years of experience and are experts in the relevant field. They have treated several patients who were infected with sexual diseases and today all of them are leading a healthy life. Treating these diseases can only be possible if the doctor has impeccable knowledge of all the possible diseases that can be transmitted through intercourse or any other sexual activity and ways to deal with it. All the doctors at <span className="text-[#4e92eb]">ARC</span> are well-known to have carried out several successful treatments so one can easily approach <span className="text-[#4e92eb]">ARC</span> without any hesitation.
      </p>
    </motion.div>
  );
};

export default Section5;
