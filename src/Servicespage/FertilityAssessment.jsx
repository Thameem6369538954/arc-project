import React from "react";

const HealthForm = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center p-4 mt-25 font-[choco] ">
       <div>
            <h1 className='p-5 text-center font-[belli] text-6xl'>Fertility Assessment</h1>
            {/* <p>Marriage is a platonic conception pursued through long-standing undertaking made between two singles. So it is a social congregation to give a momentum to accelerate the journey of a newly married couple to reach the destiny with a spirit of miles to go before they sleep. Marriage is a union of relationship, living wills, decision making in all sphere of activities of life. New couples, mostly think with an emotional assumption that they can conceive a baby. In reality, many of them fall in heartbreaking turmoil when conception becomes problematic. ARC is here with the qualified marriage counselors to give you pre marital counseling support. The necessities of premarital counseling are discussed below.</p> */}
        </div>
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-bold text-center mb-6 ">Health Assessment Form</h2>
        <div className="mb-4">
          <label className="block ">What is your Age?</label>
          <input type="number" className="w-full p-2 border border-pink-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" />
        </div>
        <div className="mb-4">
          <label className="block ">What is your weight in kg?</label>
          <input type="number" className="w-full p-2 border border-pink-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" />
        </div>
        <div className="mb-4">
          <label className="block ">What is your height in cm?</label>
          <input type="number" className="w-full p-2 border border-pink-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" />
        </div>
        {[
          "Do You Smoke?",
          "Do you consume more than 2 serves of alcohol per day?",
          "Do you consume more than 2 cups of coffee per day?",
          "Have you ever been diagnosed with Chlamydia?",
          "Have you ever been diagnosed with congenital absence of the vas?",
          "Have you ever taken anabolic steroids?",
          "Have you ever taken recreational drugs?",
          "Have you been attempting to get your partner pregnant for greater than 6 months?"
        ].map((question, index) => (
          <div key={index} className="mb-4">
            <label className="block  mb-2">{question}</label>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input type="radio" name={`question-${index}`} value="Yes" className="" />
                <span className="ml-2 ">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name={`question-${index}`} value="No" className="" />
                <span className="ml-2 ">No</span>
              </label>
            </div>
          </div>
        ))}
        <button type="submit" className="w-full bg-pink-400 text-white p-3 rounded-lg hover:bg-pink-500 transition">Submit</button>
      </form>
    </div>
  );
};

export default HealthForm;
