const express = require('express')
const { Server } = require('socket.io')
const axios = require('axios')
const { ChatGroq } = require('@langchain/groq')
require('dotenv').config()
// const { HfInference } = require('@huggingface/inference')

const app = express()

const http = require('http')
const httpserver = http.createServer(app)
const io = new Server(httpserver)
app.use(express.json)
const port = 3000
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'iam working fine',
  })
})
const GROQ_API_KEY = process.env.GROK_API_KEY

const llm = new ChatGroq({
  model: 'llama3-70b-8192',
  temperature: 0,
  maxTokens: 1000,
  maxRetries: 2,
  apiKey: GROQ_API_KEY,
})

async function invoke() {
  const aiStream = await llm.invoke([
    {
      role: 'system',
      content: 'You are a full stack developer.',
    },
    {
      role: 'user',
      content: 'Write a simple todo web app.',
    },
  ])
  console.log(aiStream)
}
invoke()

// const hugging_token = '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'

app.listen(port, () => {
  console.log(`iam working at ${port}`)
})
