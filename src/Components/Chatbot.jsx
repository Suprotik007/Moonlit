import { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm Luna 🌙 — your Cozy Rooms assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [errorCount, setErrorCount] = useState(0);
  const chatEndRef = useRef(null);
  const BACKEND_URL = 'https://cozy-room-server.vercel.app';


  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);


  useEffect(() => {
    if (errorCount > 0) {
      const timer = setTimeout(() => setErrorCount(0), 30000); // Reset after 30 seconds
      return () => clearTimeout(timer);
    }
  }, [errorCount]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${BACKEND_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      let data;
      if (res.status === 429) {
        // Too Many Requests
        setErrorCount(prev => prev + 1);
        data = { 
          reply: errorCount > 2 
            ? "I'm experiencing high demand right now. Please try again in a few minutes or contact us directly at bookings@cozyrooms.com."
            : "I'm a bit overloaded at the moment. Let me try that again..." 
        };
      } else {
        data = await res.json();
        setErrorCount(0); 
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch (err) {
      console.error("Chat error:", err);
      
      // Show user-friendly error message
      const errorMessage = errorCount > 1 
        ? "I'm having trouble connecting. Please try again later or visit our website for immediate assistance."
        : "Sorry, I'm experiencing technical difficulties. Let me try again...";
      
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: errorMessage },
      ]);
      
      setErrorCount(prev => prev + 1);
    } finally {
      setLoading(false);
    }
  };

  // Add a clear chat function
  const clearChat = () => {
    setMessages([
      { role: "assistant", content: "Hi! I'm Luna 🌙 — your Cozy Rooms assistant. How can I help you today?" },
    ]);
    setErrorCount(0);
  };

  return (
    <>
      {/* Floating Button with notification badge */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-gray-800 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-all z-40 flex items-center justify-center w-14 h-14"
        aria-label="Chat with Luna"
      >
        {isOpen ? "✖" : "💬"}
        {errorCount > 0 && !isOpen && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            !
          </span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 sm:w-96 bg-white border border-gray-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50">
          {/* Header with clear button */}
          <div className="bg-gradient-to-r from-gray-500 to-gray-900 text-white p-3 flex justify-between items-center">
            <div className="font-semibold">
              Luna — Cozy Rooms Assistant
            </div>
            <div className="flex gap-2">
              <button
                onClick={clearChat}
                className="text-xs bg-gray-600 hover:bg-gray-800 px-2 py-1 rounded transition-colors"
                title="Clear chat"
              >
                Clear
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-lg hover:text-gray-300 transition-colors"
                aria-label="Close chat"
              >
                ×
              </button>
            </div>
          </div>

          {/* Chat messages */}
          <div className="flex-1 p-3 overflow-y-auto max-h-[420px] space-y-2 bg-gray-50">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.role === "assistant" ? "justify-start" : "justify-end"
                } animate-fadeIn`}
              >
                <div
                  className={`px-3 py-2 rounded-xl text-sm max-w-[75%] ${
                    m.role === "assistant"
                      ? "bg-white text-gray-800 border border-gray-200 shadow-sm"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="px-3 py-2 rounded-xl bg-white border border-gray-200">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                    </div>
                    Luna is typing...
                  </div>
                </div>
              </div>
            )}
            {errorCount > 2 && (
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 text-sm text-yellow-700">
                <p className="font-semibold">⚠️ Connection Issues</p>
                <p className="mt-1">For immediate assistance, please call us at (555) 123-4567 or email bookings@cozyrooms.com</p>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input area */}
          <form
            onSubmit={sendMessage}
            className="border-t border-gray-200 flex items-center bg-white"
          >
            <input
              className="flex-1 p-3 outline-0 text-sm placeholder-gray-500"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading || errorCount > 3}
            />
            <button
              type="submit"
              disabled={loading || errorCount > 3 || !input.trim()}
              className="bg-gray-900 text-white px-4 py-3 text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </form>

          {/* Footer with help text */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-500 border-t border-gray-200 p-2 text-center text-xs text-gray-200">
            {errorCount > 0 ? (
              <span className="text-red-500">⚠️ Connection issues detected. Try again shortly.</span>
            ) : (
              "Ask about rooms, prices, or booking!"
            )}
          </div>
        </div>
      )}

      {/* Add some CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}