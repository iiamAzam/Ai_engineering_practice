export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export interface TodoStore {
  todos: Todo[];
  suggestion: string;
  summary: string;
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  generateSummary: () => void;
  deleteTodo:(id:string)=>void
}