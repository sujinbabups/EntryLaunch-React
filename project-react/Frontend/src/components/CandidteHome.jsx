import React, { useEffect, useState } from 'react'

const CandidteHome = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        // Fetch employer data from the backend
        const fetchEmployers = async () => {
          try {
            const response = await fetch('api/get-jobs'); // Adjust the URL to your endpoint
            if (response.ok) {
              const data = await response.json();
              setJobs(data);
            } else {
              console.error('Failed to fetch employers');
            }
          } catch (error) {
            console.error('Error:', error);
          }
        };
    
        fetchEmployers();
      }, []);

      const handleApply = (jobId) => {
        // Logic to handle the apply action
        console.log(`Applying for job with ID: ${jobId}`);
        // You can add further functionality here, like making an API call to apply for the job
      };


  return (
    <>
    <div className="canHome bg-gradient-to-r from-blue-300 to-blue-700 text-white p-8 rounded-lg relative top-[5%] ml-8 h-[540px] w-3/4" id="cnhome">
            <h2 className="text-3xl font-bold mb-6">Hi <span className="text-blue-900" id="can-name">name</span></h2>
            <div className="bg-white h-[400px] w-[90%]">
                <table className="w-[80%] text-black mx-auto relative top-[20%]">
                    <thead>
                        <tr className="bg-gray-600  border-blue-800 text-center h-10">
                            <th className='w-12'>Id</th>
                            <th className='w-[25%]'>Job</th>
                            <th>Location</th>
                            <th>Skills</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody id="jobtable">
                    {jobs.map((job) => (
            <tr key={job.id}>
              <td className="font-bold bg-white border-2 border-blue-800 text-center h-10">{job.job_id}</td>
              <td className="font-bold bg-white border-2 border-blue-800 text-center h-10">{job.job_name}</td>

              <td className="font-bold bg-white border-2 border-blue-800 text-center h-10">{job.location}</td>
              <td className="font-bold bg-white border-2 border-blue-800 text-center h-10">{job.skills}</td>
              <td className="font-bold bg-white border-2 border-blue-800 text-center h-10">{job.description}</td>
              <td className="font-bold bg-white border-2 border-blue-800 text-center h-10">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleApply(job.job_id)}
        >
          Apply
        </button>
      </td>

              
            
            </tr>
          ))}
                    </tbody>
                </table>
            </div>
        </div>

    </>
  )
}

export default CandidteHome
