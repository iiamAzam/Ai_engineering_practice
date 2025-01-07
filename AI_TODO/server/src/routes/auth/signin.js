const express = require('express')
const authmodel = require('../../schemas/authmodel')
const route = express.Router()

route.post('/signin',async(req,res)=>{
        const {name,password}= req.body
        const  isthere = await authmodel.find('name')
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

