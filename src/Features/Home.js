import { Link } from "react-router-dom"
import { useState,useEffect,useRef } from "react"
import '../Css/Home.css'

function Home() {
  const [hover1,setHover1] = useState('')
  const [hover2,setHover2] = useState('')
  const [hover3,setHover3] = useState('')
  const [screenSize, setScreenSize] = useState('');
  const scrollableRef = useRef(null);
  const [divSize, setDivSize] = useState();

  useEffect(() => {
    window.scrollTo(0,0)
    const handleResize = () => {
      const height = window.innerHeight;
      setScreenSize(height);
    };

    const { clientHeight } = scrollableRef.current;
    setDivSize(clientHeight)

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={scrollableRef} className='container home' style={divSize >= screenSize ? {height:'fit-content'} : {height: screenSize}}>
      <div className="col-12">
        <div className='m-5 text-center text-sm-center text-md-center d-flex justify-content-center justify-content-sm-center headline'>
          Web application & MERN stack developer
        </div>
        <div className='row'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 order-2 order-sm-2 order-xs-2 order-md-2
          order-lg-1 order-xl-1 order-xxl-1 d-flex justify-content-center justify-content-sm-center'>
            <div className="m-5 col1">
              <div className='m-xxl-5 m-xl-5 m-lg-4 m-md-4 m-sm-4 m-4 hv-home-col1-div1 text-center text-sm-center text-md-center text-lg-center text-xl-start'>Hello! I'm<br/><label className='my-full-name'>Harshil Vaghani.</label></div>
              <div className='m-xxl-5 m-xl-5 m-lg-4 m-md-4 m-sm-4 m-4 row hv-home-col1-div2 text-center text-sm-center text-md-center text-lg-center text-xl-start'>I'm here to innovate web development
                turning ideas into creative and real solutions.
              </div>
              <div className='m-xxl-5 m-xl-5 m-lg-4 m-md-4 m-sm-4 m-4 d-flex justify-content-center justify-content-sm-center justify-content-md-center 
                justify-content-lg-center justify-content-xl-start align-items-center'>
                <Link to={"/about"}>
                  <button className='portfolio-btn p-xxl-3 p-xl-3 p-lg-2 p-md-2 p-sm-2 p-2'>About Me</button>
                </Link>
              </div>
              <div className='m-xxl-5 m-xl-5 m-lg-4 m-md-4 m-sm-4 m-4 d-flex justify-content-center justify-content-sm-center justify-content-md-center 
                justify-content-lg-center justify-content-xl-start align-items-center'>
                  <div className='row social-networks d-flex justify-content-center align-items-center'>
                    <div className='col'>
                      <div className='row'>
                        <div className='col'>
                          <a href='https://github.com/harshil3662' onMouseOver={()=>{setHover1('hovered')}} onMouseOut={()=>{setHover1('')}}>
                            {hover1 ? <img className='network-img img-fluid' src='github1.png' alt='github'/> : <img className='network-img img-fluid' src='github.png' alt='github'/>}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='row'>
                        <div className='col'>
                          <a href='https://www.linkedin.com/in/harshil-vaghani/' onMouseOver={()=>{setHover2('hovered')}} onMouseOut={()=>{setHover2('')}}>
                            {hover2 ? <img className='network-img img-fluid' src='linkedin1.png' alt='linkedin'/> : <img className='network-img img-fluid' src='linkedin.png' alt='linkedin'/>}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='row'>
                        <div className='col'>
                          <a href='https://www.instagram.com/_harshilvaghani_/' onMouseOver={()=>{setHover3('hovered')}} onMouseOut={()=>{setHover3('')}}>
                            {hover3 ? <img className='network-img img-fluid' src='instagram1.png' alt='instagram'/> : <img className='network-img img-fluid' src='instagram.png' alt='instagram'/>}
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