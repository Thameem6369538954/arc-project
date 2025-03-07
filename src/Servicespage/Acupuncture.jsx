import React from "react";
import { Link } from "react-router-dom";

const AcupuncturePage = () => {
  return (
    <div className="container mx-auto p-6 mt-30 font-[choco]">
      <h1 className="text-3xl font-bold text-center mb-6">
        How does acupuncture work?
      </h1>
      <p className="text-gray-700 mb-6">
        Today's sedentary lifestyle has resulted in a number of cases where couples are finding it difficult to conceive even after trying for long. Stress, medical conditions, abuse of illicit drugs, and many other factors are responsible for infertility. The causes are different for various cases and need to be treated accordingly. Acupuncture is considered as one of the best and most effective infertility treatments that increase the blood flow to reproductive organs and also helps in maintaining the balance of the endocrine system. This way it helps in overcoming infertility problems effectively. ARC aims to help couples facing problems while conceiving and increase their chances of conception with effective treatments carried out by them.
      </p>

      <h2 className="text-2xl font-bold text-pink-400 mb-4">
        How does acupuncture work?
      </h2>
      <p className="text-gray-700 mb-6">
        Acupuncture is a treatment that is being used since ancient times and is looked after as a pain-free treatment for dealing with infertility problems. Many acupuncturists said that almost every patient approaches for acupuncture treatment after trying all other possible alternatives. The treatment involves the use of hair-fine needles that are positioned across meridians of the body relating to body organs. These pressure points stimulate the flow of energy to the brain through the set meridian pathway. As a result of this stimulation, the brain releases pain-relieving hormones and also helps in calming neurotransmitters. Acupuncture therapy when combined with herbal medicines gives wonderful results in overcoming all infertility problems. The reason why acupuncture is preferred by many is that this treatment leaves the patient with no side-effects and is also effective at the same time.
      </p>

      <h3 className="text-xl font-semibold mb-4">
        What is the correct timing for acupuncture treatment?
      </h3>
      <p className="text-gray-700 mb-6">
        The process-oriented acupuncture therapy is somewhat similar to physical therapies. The more it is used; the higher are the chances of curing infertility. If patients are considering for an acupuncture treatment, then they should start early. Patients are required to be treated at least 3 to 4 months before starting of the In Vitro Fertilization process. Maintaining this pace is sure to leave a therapeutic effect on the patient. Usually, acupuncture is applied with a combination of herbal medicines which enhances the effectiveness of the entire treatment.
      </p>

      <h2 className="text-2xl font-bold text-pink-400 mb-4">Why choose ARC?</h2>
      <p className="text-gray-700 mb-6">
        Acupuncture is a treatment that cannot be carried out by every individual. You need to have professionals who are veterans in the relevant field and can carry out the therapy in a safe and effective manner. ARC has a pool of talented doctors belonging to different medical disciples and is certified to carry out such treatments. They have carried out several successful treatments and helped couples in conceiving. Acupuncture therapy involves the application of a hair-fine needle and these needles should be of top-quality and safe for use. If not carried out properly the results might be disastrous. Hence, it is always better to take the help of a veteran having extensive years of experience. That way there will be high chances of achieving the desired results alongside being sure of one's safety. Patients' security and safety are given high preference at ARC and this is one of the main reasons the hospital has emerged as an elite infertility hospital in India.
      </p>

      <p className="text-center mt-6">
        For more information, visit <Link to="/contact" className="text-blue-500 hover:underline">ARC</Link>.
      </p>
    </div>
  );
};

export default AcupuncturePage;