import React, { useState } from 'react';
import SearchBox from './SearchBox';
import ChatPanel from './ChatPanel';

interface User {
  id: number;
  name: string;
  username: string;
}

const ChatApp: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [recipientList, setRecipientList] = useState<User[]>([]);

  const handleUserSelect = (user: User) => {
    console.log('handleUserSelect received:', user);
    setSelectedUser(user);
    if (!recipientList.some(u => u.id === user.id)) {
      setRecipientList([...recipientList, user]);
    }
  };

  const handleSendMessage = (message: string) => {
    if (!message.trim() || !selectedUser) return;

    const alreadyExists = recipientList.some(u => u.id === selectedUser.id);
    if (!alreadyExists) {
      setRecipientList(prev => [...prev, selectedUser]);
    }

    // TODO: Replace with actual backend send logic
    console.log(`Message sent to ${selectedUser.username || selectedUser.name}: ${message}`);
  };

  return (
    <div className="flex">
      <SearchBox onUserSelect={handleUserSelect} />
      <ChatPanel user={selectedUser} onSendMessage={handleSendMessage} />
      {/* Optionally show recipient list */}
    </div>
  );
};

export default ChatApp;