import { create } from 'zustand';
import { TodoStore, Todo } from './types';
import axios from 'axios';

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  suggestion: '',
  summary: '',

  

  addTodo: async (text) => {
    const todowith_id= await axios.post("http://localhost:8000/t/todo",{
          todo:text,
          status:false
    })
    if(todowith_id){
    try{
    const newTodo: Todo = {
      id: todowith_id.data.todo_id._id,
      text:todowith_id.data.todo_id.todos,
      completed: todowith_id.data.todo_id.status,
      createdAt: todowith_id.data.todo_id.createdAt,
    
    };
    set((state) => ({ 
      todos: [...state.todos, newTodo],
      suggestion:state.suggestion?state.suggestion+"\n"+todowith_id.data.airesponse:todowith_id.data.airesponse
    }));
  }catch(error){
      throw error
  }
  }
  },

  toggleTodo: async(id) => {
    console.log(id)
    const todowith_id= await axios.put(`http://localhost:8000/t/todo/${id}`)
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  },
  deleteTodo:(id)=>{
      set((state)=>({
        todos:state.todos.filter((e)=>e.id!=id)
      }))
  }
,
  generateSummary: () => {
    set((state) => {
      const completed = state.todos.filter(todo => todo.completed).length;
      const total = state.todos.length;
      return {
        summary: `You have completed ${completed} out of ${total} tasks. ${
          completed === total 
            ? 'Great job on completing all tasks!' 
            : `Keep going, you're making progress! ${total - completed} tasks remaining.`
        }`
      };
    });
  },
}));