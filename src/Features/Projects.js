import React from 'react'
import '../Css/Projects.css'

function Projects() {
  return (
    <div className='container projects'>
      <div className='text-center heading mt-5'>Projects</div>
        <div className='row d-flex justify-content-center align-items-center mt-5'>
          <div className='container d-inline-flex justify-content-center align-items-center flex-wrap'>
            <div className='project m-3 p-3'>
              <div className='image-box'>
                <img src="ios-featured.png" className='img' alt="..."/>
              </div>
              <div className='project-name mt-3'>IOS Application</div>
            </div>
            <div className='project m-3 p-3'>
              <div className='image-box'>
                <img src="mern-1.png" className='img' alt="..."/>
              </div>
              <div className='project-name mt-3'>MERN Application</div>
            </div>
            <div className='project m-3 p-3'>
              <div className='image-box'>
                <img src="portfolio.png" className='img' alt="..."/>
              </div>
              <div className='project-name mt-3'>My Portfolio</div>
            </div>
            <div className='project m-3 p-3'>
              <div className='image-box'>
                <img src="ethers.png" className='img' alt="..."/>
              </div>
              <div className='project-name mt-3'>ethers.js</div>
            </div>
            <div className='project m-3 p-3'>
              <div className='image-box'>
                <img src="wallet.png" className='img' alt="..."/>
              </div>
              <div className='project-name mt-3'>Crypto Wallet</div>
            </div>
            <div className='project m-3 p-3'>
              <div className='image-box'>
                <img src="dk2.png" className='img' alt="..."/>
              </div>
              <div className='project-name mt-3'>Docker & Kubernetes</div>
            </div>
            <div className='project m-3 p-3'>
              <div className='image-box'>
                <img src="devops.png" className='img' alt="..."/>
              </div>
              <div className='project-name mt-3'>Hands-On DevOps</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects