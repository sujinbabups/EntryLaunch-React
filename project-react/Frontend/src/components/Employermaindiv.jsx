import React, { useState } from 'react'
import EmployerAddjob from './EmployerAddjob';
import EmployerviewApplications from './EmployerviewApplications';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const Employermaindiv = () => {
    const [activeComponent, setActiveComponent] = useState('addjob');
    const navigate=useNavigate();
    const handelAddjob = (event) => {
        event.preventDefault();
        setActiveComponent('addjob');
      };
      const handleApplication = (event) => {
        event.preventDefault();
        setActiveComponent('viewapplications');
      };

      const logout= async()=>{
        try{
        const res=await fetch('api/logout')
        if(res.ok){
            toast.success('Logout success')
            navigate('/')

        }
        }
        catch(error)
        {
            toast.error('something went wrong')
            // console.log('something went wrong');
        }

    }
  return (
   <>
    <div
        className="flex  bg-gradient-to-r from-gray-700 to-gray-400 text-center w-[75%] m-auto mt-[5%] rounded-2xl h-[540px]">

        <div
            className="dash bg-gradient-to-r from-blue-300 to-blue-700 text-white p-8 rounded-lg mt-[2%] ml-[10px] h-[500px]">
            <h2 className="font-sans text-xl">Welcome <span>Co.name</span></h2>
            <hr className="my-4 border-t border-blue-500"/>
            <Link to="#adjob" className="block my-2">
                <input type="submit" value="Add a Job" onClick={handelAddjob}
                    className="bg-purple-900 text-white py-2  rounded cursor-pointer w-[90%] mt-[50%] hover:bg-purple-600 transition ease-in-out delay-4s"/>
            </Link>
            <Link to="#vwapp" className="block my-2">
                <input type="submit" value="View Applications" onClick={handleApplication}
                    className="bg-purple-900 text-white py-2 px-4 rounded cursor-pointer w-[90%] hover:bg-purple-600 transition ease-in-out delay-1s"/>
            </Link>
           
            <Link to="" className="block my-2">
              <input type="submit" value="Logout" onClick={logout}
                    className="bg-purple-900 text-white py-2 px-4 rounded cursor-pointer w-[90%] hover:bg-purple-600 transition ease-in-out delay-1s"/>
            </Link>
        </div>
        {activeComponent === 'addjob' && <EmployerAddjob/>}
        {activeComponent === 'viewapplications' && <EmployerviewApplications/>}

        </div>


   
   </>
  )
}

export default Employermaindiv
