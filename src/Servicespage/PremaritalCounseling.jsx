import { motion } from 'framer-motion';
import EX from "../Images/BlogFertilityPreservation.jpeg"; // Replace with your local image path if needed

const content = [
  {
    title: 'Appropriate Communication',
    text: `When communication between spouses decline, often it is challenging to streamline towards proper conduct. This behavior also includes the tone of conveyance. During this period, what happens is that what is said doesn't matter, how it is said becomes more important. By and large, such type of negative communication turns to heart breaking feelings that may be in the form of emotional abuse and physical abuse or nonverbal gestural abuse. ARC has qualified psychologist taking part in premarital counseling to make you understand clear and unbiased communication.`
  },
  {
    title: 'Married couples are unlike roommates',
    text: `Sometimes it happens that couples behave like roommates though they are performing almost all work of the family together. Then obviously there is a lack of behavioral attitude, improper communication and also non-existence of husband-wife intimacy. The couple starts to feel that, they are not important to each other rather they are just co-existing. So, this situation is a clear instance where a professional assistance is needed to find out the missing links between the spouses and how that can be repaired.`
  },
  {
    title: 'Infertility',
    text: `Every new couple before marriage has a common perception that they are competent enough to have a biological baby. But the things turn worse when conception becomes troublesome. It creates a lot of problems particularly to a woman in the society. The couple often has to face emotional, physical, oral, mental, spiritual and social turmoil. Sometimes, the situation does not permit to reinstate the marriage and ultimately divorce becomes the only option.`
  },
  {
    title: 'Why Choose ARC?',
    text: `ARC believes that divorce is not the option of married life unless it becomes inevitable. ARC also believes that divorce is not a mere death of a dream; it also steals the right of husband from a wife and vice versa. ARC's professional marriage counselors are ready to support you in all possible ways for a smooth journey to achieve your dream at its pre-marital counseling session.`
  }
];

export default function PremaritalCounseling() {
  return (
    <div className="p-10 mt-20 font-[choco]">
        <div className="w-full h-[500px] relative">
                          <img
                            src={EX}
                            alt="Exercise in Moderation"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30 bg-opacity-40 flex items-center justify-center"></div>
                        </div>
        <div>
                  <h1 className="text-3xl font-bold text-center mb-6 text-pink-400 p-5" >
                  Premarital Counseling
                  </h1>
            <p>Marriage is a platonic conception pursued through long-standing undertaking made between two singles. So it is a social congregation to give a momentum to accelerate the journey of a newly married couple to reach the destiny with a spirit of miles to go before they sleep. Marriage is a union of relationship, living wills, decision making in all sphere of activities of life. New couples, mostly think with an emotional assumption that they can conceive a baby. In reality, many of them fall in heartbreaking turmoil when conception becomes problematic. ARC is here with the qualified marriage counselors to give you pre marital counseling support. The necessities of premarital counseling are discussed below.</p>
        </div>

      {content.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-pink-600 mb-3">{section.title}</h2>
          <p className="text-gray-700 leading-relaxed">{section.text}</p>
        </motion.div>
      ))}
    </div>
  );
}
