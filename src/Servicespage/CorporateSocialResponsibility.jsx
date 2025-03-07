import { motion } from 'framer-motion';

const CorporateSocialResponsibility = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="p-4 md:p-10 mt-20 font-[choco]"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-6">
        Effects of Corporate Social Responsibility
      </h2>
      <p className="text-gray-700 mb-6">
        Corporate Social Responsibility aims to improve both the environment and the organization's reputation. By contributing towards society and environment, the hospitals in a way are promoting good health as well. If people start living in a better and healthy environment then there are very fewer chances of them being ill. It also helps in increasing patient's loyalty towards the hospital. CSR is considered to be a good deed and there is a regulation governing the entire matter. Organizations who contribute towards CSR frequently are considered to be good and genuine components of the society. It helps in building trust amongst people as well. By contributing to CSR, hospitals can expect to attract and retain qualified and skilled doctors and nursing staff as well. Attractive investments are also followed by CSR, which can enable the hospital to spend more on the modern day tool and equipment required for intricate operations and surgeries. By contributing towards CSR, an organization is also improving itself and establishing it as a renowned and elite organization working actively in society and also for society.
      </p>
      <h3 className="text-xl md:text-2xl font-bold text-pink-600 mb-4">
        How can CSR be fulfilled?
      </h3>
      <p className="text-gray-700 mb-6">
        There are no particular set of activities that are required to be done for contributing to society. Each organization in its capacity can assess and contribute accordingly. In the case of the healthcare sector, there are various options that can be opted by hospitals for complying with CSR every year. They can consider distributing free medicines to the distresses people who cannot afford medicines alongside conducting free health checkups and free treatment in slum areas or other rural and left behind areas. Apart from these, hospitals can also plant more trees where there is lack of greenery, as this will not only help the society look well but also improve the environment as by planting more trees, you are actually enhancing oxygen supply in the environment. Hospitals can choose any similar method and contribute towards the society and environment at large.
      </p>
      <h3 className="text-xl md:text-2xl font-bold text-pink-600 mb-4">
        ARC in complying with Corporate Social Responsibility
      </h3>
      <p className="text-gray-700 mb-6">
        <span className="text-blue-600">ARC</span> in its capacity as one of India's elite infertility hospitals have managed to contribute every year towards the environment and the society. There are several programs being run by the hospital which has been developed keeping CSR in mind. The hospital ensures that it contributes effortlessly towards CSR in every possible manner.
      </p>
    </motion.div>
  );
};

export default CorporateSocialResponsibility;
