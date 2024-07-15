import React from 'react'

const EmployerAddjob = () => {
  return (
   <>
   <div className=" w-[77%] h-[500px] mt-[2%] ml-[2%] rounded-2xl bg-gradient-to-r from-blue-700 to-blue-300"
            id="adjob">
            <h2 className="font-sans text-3xl mt-6 font-bold text-white ">Hy <span>Co.name</span></h2>
            <h2 className="font-sans text-2xl mt-4 font-bold text-purple-800 ">Add a Job</h2>
            <table className="bg-purple-400 min-w-full mb-4 shadow-md rounded-lg text-xl font-bold">
                <thead>
                    <tr>

                        <th className="px-4 py-2 border">Job Id</th>
                        <th className="px-4 py-2 border">Job name</th>
                        <th className="px-4 py-2 border">Location</th>
                        <th className="px-4 py-2 border">Skills</th>
                        <th className="px-4 py-2 border">Description</th>
                        <th className="px-4 py-2 border"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr id="addjob">

                        <td><input type="text" name="job_id" id="job_id" className="border p-2 rounded w-full"/></td>
                        <td><input type="text" name="job_name" id="job_name" className="border p-2 rounded w-full"/></td>
                        <td><input type="text" name="location" id="location" className="border p-2 rounded w-full"/></td>
                        <td><input type="text" name="skills" id="skills" className="border p-2 rounded w-full"/></td>
                        <td><input type="text" name="description" id="description" className="border p-2 rounded w-full"/>
                        </td>
                        <td><input type="submit" value="Post Job" onclick="addJob()"
                                className="bg-purple-900 text-white py-2 px-4 rounded cursor-pointer ml-2"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
   
   </>
  )
}

export default EmployerAddjob
