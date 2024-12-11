import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatBoxProps {
  onSubmit: (message: string) => void;
  className?: string;
}

export function ChatBox({ onSubmit, className = '' }: ChatBoxProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSubmit(message);
      setMessage('');
    }
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col p-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe what you want to build..."
          className="flex-1 w-full p-4 text-sm bg-gray-800 border border-gray-700 rounded-lg 
                   focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none 
                   text-gray-100 placeholder-gray-400"
        />
        <button
          type="submit"
          className="mt-4 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 
                   text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Send size={20} />
          Build It
        </button>
      </form>
    </div>
  );
}