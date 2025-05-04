
import React from 'react';
import { Smile, Send, PaperclipIcon, Image, Mic } from 'lucide-react';

const ChatInput: React.FC = () => {
  return (
    <div className="bg-zinc-900 border-t border-zinc-800 p-4">
      <div className="flex items-center bg-zinc-800 rounded-md px-3 py-2 max-w-[85%] mx-auto">
        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 bg-transparent text-white outline-none text-sm"
        />
        <div className="flex items-center space-x-2 text-zinc-400">
          <button className="p-1 rounded-full hover:bg-zinc-700 hover:text-white">
            <Image className="h-5 w-5" />
          </button>
          <button className="p-1 rounded-full hover:bg-zinc-700 hover:text-white">
            <Mic className="h-5 w-5" />
          </button>
          <button className="p-1 rounded-full hover:bg-zinc-700 hover:text-white">
            <Smile className="h-5 w-5" />
          </button>
          <button className="p-1 rounded-full hover:bg-zinc-700 hover:text-white">
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
