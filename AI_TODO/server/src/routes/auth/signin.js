import express from 'express'
import authmodel from '../../schemas/auth.js'
import  bcrypt  from 'bcrypt'



const route = express.Router()
route.post('/signup',async(req,res)=>{
        const {name,password}= req.body
        const  isthere = await authmodel.find({name})
        if(!isthere.length===0){
                return res.status(401).json('user already present')
        }
        try
        {
                const hash = await bcrypt.hash(password,10)

                const sign_id = new authmodel({
                        name,
                        password:hash
                })
                const id =  await sign_id.save()
                return res.status(200).json({
                    id
                })
        }
        catch(err){
                throw err
        }
})  

route.post('/signin',async(req,res)=>{
        const {name, password} = req.body
     try  { const ispresent=await authmodel.find({name})
        if(!ispresent){
                return res.status(402).json('user not present')
        }
        const present = await bcrypt.compare (password, ispresent[0].password)
        
        if(!present){
                return res.status(402).json('invalid crediantial')
        }
        res.status(200).json('successfully logen in ')}
        catch(error){
                console.log(error)
                throw error
        }
        
})

export const router= route
