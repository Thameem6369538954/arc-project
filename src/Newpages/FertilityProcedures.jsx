import React from 'react';

const procedures = [
  {
    title: 'Diagnostic Hysterolaparoscopy',
    description: `This minimally invasive procedure allows a detailed examination of the uterus, fallopian tubes, and ovaries. It combines hysteroscopy and laparoscopy to identify structural abnormalities, adhesions, or blockages that may contribute to infertility.`,
    indications: ['Unexplained infertility.', 'Suspected endometriosis, pelvic adhesions, or uterine abnormalities.'],
    complications: ['Bleeding, infection, or injury to pelvic organs.', 'Temporary shoulder pain due to gas used during the procedure.'],
    steps: ['Performed under general anesthesia.', 'A small incision is made near the navel to insert a laparoscope.', 'Another small incision is made for surgical instruments if needed.', 'Dye is injected through the cervix to check for tubal blockages.', 'A hysteroscope is used to inspect the uterine cavity.']
  },
  {
    title: 'Hysteroscopic Septal Resection',
    description: `This procedure corrects a uterine septum, a congenital malformation that can lead to recurrent miscarriages.`,
    indications: ['Recurrent miscarriages or infertility due to uterine septum.'],
    complications: ['Uterine perforation, infection, or bleeding.'],
    steps: ['Under general or local anesthesia.', 'A hysteroscope is inserted through the vagina.', 'A specialized instrument is used to cut and remove the septum.', 'Post-procedure care includes antibiotics and hormonal therapy.']
  },
  {
    title: 'Laparoscopic Myomectomy',
    description: `Involves the removal of fibroids from the uterus while preserving fertility.`,
    indications: ['Large fibroids causing infertility, heavy bleeding, or pain.'],
    complications: ['Risk of uterine scarring, bleeding, or infection.'],
    steps: ['Performed under general anesthesia.', 'Small abdominal incisions are made.', 'Fibroids are removed, and the uterus is sutured.', 'Patients can resume normal activities within two weeks.']
  },
  {
    title: 'Laparoscopic Cystectomy',
    description: `Removes ovarian cysts while preserving healthy ovarian tissue.`,
    indications: ['Ovarian cysts causing pain or infertility.'],
    complications: ['Bleeding, infection, or ovarian damage.'],
    steps: ['Performed under general anesthesia.', 'Small abdominal incisions are made.', 'The cyst is removed while preserving healthy tissue.']
  },
  {
    title: 'Laparoscopic Tubal Recanalisation',
    description: `Reopens blocked fallopian tubes, enabling natural conception.`,
    indications: ['Blocked fallopian tubes preventing natural conception.'],
    complications: ['Risk of ectopic pregnancy or tubal re-scarring.'],
    steps: ['A laparoscope is used to locate and clear the blockage.', 'Specialized tools reopen the tubes.']
  },
  {
    title: 'Laparoscopic Tubal Recanulation',
    description: `Clears blockages in specific segments of the fallopian tube.`,
    indications: ['Blockages in specific segments of the fallopian tube.'],
    complications: ['Risk of infection or tubal damage.'],
    steps: ['A catheter is inserted through the laparoscope.', 'The blocked segment is opened with precision instruments.']
  },
  {
    title: 'Laparoscopic Salpingectomy',
    description: `Removes a damaged or diseased fallopian tube to improve IVF success rates.`,
    indications: ['Ectopic pregnancy or severe tubal damage.'],
    complications: ['Bleeding, infection, or risk to surrounding organs.'],
    steps: ['Performed under general anesthesia.', 'The affected tube is identified and removed.']
  },
  {
    title: 'Laparoscopic Salpingostomy',
    description: `Creates an opening in a blocked fallopian tube to restore fertility.`,
    indications: ['Mild hydrosalpinx or distal tubal blockages.'],
    complications: ['Risk of infection or recurrent blockage.'],
    steps: ['A laparoscope is used to access the blocked tube.', 'An incision creates a new opening at the distal end.']
  },
  {
    title: 'Laparoscopic Adhesiolysis',
    description: `Breaks down pelvic adhesions (scar tissue) that can cause pain and infertility.`,
    indications: ['Pelvic pain or infertility due to adhesions from previous surgeries or infections.'],
    complications: ['Bleeding, infection, or recurrence of adhesions.'],
    steps: ['A laparoscope is used to visualize the adhesions.', 'Special instruments are used to cut and remove scar tissue.']
  },
  {
    title: 'Laparoscopic Endometriosis Treatment',
    description: `Removes or destroys endometrial tissue growing outside the uterus, improving fertility and reducing pain.`,
    indications: ['Infertility or pelvic pain due to endometriosis.'],
    complications: ['Bleeding, infection, or recurrence of endometriosis.'],
    steps: ['Endometriotic implants are visualized and removed or destroyed using specialized instruments.']
  }
];

const FertilityProcedures = () => {
  return (
    <div className="p-6 mt-40 w-full bg-[#fff8ef]">
      <h1 className="text-5xl font-bold text-center mb-10 font-[belli]">Fertility-Related  <span className='text-[#1c97c8]'>Laparoscopic Procedures</span></h1>
      {procedures.map((procedure, index) => (
        <div key={index} className="mb-10 p-6 bg-white rounded-lg shadow-lg font-[choco]">
          <h2 className="text-2xl font-semibold mb-4 text-pink-400" >{procedure.title}</h2>
          <p className="mb-4">{procedure.description}</p>
          <h3 className="font-semibold text-pink-400">Indications:</h3>
          <ul className="list-disc ml-6 mb-4">
            {procedure.indications.map((indication, i) => (
              <li key={i}>{indication}</li>
            ))}
          </ul>
          <h3 className="font-semibold text-pink-400">Complications:</h3>
          <ul className="list-disc ml-6 mb-4 ">
            {procedure.complications.map((complication, i) => (
              <li key={i}>{complication}</li>
            ))}
          </ul>
          <h3 className="font-semibold text-pink-400">Procedure Steps:</h3>
          <ul className="list-decimal ml-6">
            {procedure.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FertilityProcedures;
