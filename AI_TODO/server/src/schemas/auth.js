import mongoose from "mongoose"
const Schema=mongoose.Schema

const Signup = new Schema({
        name : {
            type: String,
            require : true
        },
        password:{
            type : String,
            require : true
        }
})


const authmodel = mongoose.model('user', Signup)

export default authmodel