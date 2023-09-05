import { createContext, useContext, useState } from "react";
import { createTaskRequest, getTasksRequest } from "../api/task";

const TaskContext = createContext();

export const useTasks = ()=>{
    const context = useContext(TaskContext);

    if(!context){
        throw new Error('useTasks must be used within a TasksProvier')
    }

    return context;
}

export function TasksProvier({children}){
    const [tasks , setTasks] =useState([]);

    const getTasks = async ()=>{
        try {
            const res = await getTasksRequest();
            setTasks(res.data);
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    const createTask = async (task)=>{
        console.log('task');
        const res = await createTaskRequest(task)
        console.log(res)
    }


    return(
        <TaskContext.Provider value={{
            tasks,
            createTask,
            getTasks
            }}>
            {children}
        </TaskContext.Provider>
    )
}