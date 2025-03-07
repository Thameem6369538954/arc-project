import { motion } from "framer-motion";
import React from "react";

const SexualHygiene = () => {
  return (
    <div className="mt-30 font-[choco] p-5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p>
          You are most probably aware of the fact that sex is important. You should now get yourself acquainted with sexual hygiene as well. Sexual hygiene is as important as the sex itself. Whether you aim to maintain a normal hygiene schedule or do it before and after sex is up to you. But a regular and most importantly, a frequent maintenance of sexual hygiene is the basis of the functional and healthy sex life. And at ARC Fertility you will find several doctors who will be glad to guide you through a number of sexual hygiene procedures that you can apply to keep your genitals clean and free of impending disease or problems.
        </p>
        <p>
          There are some very easy and common ways by which you can maintain your sexual hygiene. These are some home remedies, rather steps that you must employ in order to have a healthy genitals, because remember an unhygienic genitals will invite a number of diseases including, herpes, pubic fleas and warts and blisters. So follow these steps to keep yourself as clean as it is possible.
        </p>
        <ul className="list-decimal ml-6">
          <li>
            <span className="font-bold text-red-500">Wash and dry</span>
            <p>
              This is perhaps the most important and the most advised method of sexual hygiene. Always wash your genitals while you are in the shower. Form a rich lather with your soap and wash your genitals and your pubic region properly. Then wash the soap off thoroughly with water. Once your shower is over, dry your pubic region with a towel. Make sure that it is dried properly.
            </p>
          </li>
          <li>
            <span className="font-bold text-red-500">Urinate after sex</span>
            <p>
              Whether men or women, it is advised that you urinate after sex. This helps to remove any toxins or bacteria that may have remained due to ejaculation in men and due to the semen released in women. The urine will remove all these from the urethra.
            </p>
          </li>
          <li>
            <span className="font-bold text-red-500">Clean your underwear</span>
            <p>
              After shower or washing, it is better for your sexual hygiene that you use clean and dried underwear, rather than reusing the previously worn one. Underwears are a hotbed for bacteria and germs as it sits closely to our body and collects all the sweat released form the body. So change your underwear always after a bath.
            </p>
          </li>
          <li>
            <span className="font-bold text-red-500">Check your genitals regularly</span>
            <p>
              Stand in front of a mirror and check your genitals thoroughly. You can even ask your intimate partner to check them for you. Check for any blisters, redness, warts or any unnatural phenomenon. If you notice anything unusual consult your doctor immediately.
            </p>
          </li>
          <li>
            <span className="font-bold text-red-500">Talk to your doctor</span>
            <p>
              Another good way to maintain a healthy sexual hygiene is to communicate with your doctor properly. Tell your doctor truthfully, about any unusual feeling that you may be experiencing in your genitals or something that’s been bothering you about your pubic region.
            </p>
          </li>
        </ul>
        <h2 className="text-xl font-bold mt-6 text-red-500">Why Choose ARC Fertility?</h2>
        <p>
          ARC Fertility is not just a fertility clinic. It provides all the necessary treatments and guidance regarding your overall sexual health. So when you come to ARC, the doctors will give a thorough checking of your reproductive system and will suggest you the steps that you can employ to improve your sex life and in-turn improve your chances of getting pregnant.
        </p>
      </motion.div>
    </div>
  );
};

export default SexualHygiene;
