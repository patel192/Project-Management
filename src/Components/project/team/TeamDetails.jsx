import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
export const TeamDetails = () => {
    const {id} = useParams();
    const [team, setteam] = useState(null)
    const [loading, setloading] = useState(true)

    useEffect(() => {
      const fetchteam = async() =>{
         try{
           const res = await axios.get(`http://localhost:3000/team/${id}`)
           setteam(res.data.data)
           setloading(false)
         }catch(err){
           console.error("Error Fetching Teams",err)
         }
      }
      fetchteam()
    }, [id])
    if(loading) return <div>Loading...</div>
    if(!team) return <div>Teams Not Found.</div>
    
  return (
     <div className="min-h-screen bg-[#0B1D51] text-[#91C8E4] p-6">
      <h1 className="text-3xl font-bold text-purple-400 mb-4">{team.name}</h1>
      <p className="mb-4 text-gray-300">{team.description}</p>

      <div className="mb-4">
        <span className="font-semibold text-white">Created By:</span>{" "}
        {team?.createdBy || "Unknown"}
      </div>

      <div className="mb-6">
        <span className="font-semibold text-white">Created At:</span>{" "}
        {new Date(team.createdAt).toLocaleDateString()}
      </div>

      <div>
        <h2 className="text-xl font-semibold text-purple-300 mb-2">Team Members</h2>
        <div className="flex flex-wrap gap-3">
          {team.members && team.members.length > 0 ? (
            team.members.map((member, idx) => (
              <span
                key={idx}
                className="bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-600 transition"
              >
                {member.name || member}
              </span>
            ))
          ) : (
            <p className="text-gray-400">No members in this team.</p>
          )}
        </div>
      </div>
    </div>
  )
}
