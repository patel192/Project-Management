import axios from 'axios'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
export const TaskDetails = () => {
    const {id} = useParams()
    const [loading, setloading] = useState(true)
    const [task, settask] = useState(null)
    useEffect(() => {
      const fetchtask = async () =>{
        try{
         const res = await axios.get(`http://localhost:3000/task/${id}`)
         settask(res.data.data)
         setloading(false)
        }catch(err){
         console.error("Error While Fetching the Tasks",err)
        }
      }
      fetchtask();
    }, [id])
    if(loading) return <div>Loading....</div>
    if(!task) return <div>Tasks Not Found.</div>
  return (
   <div className="min-h-screen bg-[#0B1D51] text-[#91C8E4] p-6">
      <h1 className="text-3xl font-bold text-purple-400 mb-4">{task.title}</h1>
      <p className="mb-4 text-gray-300">{task.description}</p>

      <div className="space-y-2 text-sm">
        <p>
          <span className="font-semibold text-white">Status:</span>{" "}
          <span className="uppercase">{task.status}</span>
        </p>
        <p>
          <span className="font-semibold text-white">Priority:</span>{" "}
          <span className="capitalize">{task.priority}</span>
        </p>
        <p>
          <span className="font-semibold text-white">Due Date:</span>{" "}
          {new Date(task.dueDate).toLocaleDateString()}
        </p>
        <p>
          <span className="font-semibold text-white">Assigned To:</span>{" "}
          {task.assignedTo?.name || "Unassigned"}
        </p>
        <p>
          <span className="font-semibold text-white">Project:</span>{" "}
          {task.projectId?.name || "None"}
        </p>
        <p>
          <span className="font-semibold text-white">Created At:</span>{" "}
          {new Date(task.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  )
}
