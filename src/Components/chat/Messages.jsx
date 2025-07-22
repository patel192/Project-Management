import axios from "axios";
import { useState, useEffect, useRef } from "react";
import moment from "moment";

export const Messages = () => {
  const [messageAdded, setMessageAdded] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const bottomRef = useRef(null);

  const userId = localStorage.getItem("userId");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return;

    const messageDetails = {
      sender: userId,
      content: inputValue,
    };

    await axios.post("http://localhost:3000/message", messageDetails);
    setInputValue("");
    setMessageAdded(!messageAdded);
  };

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await axios.get("http://localhost:3000/messages");
      setMessages(res.data.data || []);
    };
    fetchMessages();
  }, [messageAdded]);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Helper to detect date change
  const isDifferentDate = (current, previous) => {
    if (!previous) return true;
    return !moment(current).isSame(previous, "day");
  };

  return (
    <div className="w-full h-[90vh] bg-zinc-900 text-white flex flex-col rounded-xl shadow-md border border-zinc-700 p-4">
      <h2 className="text-xl font-bold mb-4 border-b border-zinc-700 pb-2">
        📢 Group Chat
      </h2>

      <div className="flex-1 overflow-y-auto space-y-2 px-2 py-1 relative">
        {messages.map((msg, index) => {
          const prevMsg = messages[index - 1];
          const showDate = isDifferentDate(msg.createdAt, prevMsg?.createdAt);
          const isCurrentUser = msg.sender === userId;

          return (
            <div key={msg._id || index} className="relative group">
              {showDate && (
                <div className="text-xs text-gray-400 text-center my-2">
                  {moment(msg.createdAt).format("MMMM Do, YYYY")}
                </div>
              )}

              <div
                className={`flex ${
                  isCurrentUser ? "justify-end" : "justify-start"
                }`}
              >
                <div className="relative max-w-xs md:max-w-md">
                  {/* Message Bubble */}
                  <div
                    className={`px-4 py-2 rounded-lg text-sm shadow-md ${
                      isCurrentUser
                        ? "bg-blue-600 text-white rounded-br-none"
                        : "bg-zinc-800 text-gray-200 rounded-bl-none"
                    }`}
                  >
                    <p>{msg.content}</p>
                    
                      <span className="block text-xs text-zinc-400 mt-1">
                        {isCurrentUser ? "You" : msg.sender.name}
                      </span>
                    
                  </div>

                  {/* Time on hover */}
                  <div
                    className={`absolute ${
                      isCurrentUser ? "-left-20" : "-right-20"
                    } top-1/2 -translate-y-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition`}
                  >
                    {moment(msg.createdAt).format("hh:mm A")}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div ref={bottomRef} />
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
          value={inputValue}
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
