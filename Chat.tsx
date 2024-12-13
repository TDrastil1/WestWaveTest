import React, { useState } from 'react';
import { Send, Image } from 'lucide-react';
import type { Message } from '../types';

const Chat: React.FC<{ messages: Message[] }> = ({ messages }) => {
  const [newMessage, setNewMessage] = useState('');

  return (
    <div className="flex-1 flex flex-col bg-gray-800 rounded-lg overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.userId === 'currentUser' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.userId === 'currentUser'
                  ? 'bg-blue-500'
                  : 'bg-gray-700'
              }`}
            >
              <p className="text-white">{message.content}</p>
              <span className="text-xs text-gray-300 mt-1">
                {new Date(message.timestamp).toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-gray-900">
        <div className="flex gap-2">
          <button className="p-2 rounded-full hover:bg-gray-700 transition-colors">
            <Image className="w-6 h-6" />
          </button>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-gray-700 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors">
            <Send className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;