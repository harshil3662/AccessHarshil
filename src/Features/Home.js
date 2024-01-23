import React from 'react'
import '../Css/Home.css'

function Home() {

  return (
    <div className="Home">
      <div className='Text'>
        <div className='Greetings'>Hello There,<br/> Welcome to My Portfolio</div>
        <div className='WhoIam'>I am in Web Development.</div>
      </div>
      <div className='Image'>
        <div className='Image-Div'>
          <img src='man.png' alt='harshil'/>
        </div>
      </div>
    </div>
  )
}

export default Home