import { motion } from 'framer-motion';

const LEEPContent = () => {
  return (
    <div className="mt-30 font-[choco]">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <p>
          Just like cryosurgery, even Lop Electrosurgical Excision Procedure (LEEP) is a treatment that involves removal of abnormal cancerous cells from your cervix. It is a relatively less time-consuming treatment and the patient can continue his normal life activities from the next day. The treatment involves inserting a small electrical loop through your genital and then removes abnormal cancerous cells that are responsible for cervix cancer. LEEP may be performed when abnormal cells are diagnosed during a Pap smear test, colposcopy, and biopsy. The treatment might bring about a mild discomfort that can easily be coped up with pain relievers. Loop Electrosurgical Excision Procedure (LEEP) is proven to remove all abnormal cells and the success rates are usually higher. Since the treatment involves insertion of a tool into your body through your vagina make sure to get this treatment from a renowned hospital only that has conducted several successful treatments before.
        </p>
        <h2 className="text-[crimson] font-bold text-lg">Is LEEP a Safe Option for you?</h2>
        <p>
          In most of the cases, it was found that patients don't face any adverse after effects of the treatment. A mild pain or cramping might be felt when the small wire is being inserted into your vagina, but for such cases, doctors usually give a medicine before the treatment which makes the entire process painless. You won't even feel a thing. However, in rare cases, it is found that pelvic infection, damage to other pelvic organs, heavy bleeding, reaction to local anesthesia, severe stomach pain, high fever, unusual vaginal discharge and heavy bleeding can be developed as the adverse effect of the treatment. Whenever you feel uneasiness or notice any unusual unpleasant changes in your body post treatment, consult your doctor on an immediate basis to avoid any problem.
        </p>
        <h2 className="text-[crimson] font-bold text-lg">Things to Keep in Mind Post Treatment</h2>
        <p>
          As the treatment aims to remove abnormal cells from your cervix, you may find abnormal watery discharge from your vagina for few weeks that might also have some blood in it. Do not panic after addressing such symptom as it is just removing the bad cells from your body with the help of your body fluid. So make sure to wash your vagina three to four times a day with normal water and increase fluid intake so that you can compensate the fluid loss taking place in your body. Don't use any tampons and douches for few weeks and also don't indulge in any vaginal intercourse till the time your genitals heal properly.
        </p>
        <h2 className="text-[crimson] font-bold text-lg">Why choose ARC?</h2>
        <p>
          ARC is India's one of the best infertility hospitals that have been providing many couples relevant consultation and treatment so that they can easily cope up with the problems being faced by them. <span className="text-[blue]">ARC</span> has all advanced and modern day machines and equipment that are ideal for carrying out successful treatments and also ensure that the patient doesn't feel uncomfortable at any time during the entire treatment process. The advanced machinery is being operated by trained and certified professionals so you don't have to worry about your safety and efficiency of the treatment. With <span className="text-[blue]">ARC</span> as your medical supervisor, you are sure to get cured.
        </p>
      </motion.div>
    </div>
  );
};

export default LEEPContent;
