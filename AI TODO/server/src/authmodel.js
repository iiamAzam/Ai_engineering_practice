const mongoose = require('mongoose')

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
module.exports=mongoose.model('User',Signup)
