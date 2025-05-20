import { useState } from "react";
import kids from "../Images/Kid.jpg"

const steps = ["Indian Citizens", "Proof of Marriage", "Foreigners", "Refugees"];

export default function FileStepForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    aadhaar: null,
    passport: null,
    drivingLicense: null,
    voterId: null,
    employeeId: null,

    marriageCertificate: null,
    jointAffidavit: null,
    spouseProof: null,

    foreignPassport: null,
    medicalVisa: null,
    frro: null,
    indianAddress: null,
    referralLetter: null,

    refugeeId: null,
    refugeeAddressProof: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const nextStep = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
<div className="font-[choco]">
    <div
  className="relative bg-cover bg-center min-h-96 flex items-center justify-center"
  style={{
    backgroundImage: `url(${kids})`, // Replace with your image URL
  }}
>
  <h1 className="text-white text-4xl md:text-5xl font-bold bg-black/50 px-6 py-3 rounded-lg shadow-lg">
    International Patients
  </h1>
</div>

<div className="max-w-8xl mx-auto p-8 mt-10 bg-white border border-pink-200 shadow-xl rounded-2xl">
    
      <h2 className="text-3xl font-semibold text-pink-600 mb-6 border-b pb-2">
        Step {step + 1}: {steps[step]}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6 text-xl">
        {step === 0 && (
          <>
            <Input label="Aadhaar Card" name="aadhaar" onChange={handleChange} />
            <Input label="Passport" name="passport" onChange={handleChange} />
            <Input label="Driving License" name="drivingLicense" onChange={handleChange} />
            <Input label="Employee ID (Govt)" name="employeeId" onChange={handleChange} />
            <Input label="Voter ID + Affidavit" name="voterId" onChange={handleChange} />
          </>
        )}

        {step === 1 && (
          <>
            <Input label="Marriage Certificate" name="marriageCertificate" onChange={handleChange} />
            <Input label="Joint Affidavit" name="jointAffidavit" onChange={handleChange} />
            <Input label="Spouse Name Proof (Aadhaar, Passport)" name="spouseProof" onChange={handleChange} />
          </>
        )}

        {step === 2 && (
          <>
            <Input label="Passport with Visa Page" name="foreignPassport" onChange={handleChange} />
            <Input label="Medical/Tourist Visa" name="medicalVisa" onChange={handleChange} />
            <Input label="FRRO Registration" name="frro" onChange={handleChange} />
            <Input label="Address Proof in India" name="indianAddress" onChange={handleChange} />
            <Input label="Referral Letter" name="referralLetter" onChange={handleChange} />
          </>
        )}

        {step === 3 && (
          <>
            <Input label="Refugee Identity Document (UNHCR/Govt ID)" name="refugeeId" onChange={handleChange} />
            <Input label="Address Proof in India" name="refugeeAddressProof" onChange={handleChange} />
          </>
        )}

        <div className="flex justify-between pt-8">
          <button
            type="button"
            onClick={prevStep}
            disabled={step === 0}
            className="px-6 py-2 bg-pink-100 text-pink-600 rounded-lg font-medium disabled:opacity-50 hover:bg-pink-200 transition"
          >
            Previous
          </button>

          {step < steps.length - 1 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-2 bg-pink-400 text-white rounded-lg font-semibold hover:bg-pink-500 transition"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
</div>


    
  );
}

function Input({ label, name, onChange }) {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-1">{label}</label>
      <input
        type="file"
        name={name}
        onChange={onChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0 file:text-sm file:font-semibold
                  file:bg-pink-50 file:text-pink-600 hover:file:bg-pink-100"
      />
    </div>
  );
}
  