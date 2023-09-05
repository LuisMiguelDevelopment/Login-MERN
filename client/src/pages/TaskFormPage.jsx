import {useForm} from 'react-hook-form'
import { useTasks } from '../context/taskContext';

const TaskFormPage = () => {

  const {register , handleSubmit}=useForm();
  const {createTask} = useTasks();

  const onSubmit = handleSubmit((data)=>{
   createTask(data);
  }) 

  return (
    <>
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <input type="text" className="min-w-full bg-zinc-700 text-white my-4 px-4 py-2 rounded-md" placeholder="Title" {...register("title")} />
          <textarea  rows="3" className="min-w-full bg-zinc-700 text-white my-4 px-4 py-2 rounded-md" {...register("description")}></textarea>
          <button>
              SAVE
          </button>
        </form>
      </div>
    </>
  )
}

export default TaskFormPage