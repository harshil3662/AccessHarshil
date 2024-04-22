import React from 'react'
import '../Css/Projects.css'

function Projects() {
  return (
    <div className='container projects'>
      <div className='text-center heading mt-5'>Projects</div>
        <div className='row d-flex justify-content-center align-items-start mt-5'>
          <div className='col-5 col-sm-5 col-md-5 project m-3 p-2'>
            <div>Repairmate IOS Application</div>
          </div>
          <div className='col-5 col-sm-5 col-md-5 project m-3 p-2'>
            <div>Repairmate Web Application</div>
          </div>
          <div className='col-5 col-sm-5 col-md-5 project m-3 p-2'>
            <div>My Portfolio</div>
          </div>
          <div className='col-5 col-sm-5 col-md-5 project m-3 p-2'>
            <div>Chainlink with ethers.js</div>
          </div>
          <div className='col-5 col-sm-5 col-md-5 project m-3 p-2'>
            <div>Crypto Wallet</div>
          </div>
          <div className='col-5 col-sm-5 col-md-5 project m-3 p-2'>
            <div>Docker & Kubernetes</div>
          </div>
          <div className='col-5 col-sm-5 col-md-5 project m-3 p-2'>
            <div>Hands-on DevOps Experience</div>
          </div>
        </div>
    </div>
  )
}

export default Projects