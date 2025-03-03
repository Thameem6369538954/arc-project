import { FaDna, FaHeart, FaUserCheck, FaStar } from 'react-icons/fa';
import ivfImage from '../Images/ivf.jpg';

const InVitroFertilizationPage = () => {
  return (

    <div>
        {/* <p>In India, there are several couples who are unable to conceive even after trying for long. The reasons could be varied. Of the many reasons, infertility is the most common problem that causes hindrance in the overall reproductive process. Several treatments have also been devised to overcome this problem; In Vitro Fertilization is one such treatment. Doctors at ARC help couples in overcoming such problems in the best possible way and have also carried out several successful treatments which have given numerous couples the chance to conceive and be blessed with a child.</p> */}
    <div className="font-[choco]">
      <div>
        <img src={ivfImage} alt="IVF Process" className="w-full h-96 object-cover" />
      </div>
      <div className="container mx-auto p-6">
        <p className="text-gray-700 leading-relaxed">
          In India, there are several couples who are unable to conceive even after trying for long. The reasons could be varied.
          Of the many reasons, infertility is the most common problem that causes hindrance in the overall reproductive process.
          Several treatments have also been devised to overcome this problem. In Vitro Fertilization is one such treatment.
        </p>

        <h2 className="text-3xl font-bold text-pink-600 mt-10 mb-4">What is In Vitro Fertilization?</h2>
        <p className="text-gray-700 mb-6">
        This is an assisted reproductive technology that helps in fertilization by extracting eggs from female body and retrieving a sperm sample followed by manually combining both in a laboratory dish. After doing so, the doctors transfer the embryo(s) so developed into the female uterus. The entire treatment is based on five steps.
        </p>

        <div className="flex justify-center mb-10">
          <iframe
            className="w-full md:w-[600px] h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID"
            title="In Vitro Fertilization Explanation"
            allowFullScreen
          ></iframe>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex items-start gap-4">
            <p className='flex items-center justify-center'>Step 1 </p>
            <div>
              <h3 className="text-xl font-semibold">Advanced Technology</h3>
              <p>State-of-the-art labs and equipment ensuring the highest success rates.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
          <p className='flex items-center justify-center'>Step 2 </p>
            <div>
              <h3 className="text-xl font-semibold">Compassionate Care</h3>
              <p>Our team provides emotional support along with medical expertise.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
          <p className='flex items-center justify-center'>Step 3</p>
            <div>
              <h3 className="text-xl font-semibold">High Success Rates</h3>
              <p>Proven track record of successful IVF treatments.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
          <p className='flex items-center justify-center'>Step 4</p>
            <div>
              <h3 className="text-xl font-semibold">Expert Doctors</h3>
              <p>Experienced fertility specialists with years of expertise.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
          <p className='flex items-center justify-center'>Step 5</p>
            <div>
              <h3 className="text-xl font-semibold">Expert Doctors</h3>
              <p>Experienced fertility specialists with years of expertise.</p>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <h3 className="text-2xl font-bold text-pink-600">Who should consider In Vitro Fertilization?</h3>
          <p className="text-gray-700 max-w-7xl mx-auto">
          If the couple is having unexplained infertility problems or individual partners are having a genetic disorder than In Vitro Fertilization treatment is for them. Apart from these problems, if a woman had to remove the fallopian tube from her body due to some medical conditions or had a premature ovarian failure then this treatment can solve all their infertility problems. Couples, where the male partner is having low sperm count can also consider this treatment.
</p>
        </div>

        <div className="mt-10 text-center">
          <h3 className="text-2xl font-bold text-pink-600">Why Choose ARC?</h3>
          <p className="text-gray-700 max-w-7xl mx-auto">
          Infertility is a very sensitive issue that needs to be handled with utmost care. Hence, ARC proves to be the best option for couples facing infertility problems, as the hospital has solved infertility problems for many couples. The list of satisfied couples is very long and the professionals at ARC make sure that their patients have a smooth way out through all their infertility problems. They have stringent rules for maintaining integrity and secrecy of all their patients, so every couple can be assured of their privacy and security. The success rates of treatments conducted at ARC always remain on the higher side. Hence, couples can approach ARC without any hesitation and fear.          </p>
        </div>
      </div>
    </div>

    </div>

  );
};

export default InVitroFertilizationPage;

