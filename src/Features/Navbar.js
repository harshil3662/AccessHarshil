import React, {useState} from 'react'
import { Link } from "react-router-dom"
import '../Css/Navbar.css'

function Navbar() {

  const [hover,setHover] = useState('')
  const [isOpen,setIsOpen] = useState(false)

  return (
    <div className="hv-nav">
      <div className='nav container-fluid'>
        <div className='col-xl-4 m-2 d-flex justify-content-center align-items-center' onMouseOver={()=>{setHover('hovered')}} onMouseOut={()=>{setHover('')}}>
          <Link to={"/"}>
            <img id='hv' src='logo.gif' alt='Harshil Vaghani'/>
          </Link>
        </div>
        <div className='col d-flex justify-content-end align-items-center'>
          <div className='toggle-btn' onClick={()=>{setIsOpen(!isOpen)}}>
            <span class="material-symbols-outlined toggle m-2">more_horiz</span>
          </div>
          <div className='sidebar p-3' style={isOpen ? {display:'block'} : {display:'none'}}>
            <Link to={"/"} className='row item'>
              <div className='col-xxl-3'>
                <img className='icons' src='home.png' alt='home'/>
              </div>
              <div className='col-xxl-9 link-name'>Home</div>
            </Link>
            <Link to={"/about"} className='row item'>
              <div className='col-xxl-3'>
                <img className='icons' src='info.png' alt='home'/>
              </div>
              <div className='col-xxl-9 link-name'>About</div>
            </Link>
            <Link to={"/skills"} className='row item'>
              <div className='col-xxl-3'>
                <img className='icons' src='list.png' alt='home'/>
              </div>
              <div className='col-xxl-9 link-name'>Skills</div>
            </Link>
            <Link to={"/projects"} className='row item'>
              <div className='col-xxl-3'>
                <img className='icons' src='layers.png' alt='home'/>
              </div>
              <div className='col-xxl-9 link-name'>Projects</div>
            </Link>
            <Link to={"/contact"} className='row item-end'>
              <div className='col-xxl-3'>
                <img className='icons' src='chat.png' alt='home'/>
              </div>
              <div className='col-xxl-9 link-name'>Contact</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar