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

        <table className="min-w-full mt-4 m-auto">
          <thead>
            <tr className="bg-purple-400">
              <th className="h-12 text-lg font-sans font-bold w-20 sm:w-32 md:w-48 lg:w-64">Sl.no</th>
              <th className="h-12 text-lg font-sans font-bold w-32 sm:w-48 md:w-64 lg:w-80">Name</th>
              <th className="h-12 text-lg font-sans font-bold w-24 sm:w-32 md:w-40 lg:w-48">Role</th>
              <th className="h-12 text-lg font-sans font-bold w-40 sm:w-56 md:w-72 lg:w-96">Skills</th>
              <th className="h-12 text-lg font-sans font-bold w-24 sm:w-32 md:w-40 lg:w-48">Action</th>
            </tr>
          </thead>
       
        </table>
      </div>
    </>
  )
}

export default EmployerviewApplications
