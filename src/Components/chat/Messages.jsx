import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export const Messages = () => {
  return (
    <div className="w-full h-[90vh] bg-zinc-900 text-white flex flex-col rounded-xl shadow-md border border-zinc-700 p-4">
      <h2 className="text-xl font-bold mb-4 border-b border-zinc-700 pb-2">
        📢 Group Chat
      </h2>

      <div className="flex-1 overflow-y-auto space-y-2 px-4 py-2">
        <div>
          <div className="text-sm font-semibold"></div>
          <div></div>
        </div>
      </div>

      <div className="mt-4 flex items-center space-x-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-2 rounded-lg bg-zinc-800 border border-zinc-600 outline-none"
        />
        <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
          Send
        </button>
      </div>
    </div>
  );
};
