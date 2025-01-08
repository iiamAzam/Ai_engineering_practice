import { ChatGroq } from "@langchain/groq";

    const llm = new ChatGroq({
        model:'llama-3.2-11b-vision-preview',
        temperature:0,
        maxTokens: undefined,
        maxRetries:2
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
