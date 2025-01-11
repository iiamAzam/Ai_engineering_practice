import React, { useEffect, useState } from 'react';
import { ListTodo, PlusCircle, CheckCircle2, Circle, Sparkles,X , FileText } from 'lucide-react';
import { useTodoStore } from './store';
import TextAnimator from './utils/TextAnimator'

function App() {
  const [newTodo, setNewTodo] = useState('');
  const { todos, suggestion, summary, addTodo,  toggleTodo, generateSummary,deleteTodo} = useTodoStore();
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [worsstring, setwordstring] = useState('')
  const [summar1,setsummary1]=useState('')
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo.trim());
      setNewTodo('');
    }
  };
  const updateword =(text1:string)=>{
      setwordstring(text1)
  } 
  
  useEffect(() => {
      const container = containerRef.current;
      if (container) {
        container.scrollTop = container.scrollHeight;    
      }
  }, [worsstring]);
  
  const onsummary= ()=>{
    setsummary1('')
  }
  const setsummary=()=>{
    setsummary1(summary)
  }


  return (
    <div className="min-h-screen relative bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      {/* <h2 className='text-center ml-[530px] mb-4 inline-block px-5 py-3 bg-white shadow-md rounded-md font-bold text-[20px]'>Todo With Ai Suggetion</h2> */}
      <div className="max-w-6xl  flex gap-8">
        {/* Todo List Section */}
        <div className=" bg-white w-[500px] transition-all duration-200 ease-in-out rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-2 mb-6">
            <ListTodo className="w-6 h-6 text-purple-600" />
            <h1 className="text-2xl font-bold text-gray-800">Smart Todo List</h1>
          </div>

          <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex gap-2">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Add a new todo..."
              />
              <button
                type="submit"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
              >
                <PlusCircle className="w-5 h-5" />
                Add
              </button>
            </div>
          </form>

          <div className="space-y-3">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className="text-purple-600 hover:text-purple-700"
                >
                  {todo.completed ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    <Circle className="w-5 h-5" />
                  )}
                </button>
                <span className={`flex  `}>
                 <div className={`mt-[6px] ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'} break-words whitespace-normal w-[320px]`}>{todo.text}</div> 
                  <button
                 
                 onClick={()=>{deleteTodo(todo.id)
                              
                 }}
                 className="px-4 py-2  max-h-10 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
                >
                  delete
                </button>
                </span>
                
              </div>
            ))}
          </div>

          {todos.length > 0 && (
           
           <button
              onClick={()=>{
                generateSummary()
                setsummary()
              }}
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <FileText  className="w-5 h-5" />
              Generate Summary
            </button>
          )}
        </div>

        
        <div className="">
          <div   ref={containerRef} className="bg-white  scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-transparent  rounded-xl shadow-lg max-h-[600px] overflow-y-auto w-[900px] p-6">
            <div  className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <h2 className="text-lg font-semibold text-gray-800">Ai Suggestions</h2>
            </div>
            <div >

            <TextAnimator text={suggestion} updateword={updateword}/>
            </div>
            
            {/* <p className="text-gray-600">{suggestion || 'Add a todo to get suggestions!'}</p> */}
          </div>

          {summar1 && (
            <div className='w-full h-full absolute  top-0 left-0 bg-black bg-opacity-50'>
            <div className="bg-white absolute  top-[250px] left-[500px]   rounded-xl shadow-lg p-6">

              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-blue-500" />
                <h2 className="text-lg font-semibold text-gray-800">Todo Summary</h2>
                <X onClick={onsummary} className="w-5 h-5 ml-[480px] cursor-pointer text-black"/>
              </div>
              <p className="text-gray-600">{summary}</p>
            </div>
            </div>

          )}
        </div>
      </div>
    </div>
  );
}

export default App;