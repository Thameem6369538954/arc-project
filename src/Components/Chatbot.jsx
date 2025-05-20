import React, { useState, useEffect, useRef } from "react";
import { FiMessageCircle, FiX } from "react-icons/fi";

const feedbackCategories = [
  {
    name: "1. Initial Experience",
    questions: [
      {
        text: "What made you choose ARC Fertility Hospital for your treatment?",
        options: [
          "Reputation",
          "Doctor Recommendation",
          "Location Convenience",
          "Affordable Treatment",
          "Other",
        ],
      },
      {
        text: "How was your overall experience with the doctors and staff?",
        options: ["Excellent", "Good", "Average", "Poor"],
      },
    ],
  },
  {
    name: "2. Treatment Process",
    questions: [
      {
        text: "Were the treatment options clearly explained to you?",
        options: ["Yes, very clear", "Somewhat clear", "Not clear"],
      },
      {
        text: "How comfortable were you during your treatment sessions?",
        options: [
          "Very comfortable",
          "Comfortable",
          "Uncomfortable",
          "Very uncomfortable",
        ],
      },
    ],
  },
  {
    name: "3. Facilities & Amenities",
    questions: [
      {
        text: "How would you rate the hospital facilities?",
        options: ["Excellent", "Good", "Average", "Poor"],
      },
      {
        text: "Were the amenities satisfactory?",
        options: ["Yes", "No"],
      },
    ],
  },
  {
    name: "4. Staff & Support",
    questions: [
      {
        text: "How helpful was the support staff?",
        options: ["Very helpful", "Helpful", "Not helpful"],
      },
      {
        text: "Did you feel emotionally supported during your treatment?",
        options: ["Yes", "No"],
      },
    ],
  },
  {
    name: "5. Overall Satisfaction",
    questions: [
      {
        text: "Overall, how satisfied are you with your experience at ARC Fertility Hospital?",
        options: ["Very satisfied", "Satisfied", "Neutral", "Dissatisfied"],
      },
      {
        text: "Would you recommend ARC Fertility Hospital to others?",
        options: ["Definitely", "Maybe", "No"],
      },
    ],
  },
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I am the ARC Fertility Hospital feedback bot. Which category would you like to start with?",
    },
  ]);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleCategorySelect = (index) => {
    setCurrentCategoryIndex(index);
    setCurrentQuestionIndex(0);
    const categoryName = feedbackCategories[index].name;

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: categoryName },
      {
        sender: "bot",
        text: feedbackCategories[index].questions[0].text,
      },
    ]);
  };

  const handleAnswerSubmit = (answer) => {
    if (currentCategoryIndex === null) return;

    setMessages((prev) => [...prev, { sender: "user", text: answer }]);

    const currentCategory = feedbackCategories[currentCategoryIndex];
    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex < currentCategory.questions.length) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: currentCategory.questions[nextQuestionIndex].text,
          },
        ]);
        setCurrentQuestionIndex(nextQuestionIndex);
      }, 500);
    } else {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: `Thanks for completing the "${currentCategory.name}" category. Would you like to choose another?`,
          },
        ]);
        setCurrentCategoryIndex(null);
        setCurrentQuestionIndex(0);
      }, 500);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating chat button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-pink-600 hover:bg-pink-700 text-white p-4 rounded-full shadow-lg"
        >
          <FiMessageCircle size={24} />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="w-80 h-[550px] bg-white border border-pink-300 rounded-lg shadow-lg flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-pink-600 text-white p-4 flex justify-between items-center">
            <h2 className="font-semibold">ARC Feedback Bot</h2>
            <button onClick={() => setIsOpen(false)}>
              <FiX size={20} />
            </button>
          </div>

          {/* Chat messages */}
          <div className="flex-1 p-3 overflow-y-auto bg-white">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-3 max-w-[80%] p-3 rounded-lg ${
                  msg.sender === "bot"
                    ? "bg-pink-50 text-pink-700 self-start"
                    : "bg-pink-500 text-white self-end"
                }`}
                style={{ alignSelf: msg.sender === "bot" ? "flex-start" : "flex-end" }}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Options */}
          <div className="p-3 bg-white border-t flex flex-col gap-2 max-h-[160px] overflow-y-auto">
            {currentCategoryIndex === null ? (
              <>
                <div className="text-pink-700 font-medium">Select a category:</div>
                {feedbackCategories.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleCategorySelect(idx)}
                    className="bg-pink-100 hover:bg-pink-200 text-sm text-pink-800 rounded-md px-3 py-2"
                  >
                    {cat.name}
                  </button>
                ))}
              </>
            ) : (
              feedbackCategories[currentCategoryIndex].questions[
                currentQuestionIndex
              ].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswerSubmit(option)}
                  className="bg-pink-100 hover:bg-pink-200 text-sm text-pink-800 rounded-md px-3 py-2"
                >
                  {option}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
  