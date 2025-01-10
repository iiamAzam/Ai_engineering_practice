import mongoose from 'mongoose'
const Schema = mongoose.Schema
const notesmodel = new Schema({
    title:{
            type : String,
            require:true
        } ,
    content:  {
            type : String,
            require:true

        }
},{
        timestamps:true
})


const notemodel = mongoose.model("note", notesmodel )

export default notemodel