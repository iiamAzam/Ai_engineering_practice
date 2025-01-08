const express = require('express')
const cors = require ('cors')
const Dotenv = require('dotenv')
Dotenv.config()
const app = express()
const port = process.env.PORT || 8000
app.use (express.json())
app.get('/',(req,res)=>{
        res.status(200).json("iam working")
})
app.use('/',require('./src/routes/auth/signin'))
app.listen(port, ()=>{
        console.log(`the server is running on the port : ${port}`)
})


