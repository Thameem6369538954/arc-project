import React from 'react';

const Obstetrics = () => {
  return (
    <div className="container mx-auto py-10 px-4 mt-40 font-[choco]">
      <h2 className="text-3xl font-bold text-center font-[belli] text-black mb-6"> Obstetrics</h2>

      {/* LSCS Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-pink-600">a. LSCS (Lower Segment Caesarean Section)</h3>
        <p className="mt-2 text-gray-700">
          Commonly known as a C-section, this surgical procedure delivers a baby through an incision in the lower abdomen and uterus. It is performed when vaginal delivery poses risks to the mother or baby.
        </p>
        <h4 className="mt-4 font-semibold text-pink-400 ">Indications:</h4>
        <ul className="list-disc ml-5 text-gray-700">
          <li>Complicated pregnancies</li>
          <li>Fetal distress</li>
          <li>Failure to progress in labor</li>
        </ul>
        <h4 className="mt-4 font-semibold text-pink-400 ">Complications:</h4>
        <ul className="list-disc ml-5 text-gray-700">
          <li>Infection</li>
          <li>Bleeding</li>
          <li>Longer recovery time compared to vaginal delivery</li>
        </ul>
        <h4 className="mt-4 font-semibold text-pink-400 ">Procedure (Steps):</h4>
        <ol className="list-decimal ml-5 text-gray-700">
          <li>Performed under anesthesia.</li>
          <li>An incision is made in the lower abdomen and uterus.</li>
          <li>The baby is delivered through the incision, followed by the placenta.</li>
        </ol>
      </div>

      {/* Cervical Cerclage Section */}
      <div>
        <h3 className="text-2xl font-bold text-pink-600">b. Cervical Cerclage</h3>
        <p className="mt-2 text-gray-700">
          This procedure involves placing a stitch around the cervix to prevent premature opening during pregnancy. It’s typically recommended for women with a history of cervical insufficiency or recurrent pregnancy loss.
        </p>
        <h4 className="mt-4 font-semibold text-pink-400 ">Indications:</h4>
        <ul className="list-disc ml-5 text-gray-700">
          <li>Women with a history of cervical insufficiency</li>
          <li>Recurrent second-trimester pregnancy losses</li>
          <li>Short cervix detected via ultrasound during pregnancy</li>
          <li>Previous preterm birth due to cervical incompetence</li>
        </ul>
        <h4 className="mt-4 font-semibold text-pink-400 ">Complications:</h4>
        <ul className="list-disc ml-5 text-gray-700">
          <li>Infection at the surgical site or within the uterus</li>
          <li>Vaginal bleeding or spotting</li>
          <li>Premature rupture of membranes</li>
        </ul>
      </div>
    </div>
  );
};

export default Obstetrics;
