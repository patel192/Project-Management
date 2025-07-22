import axios from "axios";
import { useState, useEffect, useRef } from "react";

export const Messages = () => {
  const [messageadded, setmessageadded] = useState(false);
  const [messages, setmessages] = useState([]);
  const [inputvalue, setinputvalue] = useState("");
  const userId = localStorage.getItem("userId");
  const bottomRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Fetch messages from backend
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/messages`);
        setmessages(res.data.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchMessages();
  }, [messageadded]);

  const handleChange = (event) => {
    setinputvalue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!inputvalue.trim()) return; // prevent empty messages

    const MessageDetails = {
      sender: userId,
      content: inputvalue.trim(),
    };

    try {
      await axios.post(`http://localhost:3000/message`, MessageDetails);
      setinputvalue("");
      setmessageadded((prev) => !prev); // trigger refresh
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="w-full h-[90vh] bg-zinc-900 text-white flex flex-col rounded-xl shadow-md border border-zinc-700 p-4">
      <h2 className="text-xl font-bold mb-4 border-b border-zinc-700 pb-2">
        📢 Group Chat
      </h2>

      <div className="flex-1 overflow-y-auto space-y-2 px-4 py-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === userId ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs md:max-w-md px-4 py-2 rounded-lg text-sm shadow-md ${
                msg.sender === userId
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-zinc-800 text-gray-200 rounded-bl-none"
              }`}
            >
              <p>{msg.content}</p>
              <span className="block text-xs text-zinc-400 mt-1 text-right">
                {msg.sender === userId ? "You" : msg.sender?.name || "User"}
              </span>
            </div>
          </div>
        ))}
        <div ref={bottomRef} /> {/* auto-scroll target */}
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-4 flex items-center space-x-2"
      >
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-2 rounded-lg bg-zinc-800 border border-zinc-600 outline-none"
          onChange={handleChange}
          value={inputvalue}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};
