
import React from 'react';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

const ChatPanel: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <ChatHeader title="Meeting with Mohan Divekar" />
      
      <div className="flex-1 overflow-y-auto bg-zinc-900 py-2 scrollbar-none">
        <div className="text-center text-zinc-500 text-xs py-2">17 June 2021 20:36</div>
        
        <ChatMessage
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
        />
        
        <ChatMessage
          isNotification={true}
          content="Your meeting is created. Meeting link: https://teams.live.com/meet/95676644685958"
        />
      </div>
      
      <ChatInput />
    </div>
  );
};

export default ChatPanel;
