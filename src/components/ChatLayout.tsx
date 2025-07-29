import React, { useState } from 'react';
import ChatSidebar from './ChatSidebar';
import ChatPanel from './ChatPanel';
import SearchBox from './SearchBox';

// User type matches SearchBox and ChatPanel
type User = {
  id: number;
  name: string;
  username: string;
};

type Message = {
  id: number;
  sender: string;
  text: string;
  timestamp: number;
};

const ChatLayout: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<Record<number, Message[]>>({});

  // Called when a user is selected in SearchBox
  const handleUserSelect = (user: User) => {
    setSelectedUser(user);
    if (!messages[user.id]) {
      setMessages((prev) => ({ ...prev, [user.id]: [] }));
    }
  };

  // Called when a message is sent in ChatPanel
  const handleSendMessage = (text: string) => {
    if (!selectedUser) return;
    const newMsg: Message = {
      id: Date.now(),
      sender: 'me',
      text,
      timestamp: Date.now(),
    };
    setMessages((prev) => ({
      ...prev,
      [selectedUser.id]: [...(prev[selectedUser.id] || []), newMsg],
    }));
  };


  return (
    <div className="h-screen flex flex-col bg-zinc-900 text-white">
      {/* Top Search Bar */}
      <div className="border-none border-zinc-800">
        <SearchBox onUserSelect={handleUserSelect} />
      </div>

      {/* Main Content: Sidebar + Chat */}
      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/4 border-none border-zinc-800 overflow-y-auto">
          <ChatSidebar />
        </div>
        <div className="flex-1 border-none overflow-y-auto">
          <ChatPanel
            user={selectedUser}
            messages={selectedUser ? messages[selectedUser.id] || [] : []}
            onSendMessage={handleSendMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;
