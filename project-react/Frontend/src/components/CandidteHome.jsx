import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
const CandidteHome = () => {
  const [jobs, setJobs] = useState([]);
  const [user, setUser] = useState({});
  const [appliedJobs, setAppliedJobs] = useState(new Set());

  useEffect(() => {
    // Fetch jobs data from the backend
    const fetchJobs = async () => {
      try {
        const response = await fetch('api/get-jobs'); // Adjust the URL to your endpoint
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

    // Fetch user data from the backend
    const fetchUser = async () => {
      try {
        const response = await fetch('api/get-user', {
          method: 'GET',
          credentials: 'include', // Include credentials in the request
        });
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchUser();
  }, []);

  const signupSubmit = async (jobDetails) => {
    const res = await fetch('api/apply-job', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jobDetails),
    });

    if (res.ok) {
      toast.success('Applied for the job');
      setAppliedJobs((prevAppliedJobs) => new Set(prevAppliedJobs).add(jobDetails.job_id));
    } else {
      toast.error('Cannot apply');
    }
  };

  const handleApply = (job) => {
    if (window.confirm('Do you want to apply for this job?')) {
    const jobDetails = {
      job_id: job.job_id,
      job:job.job_name,
      can_name: user.fname,
      email: user.email,
      course: user.course,
      skills: user.skills,
      place:user.place,
      description:job.description,
      postedBy:job.postedBy,

    };

    signupSubmit(jobDetails);
  }
  };

  return (
    <div className="canHome bg-gradient-to-r from-blue-300 to-blue-700 text-white p-8 rounded-lg relative top-[5%] ml-8 w-[65%] h-[540px]  overflow-auto shadow-lg transform transition-all duration-500 ease-in-out">
    <h2 className="text-3xl font-bold mb-6 animate-scroll ">
      Hi <span className="text-blue-900 text-4xl ">{user.fname}</span>
    </h2>
    <table className="w-[80%] text-black mx-auto relative animate-fadeIn">
      <thead>
        <tr className="bg-purple-600 border-blue-800 text-center h-10 ">
          <th className="w-12 ">Id</th>
          <th className="w-[25%] ">Job</th>
          <th className="">Location</th>
          <th className="">Skills</th>
          <th className="">Last Date</th>
          <th className="">Action</th>
        </tr>
      </thead>
      <tbody className='bg-red-200'>
        {jobs.map((job) => (
          <tr key={job.job_id} className="hover:bg-gray-200 transform transition-all duration-300 ease-in-out">
            <td className="font-bold bg-white border-2 border-blue-800 text-center h-10">{job.job_id}</td>
            <td className="font-bold bg-white border-2 border-blue-800 text-center h-10">{job.job_name}</td>
            <td className="font-bold bg-white border-2 border-blue-800 text-center h-10">{job.location}</td>
            <td className="font-bold bg-white border-2 border-blue-800 text-center h-10">{job.skills}</td>
            <td className="font-bold bg-white border-2 border-blue-800 text-center h-10">{job.date}</td>
            <td className="font-bold bg-white border-2 border-blue-800 text-center h-10">
              {appliedJobs.has(job.job_id) ? (
                <button className="bg-green-500 text-white font-bold py-2 px-4 rounded cursor-not-allowed animate-pulse">
                  Applied
                </button>
              ) : (
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transform transition-all duration-300 ease-in-out hover:scale-105"
                  onClick={() => handleApply(job)}
                >
                  Apply
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>  );
  
};


export default CandidteHome
