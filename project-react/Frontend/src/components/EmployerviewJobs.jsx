import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const EmployerviewJobs = ({}) => {
  const [jobs, setJobs] = useState([]);
  const [editJobId, setEditJobId] = useState(null);
  const [jobDetails, setJobDetails] = useState({
    job_id: '',
    job_name: '',
    location: '',
    skills: '',
    description: ''
  });

  useEffect(() => {
    // Fetch jobs data from the backend
    const fetchJobs = async () => {
      try {
        const response = await fetch('/api/job-details');
        if (response.ok) {
          const data = await response.json();
          setJobs(data);
          
        } else {
          console.error('Failed to fetch jobs');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchJobs();
  }, []);

  const handleEdit = (job) => {
    setEditJobId(job.job_id);
    setJobDetails(job);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/update-job', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jobDetails)
      });
      if (response.ok) {
        const updatedJob = await response.json();
        setJobs(jobs.map(job => (job.job_id === updatedJob.job_id ? updatedJob : job)));
        setEditJobId(null);
        toast.success("Job details updated")
      } else {
        console.error('Failed to update job');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setJobDetails({ ...jobDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="myappl bg-gradient-to-r from-blue-300 to-blue-700 text-white p-8 rounded-lg relative top-[5%] ml-8 h-[500px] w-[65%] hidden-section overflow-y-scroll" id="appli">
      <h3 className="text-3xl font-bold mb-6">Your Posted Jobs</h3>
      <table className="w-[80%] text-black mx-auto relative top-[20%]">
        <thead>
          <tr className="bg-purple-500 border-blue-800 text-center text-white h-10">
            <th className="w-[25%]">Job</th>
            <th>Location</th>
            <th>Skills</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.job_id}>
              <td className="font-bold bg-white border-2 border-blue-800 text-center h-10">
                {editJobId === job.job_id ? (
                  <input
                    type="text"
                    name="job_name"
                    value={jobDetails.job_name}
                    onChange={handleChange}
                    className="border p-2 rounded w-full"
                  />
                ) : (
                  job.job_name
                )}
              </td>
              <td className="font-bold bg-white border-2 border-blue-800 text-center h-10">
                {editJobId === job.job_id ? (
                  <input
                    type="text"
                    name="location"
                    value={jobDetails.location}
                    onChange={handleChange}
                    className="border p-2 rounded w-full"
                  />
                ) : (
                  job.location
                )}
              </td>
              <td className="font-bold bg-white border-2 border-blue-800 text-center h-10">
                {editJobId === job.job_id ? (
                  <input
                    type="text"
                    name="skills"
                    value={jobDetails.skills}
                    onChange={handleChange}
                    className="border p-2 rounded w-full"
                  />
                ) : (
                  job.skills
                )}
              </td>
              <td className="font-bold bg-white border-2 border-blue-800 text-center h-10">
                {editJobId === job.job_id ? (
                  <input
                    type="text"
                    name="description"
                    value={jobDetails.description}
                    onChange={handleChange}
                    className="border p-2 rounded w-full"
                  />
                ) : (
                  job.description
                )}
              </td>
              <td className="font-bold bg-white border-2 border-blue-800 text-center h-10">
                {editJobId === job.job_id ? (
                  <button
                    onClick={handleUpdate}
                    className="bg-green-600 text-white py-1 px-2 rounded"
                  >
                    Update
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(job)}
                    className="bg-purple-800 text-white py-1 px-2 rounded"
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
  export default EmployerviewJobs
