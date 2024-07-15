import React from 'react'

const AdminaddEmployer = () => {
  return (
   <>
   <div className="addEmployer bg-gradient-to-r from-blue-700 to-blue-300 h-[440px] mt-12 w-[70%] rounded-lg" id="addemp">
            <h2 className="text-2xl font-sans mt-8 ml-10te text-white font-bold">Add a New Employer</h2>
            <form action="/add-employer" method="POST" id="addemprl">
            <table className="min-w-full mt-4  w-[90%] bg-white shadow-md rounded-lg text-xl font-bold">
                <thead>
                    <tr>
                        <th className="bg-purple-900 text-white h-12 p-2">Emp_Id</th>
                        <th className="bg-purple-900 text-white h-12 p-2">Co.Name</th>
                        <th className="bg-purple-900 text-white h-12 p-2">Place</th>
                        <th className="bg-purple-900 text-white h-12 p-2">Type of Co.</th>
                        <th className="bg-purple-900 text-white h-12 p-2">Email</th>
                        <th className="bg-purple-900 text-white h-12 p-2">Password</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="ipfeild">
                       
                            <td className="p-2"><input type="text" name="employer_id" id="employer_id" required className="border p-2 rounded w-full"/></td>
                            <td className="p-2"><input type="text" name="co_name" id="co_name" required className="border p-2 rounded w-full"/></td>
                            <td className="p-2"><input type="text" name="place" id="place" required className="border p-2 rounded w-full"/></td>
                            <td className="p-2"><input type="text" name="co_type" id="co_type" required className="border p-2 rounded w-full"/></td>
                            <td className="p-2"><input type="text" name="email" id="email" required className="border p-2 rounded w-full"/></td>
                            <td className="p-2"><input type="text" name="password" id="password" required className="border p-2 rounded w-full"/></td>
                        
                    </tr>
                </tbody>
            </table>
            <input type="submit" value="Add" onclick="addEmployer()" className="bg-green-800 text-white py-2 px-4 rounded cursor-pointer float-right relative right-[40px] top-[10px]"/>
            </form>
        </div>

   
   </>
  )
}

export default AdminaddEmployer
