
import React from 'react';
import ChatSidebar from './ChatSidebar';
import ChatPanel from './ChatPanel';

const ChatLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-zinc-900 text-white">
      <ChatSidebar />
      <ChatPanel />
    </div>
  );
};

export default ChatLayout;
