import React, { useEffect, useState } from 'react'
// import { toast } from 'react-toastify';

const Candidatejobs = () => {
  const [jobs, setJobs] = useState([]);
  const [details, setDetails] = useState([]);

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

    // Fetch details data from the backend
    const fetchDetails = async () => {
      try {
        const response = await fetch('/api/get-jobs');
        if (response.ok) {
          const data = await response.json();
          setDetails(data);
        } else {
          console.error('Failed to fetch details');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchJobs();
    fetchDetails();
  }, []);

  return (
    <div className="myappl bg-gradient-to-r from-blue-300 to-blue-700 text-white p-8 rounded-lg relative top-[5%] ml-8 h-[540px] w-[65%] overflow-auto " id="appli">
      <h3 className="text-3xl font-bold mb-6">Your Applied jobs</h3>
      <table className="w-[80%] text-black mx-auto relative ">
        <thead>
          <tr className="bg-purple-500 border-blue-800 text-center text-white h-10">
            <th className="w-[25%]">Job</th>
            <th>Location</th>
            <th>Skills</th>
            <th>Last Date</th>
            <th>Job Status</th>
          </tr>
        </thead>
        <tbody>
          {details.map((dt) => {
            const job = jobs.find(job => job._id === dt.jobId); // Assuming there's a jobId field to match
            const txtclr = job && job.action === 'selected' ? 'text-green-700' : 'text-red-600';
            return (
              <tr key={dt.jobId}>
                <td className="font-bold bg-white border-2 border-blue-800 text-center h-10">{dt.job_name}</td>
                <td className="font-bold bg-white border-2 border-blue-800 text-center h-10">{dt.location}</td>
                <td className="font-bold bg-white border-2 border-blue-800 text-center h-10">{dt.skills}</td>
                <td className="font-bold bg-white border-2 border-blue-800 text-center h-10">{dt.date}</td>
                <td className={`font-bold bg-white border-2 border-blue-800 text-center h-10 ${txtclr}`}>
                  {job ? job.action : 'pending'}
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