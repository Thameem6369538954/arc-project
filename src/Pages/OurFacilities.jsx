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

const services = [
  { title: 'Emotional Considerations', content: 'Content for Emotional Considerations...', image: ExtA, list: [{ image: eggfreezing, title: 'Egg Freezing' }, { image: fertilitypreservation, title: 'Fertility Preservation ' }, { image: eggbanking, title: 'Egg Banking Calculator' }], },
  { title: 'Prenatal Counselling', content: 'Content for Prenatal Counselling...', image: lifestyle, list: [{ image: Bank, title: 'Diet Advice' }, { image: Round, title: 'Pregnancy Care' }, { image: Bank, title: 'Exercise Guidance' }], },
  { title: 'Therapeutic Activity For Patients', content: 'Content for Extending the Biological Clock...', image: therapautic, list: [{ image: Round, title: 'Egg Freezing' }, { image: Bank, title: 'Hormone Therapy' }, { image: Round, title: 'IVF Treatment' }], },
  { title: 'Counselling', content: 'Content for Stem Cell Banking...', image: counselling, list: [{ image: Bank, title: 'Umbilical Cord Storage' }, { image: Round, title: 'Stem Cell Preservation' }, { image: Bank, title: 'Future Treatments' }], },
  { title: 'Fertility Tools', content: 'Content for Stem Cell Banking...', image: ExtA, list: [{ image: Bank, title: 'Umbilical Cord Storage' }, { image: Round, title: 'Stem Cell Preservation' }, { image: Bank, title: 'Future Treatments' }], },
  { title: 'Corporate Social Responsibility', content: 'Content for Stem Cell Banking...', image: corporate, list: [{ image: Bank, title: 'Umbilical Cord Storage' }, { image: Round, title: 'Stem Cell Preservation' }, { image: Bank, title: 'Future Treatments' }], },
  { title: 'Sexual Dysfunction Clinic', content: 'Content for Stem Cell Banking...', image: Bank, list: [{ image: Bank, title: 'Umbilical Cord Storage' }, { image: Round, title: 'Stem Cell Preservation' }, { image: Bank, title: 'Future Treatments' }], },
  { title: 'Gynaecologic Surgery', content: 'Content for Stem Cell Banking...', image: Bank, list: [{ image: Bank, title: 'Umbilical Cord Storage' }, { image: Round, title: 'Stem Cell Preservation' }, { image: Bank, title: 'Future Treatments' }], },
  { title: 'Stem Cell Banking', content: 'Content for Stem Cell Banking...', image: Bank, list: [{ image: Bank, title: 'Umbilical Cord Storage' }, { image: Round, title: 'Stem Cell Preservation' }, { image: Bank, title: 'Future Treatments' }], },
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
    <div className="p-4 md:p-10 mt-10 md:mt-25 w-full min-h-[100vh] bg-[#f5f4f1]">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-pink-600">Counselling Services</h1>
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-1/2 h-[600px] md:h-[800px] overflow-y-scroll scrollbar-hide">
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
            <h1 className="text-xl md:text-2xl font-bold text-pink-600 mb-4">{activeService.title}</h1>
            <p>{activeService.content}</p>
            <ul className="mt-4">
              {activeService.list.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 mb-3">
                  <img src={item.image} alt={item.title} className="w-10 h-10 md:w-12 md:h-12 rounded object-cover" />
                  <span className="text-md md:text-lg font-semibold">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="mt-12 bg-pink-100 p-6 md:p-10 rounded shadow">
        <h3 className="text-xl md:text-2xl font-bold text-center text-pink-600">World Class Fertility Treatment</h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <input type="text" placeholder="Select Doctor" className="p-2 border rounded" />
          <input type="text" placeholder="Name" className="p-2 border rounded" />
          <input type="email" placeholder="Email" className="p-2 border rounded" />
          <input type="text" placeholder="Mobile Number" className="p-2 border rounded" />
          <input type="text" placeholder="Your Location" className="p-2 border rounded" />
          <textarea placeholder="Message" className="p-2 border rounded col-span-1 md:col-span-2"></textarea>
          <button className="col-span-1 md:col-span-2 bg-pink-600 text-white p-2 rounded">Submit Now</button>
        </form>
      </div>
    </div>
  );
}
