import { motion } from 'framer-motion';

const contentData = [
  {
    title: 'What are the benefits associated with massage therapy?',
    image: 'benefits.jpg', // Replace with your image path
    alt: 'Massage Therapy Benefits',
    p:"If you take fertility massage therapy on a daily basis then your reproductive system is sure to benefit from this therapy. The massage therapy not only helps in repositioning a tilted uterus but also promotes hormonal balance. This contributes a lot to the positive working of the reproductive system and your chances of being pregnant increases by a considerable rate. Therapeutic activities also increase circulation to the uterus and cervix, alongside improving endocrine system communication. So it won’t be incorrect to say that massage therapy has the capacity to overcome a number of factors responsible for infertility in a woman. The best part about this therapy is that it does not involve any medication. Massaging the right way can alone solve many of your problems like Blocked Fallopian tubes, endometriosis, PCOs, and even unexplained infertility problems."
  },
  {
    title: 'Who should consider this treatment?',
    image: 'consider.jpg', // Replace with your image path
    alt: 'Who Should Consider Massage Therapy',
    p:"If you are facing problems relating to stress derived from infertility, ovarian cyst, PCOs, High FSH levels, Poor egg health, uterine fibroids, scar tissues or lack of menstruation then you should approach for a massage therapy. This therapy aims to reduce all such problems and help conceive a woman naturally. This therapy is also effective in case of anovulation, hormonal imbalances, blood clots during menstruation, and also constipation as well. This therapy improves your egg quality which facilitates fertilization process and also improves circulation throughout the female body. It can be considered as one of the best treatments available for dealing with infertility problems.",
  },
  {
    title: 'Why choose ARC?',
    image: 'why-choose.jpg', // Replace with your image path
    alt: 'Why Choose ARC',
    p:"If you are facing problems relating to stress derived from infertility, ovarian cyst, PCOs, High FSH levels, Poor egg health, uterine fibroids, scar tissues or lack of menstruation then you should approach for a massage therapy. This therapy aims to reduce all such problems and help conceive a woman naturally. This therapy is also effective in case of anovulation, hormonal imbalances, blood clots during menstruation, and also constipation as well. This therapy improves your egg quality which facilitates fertilization process and also improves circulation throughout the female body. It can be considered as one of the best treatments available for dealing with infertility problems.",
  }
];

export default function MassageTherapyComponent() {
  return (
    <div className=' mt-36 font-[choco]'>
            <h1 className='font-[belli] text-6xl text-center'>Massage Therapy</h1>
            <div className="grid md:grid-cols-1 gap-6 p-6">

{contentData.map((item, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.3 }}
    className="rounded-2xl overflow-hidden shadow-lg bg-white"
  >
    {/* <img src={item.image} alt={item.alt} className="w-full h-48 object-cover" /> */}
    <div className="p-4 ">
      <h2 className="text-xl text-pink-400 p-5 font-bold  text-center">{item.title}</h2>
      <p className="text-md  text-center">{item.p}</p>
    </div>
  </motion.div>
))}
</div>
    </div>
   
  );
}
