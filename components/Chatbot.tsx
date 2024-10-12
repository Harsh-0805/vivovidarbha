"use client";

import React, { useState } from "react";
import axios from "axios";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/chat", {
        instruction: input,
      });

      const botMessage: Message = {
        sender: "bot",
        text: response.data.response,
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      const botMessage: Message = {
        sender: "bot",
        text: "Sorry, I couldn't process your request.",
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={handleToggle}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg focus:outline-none"
        >
          {isOpen ? "Close Chat" : "Chat"}
        </button>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-white shadow-lg border border-gray-300 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-blue-600 text-white">
            <h2 className="text-lg font-semibold">Chat with us</h2>
          </div>
          <div className="p-4 h-64 overflow-y-scroll">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  msg.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`inline-block px-4 py-2 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && <div className="text-center">Loading...</div>}
          </div>
          <div className="p-4 border-t border-gray-200">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
