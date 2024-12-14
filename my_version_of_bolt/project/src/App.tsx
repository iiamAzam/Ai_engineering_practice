import React, { useEffect, useState } from 'react';
import { Blocks, Code, Files } from 'lucide-react';
import { ChatBox } from './components/ChatBox';
import { FileExplorer } from './components/FileExplorer';
import { Preview } from './components/Preview';
import { ViewToggle } from './components/ViewToggle';
import {useWebContainer} from './hooks/useWebContainer'
import { parseXml } from './parser'
import { CodeEditor } from './components/CodeEditor'
import axios from 'axios';
import { Step, StepType ,FileItem } from './types';


function App() {
  const webcontainer=useWebContainer()
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);
  const [response, setResponse] = useState('');
  const [steps, setsteps] = useState<Step[]>([])
  const [showEditor, setShowEditor] = useState(false);
  const [activeView, setActiveView] = useState<'code' | 'preview'>('code');
  const backend_url = "http://localhost:8000"
   const [files, setFiles] = useState<FileItem[]>([]);
  const handleSubmit = async (message: string) => {
    setResponse(`// Generated code for: ${message}\n\nfunction HelloWorld() {\n  return <div>Hello World</div>;\n}`);
    const respose = await axios.post(`${backend_url}/gettype`, {
          userinput: message
    })
    const { prompts, promptfor_ui } = respose.data
    console.log(prompts)
    setsteps(parseXml(promptfor_ui[0]).map((x:Step) => (
             {
        ...x,
        status:"pending"
            }
    )))

    const stepresponse = await axios.post(`${backend_url}/chat`,{
      message: [...prompts, message].map((content) => ({
        role: "user",
        content
          }))
    })
    console.log(stepresponse)
    setShowEditor(true);
  };


  useEffect(() => {
    let originalFiles = [...files];
    let updateHappened = false;
    steps.filter(({status}) => status === "pending").map(step => {
      updateHappened = true;
      if (step?.type === StepType.CreateFile) {
        let parsedPath = step.path?.split("/") ?? []; // ["src", "components", "App.tsx"]
        let currentFileStructure = [...originalFiles]; // {}
        const finalAnswerRef = currentFileStructure;

        let currentFolder = ""
        while(parsedPath.length) {
          currentFolder =  `${currentFolder}/${parsedPath[0]}`;
          const currentFolderName = parsedPath[0];
          parsedPath = parsedPath.slice(1);

          if (!parsedPath.length) {
            // final file
            const file = currentFileStructure.find(x => x.path === currentFolder)
            if (!file) {
              currentFileStructure.push({
                name: currentFolderName,
                type: 'file',
                path: currentFolder,
                content: step.code
              })
            } else {
              file.content = step.code;
            }
          } else {
            /// in a folder
            const folder = currentFileStructure.find(x => x.path === currentFolder)
            if (!folder) {
              // create the folder
              currentFileStructure.push({
                name: currentFolderName,
                type: 'folder',
                path: currentFolder,
                children: []
              })
            }

            currentFileStructure = currentFileStructure.find(x => x.path === currentFolder)!.children!;
          }
        }
        originalFiles = finalAnswerRef;
      }

    })

    if (updateHappened) {

      setFiles(originalFiles)
      setsteps(steps => steps.map((s: Step) => {
        return {
          ...s,
          status: "completed"
        }

      }))
    }
    console.log(files);
  }, [steps, files]);

 useEffect(() => {
    const createMountStructure = (files: FileItem[]): Record<string, any> => {
      const mountStructure: Record<string, any> = {};

      const processFile = (file: FileItem, isRootFolder: boolean) => {
        if (file.type === 'folder') {
          // For folders, create a directory entry
          mountStructure[file.name] = {
            directory: file.children ?
              Object.fromEntries(
                file.children.map(child => [child.name, processFile(child, false)])
              )
              : {}
          };
        } else if (file.type === 'file') {
          if (isRootFolder) {
            mountStructure[file.name] = {
              file: {
                contents: file.content || ''
              }
            };
          } else {
            // For files, create a file entry with contents
            return {
              file: {
                contents: file.content || ''
              }
            };
          }
        }

        return mountStructure[file.name];
      };

      // Process each top-level file/folder
      files.forEach(file => processFile(file, true));

      return mountStructure;
    };

    const mountStructure = createMountStructure(files);

    // Mount the structure if WebContainer is available
    console.log(mountStructure);
    webcontainer?.mount(mountStructure);
  }, [files, webcontainer]);








  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Blocks className="h-8 w-8 text-blue-400" />
            <h1 className="text-xl font-bold text-gray-100">Website Builder</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <div className="max-w-7xl mx-auto px-4 py-8 w-full flex-1">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-100">

          </h2>

          <div className="grid md:grid-cols-12 gap-4 h-[calc(100vh-300px)]">
            {/* Left Side - Chat */}
            <div className={`${showEditor ? 'md:col-span-4' : 'md:col-span-12'}
                           bg-gray-900 overflow-y-auto h-[400px] rounded-lg shadow-lg border border-gray-800`}>
              <div className='  p-5 overflow-y-auto '>
                {
                  steps.map((e,i) => (
                    <p
                      key={e.id+i}
                    >
                      <ul>
                        <li>{e.title}</li>
                      </ul>

                      </p>
                    ))
                  }
              </div>
                <ChatBox onSubmit={handleSubmit} />
            </div>


            {/* Right Side - Editor Area */}
            {showEditor && (
              <div className="md:col-span-8 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <ViewToggle
                    activeView={activeView}
                    onViewChange={setActiveView}
                  />
                </div>

                <div className="grid md:grid-cols-12 gap-4 flex-1">
                  <div className="md:col-span-3">
                    <FileExplorer
                      files={files}
                      onFileSelect={setSelectedFile}
                      />
                  </div>
                  <div className="md:col-span-9">
                    {activeView === 'code' ? (
                      <CodeEditor file={selectedFile} />
                    ) : (
                      <Preview  />
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;