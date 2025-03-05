import { FaWhatsapp, FaPhone } from "react-icons/fa";

const ContactButton = ({ phoneNumber, whatsappNumber }) => {
  const whatsappMessage = "Hi I need Some help";

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
      <div className="relative group">
        {/* Main Button */}
        <button className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300">
          📞 Contact Us
        </button>

        {/* Hover Box 🔥 Secret */}
        <div className="absolute bottom-16 opacity-0 group-hover:opacity-100 group-hover:visible invisible flex flex-col items-center gap-3 bg-white shadow-lg rounded-lg p-3 animate-slideUp transition-all duration-300">
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
      </div>
    </div>
  );
};

export default ContactButton;
