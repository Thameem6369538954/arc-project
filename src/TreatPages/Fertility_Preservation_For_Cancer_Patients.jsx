export default function FertilityPreservation() {
    return (
      <div className="w-full min-h-screen bg-white text-gray-700">
        {/* Header Section */}
        <div className="w-full h-[300px] bg-pink-400 bg-cover bg-center flex items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold drop-shadow-lg">Fertility Preservation for Cancer Patients</h1>
        </div>
  
        {/* Content Section */}
        <div className="container mx-auto p-6">
          <p className="text-lg mb-6">
            Cancer is a life-threatening group of diseases which involves the abnormal growth of cells that can spread to other parts of the body. Cancer treatment often leads to infertility. Thus, fertility preservation has become very important in cancer survivors to improve their quality of life.
          </p>
  
          <h2 className="text-2xl font-semibold mb-4">Fertility Preservation for Female Cancer Patients</h2>
          <ul className="list-none space-y-4">
            {[
              "Embryo Cryopreservation: embryo cryopreservation is an established procedure that provides a good success rate.",
              "Mature Oocyte Cryopreservation: when the woman is unmarried or does not have a partner, they can choose the option of oocyte cryopreservation.",
              "Ovarian Tissue Cryopreservation: prior to ovarian failure due to laparoscopy or laparotomy, ovarian cortical tissue is retrieved.",
              "In Vitro Maturation: the process involves the aspiration of immature oocyte after minimal or no ovarian stimulation.",
              "Ovarian Transposition: in this process, the ovaries are moved from the field of radiation.",
              "Gonadal Shielding: in girls who have not attained puberty, gonadal shielding with lead shields is done.",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-red-500 text-xl">✔️</span>
                {item}
              </li>
            ))}
          </ul>
  
          <h2 className="text-2xl font-semibold mt-8 mb-4">Fertility Preservation for Male Cancer Patients</h2>
          <ul className="list-none space-y-4">
            {[
              "Sperm Cryopreservation: firstly, semen sample is collected through masturbation prior to cancer treatment.",
              "Gonadal Shielding: during radiation therapy, the gonads are shielded by lead plates.",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-blue-500 text-xl">✔️</span>
                {item}
              </li>
            ))}
          </ul>
  
          <h2 className="text-2xl font-semibold mt-8 mb-4">Reasons for Choosing ARC</h2>
          <ul className="list-none space-y-4">
            {[
              "ARC has been providing advanced health care treatment for over a decade.",
              "We have cutting edge infrastructure and best laboratories for IVF.",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-green-500 text-xl">🌟</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  