import React, { useState } from 'react'
import Candidateregister from './Candidateregister';

const Candidatelogin = ({ show, handleClose }) => {
    const [loginType,setLoginType]=useState()

    const handleCandidateReg = (event) => {
        event.preventDefault();
        setLoginType('register');
        handleClose()
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
    <div id="logDiv"
        className="fixed top-[200px] right-[10px] bg-white w-1/4 p-6 rounded-lg shadow-lg ">
        <a href="#" className="float-right text-4xl mb-4" onClick={handleClose}>&times;</a>
        <h3 className="text-2xl font-medium mb-4"> Candidate Login</h3>
        <a href="#canReg" onClick={handleCandidateReg} className="float-right text-blue-600 font-bold mb-4">Register</a>
        <form id="loginButton" className="mt-6" method="post" action="/canLogin" onSubmit={(event) => event.preventDefault()}>
            <span id="message"></span>
            <label htmlFor="username" className="block text-lg">Email ID</label>
            <input type="email" name="email" id="user_email"
                className="block w-full h-10 bg-gray-300 rounded-lg text-center text-lg mt-2 mb-4" placeholder="Email ID"
                required/>
            <label htmlFor="pass" className="block text-lg">Password</label>
            <input type="password" name="password" id="user_pass"
                className="block w-full h-10 bg-gray-300 rounded-lg text-center text-lg mt-2 mb-4" placeholder="******"
                required/>
            <a href="/candidate"><input type="submit" value="Login"
                className="w-full h-10 bg-blue-800 text-white font-bold rounded-lg mt-4 cursor-pointer hover:bg-blue-600"/></a>
        </form>
    </div>
    {loginType === 'register' && <Candidateregister show={true} handleClose={handleCloseClick}/>}
   
   </>
  )
}

export default Candidatelogin
