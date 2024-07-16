import React from 'react'


const Newlyaddedjobs = () => {
  return (
   <>
   
    <div className="h-[400px] w-3/4 max-w-3xl  p-4 bg-white rounded-2xl m-auto mt-[-860px] z-[100]">
        <h3 className="text-3xl font-bold font-serif ml-[38%] ">Newly Added Jobs</h3>
        <div className="h-[250px] w-3/4 bg-gradient-to-t from-gray-700 to-gray-400 mx-auto rounded-lg  overflow-y-auto ">
            <table className="mx-auto relative top-[20px]">
                <thead>
                <tr className="bg-blue-500 h-10 ">
                    <th className="border-2">Job</th>
                    <th className="border-2">Location</th>
                    <th className="border-2">Skills</th>
                    <th className="border-2">Description</th>
                </tr>
                </thead>
                <tbody id="jobtable"></tbody>
            </table>

        </div>
        </div>
    
    
   
   </>
  )
}

export default Newlyaddedjobs
