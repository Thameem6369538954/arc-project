export default function FertilityProcedures() {
    return (
      <div className="max-w-9xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">A. Fertility-Related Laparoscopic Procedures</h1>
        
        <Procedure 
          title="Diagnostic Hysterolaparoscopy"
          description="This minimally invasive procedure allows a detailed examination of the uterus, fallopian tubes, and ovaries. It combines hysteroscopy and laparoscopy to identify structural abnormalities, adhesions, or blockages that may contribute to infertility. It’s commonly used to diagnose conditions such as endometriosis, fibroids, or polycystic ovarian syndrome (PCOS). Patients benefit from its dual purpose: diagnosis and potential treatment during the same session."
          indications={["Unexplained infertility.", "Suspected endometriosis, pelvic adhesions, or uterine abnormalities."]}
          complications={["Bleeding, infection, or injury to pelvic organs.", "Temporary shoulder pain due to gas used during the procedure."]}
          steps={["Performed under general anesthesia.", "A small incision is made near the navel to insert a laparoscope for viewing the pelvic organs.", "Another small incision is made for surgical instruments if needed.", "Dye is injected through the cervix into the uterus to check for tubal blockages.", "A hysteroscope is used to inspect the uterine cavity for abnormalities."]}
        />
        
        <Procedure 
          title="Hysteroscopic Septal Resection"
          description="This procedure corrects a uterine septum, a congenital malformation that can lead to recurrent miscarriages. Using a hysteroscope, surgeons remove the septum to restore the uterine cavity’s normal shape, improving the chances of successful pregnancies."
          indications={["Recurrent miscarriages or infertility due to uterine septum."]}
          complications={["Uterine perforation, infection, or bleeding."]}
          steps={["The patient is under general or local anesthesia.", "A hysteroscope is inserted through the vagina and cervix into the uterus.", "A specialized instrument is used to cut and remove the septum.", "Post-procedure care includes antibiotics and hormonal therapy to aid healing."]}
        />
        
        {/* Additional procedures can be added following the same pattern */}
      </div>
    );
  }
  
  function Procedure({ title, description, indications, complications, steps }) {
    return (
      <div className="mb-6 mt-30">
        <h2 className="text-xl font-semibold text-pink-600 mb-2">{title}</h2>
        <p className="mb-2">{description}</p>
        <h3 className="font-semibold">Indications:</h3>
        <ul className="list-disc list-inside mb-2">
          {indications.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        <h3 className="font-semibold">Complications:</h3>
        <ul className="list-disc list-inside mb-2">
          {complications.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        <h3 className="font-semibold">Procedure (Steps):</h3>
        <ol className="list-decimal list-inside">
          {steps.map((step, index) => <li key={index}>{step}</li>)}
        </ol>
      </div>
    );
  }
  