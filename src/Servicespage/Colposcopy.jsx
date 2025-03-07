import { motion } from 'framer-motion';

const Colposcopy = () => {
  return (
    <div className="mt-30 font-[choco]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p>
          There are many couples in the country that face problems related to infertility but most of them are hesitant to discuss this problem clearly with their doctors.
          This is one of the main reasons why the rate of people feeling difficulty with such problems is increasing considerably. One such problem is sexual diseases
          arising near genitals which can be really painful. If lately, you have started noticing an abnormal growth on your cervix, vulva, or vagina then you surely need
          to consult a doctor. If you start experiencing bleeding after every intercourse and also your Pap smear results are abnormal then your doctors usually ask you
          for a colposcopy test. Whether you have developed abnormal cervical cells, precancer, cancer of the cervix, cancer of the vulva, or cancer of the vagina every
          such problem can be diagnosed with the help of colposcopy. This process involves a metal tool being inserted into your body through your genitals so make sure
          to approach a renowned hospital only. ARC has all relevant, safe, and modern-day tools that allow your treatment to be completed with ease.
        </p>

        <h2 className="text-pink-600 font-bold text-xl mt-6">How is it performed?</h2>
        <p>
          Many people fear this test as they consider it to be a painful process because a tool is inserted into your body through your genitals. But it is not the case.
          It is a relatively pain-free process. In this process, you need to lie back on a table with your legs a bit upwards. The doctor then positions a colposcope a few
          inches away from your genitals and then places a speculum in your vagina. The speculum is placed in the vagina so that the walls of the vagina are wide open and
          the doctor can have a clear look at your cervix. If they notice any abnormal cells blocking the way, then the doctors clean the area with a vinegar solution.
          After that, the doctor has a clear look through a colposcope and if they find any abnormal cells then they take a patch of the area and send it to the laboratory
          for testing. The entire process takes around 15-20 minutes.
        </p>

        <h2 className="text-pink-600 font-bold text-xl mt-6">How to prepare for the test?</h2>
        <p>
          Patients usually fear Colposcopy test as a speculum is inserted into the body through genitals. If you are going to have this test in few days and are feeling
          skeptic about it then have a word with your doctor. He will make you understand the entire process so that you feel comfortable throughout the entire test. You
          might be suggested a mild pain killer before the test. Just be sure that you are not having your menstruation during that day. If it is expected to be on the
          same day then re-schedule your test.
        </p>

        <h2 className="text-pink-600 font-bold text-xl mt-6">Why choose ARC?</h2>
        <p>
          ARC is not only well equipped with a pool of talented professionals but also has all relevant modern day tool and equipment that may be required for conducting any
          test or carrying out some successful surgeries. The operators of colposcope are years old industry experts so you need not worry when undergoing this test at ARC.
          Several successful tests have been conducted at ARC and all its patients always have a sense of content when being treated at ARC.
        </p>
      </motion.div>
    </div>
  );
};

export default Colposcopy;
