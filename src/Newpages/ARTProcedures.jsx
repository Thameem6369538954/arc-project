import React from 'react';

const ARTProcedures = () => {
  const procedures = [
    {
      title: 'Oocyte Retrieval',
      description: 'A key step in IVF, where mature eggs are collected from the ovaries using ultrasound-guided aspiration. This procedure is minimally invasive and performed under sedation.',
      indications: 'Part of IVF to collect mature eggs for fertilization.',
      complications: 'Risk of ovarian hyperstimulation or minor bleeding.',
      steps: ['Performed under sedation or anesthesia.', 'A needle guided by ultrasound is used to retrieve eggs from the ovaries.']
    },
    {
      title: 'TESA/PESA',
      description: 'Procedures to extract sperm directly from the testicles or epididymis for men with azoospermia.',
      indications: 'Azoospermia (absence of sperm in ejaculate).',
      complications: 'Bruising, infection, or temporary discomfort.',
      steps: ['TESA: A needle is inserted into the testicle to extract sperm.', 'PESA: Sperm is aspirated from the epididymis.']
    },
    {
      title: 'Micro TESE',
      description: 'High-precision surgical technique to extract sperm from testicles for men with severe infertility.',
      indications: 'Severe male infertility with minimal sperm production.',
      complications: 'Pain, infection, or scarring.',
      steps: ['Performed under anesthesia.', 'A high-powered microscope is used to locate and extract sperm from testicular tissue.']
    },
    {
      title: 'Embryo Transfer',
      description: 'Placing fertilized embryos into the uterus, aiming to achieve pregnancy.',
      indications: 'Final step of IVF to implant embryos into the uterus.',
      complications: 'Rare cramping or spotting.',
      steps: ['A catheter is used to place embryos into the uterus under ultrasound guidance.', 'The process is painless and takes a few minutes.']
    },
    {
      title: 'Embryo Freezing',
      description: 'Cryopreserving excess embryos from an IVF cycle for future use.',
      indications: 'Preserve embryos for future use.',
      complications: 'Rare risk of damage during freezing or thawing.',
      steps: ['Fertilized embryos are frozen using cryopreservation techniques.', 'Stored in liquid nitrogen for later use.']
    },
    {
      title: 'Semen Freezing',
      description: 'Preserving sperm for future use, especially before medical treatments.',
      indications: 'Fertility preservation before medical treatments or delayed parenthood.',
      complications: 'Minimal risk of contamination during storage.',
      steps: ['Semen is collected and analyzed.', 'Frozen in liquid nitrogen for future use.']
    },
    {
      title: 'Oocyte Freezing',
      description: 'Egg freezing to preserve fertility for women planning future pregnancies.',
      indications: 'Fertility preservation for women planning delayed pregnancies.',
      complications: 'Rare risks include ovarian hyperstimulation during egg collection.',
      steps: ['Eggs are retrieved and cryopreserved using vitrification techniques.', 'They can be thawed and used for IVF in the future.']
    }
  ];

  return (
    <div className="px-10 py-10 mt-40 font-[choco]">
      {procedures.map((procedure, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-bold text-pink-600 mb-2">{procedure.title}</h2>
          <p className="mb-4 text-gray-700">{procedure.description}</p>
          <p><span className="font-semibold">Indications:</span> {procedure.indications}</p>
          <p><span className="font-semibold">Complications:</span> {procedure.complications}</p>
          <ul className="list-disc ml-6 mt-2">
            {procedure.steps.map((step, i) => (
              <li key={i} className="text-gray-600">{step}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ARTProcedures;
