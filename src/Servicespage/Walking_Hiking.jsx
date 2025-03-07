import { Link } from "react-router-dom";

const Exercise = () => {
  return (
    <div className="max-w-9xl mx-auto py-10 px-4 mt-20 font-[choco]">
        <h1 className="text-center text-6xl font-[belli] p-5 ">Walking and Hiking</h1>
      <p className="text-lg text-gray-700 leading-7 mb-6">
        Going through infertility can be tough. You try to conceive time and again and fail to get any result. It is always advised that if you fail to get pregnant, under normal conditions, even after 18 months, you should consult an infertility doctor immediately. There are many reasons for which you may fail to get pregnant. Both male and the female involved in the relationship should undergo a checkup to see whether there are some grave reasons behind yours not being able to conceive a child. Fertility clinics like ARC Fertility are dedicated to provide the best possible care for infertility treatment. You can consult many various experienced doctors at ARC to have your condition checked.
      </p>
      <p className="text-lg text-gray-700 leading-7 mb-6">
        However, before going into any serious treatment, you can try some casual remedies to infertility like walking, jogging or hiking. It may come as a surprise, but these cardio workouts do help in getting pregnant and it is helpful for both the male and the female partner.
      </p>
      <ul className="list-decimal list-inside text-lg text-gray-700 mb-6 space-y-4">
        <li>
          <span className="font-semibold text-pink-400">Moderate exercises helps everyone</span>
          <p>
            Moderate exercises and physical activities like walking, hiking, and slow jogging can help get you pregnant. This act by boosting the blood flow to the reproductive glands, making them replenish with pure oxygenated blood and improving their function. Moreover, moderate exercises always act as a stress reliever. By acting as a stress reliever they help to reduce the cortisol level in the body, a hormone known to decrease ovulation in females. These exercises may even improve female fertility if the patient is struggling to conceive due to polycystic ovarian syndrome (<Link className="text-blue-600" to="/pcos">PCOS</Link>).
          </p>
        </li>
        <li>
          <span className="font-semibold text-pink-400">Never overdo your exercise or cardio</span>
          <p>
            There is a reason that doctors advise walking, hiking or slow jogging, as these are mild and moderate exercises. When you run, sprint or do heavy cardio exercises like, cycling, treadmill, cross-training, etc. you overwork your body. Overdoing cardio exercises or any such exercises will magnanimously increase the stress level in your body. Stress results in the production of cortisol hormone in large amounts. Cortisol is responsible for the decrease of the monthly surge of luteinizing hormone (LH), which triggers ovulation. Thus, ovulation will decrease with an increase in cortisol. Moreover, a high cortisol level means a low progesterone level, which ultimately will lead to a <Link className="text-blue-600" to="/miscarriage">miscarriage</Link>.
          </p>
        </li>
        <li>
          <span className="font-semibold text-pink-400">A boost in testosterone for men</span>
          <p>
            Walking and hiking can also do wonder for the male partner. Physical activities are a good form of testosterone boosters. It also enhances libido. With a good blood flow into the male reproductive organs, it promotes a healthy production of semen. Walking and hiking are also good for maintaining a healthy weight, as weight loss often promotes a good erectile function.
          </p>
        </li>
      </ul>
      <h2 className="text-2xl font-bold text-pink-400 mb-4">Why choose ARC Fertility?</h2>
      <p className="text-lg text-gray-700 leading-7">
        <Link to="/arc" className="text-blue-600">ARC</Link> Fertility is a top-class fertility clinic in India. It is equipped with all the latest technologies that will help them to take the best care of its patients. The doctors are experienced in this field and they will be able to guide you through the treatment process, providing promising results while doing it.
      </p>
    </div>
  );
};

export default Exercise;
