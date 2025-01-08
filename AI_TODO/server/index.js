
import express from 'express'
import cors from 'cors'
import Dotenv from 'dotenv'
import mongoose from 'mongoose'
import rout from './src/routes/auth/signin'
Dotenv.config()
const app = express()
const port = process.env.PORT || 8000
app.use (express.json())
app.get('/',(req,res)=>{
        res.status(200).json("iam working")
})
mongoose.connect('mongodb://localhost:27017/todo');
  
app.use('/', rout)
app.listen(port, ()=>{
        console.log(`the server is running on the port : ${port}`)
})


