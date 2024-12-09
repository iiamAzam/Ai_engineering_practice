const express = require('express')
const { Server } = require('socket.io')
const axios = require('axios')
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
const modelAPIUrl =
  'https://api-inference.huggingface.co/models/bigcode/starcoder'
const hugging_token = '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'
async function generateCode(inputText) {
  try {
    const response = await axios.post(
      modelAPIUrl,
      {
        inputs: inputText, // This is the input prompt for the model
      },
      {
        headers: {
          Authorization: `Bearer ${hugging_token}`, // Add the Bearer token for authorization
        },
      }
    )

    // Log the output from the model
    console.log('Generated Code:', response.data[0].generated_text)
  } catch (error) {
    console.error('Error while generating code:', error)
  }
}
generateCode('write hello world program in javascript')
app.listen(port, () => {
  console.log(`iam working at ${port}`)
})
