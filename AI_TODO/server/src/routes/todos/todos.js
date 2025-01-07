const express = require('express')
const ai_fun = require('../../aiintigration/index')
const todomodule = require('../../schemas/todo_schemas')
const rout = express.Router()
rout.post('/todo', async(req,res)=>{
        const {todo,status} = req.body
        try {
            const newtodo =  new  todomodule({
                    todos:todo,
                    status
            })
            const systempropmt = "You are a highly intelligent and helpful productivity assistant. Your goal is to help users efficiently complete tasks in the easiest and fastest way possible. When a user provides a to-do item, you will:1. Understand the task fully.2. Break it into simple, actionable steps.3. Suggest the fastest and most efficient way to complete it4. Provide productivity tips, tools, or strategies relevant to the task. 5. Ensure your suggestions are practical, concise, and tailored to the user's needs.Always maintain a positive and encouraging tone, and focus on making the user's day more productive and less stressful."

            const userprompt = "I have a task: [Insert your to-do item here Please provide:1. An easy way to do this.2. The fastest method to complete it.3. Any relevant productivity tips or tools I can use."
            const savestodo = await newtodo.save()
            if(!savestodo){
                return res.status(400).json('somthing went wrong')
            }
            const ai_res = await ai_fun(systempropmt,userprompt)
            if(!ai_res){
                return res.status(400).json('somthing went wrong')
            }
            res.status (200).json({
                airesponse:ai_res.content,
                todo_id:savestodo
            })

        }catch (error){
                console.log(error)
                return res.status(400).json('something went wrong')
        }

})

rout.put('/todo/:id', async (req, res) => {
    const { id } = req.params;
    const { todo, status } = req.body;

    try {
        const updatedTodo = await todomodule.findByIdAndUpdate(id, { todos: todo, status }, { new: true });
        if (!updatedTodo) {
            return res.status(404).json('Todo not found');
        }

        res.status(200).json(updatedTodo);
    } catch (error) {
        console.log(error);
        return res.status(400).json('Something went wrong');
    }
});


rout.delete('/todo/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedTodo = await todomodule.findByIdAndDelete(id);
        if (!deletedTodo) {
            return res.status(404).json('Todo not found');
        }

        res.status(200).json({ message: 'Todo deleted successfully', todo_id: deletedTodo._id });
    } catch (error) {
        console.log(error);
        return res.status(400).json('Something went wrong');
    }
});

// GET: Fetch all todos
rout.get('/todos', async (req, res) => {
    try {
        const todos = await todomodule.find();
        res.status(200).json(todos);
    } catch (error) {
        console.log(error);
        return res.status(400).json('Something went wrong');
    }
});

// GET: Fetch a single todo by ID
rout.get('/todo/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const todo = await todomodule.findById(id);
        if (!todo) {
            return res.status(404).json('Todo not found');
        }

        res.status(200).json(todo);
    } catch (error) {
        console.log(error);
        return res.status(400).json('Something went wrong');
    }
});





