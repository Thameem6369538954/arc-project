import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { useState } from "react";

const ContactButton = ({ phoneNumber, whatsappNumber }) => {
  const [show, setShow] = useState(false);

  const whatsappMessage = "Welcome to the ARC Fertility Hospital";

  const handleWhatsappClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-10 right-10 z-50">
      <div
        className="relative"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={() => setShow(!show)} // For Mobile Touch
      >
        {/* Main Button 🔥 */}
        <button className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300">
          📞 Contact Us
        </button>

        {/* Hover + Click Menu */}
        {show && (
          <div className="absolute bottom-16 flex flex-col items-center gap-3 bg-white shadow-lg rounded-lg p-3 animate-slideUp transition-all duration-300">
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 cursor-pointer"
            >
              <FaPhone />
              Call Us
            </a>
            <button
              onClick={handleWhatsappClick}
              className="flex items-center gap-2 text-green-600 hover:text-green-800 cursor-pointer"
            >
              <FaWhatsapp />
              WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactButton;
