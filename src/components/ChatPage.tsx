import { useState } from "react";
import SearchBox from "./SearchBox";
import ChatPanel from "./ChatPanel";



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

const ChatPage: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<Record<number, Message[]>>({});

  const handleUserSelect = (user: User) => {
    setSelectedUser(user);
    if (!messages[user.id]) {
      setMessages((prev) => ({ ...prev, [user.id]: [] }));
    }
  };

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
    <div className="flex flex-col h-screen bg-zinc-950 text-white">
      <SearchBox onUserSelect={handleUserSelect} />
      <ChatPanel
        user={selectedUser}
        messages={selectedUser ? messages[selectedUser.id] || [] : []}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default ChatPage;
