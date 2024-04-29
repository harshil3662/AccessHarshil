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
              <div className='mt-3'>
                <a href='https://github.com/Group3RepairMate/RepairMate' className='project-name'>IOS Application</a>
              </div>
            </div>
            <div className='project m-3 p-3'>
              <div className='image-box'>
                <img src="mern-1.png" className='img' alt="..."/>
              </div>
              <div className='mt-3'>
                <a href='https://github.com/harshil3662/repairmate.git' className='project-name'>MERN Application</a>
              </div>
            </div>
            <div className='project m-3 p-3'>
              <div className='image-box'>
                <img src="portfolio.png" className='img' alt="..."/>
              </div>
              <div className='mt-3'>
                <a href='https://github.com/harshil3662/AccessHarshil.git' className='project-name'>My Portfolio</a>
              </div>
            </div>
            <div className='project m-3 p-3'>
              <div className='image-box'>
                <img src="ethers.png" className='img' alt="..."/>
              </div>
              <div className='mt-3'>
                <a href='https://github.com/harshil3662/chainlink.git' className='project-name'>ethers.js</a>
              </div>
            </div>
            <div className='project m-3 p-3'>
              <div className='image-box'>
                <img src="wallet.png" className='img' alt="..."/>
              </div>
              <div className='mt-3'>
                <a href='https://github.com/harshil3662/crypto-wallet.git' className='project-name'>Crypto Wallet</a>
              </div>
            </div>
            <div className='project m-3 p-3'>
              <div className='image-box'>
                <img src="dk2.png" className='img' alt="..."/>
              </div>
              <div className='mt-3'>
                <a href='https://github.com/harshil3662/building-scalable-app.git' className='project-name'>Docker & Kubernetes</a>
              </div>
            </div>
            <div className='project m-3 p-3'>
              <div className='image-box'>
                <img src="devops.png" className='img' alt="..."/>
              </div>
              <div className='mt-3'>
                <a href='https://github.com/harshil3662/devops.git' className='project-name'>Hands-On DevOps</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects