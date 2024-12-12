import React, { useState } from 'react';
import { Blocks } from 'lucide-react';
import { ChatBox } from './components/ChatBox';
import { FileExplorer } from './components/FileExplorer';
import { CodeEditor } from './components/CodeEditor';
import { Preview } from './components/Preview';
import { ViewToggle } from './components/ViewToggle';
import { parseXml }   from  './parser'
import axios from 'axios';
import { Step, StepType } from './types';


function App() {
  const [response, setResponse] = useState('');
  const [steps, setsteps] = useState<Step[]>([])
  const [showEditor, setShowEditor] = useState(false);
  const [activeView, setActiveView] = useState<'code' | 'preview'>('code');
  const  backend_url= "http://localhost:8000"
  const handleSubmit = async (message: string) => {
    setResponse(`// Generated code for: ${message}\n\nfunction HelloWorld() {\n  return <div>Hello World</div>;\n}`);
    const respose = await axios.post(`${backend_url}/gettype`, {
          userinput: message
    })
    const { prompts, promptfor_ui } = respose.data
    setsteps(parseXml(promptfor_ui[0]).map((x:Step) => (
             {
        ...x,
        status:"pending"

            }
    )))
    const stepresponse = await axios.post(`${backend_url}/chat`, {
      message: [...prompts, message].map((content) => ({
        role: "user",
        content
          }))
      })



    setShowEditor(true);
  };
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
            Build What You Want to Build
          </h2>

          <div className="grid md:grid-cols-12 gap-4 h-[calc(100vh-300px)]">
            {/* Left Side - Chat */}
            <div className={`${showEditor ? 'md:col-span-4' : 'md:col-span-12'}
                           bg-gray-900 rounded-lg shadow-lg border border-gray-800`}>
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
                      />
                  </div>
                  <div className="md:col-span-9">
                    {activeView === 'code' ? (
                      <CodeEditor code={response} />
                    ) : (
                      <Preview />
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