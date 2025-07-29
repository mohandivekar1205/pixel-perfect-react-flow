import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';



interface Message {
  id: number;
  sender: string;
  text: string;
  timestamp: number;
}

interface User {
  id: number;
  name: string;
  username: string;
}

interface ChatPanelProps {
  user: User | null;
  messages: Message[];
  onSendMessage: (message: string) => void;
}

const ChatPanel: React.FC<ChatPanelProps> = ({ user, messages, onSendMessage }) => {
  const [message, setMessage] = useState('');

  if (!user) return <div className="p-4">Select a user to chat</div>;

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden ">
      <ChatHeader title={user.name || user.username} />
      <div className="flex-1 overflow-y-auto bg-zinc-900 py-2 scrollbar-none">
        {messages.length === 0 ? (
          <div className="text-center text-zinc-500 text-xs py-2">No messages yet.</div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className={`mb-2 ${msg.sender === 'me' ? 'text-right' : 'text-left'}`}>
              <span className="block">{msg.text}</span>
              <span className="text-xs text-zinc-400">{new Date(msg.timestamp).toLocaleTimeString()}</span>
            </div>
          ))
        )}
      </div>
      <div className="p-4">
        <input
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="border p-2 w-full bg-zinc-800 text-white"
          onKeyDown={e => {
            if (e.key === 'Enter') {
              if (message.trim()) {
                onSendMessage(message);
                setMessage('');
              }
            }
          }}
        />
        <button
          onClick={() => {
            if (message.trim()) {
              onSendMessage(message);
              setMessage('');
            }
          }}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPanel;
