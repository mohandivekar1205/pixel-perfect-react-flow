import React from 'react';
import ChatSidebar from './ChatSidebar';
import ChatPanel from './ChatPanel';
import SearchBox from './SearchBox';

const ChatLayout: React.FC = () => {
  return (
    <div className="h-screen flex flex-col bg-zinc-900 text-white">
      {/* Top Search Bar */}
      <div className=" border-none border-zinc-800 ">
        <SearchBox />
      </div>

      {/* Main Content: Sidebar + Chat */}
      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/4 border-none border-zinc-800 overflow-y-auto">
          <ChatSidebar />
        </div>
        <div className="flex-1 border-none overflow-y-auto">
          <ChatPanel />
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;
