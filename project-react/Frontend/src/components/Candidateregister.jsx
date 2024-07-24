import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Candidatelogin from './Candidatelogin';
import { toast } from 'react-toastify';

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

      const [fname, setFname] = useState("");
      const [lname, setLname] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const navigate=useNavigate();
      const signupSubmit = async (userDetails) => {
        const res = await fetch("api/can-reg", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDetails),
        });
        // return;
        console.log(res);
        if (res.ok) {
          toast.success("Signup success")
          // return navigate("/login");
        } else {
          toast.error(`Please check the input data`);
        //   return navigate("/signup");
        }
      };
      const submitForm = (e) => {
        e.preventDefault();
        const userDetails = {
          fname,
          lname,
          password,
          email,
        
        };
    
        signupSubmit(userDetails);
      };
    
    

  return (
    <>
  
   
    <div id="canReg" className="fixed top-[190px] right-[10px] bg-white w-[22%] p-6 rounded-lg shadow-lg">
        <Link to  ="#" className="float-right text-4xl mb-4" onClick={handleClose}>&times;</Link>
        <h2 className="text-2xl font-medium mb-4">Candidate Registration</h2>
        <span className="block text-right mb-4">Already Registered? <a href="#logDiv" onClick={handleCandidateClick} className="text-blue-600 font-bold">Login</a></span>
        <form className="mt-6" onSubmit={submitForm}>
            <label htmlFor="fname" className="block text-lg">First name</label>
            <input type="text" name="fname"
                className="block w-2/3 h-10 bg-gray-300 rounded-lg text-center text-lg mt-2 mb-4"value={fname} onChange={(e) => setFname(e.target.value)} />
            <label htmlFor="secname" className="block text-lg">Last name</label>
            <input type="text" name="lname"
                className="block w-2/3 h-10 bg-gray-300 rounded-lg text-center text-lg mt-2 mb-4" value={lname} onChange={(e) => setLname(e.target.value)} />
            <label htmlFor="email" className="block text-lg">Email</label>
            <input type="email" name="email"
                className="block w-2/3 h-10 bg-gray-300 rounded-lg text-center text-lg mt-2 mb-4" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="pass" className="block text-lg">Password</label>

            <input type="password" id="pass1"  name="password"
                className="block w-2/3 h-10 bg-gray-300 rounded-lg text-center text-lg mt-2 mb-4" value={password} onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="repass" className="block text-lg">Re-enter password<span id="check"
                    className="text-sm text-red-600 ml-[10px]"></span></label>
            <input type="password" id="pass2" 
                className="block w-2/3 h-10 bg-gray-300 rounded-lg text-center text-lg mt-2 mb-4"/>
            <input type="submit" value="Register"
                className="w-2/3 h-10 bg-blue-600 text-white font-bold rounded-lg mt-4 cursor-pointer"
                />
        </form>
        {loginType === 'candidate' && <Candidatelogin show={true} handleClose={handleCloseClick} />}
    </div>
    </>
  )
}

export default Candidateregister
