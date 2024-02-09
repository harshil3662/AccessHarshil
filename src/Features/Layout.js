import {useState,useEffect} from 'react'
import { Outlet } from "react-router-dom"
import Navbar from './Navbar'
import { Container } from 'react-bootstrap'

function Layout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Layout