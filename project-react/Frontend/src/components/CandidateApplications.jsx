import React, { useEffect, useState } from 'react'
// import { toast } from 'react-toastify';

const Candidatejobs = () => {
  const [jobs, setJobs] = useState([]);
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    // Fetch jobs data from the backend
    const fetchJobs = async () => {
      try {
        const response = await fetch('/api/app-details'); 
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
 
   
      
 
  return (
    <div className="myappl bg-gradient-to-r from-blue-300 to-blue-700 text-white p-8 rounded-lg relative top-[5%] ml-8 h-[540px] w-[65%] hidden-section" id="appli">
      <h3 className="text-3xl font-bold mb-6">Your jobs</h3>
      <table className="w-[80%] text-black mx-auto relative top-[20%]">
        <thead>
          <tr className="bg-purple-500 border-blue-800 text-center text-white h-10">
            <th className="w-[25%]">Job</th>
            <th>Location</th>
            <th>Skills</th>
            <th>Description</th>
            <th>job Status</th>
          </tr>
        </thead>
        <tbody>
          
        {jobs.map((job) => {
            const txtclr = job.action === 'selected' ? 'text-green-700' : 'text-red-600';
            return (
              <tr key={job._id}>
                <td className="font-bold bg-white border-2 border-blue-800 text-center h-10">{job.can_name}</td>
                <td className="font-bold bg-white border-2 border-blue-800 text-center h-10">{job.email}</td>
                <td className="font-bold bg-white border-2 border-blue-800 text-center h-10">{job.course}</td>
                <td className="font-bold bg-white border-2 border-blue-800 text-center h-10">{job.skills}</td>
                <td className={`font-bold bg-white border-2 border-blue-800 text-center h-10 ${txtclr}`}>
                  {job.action}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Candidatejobs