import React, { useState, useEffect, useRef } from "react";
import { FaComment, FaTimes, FaPaperPlane, FaMicrophone } from "react-icons/fa";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I Help you today? 🤖" },
    { sender: "bot", text: "You can ask about products, pricing, shipping, and more! 💬" },
  ]);
  const [userMessage, setUserMessage] = useState("");
  const [recording, setRecording] = useState(false);
  const chatContainerRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = (message) => {
    if (!message.trim()) return;

    const newMessages = [...messages, { sender: "user", text: message }];
    setMessages(newMessages);
    setUserMessage("");

    setTimeout(() => {
      const botReply = getBotResponse(message);
      setMessages((prevMessages) => [...prevMessages, { sender: "bot", text: botReply }]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage(userMessage);
    }
  };

  const getBotResponse = (userMessage) => {
    const lowerMsg = userMessage.toLowerCase();
    if (lowerMsg.includes("product")) return "We have a wide range of collection.";
    if (lowerMsg.includes("price")) return "We Offer Value for Money! Let me know which product you are interested in. 💸";
    if (lowerMsg.includes("shipping")) return "We offer fast shipping services! 🚚";
    if (lowerMsg.includes("return policy")) return "Our return policy allows returns within 7 days of purchase. 🔄";
    if (lowerMsg.includes("login") || lowerMsg.includes("sign in")) return "Hello! First, you need to create an account!";
    if (lowerMsg.includes("payment")) return "We accept Stripe and RazorPay!";
    if (lowerMsg.includes("other")) return "Please contact support";
    return "I'm sorry, I didn't quite understand that. Can you please rephrase? 🤔";
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const quickReplies = ["Product Info", "Pricing", "Shipping", "Return Policy", "Login", "Payment", "Other"];

  // 🎤 Speech Recognition Function
  const startRecording = () => {
    if (!("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setRecording(true);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setUserMessage(transcript);
      handleSendMessage(transcript);
    };

    recognition.onerror = (event) => {
      console.error("Speech Recognition Error:", event.error);
      setRecording(false);
    };

    recognition.onend = () => setRecording(false);

    recognition.start();
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end">
      {isOpen && (
        <div className="w-80 h-96 border border-gray-300 rounded-lg shadow-xl bg-white flex flex-col">
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center rounded-t-lg">
            <h3 className="text-lg">Chatbot</h3>
            <button
              onClick={toggleChat}
              className="text-white p-3 rounded-full flex items-center justify-center hover:bg-blue-700 transition duration-300"
            >
              <FaTimes size={25} />
            </button>
          </div>

          <div className="p-4 flex-1 overflow-y-auto bg-gray-50" style={{ maxHeight: "300px" }} ref={chatContainerRef}>
            {messages.map((message, index) => (
              <div key={index} className={`flex mb-2 ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`${message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"} p-3 rounded-xl max-w-3/4 text-sm break-words`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-2 flex flex-wrap gap-2 border-t border-gray-300">
            {quickReplies.map((reply, index) => (
              <button key={index} className="bg-gray-200 text-black px-3 py-1 rounded-lg text-sm" onClick={() => handleSendMessage(reply)}>
                {reply}
              </button>
            ))}
          </div>

          <div className="flex items-center p-3 border-t border-gray-300">
            <input
              type="text"
              className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:outline-none"
              placeholder="Type a message..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button onClick={() => handleSendMessage(userMessage)} className="ml-2 bg-blue-600 text-white p-2 rounded-lg">
              <FaPaperPlane />
            </button>
            <button onClick={startRecording} className="ml-2 bg-gray-200 p-2 rounded-lg">
              {recording ? "🎤" : <FaMicrophone className="text-black" />}
            </button>
          </div>
        </div>
      )}

      <button onClick={toggleChat} className="bg-blue-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center focus:outline-none">
        <FaComment size={24} />
      </button>
    </div>
  );
};

export default Chatbot;
