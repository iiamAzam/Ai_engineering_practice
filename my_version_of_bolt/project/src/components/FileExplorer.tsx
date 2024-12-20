import React from 'react';
import { Folder, File ,ChevronDown,ChevronRight,FolderTree} from 'lucide-react';
import {FileItem}  from '../types'


interface Filetype {
  files: FileItem[]
  onFileSelect: (file : FileItem) => void;
}

interface FileNodeProps {
  item: FileItem;
  depth: number;
  onFileClick: (file: FileItem) => void;
}

function FileNode({ item, depth, onFileClick }: FileNodeProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = () => {
    if (item.type === 'folder') {
      setIsExpanded(!isExpanded);
    } else {
      onFileClick(item);
    }
  };

  return (
    <div className="select-none">
      <div
        className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded-md cursor-pointer"
        style={{ paddingLeft: `${depth * 1}rem` }}
        onClick={handleClick}
      >
        {item.type === 'folder' && (
          <span className="text-gray-400">
            {isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </span>
        )}
        {item.type === 'folder' ? (
          <FolderTree className="w-4 h-4 text-blue-400" />
        ) : (
          <File className="w-4 h-4 text-gray-400" />
        )}
        <span className="text-gray-200">{item.name}</span>
      </div>
      {item.type === 'folder' && isExpanded && item.children && (
        <div>
          {item.children.map((child, index) => (
            <FileNode
              key={`${child.path}-${index}`}
              item={child}
              depth={depth + 1}
              onFileClick={onFileClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}





export function FileExplorer({files, onFileSelect}:Filetype) {
  return (
    <div className="h-[350px] overflow-y-scroll  bg-gray-900 border-r border-gray-800">
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-300 mb-2">Files</h3>
        <div className="space-y-1">
          {/* {files.map((file) => (
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
          ))} */}
            {files.map((file, index) => (
          <FileNode
            key={`${file.path}-${index}`}
            item={file}
            depth={0}
            onFileClick={onFileSelect}
          />
        ))}


        </div>
      </div>
    </div>
  );
}