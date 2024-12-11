const express = require('express')
const { Server } = require('socket.io')
const { ChatGroq } = require('@langchain/groq')
const basePrompt = require('./src/default/react.js')
const NodebasePrompt = require('./src/default/node.js')
const { getSystemPrompt } = require('./src/prompt')
require('dotenv').config()
const cors = require('cors')
// const { HfInference } = require('@huggingface/inference')
const BASE_PROMPT = require('./src/prompt')
const app = express()
const http = require('http')
const httpserver = http.createServer(app)
const io = new Server(httpserver)
app.use(express.json())
const port = 8000
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

async function invoke(userinput) {
  const aiStream = await llm.invoke([
    {
      role: 'system',
      content: 'You are a full stack developer.',
    },
    {
      role: 'user',
      content: `${userinput} based on this inpute tell us which type of application is this give us a simple word for example react,node,next, etc
       dont build the full app just tell me which is app dont do any exaplaination just give me one word  `,
    },
  ])
  return aiStream
}
app.use(cors())
app.post('/gettype', async (req, res) => {
  const { userinput } = req.body
  console.log(userinput)
  const response = await invoke(userinput)
  if (response.content !== 'React' && response.content !== 'Node') {
    res.status(400).json({
      val: 'please check the prompt',
    })
  }

  if (response.content === 'React') {
    return res.status(200).json({
      prompt: [
        BASE_PROMPT,
        `Here is an artifact that contains all files of the project visible to you.\nConsider the contents of ALL files in the project.\n\n${basePrompt}\n\nHere is a list of files that exist on the file system but are not being shown to you:\n\n  - .gitignore\n  - package-lock.json\n`,
      ],
      promptfor_ui: basePrompt,
    })
  }
  if (response.content === 'Node') {
    return res.status(200).json({
      prompt: [
        BASE_PROMPT,
        `Here is an artifact that contains all files of the project visible to you.\nConsider the contents of ALL files in the project.\n\n${NodebasePrompt}\n\nHere is a list of files that exist on the file system but are not being shown to you:\n\n  - .gitignore\n  - package-lock.json\n`,
      ],
      promptforui: NodebasePrompt,
    })
  }
})

app.post('./chat', async (req, res) => {
  const message = req.body.message
  try {
    const aicall = await llm.invoke([
      {
        role: 'system',
        content: getSystemPrompt(),
      },
      {
        role: 'user',
        content: message,
      },
    ])
    res.status(200).json({
      response: aicall.content,
    })
  } catch (error) {
    res.status(400).json({
      message: 'somthing went wrong',
    })
  }
})

// const hugging_token = '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'

app.listen(port, () => {
  console.log(`iam working at ${port}`)
})
