import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

interface ChatPanelProps {
  user: {
    id: number;
    name: string;
    username: string;
  } | null;
  onSendMessage: (message: string) => void;
}

const ChatPanel: React.FC<ChatPanelProps> = ({ user, onSendMessage }) => {
  const [message, setMessage] = useState('');
   
  

  if (!user) return <div>Select a user to chat</div>;

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden ">
      <ChatHeader title={user.name || user.username} />
      
      <div className="flex-1 overflow-y-auto bg-zinc-900 py-2 scrollbar-none">
        <div className="text-center text-zinc-500 text-xs py-2">17 June 2021 20:36</div>
        
        {/* <ChatMessage
          content=""
          isSystem={true}
          systemUser="Mohan Divekar"
          systemAction="joined the conversation"
        />
        
        <ChatMessage
          content=""
          isSystem={true}
          systemUser="Mohan Divekar"
          systemAction="named the meeting Meeting with Mohan Divekar"
        /> */}
        
        <ChatMessage
          isNotification={true}
          content="Your meeting is created. Meeting link: https://teams.live.com/meet/95676644685958"
        />
      </div>
      
      <div className="p-4">
        <input
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="border p-2 w-full"
        />
        <button
          onClick={() => {
            onSendMessage(message);
            setMessage('');
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
