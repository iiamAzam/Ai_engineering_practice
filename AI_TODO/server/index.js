
import express from 'express'
import cors from 'cors'
import Dotenv from 'dotenv'
import mongoose from 'mongoose'

import {router as notesRouter}  from './src/routes/notes/index.js'
import {router as summaryRouter}  from './src/routes/summary/index.js'
import {router as todosRouter}  from './src/routes/todos/todos.js'
import {router as authRouter} from './src/routes/auth/signin.js'
Dotenv.config()
const app = express()
const port = process.env.PORT || 8000
app.use(cors())
app.use (express.json())

app.use('/n', notesRouter)
app.use('/s', summaryRouter)
app.use('/t', todosRouter)
app.use('/', authRouter)
app.get('/',(req,res)=>{
        res.status(200).json("iam working")
})
mongoose.connect('mongodb://localhost:27017/todo');

app.listen(port, ()=>{
        console.log(`the server is running on the port : ${port}`)
})


