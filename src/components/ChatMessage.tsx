
import React from 'react';
import { cn } from '@/lib/utils';

interface MessageProps {
  content: string;
  timestamp?: string;
  isSystem?: boolean;
  isNotification?: boolean;
  systemUser?: string;
  systemAction?: string;
}

const ChatMessage: React.FC<MessageProps> = ({ 
  content, 
  timestamp, 
  isSystem = false,
  isNotification = false,
  systemUser,
  systemAction 
}) => {
  if (isSystem) {
    return (
      <div className="flex items-center py-2 px-4">
        <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center">
          <svg className="w-5 h-5 text-zinc-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="currentColor" />
          </svg>
        </div>
        <div className="ml-3 text-zinc-400 text-sm">
          <span className="text-white">{systemUser}</span> {systemAction}.
        </div>
      </div>
    );
  }
  
  if (isNotification) {
    return (
      <div className="flex justify-center my-3">
        <div className="bg-indigo-600 text-white rounded-lg px-4 py-2 max-w-3xl">
          <div className="flex items-center">
            <span>{content}</span>
            {timestamp && <span className="ml-2 text-xs opacity-70">{timestamp}</span>}
            <div className="ml-2 w-5 h-5 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex items-start py-1 px-4">
      <div className="flex-1 max-w-3xl">
        <div className="text-zinc-200 text-sm">{content}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
