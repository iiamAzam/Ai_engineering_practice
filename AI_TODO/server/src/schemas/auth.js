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

export default mongoose.model('user', Signup)
