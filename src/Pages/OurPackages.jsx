import React, { useState } from "react";
import emailjs from "emailjs-com";

const TreatmentPackage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showDetails, setShowDetails] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  const templateParams = {
  name: formData.name,
  phone: formData.phone,
  email: formData.email,
  message: formData.message,
  subject: `New Inquiry from ${formData.name}`,
  time: new Date().toLocaleString(),
};


  emailjs
    .send(
      "service_wfbj391", // Your Service ID
      "template_6x9ma2u", // Your Template ID
      templateParams,
      "-q5wAIGtu1_4OlLM6" // Your Public Key
    )
    .then(() => {
      setShowDetails(true);
    })
    .catch((error) => {
      console.error("Email send error:", error);
      alert("Something went wrong!");
    });
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-100 px-4 py-10">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        {!showDetails ? (
          <>
            <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
              Know Our Package
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Your message or concerns"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              🎉 Thank you! Here’s our Package:
            </h3>
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm text-left">
              <p className="mb-2">
                <strong>📦 Package Name:</strong> Wellness Plus
              </p>
              <p className="mb-2">
                <strong>💰 Price:</strong> ₹3,499
              </p>
              <p className="mb-2 font-semibold">What's Included:</p>
              <ul className="list-disc ml-6 text-gray-700">
                <li>✔️ Full body health checkup</li>
                <li>✔️ 3 doctor consultations</li>
                <li>✔️ Custom diet & fitness plan</li>
                <li>✔️ Yoga & Meditation sessions</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TreatmentPackage;
