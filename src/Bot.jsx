import React, { useState, useRef, useEffect } from 'react';

const Bot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isChatVisible, setIsChatVisible] = useState(false);
  const messagesEndRef = useRef(null);

  // Prefer loading the key from an environment variable if available
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "YOUR_GEMINI_API_KEY_HERE";
  const apiUrl =
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent';

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Simulate streaming text from AI
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { text: userMsg, sender: 'user' }]);

    // Add placeholder for bot response
    const botIndex = messages.length + 1;
    setMessages(prev => [...prev, { text: '', sender: 'bot' }]);
    setIsLoading(true);

    try {
      const payload = { contents: [{ parts: [{ text: userMsg }] }] };

      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        const message =
          errorData?.error?.message ||
          `Request failed with status ${res.status}`;
        throw new Error(message);
      }

      const data = await res.json();
      const fullText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

      let currentText = '';
      for (let i = 0; i < fullText.length; i++) {
        currentText += fullText[i];
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[botIndex] = { text: currentText, sender: 'bot' };
          return newMessages;
        });
        await new Promise(r => setTimeout(r, 20)); 
      }
      
    } catch (err) {
      const errorText =
        err instanceof Error ? err.message : 'Unknown error occurred.';
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[botIndex] = { text: `Error: ${errorText}`, sender: 'bot' };
        return newMessages;
      });
      console.error('Gemini API error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating chat button */}
      <button
        onClick={() => setIsChatVisible(!isChatVisible)}
        className="fixed bottom-6 right-6 p-4 rounded-full bg-red-600 text-white z-50 shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.548-1.127L3 20l1.127-4.452A9.863 9.863 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>

      {/* Chatbox */}
      <div
        className={`fixed bottom-20 right-6 w-96 h-[60vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 transition-transform duration-500 ease-in-out transform ${
          isChatVisible ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        {/* Messages */}
        <div className="flex-1 overflow-auto p-4 space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`p-3 rounded-xl shadow-md ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 p-3 rounded-xl animate-pulse">...</div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSendMessage} className="p-4 flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button type="submit" className="p-2 bg-red-600 text-white rounded-full" disabled={isLoading}>
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Bot;
