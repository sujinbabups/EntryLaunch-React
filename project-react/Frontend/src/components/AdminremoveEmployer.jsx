import React from 'react'

const AdminremoveEmployer = () => {
  return (
    <>
    {/* <div className="addEmployer bg-gradient-to-r from-blue-700 to-blue-300 h-[440px] mt-12 w-[70%] rounded-lg" id="addemp"> */}
    <div className="remEmployer bg-gradient-to-r from-blue-700 to-blue-300 h-[440px] mt-12 w-[70%] rounded-lg"  id="rmemp">
            <h2 className="text-2xl font-sans mt-8 ml-10">Remove Employer</h2>
            <label htmlFor="select" className="font-sans text-lg ml- 6relative top-[5%]">Select an employer :</label>
            <select name="selectEmp" id="selectEmp" onChange="addSelectedEmployer()"  className="border p-2 rounded relative top-[5%] w-[15%]">
                    <option value="" disabled selected>----</option>
            </select>
                        <table id="removeEmp" className="ml-[280px] mt-[50px]">
                <tr>
                    <th className="bg-purple-900 text-white h-12 w-[130px]">EmpID</th>
                    <th className="bg-purple-900 text-white h-12 w-[200px]">Co.Name</th>
                </tr>
                <tr className="bg-white text-white h-12 w-[130px] text-center " id="traw">
                    <td className="border border-slate-300 text-blue-900 text-2xl font-bold" id="empid"></td>
                    <td id="coname" className="text-blue-900 text-2xl font-bold"></td>
                </tr>

            </table>
            <input type="submit" value="Remove" onclick="removeEmployer()" className="bg-purple-900 text-white py-2 px-4 rounded cursor-pointer ml-[65%]  relative top-[5%] hover:bg-red-500 transition ease-in-out delay-1s"/>

        </div>
    
    </>
  )
}

export default AdminremoveEmployer
