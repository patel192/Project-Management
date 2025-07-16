import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
export const ProjectDetails = () => {
  const { id } = useParams(); // gets project ID from URL
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/project/${id}`);
        setProject(res.data.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching project:", err);
      }
    };
    fetchProject();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!project) return <div>Project not found.</div>;
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{project.name}</h1>
      <p className="text-gray-600 mt-2">{project.description}</p>
      <p className="mt-2 text-sm">Status: <strong>{project.status}</strong></p>
      <p className="mt-2 text-sm">Start Date: {new Date(project.startDate).toLocaleDateString()}</p>
      <p className="mt-2 text-sm">End Date: {new Date(project.endDate).toLocaleDateString()}</p>
      <p className="mt-2 text-sm">Created By: {project.createdBy.name}</p>
    </div>
  )
}
