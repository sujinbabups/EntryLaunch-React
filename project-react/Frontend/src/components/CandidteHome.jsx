import React from 'react'

const CandidteHome = () => {

  return (
    <>
    <div className="canHome bg-gradient-to-r from-blue-300 to-blue-700 text-white p-8 rounded-lg relative top-[5%] ml-8 h-[540px] w-3/4" id="cnhome">
            <h2 className="text-3xl font-bold mb-6">Hi <span className="text-blue-900" id="can-name">name</span></h2>
            <div className="bg-white h-[400px] w-[90%]">
                <table className="w-[80%] text-black mx-auto relative top-[20%]">
                    <thead>
                        <tr className="bg-gray-600">
                            <th>Id</th>
                            <th>Job</th>
                            <th>Location</th>
                            <th>Skills</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody id="jobtable">
                    </tbody>
                </table>
            </div>
        </div>

    </>
  )
}

export default CandidteHome
