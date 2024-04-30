import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import '../Css/Navbar.css'

function Bar({style}) {

  const [selection,setSelection] = useState(0)
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      console.log(height)
      setScreenSize(width);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const selectionHandler = (i) => {
    setSelection(i)
  }

  return (
    <div className={screenSize < 992 ? 'd-block d-sm-block d-md-block d-lg-none' : 'overflow-hidden'}>
      <div className='row bar position-relative ms-3 me-3 p-1' style={screenSize < 992 ? {right:'0px'} : style}>
        <Link to={"/"} className={`col link ${selection === 1 ? 'hovered' : ''}`} onClick={()=>{selectionHandler(1)}}>
          <div className='route my-2'>Home</div>
        </Link>
        <Link to={"/about"} className={`col link ${selection === 2 ? 'hovered' : ''}`} onClick={()=>{selectionHandler(2)}}>
          <div className='route my-2'>About</div>
        </Link>
        <Link to={"/skills"} className={`col link ${selection === 3 ? 'hovered' : ''}`} onClick={()=>{selectionHandler(3)}}>
          <div className='route my-2'>Skills</div>
        </Link>
        <Link to={"/projects"} className={`col link ${selection === 4 ? 'hovered' : ''}`} onClick={()=>{selectionHandler(4)}}>
          <div className='route my-2'>Projects</div>
        </Link>
        <Link to={"/contact"} className={`col link ${selection === 5 ? 'hovered' : ''}`} onClick={()=>{selectionHandler(5)}}>
          <div className='route my-2'>Contact</div>
        </Link>
      </div>
    </div>
  )
}

function Navbar() {

  const [isVisible, setIsVisible] = useState(false);
  const [style, setStyle] = useState({});
  const [icon,setIcon] = useState('more_horiz');

  const toggleVisibility = () => {
    if (isVisible === true) {
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
          <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-10 col-sm-10 col-10 d-flex justify-content-xxl-start justify-content-xl-start 
          justify-content-lg-start justify-content-md-center center-content-sm-center justify-content-center align-items-center'>
            <Link className='logo' to={"/"}>
              <label className='name'>Harshil</label> <label className='dot'>.</label>
            </Link>
          </div>
          <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-10 col-sm-10 col-10 d-flex justify-content-xxl-end justify-content-xl-end 
          justify-content-lg-end justify-content-md-center justify-content-sm-center justify-content-center align-items-center'>
            <Bar style={style}/>
            <div className='d-none d-sm-none d-md-none d-lg-block'>
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