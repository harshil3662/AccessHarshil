import { Link } from "react-router-dom"
import { useState } from "react"
import '../Css/Home.css'

function Home() {

  const [hover1,setHover1] = useState('')
  const [hover2,setHover2] = useState('')
  const [hover3,setHover3] = useState('')

  return (
    <div className='container d-flex justify-content-center justify-content-sm-center home'>

      <div className="col-12">

        <div className='m-5 text-center text-sm-center text-md-center d-flex justify-content-center justify-content-sm-center headline'>
          Web app developer & MERN stack developer
        </div>

        <div className='row'>

          <div className='mt-4 col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 order-2 order-sm-2 order-xs-2 order-md-2
          order-lg-1 order-xl-1 order-xxl-1 d-flex justify-content-center justify-content-sm-center'>
            <div className="m-5 col1">
              <div className='hv-home-col1-div1 m-5 text-center text-sm-center text-md-center text-lg-start text-xl-start'>Hello! I'm<br/><label className='name'>Harshil Vaghani.</label></div>
              <div className='row hv-home-col1-div2 m-5 text-center  text-sm-center text-md-center text-lg-start text-xl-start'>I'm here to innovate web development
                turning ideas into creative and real solutions.
              </div>
              <div className='m-5 text-center text-sm-center text-md-center text-lg-start text-xl-start'>
                <Link to={"/about"}>
                  <button className='hv-btn'>About Me</button>
                </Link>
              </div>
              <div className='m-5 d-flex justify-content-center justify-content-sm-center justify-content-md-center 
                justify-content-lg-start justify-content-xl-start align-items-center'>
                  <div className='row links'>
                    <div className='col'>
                      <div className='row'>
                        <div className='col'>
                          <a href='https://github.com/harshil3662' onMouseOver={()=>{setHover1('hovered')}} onMouseOut={()=>{setHover1('')}}>
                            {hover1 ? <img className='link-img' src='github1.png' alt='github'/> : <img className='link-img' src='github.png' alt='github'/>}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='row'>
                        <div className='col'>
                          <a href='https://www.linkedin.com/in/harshil-vaghani/' onMouseOver={()=>{setHover2('hovered')}} onMouseOut={()=>{setHover2('')}}>
                            {hover2 ? <img className='link-img' src='linkedin1.png' alt='linkedin'/> : <img className='link-img' src='linkedin.png' alt='linkedin'/>}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='row'>
                        <div className='col'>
                          <a href='https://www.instagram.com/_harshilvaghani_/' onMouseOver={()=>{setHover3('hovered')}} onMouseOut={()=>{setHover3('')}}>
                            {hover3 ? <img className='link-img' src='instagram1.png' alt='instagram'/> : <img className='link-img' src='instagram.png' alt='instagram'/>}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 
            d-flex justify-content-center align-items-center order-1 order-sm-1 order-xs-1 order-md-1 order-lg-3 order-xl-3 order-xxl-3'>
            <div className='row circle'>
              <img id="avatar" src='avatar.png' alt='avatar'/>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Home