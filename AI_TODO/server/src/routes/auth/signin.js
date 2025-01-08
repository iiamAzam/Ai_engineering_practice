import express from 'express'
import authmodel from '../../schemas/auth'
const route = express.Router()
import  bcrypt  from 'bcrypt'

route.post('/signup',async(req,res)=>{
        const {name,password}= req.body
        const  isthere = await authmodel.find({name})
        if(!isthere.length===0){
                return res.status(401).json('user already present')
        }
        try
        {
                const hash = await bcrypt.hash(password,10)
                console.log(hash)

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
        const present = await bcrypt.compare(password, ispresent[0].password)
        if(!present){
                return res.status(402).json('invalid crediantial')
        }
        res.status(200).json('successfully logen in ')}
        catch(error){
                console.log(error)
                throw error
        }
        
})


route.use('/n',import('../notes/index'))
route.use('/s',import('../summary/index'))
route.use('/t',import('../todos/todos'))

export default route
