import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const Candidateprofile = () => {
    const [user, setUser] = useState({});

    const [dob, setDob] = useState("");
    const [course, setCourse] = useState("");
    const [passingyr, setPyear] = useState("");
    const [grade, setGrade] = useState("");

 
    useEffect(() => {
    const fetchUser = async () => {
    try {
      const response = await fetch('api/get-user', {
        method: 'GET',
        credentials: 'include', // Include credentials in the request
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        console.error('Failed to fetch user data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  fetchUser();
  
  }, []);

  const signupSubmit = async (userDetails) => {
    const res = await fetch("api/update-user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });
    // return;
    console.log(res);
    if (res.ok) {
      toast.success("Details saved")
      // return navigate("/login");
    } else {
      toast.error(`Please check the input data`);
    //   return navigate("/signup");
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    const userDetails = {
        email:user.email,
      dob,
      course,
      passingyr,
      grade,
      
    
    };
   

    signupSubmit(userDetails);
  };

  const fullname=user. fname +" "+user.lname

  return (
    <>
    <div className="bg-gradient-to-r from-blue-700 to-blue-300 text-white p-8 rounded-lg relative top-[5%] ml-8 h-[540px] w-[65%] " id="profile">
            <h2 className="text-3xl font-bold mb-6">Complete Your profile</h2>
            <div>
                <form onSubmit={submitForm}>
                <label htmlFor="name" className="block mb-2">Name :</label>
                <input type="text" name="name" value={fullname} id="name" className="block w-2/5 px-2 py-1 border rounded mb-4 text-black"/>
                <label htmlFor="email" className="block mb-2">Email :</label>
                <input type="email" name="email" id="email" value={user.email} className="block w-2/5 px-2 py-1 border rounded mb-4 text-black"/>
                <label htmlFor="dob" className="block mb-2">D.o.b :</label>
                <input type="date" name="dob" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} className="block w-2/5 px-2 py-1 border rounded mb-4 text-black"/>
                <label htmlFor="edu" className="block mb-2">Education :</label>
                <table id="eduTable" className="min-w-full mb-4 bg-white shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-gray-500">
                            {/* <th className="px-4 py-2 border w-[80px]">Sl.no</th> */}
                            <th className="px-4 py-2 border">Course Name</th>
                            <th className="px-4 py-2 border">Year of Passing</th>
                            <th className="px-4 py-2 border">Grade/Percentage</th>  
                            {/* <th className="px-4 py-2 border">
                                <input type="submit" value="Add" className="bg-blue-900 text-white py-2 px-4 rounded cursor-pointer"/>
                            </th> */}
                        </tr>
                        <tr className="bg-gray-200 text-black text-xl">
                            <td><input type="text" value={course} onChange={(e) => setCourse(e.target.value)} className="px-4 py-2 border w-[100%]"/></td>
                            <td><input type="text" value={passingyr} onChange={(e) => setPyear(e.target.value)} className="px-4 py-2 border w-[100%]"/></td>
                            <td><input type="text" value={grade} onChange={(e) => setGrade(e.target.value)} className="px-4 py-2 border w-[100%] "/></td>
                            {/* <td><input type="text" className="px-4 py-2 border w-[100%] "/></td> */}
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
                <input type="submit" value="Save" className="bg-green-600 text-white py-2 px-4 rounded cursor-pointer mr-4"/>
                <input type="reset" value="Reset" className="bg-blue-800 text-white py-2 px-4 rounded cursor-pointer"/>
                </form>
            </div>
        </div>
    
    </>
  )
}

export default Candidateprofile
