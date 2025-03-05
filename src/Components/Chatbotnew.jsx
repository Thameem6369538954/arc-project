import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import axios from "axios";

function ChatBot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hey machn! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "YOUR_OPENAI_API_KEY";

  const handleSend = async () => {
    if (input.trim() === "") return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const { data } = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: input }],
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.choices[0].message.content },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry machn! Something went wrong 🤕." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 w-[400px] shadow-2xl rounded-xl bg-white border border-gray-300 overflow-hidden">
      <div className="bg-indigo-600 text-white p-4 font-bold text-lg">
        Chat with ReachStream AI 🤖
      </div>
      <div className="h-[400px] p-4 overflow-y-scroll">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-lg ${
              msg.sender === "bot"
                ? "bg-indigo-100 text-indigo-600"
                : "bg-gray-200 text-gray-800 text-right"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="bg-indigo-100 text-indigo-600 p-2 rounded-lg">
            Typing...
          </div>
        )}
      </div>
      <div className="flex border-t p-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 p-2 border-none outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="bg-indigo-600 text-white p-2 rounded-lg"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}

export default ChatBot;
