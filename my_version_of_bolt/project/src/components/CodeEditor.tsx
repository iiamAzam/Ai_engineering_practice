import React from 'react';

interface CodeEditorProps {
  code: string;
}

export function CodeEditor({ code }: CodeEditorProps) {
  return (
    <div className="h-full bg-gray-900 text-gray-100 p-4 rounded-lg border border-gray-800">
      <pre className="font-mono text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
}