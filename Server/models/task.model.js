import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required :true,
    },
    description:{
        type:String,
        require: true
    },
    date:{
        type: date,
        default: date.now
    }   
},{
    timestamps:true
})

export default mongoose.model('task',taskSchema)