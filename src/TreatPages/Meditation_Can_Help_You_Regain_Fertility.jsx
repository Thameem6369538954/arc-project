import { FaHeart, FaBalanceScale, FaAppleAlt } from 'react-icons/fa';
import Kid from "../Images/Kid.jpg"

const Meditation_Can_Help_You_Regain_Fertility = () => {
  return (
    <div className=''>
         <div className=''>
        <img src={Kid}  className="p-4 rounded-xl " alt="" />
        </div>
    <div className="container mx-auto p-6 font-[choco]">
       
      <div className="grid md:grid-cols-3 gap-8">
        {/* Sidebar Section */}
        <div className="bg-pink-600 text-white p-6 rounded-2xl shadow-lg min-h-[30px]">
          <h2 className="text-2xl font-bold">Our Treatments</h2>
          <p className="mt-2">Meditation Can Help You Regain Fertility</p>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2">
          <p className="text-gray-700">

          It is a known fact that sometimes conceiving a baby can be tough. Infertility is not something that you invite, but as your medical condition would have it, you may turn out to be infertile. However, as medical science is progressing day by day showing promise that has never been thought before, hope always lingers behind. As more and more treatments for infertility is making its way, it must be kept in mind what place you should choose to get your treatment. ARC Fertility is one such infertility treatment facility that has dedicated itself to bring the best possible care to its patients.
<br></br>
<br></br>
Apart from the common treatment procedures, there are some physical activities that you can do yourself to improve your fertility. One such thing is meditation. Meditation, believe or not, actually helps in boosting your fertility. As a person who is trying to get pregnant, you must know that a balanced endocrine system is the primary prerequisite to successfully get pregnant and maintain a healthy pregnancy term. Meditation counters most of the negative effects of stress and helps to balance the hormones of the endocrine system in three key ways:
          </p>
          <div className="mt-6 space-y-6">
            <div className="flex items-start gap-4">
              <FaHeart className="text-pink-600 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold text-pink-600">It reduces Cortisol Levels</h3>
                <p className="text-gray-600">The hormone cortisol is stimulated mainly by stress. Cortisol is your body’s main fight-or-flight hormone and the presence of this hormone, more than the required amount, can create problems for the endocrine system. Cortisol is responsible for the decrease of the monthly surge of luteinizing hormone (LH), which triggers ovulation. Cortisol, however, increases prolactin levels, which is the hormone that prevents ovulation during breastfeeding. Meditation has shown remarkable results in reducing the cortisol level and has also shown to restore ovulation in 75-80% of the women experiencing functional hypothalamic amenorrhea.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaAppleAlt className="text-pink-600 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold text-pink-600">It reduces Insulin Resistance</h3>
                <p className="text-gray-600">Insulin resistance can impair ovulation and it is also responsible for polycystic ovarian syndrome (PCOS). PCOS makes up to almost 35% of the female infertility cases. Transcendental meditation has shown to work on reducing insulin resistance in its practitioners. Mediation works by affecting cortisol’s negative influence on glucose uptake during times of stress.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaBalanceScale className="text-pink-600 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold text-pink-600">It Improves Sex Hormone Balance</h3>
                <p className="text-gray-600">Cortisol is made from the same precursor as the progesterone. Progesterone is one of the major female reproductive hormones. When we are under stress our body has trouble producing the cortisol in demand. To make up, it steals this hormone from the amount stored for the progesterone production. Thus, as a result, your body ends up with high cortisol level and a low progesterone level. Low progesterone prevents an embryo from properly implanting in the uterine lining, resulting in early miscarriage. Meditation helps to reign in the stress and reduces the cortisol level, improving the progesterone production.</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-bold text-pink-600">Why Choose ARC Fertility?</h3>
            <p className="text-gray-700 mt-2">ARC Fertility is one of the premier infertility treatment facilities in India. The clinic is equipped with all the latest technologies, to provide its patients with the care and attention that they truly deserve. ARC’s doctors are well versed on infertility treatment and you will get a thorough treatment, complete with guidance and suggestions related to your medical conditions.</p>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Meditation_Can_Help_You_Regain_Fertility;