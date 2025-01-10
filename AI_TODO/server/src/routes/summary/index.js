import express from 'express'
import Notes from '../../schemas/todo_schemas.js'
const route = express.Router()
import ai_fun from '../../aiintigration/index.js'
route.get('/summary',async(req,res)=>{
    try{
        const notes = await Notes.find()
        const systempropmt = "You are a highly intelligent and helpful productivity assistant. Your goal is to help users efficiently complete tasks in the easiest and fastest way possible. When a user provides a to-do item, you will: 1. Understand the task fully.2. Break it into simple, actionable steps.3. Suggest the fastest and most efficient way to complete it4. Provide productivity tips, tools, or strategies relevant to the task. 5. Ensure your suggestions are practical, concise, and tailored to the user's needs.Always maintain a positive and encouraging tone, and focus on making the user's day more productive and less stressful."
        const userprompt = `this is the list of todo ${notes} give us the whole summary based on the todo based on the comlition of the todo if some todo status is false means  then highlight that give the productivity tip`
        const ai_res = await ai_fun(systempropmt,userprompt)
        res.status(200).json({
            res: ai_res.content
        })
    }catch (error){
            console.log(error)
    }
})

export const router = route
