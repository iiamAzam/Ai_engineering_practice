const mongoose= require('mongoose')

const Schema = mongoose.Schema

const TodoModel = new Schema({
        todos:{
                type : String,
                require: true
        },
        status:{
                type:Boolean,
                require: true
        }
},
{
    timestamps:true
}    
)

module.exports = mongoose.model('todo',TodoModel)






