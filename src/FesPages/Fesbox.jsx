import { useState, useEffect } from 'react'; 
import Round from "../Images/Round.png"; 
import Bank from "../SerImg/Serv/Bank.jpg";  
import ExtA from '../FecImg/ExtA.jpg'
import eggfreezing from '../FecImg/eggfreezing.jpg'
import eggbanking from '../FecImg/eggbanking.jpg'
import fertilitypreservation from '../FecImg/fertilitypreservation.jpg'
import lifestyle from '../FecImg/lifestyle.jpg'
import therapautic from '../FecImg/therapautic.jpg'
import counselling from '../FecImg/counselling.jpg'
import corporate from '../FecImg/corporate.jpg'
import Downarrow from "../Images/Downarrow.png"

const services = [
  { title: 'Emotional Considerations', content: 'Content for Emotional Considerations...', image: ExtA, list: [{ image: eggfreezing, title: 'Egg Freezing' }, { image: fertilitypreservation, title: 'Fertility Preservation ' }, { image: eggbanking, title: 'Egg Banking Calculator' }], },
  { title: 'Prenatal Counselling', content: 'Content for Prenatal Counselling...', image: lifestyle, list: [{ image: Bank, title: 'Timing & Frequency Of Intercourse' }, { image: Round, title: 'Exercise In Moderation' }, { image: Bank, title: 'Nutrition & Fertility' }, {image: Bank, title: 'BMI & Fertility' }, {image: Bank, title: 'Alcohol & Drug Use' }], },
  { title: 'Therapeutic Activity For Patients', content: 'Content for Extending the Biological Clock...', image: therapautic, list: [{ image: Round, title: 'Yoga' }, { image: Bank, title: 'Massage Therapy' }, { image: Round, title: 'Acupuncture' }, { image: Round, title: 'Medication' }, { image: Round, title: 'Fertility Preservation' }, { image: Round, title: 'Walking/Hiking' }], },
  { title: 'Counselling', content: 'Content for Stem Cell Banking...', image: counselling, list: [{ image: Bank, title: 'Emotional Considerations' }, { image: Round, title: 'Premarital Counselling' }, ], },
  { title: 'Fertility Tools', content: 'Content for Stem Cell Banking...', image: ExtA, list: [{ image: Bank, title: 'Due Date Calculator' }, { image: Round, title: 'Fertility Assessment' }, { image: Bank, title: 'Gynaecological Condition' }, { image: Bank, title: 'Monthly Ovulation Cycle' }], },
  { title: 'Corporate Social Responsibility', content: 'Content for Stem Cell Banking...', image: corporate, list: [{ image: Bank, title: 'Umbilical Cord Storage' }, { image: Round, title: 'Stem Cell Preservation' }, { image: Bank, title: 'Future Treatments' }], },
  { title: 'Sexual Dysfunction Clinic', content: 'Content for Stem Cell Banking...', image: Bank, list: [{ image: Bank, title: 'Male Sexual Dysfunctions' }, { image: Round, title: 'Female Sexual Dysfunctions' }, { image: Bank, title: 'Surgeries in Sexual Disorders' }, { image: Bank, title: '"Medications for Sexual Dysfu' }, { image: Bank, title: "Sexual Hygiene" }, { image: Bank, title: 'Erectile Dysfunctions' }, { image: Bank, title: 'Ejaculatory Failures' }, { image: Bank, title: 'Decreased Sexual Desire' }, { image: Bank, title: 'Drug-Induced Sexual Dysfunction' }, { image: Bank, title: 'Sex-Related Diseases' }], },
  { title: 'Gynaecologic Surgery', content: 'Content for Stem Cell Banking...', image: Bank, list: [{ image: Bank, title: 'Colposcopy' }, { image: Round, title: 'Cryosurgery' }, { image: Bank, title: 'Leep' }, { image: Bank, title: 'Hysteroscopy' }, { image: Bank, title: 'Pelvic laparoscopy' }, { image: Bank, title: 'Dilation and Curretage' }], },
  { title: 'Stem Cell Banking', content: 'Content for Stem Cell Banking...', image: Bank, list: [{ image: Bank, title: 'Sperm/Semen' }, { image: Round, title: 'Egg/Oocyte/Embryo' },], },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    setActiveService(services[0]);
  }, []);

  const handleServiceClick = (service) => {
    setActiveService(service);
  };

  return (
    <div className="p-4 md:p-10 mt-10 md:mt-25 w-full min-h-[100vh] bg-[#f5f4f1] ">
      {/* <h1 className="text-2xl md:text-6xl font-bold text-center font-[belli] text-pink-600">Counselling Services</h1> */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-1/2 h-[600px] md:h-[800px] overflow-y-scroll scrollbar-hide">
      <h1 className="text-2xl md:text-5xl grid place-items-center font-bold text-center font-[belli] text-pink-600 border-1  border-black rounded">Our Services
        <span ><img className='w-45 h-45' src={Downarrow}  alt="" /></span>
      </h1>
          {services.map((service, index) => (
            <div key={index} className={`p-3 cursor-pointer border rounded-lg shadow-md w-full text-center transition-transform transform hover:scale-105 ${activeService?.title === service.title ? 'bg-pink-100' : ''}`} onClick={() => handleServiceClick(service)}>
              <img src={service.image} alt={service.title} className="rounded w-full h-40 object-cover mb-2" />
              <h2 className="text-lg font-semibold">{service.title}</h2>
            </div>
          ))}
        </div>
        {activeService && (
          <div className="border rounded bg-pink-50 p-6 w-full md:w-1/2 shadow-lg">
            <img src={activeService.image} alt={activeService.title} className="rounded mb-4 w-full h-60 md:h-[400px] object-cover" />
            <h1 className="text-xl md:text-2xl font-bold text-pink-600 mb-4 font-[choco]">{activeService.title}</h1>
            <p className='font-[choco]'>{activeService.content}</p>
            <ul className="mt-4 font-[choco] h-60 overflow-y-scroll scrollbar-thin scrollbar-thumb-pink-400 scrollbar-track-pink-100">
  {activeService.list.map((item, idx) => (
    <li key={idx} className="flex items-center gap-4 mb-3 border-2 border-pink-400 p-5 rounded-xl">
      <img src={item.image} alt={item.title} className="w-10 h-10 md:w-12 md:h-12 rounded object-cover" />
      <span className="text-md md:text-lg font-semibold">{item.title}</span>
    </li>
  ))}
</ul>

          </div>
        )}
      </div>
  
    </div>
  );
}
