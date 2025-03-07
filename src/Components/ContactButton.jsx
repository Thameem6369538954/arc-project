import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { IoCallOutline } from "react-icons/io5";

const ContactButton = ({ phoneNumber, whatsappNumber }) => {
  const [show, setShow] = useState(false);
  const menuRef = useRef(null);
  const whatsappMessage = "Welcome to the ARC Fertility Hospital";

  const handleWhatsappClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  // Outside Click Event
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setShow(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-5 bottom-40 z-50">
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setShow(!show)}
          className="bg-blue-600 text-white text-xl p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
         <IoCallOutline />
        </button>

        {show && (
          <div
            className="absolute bottom-16 right-10 flex flex-col items-center gap-3 bg-white shadow-lg rounded-lg p-3 animate-slideUp transition-all duration-300"
            onMouseEnter={() => setShow(true)} // Laptop Hover
            onMouseLeave={() => setShow(true)} // Prevent Disappear
          >
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 cursor-pointer"
            >
              <IoCallOutline />
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
