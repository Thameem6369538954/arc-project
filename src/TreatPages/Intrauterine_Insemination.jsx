import { FaClock, FaShieldAlt, FaCheckCircle, FaMoneyBillWave } from 'react-icons/fa';
// import kid from "../Images/kid.jpg";

const IntrauterineInseminationPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="w-full h-[80vh] overflow-hidden ">
        {/* <img src={kid} alt="Kid" className="w-full h-full object-cover" /> */}
      </div>

      <div className="container mx-auto p-6 font-[choco]">
        <p className="p-5 text-gray-700 leading-relaxed">
          Infertility is one such health issue that has affected many women in India. People often look for alternative treatments so that problems relating to infertility can be solved and they can expect to have a baby. Intrauterine Insemination is a type of artificial insemination that helps the sperm to reach the uterus by artificial means. The main aim of this entire process is to increase the number of sperms in the fallopian tube and increase the chances of fertilization.
          <br /><br />
          Though there are other treatments as well like in vitro fertilization, Intrauterine Insemination is a comparatively less invasive and less expensive treatment. But since the treatment involves inserting sperms in a female body using a specific tool, it becomes important to get it done from a reliable place.
        </p>

        <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">Why should one go for Intrauterine Insemination?</h2>
        <p className="text-gray-700 text-center mb-10">
          Many benefits are associated with this treatment which makes it the best treatment alternative for every woman who is facing problems in conceiving naturally.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-lg">
            <FaClock className="text-pink-500 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Less Time-Consuming</h3>
              <p className="text-gray-600">The treatment can be done within a few minutes without compromising effectiveness.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-lg">
            <FaShieldAlt className="text-green-500 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Less Risk Involved</h3>
              <p className="text-gray-600">One of the safest ways to deal with infertility problems without pain.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-lg">
            <FaCheckCircle className="text-blue-500 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Effective</h3>
              <p className="text-gray-600">It provides high success rates with minimal risks.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-lg">
            <FaMoneyBillWave className="text-yellow-500 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Less Expensive</h3>
              <p className="text-gray-600">A cost-effective solution compared to other infertility treatments.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <h3 className="text-2xl font-bold text-pink-600 mb-4">Why Choose ARC?</h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            ARC is India's largest infertility hospital, with expert doctors, advanced equipment, and high success rates ensuring your dream of parenthood comes true.
          </p>
        </div>

        <div className="mt-10 text-center">
          <h3 className="text-2xl font-bold text-pink-600 mb-4">Watch Our Video</h3>
          <div className="relative w-full max-w-3xl mx-auto aspect-w-16 aspect-h-12 overflow-hidden rounded-lg shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntrauterineInseminationPage;
