import React from 'react';
import { Folder, File } from 'lucide-react';

const files = [
  { name: 'index.html', type: 'file' },
  { name: 'styles.css', type: 'file' },
  { name: 'app.js', type: 'file' },
  { name: 'assets', type: 'folder' },
];


export function FileExplorer() {
  return (
    <div className="h-full bg-gray-900 border-r border-gray-800">
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-300 mb-2">Files</h3>
        <div className="space-y-1">
          {files.map((file) => (
            <div
              key={file.name}
              className="flex items-center gap-2 px-2 py-1 text-sm text-gray-300
                       hover:bg-gray-800 rounded cursor-pointer"
            >
              {file.type === 'folder' ? (
                <Folder size={16} className="text-blue-400" />
              ) : (
                <File size={16} className="text-gray-400" />
              )}
              {file.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}