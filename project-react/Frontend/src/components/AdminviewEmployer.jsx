import React, { useEffect, useState } from 'react';

const AdminviewEmployer = () => {
  const [employers, setEmployers] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [employerCounts, setEmployerCounts] = useState({});

  useEffect(() => {
    const fetchEmployers = async () => {
      try {
        const response = await fetch('/api/get-employers');
        if (response.ok) {
          const data = await response.json();
          setEmployers(data);
        } else {
          console.error('Failed to fetch employers');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const fetchAppliedJobs = async () => {
      try {
        const response = await fetch('/api/get-applied-jobs');
        if (response.ok) {
          const data = await response.json();
          setAppliedJobs(data);
          calculateApprovedCounts(data);
        } else {
          console.error('Failed to fetch applied jobs');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const calculateApprovedCounts = (appliedJobs) => {
      const counts = {};
      appliedJobs.map((job) => {
        if (job.action === 'selected') {
          counts[job.postedBy] = (counts[job.postedBy] || 0) + 1;
        }
      });
      setEmployerCounts(counts);
    };

    fetchEmployers();
    fetchAppliedJobs();
  }, []);

  return (
    <div className="viewEmployer bg-gradient-to-r from-blue-700 to-blue-300 h-[440px] mt-12 w-[70%] rounded-lg">
      <h2 className="text-2xl font-sans mt-8 ml-10 text-white font-bold">View Employers</h2>
      <table className="mt-8 ml-[20%] w-90 mx-auto">
        <thead>
          <tr>
            <th className="bg-purple-900 text-white h-12 w-[100px]">EmpID</th>
            <th className="bg-purple-900 text-white h-12 w-[150px]">Co.Name</th>
            <th className="bg-purple-900 text-white h-12 w-[130px]">Place</th>
            <th className="bg-purple-900 text-white h-12 w-[170px]">No. of Placements</th>
          </tr>
        </thead>
        <tbody>
          {employers.map((employer) => (
            <tr key={employer.Emp_Id}>
              <td className="font-bold bg-white border-2 border-blue-800 text-center h-10">{employer.Emp_Id}</td>
              <td className="font-bold bg-white border-2 border-blue-800 text-center h-10">{employer.co_name}</td>
              <td className="font-bold bg-white border-2 border-blue-800 text-center h-10">{employer.place}</td>
              <td className="font-bold bg-white border-2 border-blue-800 text-center h-10">{employerCounts[employer.Emp_Id] || 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminviewEmployer;
