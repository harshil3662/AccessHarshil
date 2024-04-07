import React, { useState, useRef, useEffect } from 'react'
import { Link } from "react-router-dom"
import '../Css/Navbar.css'

function Navbar() {

  const [isOpen,setIsOpen] = useState(false)
  const sidebarRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if ((sidebarRef.current && !sidebarRef.current.contains(event.target)) && 
        (toggleRef.current && !toggleRef.current.contains(event.target))) 
      {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hv-nav">
      <div className='nav container-fluid'>
        <div className='col-xl-4 d-flex justify-content-center align-items-center m-4'>
          <Link className='link' to={"/"}>
            <label className='logo'>Harshil</label> <label className='dot'>.</label>
          </Link>
        </div>
        <div className='col d-flex justify-content-end align-items-center'>
          <button ref={toggleRef} className='toggle-btn' onClick={toggleSidebar}>
            <span class="material-symbols-outlined toggle ">more_horiz</span>
          </button>
        </div>
      </div>
      <div className={`blur-background ${isOpen ? 'active' : ''}`} />
      {isOpen && 
        <div className='sidebar-view'>
          <div>
            <div className='close-btn p-3' onClick={toggleSidebar}>
              <img id='close' src='close.png' alt='close'/>
            </div>
          </div>
          <div ref={sidebarRef} className='sidebar p-4'>
            <Link to={"/"} className='row item p-2' onClick={toggleSidebar}>
              <div className='col-xxl-3 col-xl-3 col-md-3 col-sm-3 col-xs-3 col-3 d-flex justify-content-center align-items-center'>
                <img className='icons' src='home1.png' alt='home'/>
              </div>
              <div className='col-xxl-9 col-xl-9 col-md-9 col-sm-9 col-xs-9 col-9 d-flex justify-content-start align-items-center link-name my-2'>Home</div>
            </Link>
            <Link to={"/about"} className='row item p-2' onClick={toggleSidebar}>
              <div className='col-xxl-3 col-xl-3 col-md-3 col-sm-3 col-xs-3 col-3 d-flex justify-content-center align-items-center'>
                <img className='icons' src='info1.png' alt='home'/>
              </div>
              <div className='col-xxl-9 col-xl-9 col-md-9 col-sm-9 col-xs-9 col-9 d-flex justify-content-start align-items-center link-name my-2'>About</div>
            </Link>
            <Link to={"/skills"} className='row item p-2' onClick={toggleSidebar}>
              <div className='col-xxl-3 col-xl-3 col-md-3 col-sm-3 col-xs-3 col-3 d-flex justify-content-center align-items-center'>
                <img className='icons' src='list1.png' alt='home'/>
              </div>
              <div className='col-xxl-9 col-xl-9 col-md-9 col-sm-9 col-xs-9 col-9 d-flex justify-content-start align-items-center link-name my-2'>Skills</div>
            </Link>
            <Link to={"/projects"} className='row item p-2' onClick={toggleSidebar}>
              <div className='col-xxl-3 col-xl-3 col-md-3 col-sm-3 col-xs-3 col-3 d-flex justify-content-center align-items-center'>
                <img className='icons' src='layers1.png' alt='home'/>
              </div>
              <div className='col-xxl-9 col-xl-9 col-md-9 col-sm-9 col-xs-9 col-9 d-flex justify-content-start align-items-center link-name my-2'>Projects</div>
            </Link>
            <Link to={"/contact"} className='row item p-2' onClick={toggleSidebar}>
              <div className='col-xxl-3 col-xl-3 col-md-3 col-sm-3 col-xs-3 col-3 d-flex justify-content-center align-items-center'>
                <img className='icons' src='chat1.png' alt='home'/>
              </div>
              <div className='col-xxl-9 col-xl-9 col-md-9 col-sm-9 col-xs-9 col-9 d-flex justify-content-start align-items-center link-name my-2'>Contact</div>
            </Link>
          </div>
        </div>
      }
    </div>
  )
}

export default Navbar