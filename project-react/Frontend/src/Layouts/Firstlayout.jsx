import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Heros from '../components/Heros'
import Centerdiv from '../components/Centerdiv'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Firstlayout = () => {
  return (
    <>
 
    <Navbar/>
    <Heros/>
    <Centerdiv/>
    <Outlet/>
    <ToastContainer/>


</>
  )
}

export default Firstlayout
