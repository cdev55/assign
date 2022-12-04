import Task from '../models/task.js'
export const addTask=async(req,res)=>{
    let task;
    try {
         task= req.body;
         let newTask=new Task(task)
         await newTask.save();
         return res.status(200).json({msg:'New Task added Successfully',task});
        } catch (error) {
        return res.status(500).json({msg:'Error while adding task'});
}
};

export const getTask=async(req,res)=>{
    let task;
    try {
        task= await Task.find({});
        return res.status(201).json(task);

    } catch (error) {
        return res.status(400).json({msg:'No task found'});
    }
}