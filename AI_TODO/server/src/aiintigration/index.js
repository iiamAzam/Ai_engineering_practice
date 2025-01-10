import { ChatGroq } from "@langchain/groq";

    const llm = new ChatGroq({
        model:'llama-3.2-11b-vision-preview',
        temperature:0,
        maxTokens: 400,
        maxRetries:2,
        apiKey : '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'
    })

const ai_fun = async (system,user)=>{
   

    const aimsg = await llm.invoke([
            {
                role:'system',
                content : system

            },
            {
                role:"user",
                content:user
            }
        ])
        return aimsg 
}

export default   ai_fun
