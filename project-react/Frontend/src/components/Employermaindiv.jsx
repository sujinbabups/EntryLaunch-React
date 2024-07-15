import React, { useState } from 'react'
import EmployerAddjob from './EmployerAddjob';
import EmployerviewApplications from './EmployerviewApplications';

const Employermaindiv = () => {
    const [activeComponent, setActiveComponent] = useState('addjob');
    const handelAddjob = (event) => {
        event.preventDefault();
        setActiveComponent('addjob');
      };
      const handleApplication = (event) => {
        event.preventDefault();
        setActiveComponent('viewapplications');
      };
  return (
   <>
    <div
        class="flex  bg-gradient-to-r from-gray-700 to-gray-400 text-center w-[75%] m-auto mt-[5%] rounded-2xl h-[540px]">

        <div
            class="dash bg-gradient-to-r from-blue-300 to-blue-700 text-white p-8 rounded-lg mt-[2%] ml-[10px] h-[500px]">
            <h2 class="font-sans text-xl">Welcome <span>Co.name</span></h2>
            <hr class="my-4 border-t border-blue-500"/>
            <a href="#adjob" class="block my-2">
                <input type="submit" value="Add a Job" onClick={handelAddjob}
                    class="bg-purple-900 text-white py-2  rounded cursor-pointer w-[90%] mt-[50%] hover:bg-purple-600 transition ease-in-out delay-4s"/>
            </a>
            <a href="#vwapp" class="block my-2">
                <input type="submit" value="View Applications" onClick={handleApplication}
                    class="bg-purple-900 text-white py-2 px-4 rounded cursor-pointer w-[90%] hover:bg-purple-600 transition ease-in-out delay-1s"/>
            </a>
            <a href="/" class="block my-2">
                <input type="submit" value="Logout"
                    class="bg-purple-900 text-white py-2 px-4 rounded cursor-pointer w-[90%] hover:bg-purple-600 transition ease-in-out delay-1s"/>
            </a>
        </div>
        {activeComponent === 'addjob' && <EmployerAddjob/>}
        {activeComponent === 'viewapplications' && <EmployerviewApplications/>}

        </div>


   
   </>
  )
}

export default Employermaindiv
