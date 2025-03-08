import { useState, useEffect } from "react";

const CookiePopup = () => {
  const [show, setShow] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShow(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShow(false);
  };

  const handlePreferences = () => {
    setShowPreferences(!showPreferences);
  };

  return (
    <>
      {show && (
        <div className="fixed inset-x-0 bottom-10 font-[choco] bg-opacity-40 flex items-center justify-center z-40">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-11/12 max-w-8xl animate-fade relative">
            {/* Close Button */}
            <button
              onClick={() => setShow(false)}
              className="absolute top-2 right-3 text-xl text-red-600 hover:text-red-800 transition-all"
            >
              ❌
            </button>

            <h2 className="text-lg font-semibold mb-2">
              This website uses cookies 🍪
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              We use cookies to personalize content and improve your experience.
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleAccept}
                className="bg-pink-400 text-white py-2 rounded-lg hover:bg-white hover:text-pink-400 hover:border hover:border-pink-400 transition-all"
              >
                Accept All Cookies ✅
              </button>

              <button
                onClick={handleReject}
                className="bg-red-600 text-white py-2 rounded-lg hover:bg-white hover:text-red-600 hover:border hover:border-red-600 transition-all"
              >
                Reject All ❌
              </button>

              <button
                onClick={handlePreferences}
                className="text-blue-600 py-2 underline cursor-pointer hover:text-blue-700"
              >
                Manage Your Cookie Preferences ⚙️
              </button>
            </div>

            {showPreferences && (
              <div className="mt-4 text-left text-sm bg-gray-100 p-3 rounded">
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Performance Cookies
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Targeting Cookies
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Essential Cookies (Always On)
                </label>
                <button
                  className="mt-2 bg-green-600 text-white py-1 px-4 rounded-lg hover:bg-green-700"
                  onClick={handleAccept}
                >
                  Save Preferences
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CookiePopup;
