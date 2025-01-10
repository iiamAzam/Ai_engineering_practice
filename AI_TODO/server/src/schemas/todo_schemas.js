import mongoose from "mongoose"

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

 
const todomodule = mongoose.model('todo',TodoModel)
export default todomodule




