import Task from '../models/task.model.js'

export const getTasks = async (req , res)=>{
    const tasks = await Task.find({
        user: req.user.id
    }).populate('user')
    res.json(tasks);
}

export const getTask = async (req , res)=>{
    const task = await Task.findById(req.params.id)
    if(!task)return res.status(404).json({message:"Task not found"});
    res.status(200).json(task)
}

export const createTask = async (req , res)=>{
    const {title , description , date} = req.body;

    const newTask = new Task({
        title,
        description,
        date,
        user: req.user.id
    });
    const savedTask = await newTask.save();
    res.status(200).json(savedTask)
}
export const updateTask = async (req , res)=>{
    const task = await Task.findByIdAndUpdate(req.params.id , req.body ,{
        new : true
    })
    if(!task)return res.status(404).json({message:"Task not found"});
    res.status(201).json(task);
}

export const deleteTask = async (req , res)=>{
    const task = await Task.findByIdAndDetele(req.params.id)
    if(!task)return res.status(404).json({message:"Task not found"});
    return res.status(200);
}