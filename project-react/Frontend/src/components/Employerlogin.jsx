import React from 'react'

const Employerlogin = ({ show, handleClose }) => {
    if (!show) {
        return null;
      }
  return (
 <>
     <div id="emplog" className="fixed top-[200px] right-[10px] bg-white w-1/4 p-6 rounded-lg shadow-lg ">
        <a href="#" className="float-right text-4xl mb-4" onClick={handleClose}>&times;</a>
        {/* <a href="#empreg" className="float-right text-blue-600 font-bold mb-4">Register</a> */}
        <h3 className="text-2xl font-medium mb-4">Employer Login</h3>
    
        <form className="mt-6" method="POST" onsubmit="employerLogin(event)">
            <label for="username" className="block text-lg">Email ID</label>
            <input type="email" name="email" id="emp_uname"
                className="block w-full h-10 bg-gray-300 rounded-lg text-center text-lg mt-2 mb-4" placeholder="Email ID"/>
            <label for="pass" className="block text-lg">Password</label>
            <input type="password" name="password" id="emp_pass"
                className="block w-full h-10 bg-gray-300 rounded-lg text-center text-lg mt-2 mb-4" placeholder="**********"/>
            <input type="submit" value="Login" 
                className="w-full h-10 bg-blue-800 text-white font-bold rounded-lg mt-4 cursor-pointer hover:bg-blue-600"/>
        </form>
    </div>
 
 </>
  )
}

export default Employerlogin
