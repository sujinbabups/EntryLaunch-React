import React, { useEffect, useState } from 'react'

const AdminviewEmployer = () => {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    // Fetch employer data from the backend
    const fetchEmployers = async () => {
      try {
        const response = await fetch('api/get-employers'); // Adjust the URL to your endpoint
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

    fetchEmployers();
  }, []);
  return (
    <>
     <div className="viewEmployer bg-gradient-to-r from-blue-700 to-blue-300 h-[440px] mt-12 w-[70%] rounded-lg" id="vwemp">
            <h2 className="text-2xl font-sans mt-8 ml-10  text-white font-bold">View Employers</h2>
            <table  className="mt-8 ml-[20%] w-90 mx-auto" >
                <tr>
                    <th className="bg-purple-900 text-white h-12 w-[100px]">EmpID</th>
                    <th className="bg-purple-900 text-white h-12 w-[150px]">Co.Name</th>
                    <th className="bg-purple-900 text-white h-12 w-[130px]">Place</th>
                    <th className="bg-purple-900 text-white h-12 w-[170px]">No.of Placements</th>
                </tr>
                <tbody id="view_emp">
                {employers.map((employer) => (
            <tr key={employer.id}>
              <td className="font-bold bg-white border-2 border-blue-800 text-center h-10">{employer.Emp_Id}</td>
              <td className="font-bold bg-white border-2 border-blue-800 text-center h-10">{employer.co_name}</td>
              <td className="font-bold bg-white border-2 border-blue-800 text-center h-10">{employer.place}</td>
              {/* <td className="bg-white text-center">{employer.placements}</td> */}
            </tr>
          ))}

                </tbody>
          
            </table>
        </div>
    
    </>
  )
}

export default AdminviewEmployer
