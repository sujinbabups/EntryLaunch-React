import React, { useState } from 'react'
import Candidatelogin from './Candidatelogin';

const Candidateregister = ({ show, handleClose }) => {
    const [loginType,setLoginType]=useState();
    const handleCandidateClick = (event) => {
        event.preventDefault();
        setLoginType('candidate');
      };
      const handleCloseClick = (event) => {
        event.preventDefault();
        setLoginType(null);
      };
    if (!show) {
        return null;
      }

  return (
    <>
    <div id="canReg" className="fixed top-[200px] right-[10px] bg-white w-[460px] p-6 rounded-lg shadow-lg">
        <a href="#" className="float-right text-4xl mb-4" onClick={handleClose}>&times;</a>
        <h2 className="text-2xl font-medium mb-4">Candidate Registration</h2>
        <span className="block text-right mb-4">Already Registered? <a href="#logDiv" onClick={handleCandidateClick} className="text-blue-600 font-bold">Login</a></span>
        <form className="mt-6" action="/can-reg" method="POST">
            <label htmlFor="fname" className="block text-lg">First name</label>
            <input type="text" name="fname"
                className="block w-2/3 h-10 bg-gray-300 rounded-lg text-center text-lg mt-2 mb-4"/>
            <label htmlFor="secname" className="block text-lg">Last name</label>
            <input type="text" name="lname"
                className="block w-2/3 h-10 bg-gray-300 rounded-lg text-center text-lg mt-2 mb-4"/>
            <label htmlFor="email" className="block text-lg">Email</label>
            <input type="email" name="email"
                className="block w-2/3 h-10 bg-gray-300 rounded-lg text-center text-lg mt-2 mb-4"/>
            <label htmlFor="pass" className="block text-lg">Password</label>

            <input type="password" id="pass1" onchange="passCheck()" name="password"
                className="block w-2/3 h-10 bg-gray-300 rounded-lg text-center text-lg mt-2 mb-4"/>
            <label htmlFor="repass" className="block text-lg">Re-enter password<span id="check"
                    className="text-sm text-red-600 ml-[10px]"></span></label>
            <input type="password" id="pass2" oninput="passCheck()"
                className="block w-2/3 h-10 bg-gray-300 rounded-lg text-center text-lg mt-2 mb-4"/>
            <input type="submit" value="Register"
                className="w-2/3 h-10 bg-blue-600 text-white font-bold rounded-lg mt-4 cursor-pointer"
                onclick="registration()"/>
        </form>
        {loginType === 'candidate' && <Candidatelogin show={true} handleClose={handleCloseClick} />}
    </div>
    </>
  )
}

export default Candidateregister
