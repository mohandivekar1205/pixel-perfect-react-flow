
import React from 'react';
import { MessageSquare, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatItemProps {
  title: string;
  date: string;
  preview: string;
  isActive?: boolean;
  onClick?: () => void;
}

const ChatItem: React.FC<ChatItemProps> = ({ title, date, preview, isActive, onClick }) => {
  return (
    <div 
      className={cn(
        "flex items-center p-3 rounded-md cursor-pointer",
        isActive ? "bg-zinc-800" : "hover:bg-zinc-800"
      )}
      onClick={onClick}
    >
      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-zinc-700 flex items-center justify-center">
        <MessageSquare className="h-5 w-5 text-zinc-300" />
      </div>
      <div className="ml-3 flex-1 overflow-hidden">
        <div className="flex justify-between">
          <p className="text-sm font-medium text-white truncate">{title}</p>
          <p className="text-xs text-zinc-400">{date}</p>
        </div>
        <p className="text-xs text-zinc-400 truncate">{preview}</p>
      </div>
    </div>
  );
};

const ChatSidebar: React.FC = () => {
  return (
    <div className="w-80 h-full bg-zinc-900 flex flex-col border-r border-zinc-800">
      <div className="p-4 border-b border-zinc-800">
        <h1 className="text-xl font-bold text-white">Chat</h1>
      </div>
      
      <div className="p-2">
        <div className="flex items-center px-3 py-1.5 text-sm text-zinc-400">
          <span className="mr-2">▾</span>
          <span>Recent</span>
        </div>
        
        <div className="mt-2 space-y-1">
          <ChatItem
            title="Meeting with Mohan Divekar"
            date="17-06-2021"
            preview="You: Your meeting is created. Meeting link: https://teams.live.com/meet/9567..."
            isActive={true}
          />
        </div>
      </div>
      
      <div className="mt-auto border-t border-zinc-800 p-3">
        <button className="flex items-center justify-center w-full py-2 px-4 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors">
          <Users className="h-5 w-5 mr-2" />
          Invite to Teams
        </button>
      </div>
    </div>
  );
};

export default ChatSidebar;
