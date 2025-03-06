import { useState, useEffect, useRef } from "react";
import { FiSend, FiMessageCircle, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi, Welcome to Arc Fertility ! How can I help you?", user: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setOpen(!open);
  };

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, user: "user" }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let reply = "";

      if (input.toLowerCase().includes("services")) {
        reply = "We provide IVF, IUI, and Fertility treatments.";
      } else if (input.toLowerCase().includes("location")) {
        reply = "We are located in Chennai, Tamil Nadu.";
      } else if (input.toLowerCase().includes("thank you")) {
        reply = "You're welcome! ";
      } else {
        reply = "I'm just a chatbot! Please contact our support.";
      }

      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [...prev, { text: reply, user: "bot" }]);
      }, 1200);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="font-[choco]">
  {/* Chatbot Icon */}
  <motion.div
    onClick={toggleChat}
    className="fixed bottom-10 right-5 bg-pink-400 p-4 rounded-full cursor-pointer shadow-lg text-white text-2xl z-50"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    {open ? <FiX /> : <FiMessageCircle />}
  </motion.div>

  {open && (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      className="fixed bottom-20 right-5  sm:right-10 md:right-20 w-[90%] sm:w-96 bg-white shadow-xl rounded-lg p-4 z-50 max-w-[400px]"
    >
      {/* Chat Messages */}
      <div className="h-64 overflow-y-scroll mb-4 space-y-2 scrollbar-thin scrollbar-thumb-pink-400">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`mb-3 ${msg.user === "user" ? "text-right" : "text-left"}`}
          >
            <span
              className={`p-2 rounded-md inline-block ${
                msg.user === "user" ? "bg-pink-400 text-white" : "bg-gray-200"
              }`}
            >
              {msg.text}
            </span>
          </motion.div>
        ))}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="text-left text-sm text-gray-500"
          >
            Typing...
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Field */}
      <div className="flex">
        <input
          type="text"
          className="flex-1 border p-2 rounded-l-md outline-none text-sm sm:text-base"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="bg-pink-400 text-white px-4 rounded-r-md"
        >
          <FiSend />
        </button>
      </div>
    </motion.div>
  )}
</div>

  );
};

export default Chatbot;