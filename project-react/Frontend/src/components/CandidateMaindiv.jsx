import React, { useState } from 'react'
import CandidteHome from './CandidteHome'
import Candidateprofile from './Candidateprofile';
import CandidateApplications from './CandidateApplications';


const CandidateMaindiv = () => {
    const [activeComponent, setActiveComponent] = useState('home');

  const handleHomeClick = (event) => {
    event.preventDefault();
    setActiveComponent('home');
  };

  const handleProfileClick = (event) => {
    event.preventDefault();
    setActiveComponent('profile');
  };

  const handleApplications=(event)=>{
    event.preventDefault();
    setActiveComponent('applications');
  }
    
  return (
   <>
   
    <div className="maindiv h-[600px] w-[70%] bg-gray-300 mx-auto mt-28 rounded-lg flex ">
        <div className="dashb bg-gradient-to-r from-blue-300 to-blue-700 text-white p-8 rounded-lg ml-[3%] relative top-[5%] w-[25%] h-[540px] ">
        <h3 className="text-xl font-semibold ml-[38%]">Name</h3>
            <a href="#cnhome" className="block my-4">
                <input type="submit" value="My Home" onClick={handleHomeClick} className="bg-purple-900 text-white py-2 px-4 rounded cursor-pointer w-[65%] ml-[15%] hover:bg-purple-600"/>
            </a>
            <hr className="my-6 border-t border-blue-400"/>
            <a href="#profile" className="block my-4">
                <input type="submit" value="Profile" onClick={handleProfileClick} className="bg-purple-900 text-white py-2 px-4 rounded cursor-pointer w-[65%] ml-[15%] hover:bg-purple-600"/>
            </a>
            {/* <!-- <a href="#srchdiv" className="block my-4">
                <input type="submit" value="Search Jobs" className="bg-purple-900 text-white py-2 px-4 rounded cursor-pointer w-[65%] ml-[15%] hover:bg-purple-600">
            </a>
            <a href="#svjob" className="block my-4">
                <input type="submit" value="Saved Jobs" className="bg-purple-900 text-white py-2 px-4 rounded cursor-pointer w-[65%] ml-[15%] hover:bg-purple-600"> -->
            </a> */}
            <a href="#appli" className="block my-4">
                <input type="submit" value="My Applications" onClick={handleApplications}className="bg-purple-900 text-white py-2 px-4 rounded cursor-pointer w-[65%] ml-[15%] hover:bg-purple-600"/>
            </a>
            <a href="/" className="block my-4">
                <input type="submit" id="logoutButton" value="Logout" className="bg-purple-900 text-white py-2 px-4 rounded cursor-pointer w-[65%] ml-[15%] hover:bg-purple-600"/>
            </a>

        </div>
        {activeComponent === 'home' && <CandidteHome />}
        {activeComponent === 'profile' && <Candidateprofile/>}
        {activeComponent === 'applications' && <CandidateApplications/>}
        

       
      
    </div>
 
    


   </>
  )
}

export default CandidateMaindiv
