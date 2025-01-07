const express = require('express')
const authmodel = require('../../schemas/authmodel')
const route = express.Router()
const bcrypt = require('bcrypt')

route.post('/signup',async(req,res)=>{
        const {name,password}= req.body
        const  isthere = await authmodel.findeone({name})
        if(isthere){
                return res.status(401).json('user already present')
        }
        try
        {
                const sign_id = new authmodel({
                        name,
                        password
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
     try  { const ispresent=await authmodel.findeone({name})
        if(!ispresent){
                return res.status(402).json('user not present')
        }
        const present = await bcrypt.compare(password, ispresent.password)
        if(!present){
                return res.status(402).json('invalid crediantial')
        }
        res.status(200).json('successfully logen in ')}
        catch(error){
                console.log(error)
                throw error
        }
        
})
