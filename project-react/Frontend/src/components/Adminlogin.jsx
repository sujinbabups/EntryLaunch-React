import React from 'react'

const Adminlogin = ({show,handleClose}) => {
    if (!show) {
        return null;
      }
  return (
   <>
    <div id="admlog" class="fixed top-[200px] right-[10px] bg-white w-1/4 p-6 rounded-lg shadow-lg ">
        <a href="#" class="float-right text-4xl mb-4" onClick={handleClose}>&times;</a>
        <h3 class="text-2xl font-medium mb-4"> Admin Login</h3>
        <form class="mt-6" method="POST" action="/admin">
            <label for="username" class="block text-lg">Username</label>
            <input type="text" name="username" id="uname"
                class="block w-full h-10 bg-gray-300 rounded-lg text-center text-lg mt-2 mb-4" placeholder="username"/>
            <label for="pass" class="block text-lg">Password</label>
            <input type="password" name="password" id="pass"
                class="block w-full h-10 bg-gray-300 rounded-lg text-center text-lg mt-2 mb-4" placeholder="**********"/>
            <input type="submit" value="Login" onclick="adminLogin()"
                class="w-full h-10 bg-blue-800 text-white font-bold rounded-lg mt-4 cursor-pointer hover:bg-blue-600"/>
        </form>
    </div>
   
   </>
  )
}

export default Adminlogin
