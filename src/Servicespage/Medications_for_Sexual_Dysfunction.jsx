import { motion } from "framer-motion";

const ErectileDysfunction = () => {
  return (
    <div className="mt-30 font-[choco] p-5">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <p>First and foremost, know that erectile dysfunction is very common. Even though it becomes prominent with age, but young generation also suffers from this condition and there is nothing to worry or be sad about. The medicine world has come a long way and there are treatments for almost anything. A little consultation with your doctor will provide you with the knowledge of the medications that will be ideal to treat your erectile dysfunction. Doctors at ARC are experienced in treating numerous patients with sexual dysfunction and you will get the best possible treatment here.</p>

        <p>Medications will depend on the cause and the severity of the erectile dysfunction. The erectile dysfunction can also be a result of an underlying health condition. According to that the doctor will employ the needed treatment or medication.</p>

        <h2 className="text-red-500 text-xl font-bold mt-4">Oral Medications</h2>
        <ul>
          <li>✔ Sildenafil (Viagra)</li>
          <li>✔ Tadalafil (Adcirca, Cialis)</li>
          <li>✔ Vardenafil (Levitra, Staxyn)</li>
          <li>✔ Avanafil (Stendra)</li>
        </ul>

        <p>These four medications enhance the effects of nitric oxide, which is a chemical that your body produces to relax the muscles of the penis. This ultimately increases the blood flow into your penis, which promotes an erection in response to sexual stimulation. Note that taking one of these tablets will not cause an erection. A sexual stimulation is needed for the release of the nitric oxide from the penile nerves. What these medications do is they enhance that signal, resulting in an erection.</p>

        <h2 className="text-red-500 text-xl font-bold mt-4">Other Medications</h2>
        <ul>
          <li>✔ Alprostadil self-injection: in this method, you inject alprostadil (Caverject Impulse, Edex) with the help of a fine needle into the base or side of your penis. The dose is measured in such a way that the erection lasts for an hour.</li>
          <li>✔ Alprostadil urethral suppository: This therapy will place a tiny alprostadil suppository inside penis in the penile urethra. The suppository can be inserted by using a special applicator. The erection will start within 10 minutes and will last between 30 to 60 minutes.</li>
        </ul>

        <p>Apart from these medications there are penis pumps that work for hardening and promoting the nerves of your penis. If all these fails then a penis implant is the only way to treat erectile dysfunction. However, it is a rare phenomenon.</p>

        <h2 className="text-red-500 text-xl font-bold mt-4">Why Choose ARC Fertility?</h2>
        <p>AT <span className="text-blue-500">ARC Fertility</span> the doctors are experienced in treating various kinds of sexual problems. The erectile dysfunction is one of the most common sexual problems that they come across and over the years they have provided successful treatment to the patients.</p>
      </motion.div>
    </div>
  );
};

export default ErectileDysfunction;
