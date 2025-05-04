
import React from 'react';
import { MoreHorizontal, Users } from 'lucide-react';

interface ChatHeaderProps {
  title: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ title }) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800">
      <div className="flex items-center">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="px-4 py-1 text-sm text-white border-b-2 border-white">Chat</div>
        <div className="px-4 py-1 text-sm text-zinc-400">Files</div>
        <div className="px-4 py-1 text-sm text-zinc-400">Photos</div>
      </div>
      
      <div className="flex items-center space-x-2">
        <button className="px-3 py-1 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
          Join
        </button>
        <div className="flex items-center bg-zinc-800 rounded-md px-2 py-1">
          <Users className="h-4 w-4 text-white" />
          <span className="ml-1 text-white">1</span>
        </div>
        <button className="text-zinc-400 hover:text-white">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
