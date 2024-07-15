import React from 'react'

const AdminviewEmployer = () => {
  return (
    <>
     <div className="viewEmployer bg-gradient-to-r from-blue-700 to-blue-300 h-[440px] mt-12 w-[70%] rounded-lg" id="vwemp">
            <h2 className="text-2xl font-sans mt-8 ml-10 ">View Employers</h2>
            <table  className="mt-8 ml-[20%] w-90 mx-auto" >
                <tr>
                    <th className="bg-purple-900 text-white h-12 w-[100px]">EmpID</th>
                    <th className="bg-purple-900 text-white h-12 w-[150px]">Co.Name</th>
                    <th className="bg-purple-900 text-white h-12 w-[130px]">Place</th>
                    <th className="bg-purple-900 text-white h-12 w-[170px]">No.of Placements</th>
                </tr>
                <tbody id="view_emp">

                </tbody>
          
            </table>
        </div>
    
    </>
  )
}

export default AdminviewEmployer
