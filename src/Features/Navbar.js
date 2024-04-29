import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import '../Css/Navbar.css'

function Navbar() {

  const [isVisible, setIsVisible] = useState(false);
  const [style, setStyle] = useState({});
  const [icon,setIcon] = useState('more_horiz')

  const toggleVisibility = () => {
    if (isVisible==true) {
      setIsVisible(!isVisible);
      setStyle({right:'0px',transition:'right 0.8s ease'})
      setIcon('close')
    } else {
      setIsVisible(!isVisible);
      setStyle({right:'-450px',transition:'right 0.8s ease'})
      setIcon('more_horiz')
    }
  };

  return (
    <div className="hv-nav sticky-top">
      <div className='navbar'>
        <div className='container-fluid d-flex justify-content-center align-items-center p-1'>
          <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-10 col-10 d-flex justify-content-xxl-start justify-content-xl-start 
          justify-content-lg-start justify-content-md-start justify-content-sm-center justify-content-center align-items-center'>
            <Link className='link' to={"/"}>
              <label className='logo'>Harshil</label> <label className='dot'>.</label>
            </Link>
          </div>
          <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-10 col-10 d-flex justify-content-xxl-end justify-content-xl-end 
          justify-content-lg-end justify-content-md-end justify-content-sm-center justify-content-center align-items-center'>
            <div className='bar-box overflow-hidden'>
              <div className='row bar ms-3 me-3 p-2' style={style}>
                <Link to={"/"} className='col item'>
                  <div className='link-name my-2'>Home</div>
                </Link>
                <Link to={"/about"} className='col item'>
                  <div className='link-name my-2'>About</div>
                </Link>
                <Link to={"/skills"} className='col item'>
                  <div className='link-name my-2'>Skills</div>
                </Link>
                <Link to={"/projects"} className='col item'>
                  <div className='link-name my-2'>Projects</div>
                </Link>
                <Link to={"/contact"} className='col item'>
                  <div className='link-name my-2'>Contact</div>
                </Link>
              </div>
            </div>
            <div className='d-none d-sm-none d-md-block'>
              <button className='toggle-btn' onClick={toggleVisibility}>
                <span class="material-symbols-outlined toggle ">{ icon } </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar