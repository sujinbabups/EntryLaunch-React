import React from 'react'

const EmployerviewApplications = () => {
  return (
    <>
    <div className="rounded-2xl bg-gradient-to-r from-blue-700 to-blue-300 w-[74%] ml-[5%] mt-[2%]  h-[500px]"
            id="vwapp">
            <div className="">
                <h2 className="font-sans text-3xl mt-6 ml- ">View Applications</h2>
                <label htmlFor="sel" className="font-sans text-xl font-bold mt-4">Select job Id :</label>
                <select name="jId" id="" className="border p-2 rounded ml-[20px]"></select>
            </div>

            
            <table className=" mt-4 m-auto ">
                <tr className="bg-purple-400">
                    <th className=" h-12 text-lg font-sans font-bold w-[85px]">Sl.no</th>
                    <th className=" h-12 text-lg font-sans font-bold w-[220px]">Name</th>
                    <th className=" h-12 text-lg font-sans font-bold w-[100px]">Role</th>
                    <th className=" h-12 text-lg font-sans font-bold w-[200px]">Skills</th>
                    <th className=" h-12 text-lg font-sans font-bold w-[100px]">Action</th>
                </tr>

            </table>
        </div>
    </>
  )
}

export default EmployerviewApplications
