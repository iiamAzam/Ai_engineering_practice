import React from 'react';
import { Code, Eye } from 'lucide-react';

interface ViewToggleProps {
  activeView: 'code' | 'preview';
  onViewChange: (view: 'code' | 'preview') => void;
}

export function ViewToggle({ activeView, onViewChange }: ViewToggleProps) {
  return (
    <div className="flex bg-gray-800 rounded-lg p-1 gap-1">
      <button
        onClick={() => onViewChange('code')}
        className={`flex items-center gap-2 px-4 py-2 rounded ${
          activeView === 'code'
            ? 'bg-gray-700 text-blue-400'
            : 'text-gray-400 hover:text-gray-200'
        }`}
      >
        <Code size={16} />
        <span className="text-sm">Code</span>
      </button>
      <button
        onClick={() => onViewChange('preview')}
        className={`flex items-center gap-2 px-4 py-2 rounded ${
          activeView === 'preview'
            ? 'bg-gray-700 text-blue-400'
            : 'text-gray-400 hover:text-gray-200'
        }`}
      >
        <Eye size={16} />
        <span className="text-sm">Preview</span>
      </button>
    </div>
  );
}