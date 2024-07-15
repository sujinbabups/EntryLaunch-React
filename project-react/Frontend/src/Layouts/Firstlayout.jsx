import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Heros from '../components/Heros'
import Centerdiv from '../components/Centerdiv'



const Firstlayout = () => {
  return (
    <>
 
    <Navbar/>
    <Heros/>
    <Centerdiv/>
    <Outlet/>


</>
  )
}

export default Firstlayout
