import React from 'react'
import { Link } from "react-router-dom"
import '../Css/Home.css'

function Home() {

  return (
    <div className='Home'>
      <div className='Text'>
        <div>
          <div className='Greetings'>Hello There,<br/>Welcome to My Portfolio</div>
          <div className='WhoIam'>I am in Web Development.</div>
        </div>
        <div className='resume'>
          <button className='resume-btn'>
            Get my Résumé
          </button>
        </div>
        <div className='links'>
          <a href='https://www.linkedin.com/in/harshil-vaghani/'>
            <img id='linkedin' src='linkedin.png' alt='linkedin'/>
          </a>
          <a href='https://github.com/harshil3662'>
            <img id='github' src='github.png' alt='github'/>
          </a>
        </div>
      </div>
      <div className='Image'>
        <div className='Image-Div'>
          <img id="avatar" src='man.png' alt='avatar'/>
        </div>
        <div className='profile-div'>
          <Link className='profile-btn' to={"/contact"}>
            Contact me
          </Link>
        </div>
      </div>
    </div>    
  )
}

export default Home