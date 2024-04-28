import React from 'react'
import '../Css/Skills.css'

function Skills() {
  return (
    <div className='container skills'>
      <div className='text-center heading mt-5'>Skills</div>
      <div className='row d-flex justify-content-center align-items-stretch mt-5'>
        <div className='col-12 col-sm-12 col-md-5 col-lg-5 col-xl-2 col-xxl-2 flex-fill skill-box m-3 p-2'>
          <div className='skill-secction-name text-center m-4'>Frontend</div>
          <div className='row m-4'>
            <div className='container-fluid d-flex justify-content-start align-items-center flex-wrap'>
              <div className='skill-name'>HTML</div>
              <div className='skill-name'>CSS</div>
              <div className='skill-name'>JavaScript</div>
              <div className='skill-name'>React Js</div>
              <div className='skill-name'>Bootstrap</div>
            </div>
          </div>
        </div>
        <div className='col-12 col-sm-12 col-md-5 col-lg-5 col-xl-2 col-xxl-2 flex-fill skill-box m-3 p-2'>
          <div className='skill-secction-name text-center m-3'>Backend</div>
          <div className='row m-4'>
            <div className='container-fluid d-flex justify-content-xxl-start justify-content-xl-center align-items-center flex-wrap'>
              <div className='skill-name'>Node Js</div>
              <div className='skill-name'>Express Js</div>
              <div className='skill-name'>web3.js</div>
              <div className='skill-name'>ethers.js</div>
              <div className='skill-name'>Hardhat</div>
            </div>
          </div>
        </div>
        <div className='col-12 col-sm-12 col-md-5 col-lg-5 col-xl-2 col-xxl-2 flex-fill skill-box m-3 p-2'>
          <div className='skill-secction-name text-center m-3'>Database</div>
          <div className='row m-4'>
            <div className='container-fluid d-flex justify-content-xxl-start justify-content-xl-center align-items-center flex-wrap'>
              <div className='skill-name'>MySql</div>
              <div className='skill-name'>MongoDB</div>
              <div className='skill-name'>PostgreSGL</div>
            </div>
          </div>
        </div>
        <div className='col-12 col-sm-12 col-md-5 col-lg-5 col-xl-2 col-xxl-2 flex-fill skill-box m-3 p-2'>
          <div className='skill-secction-name text-center m-3'>DevOps</div>
          <div className='row m-4'>
            <div className='container-fluid d-flex justify-content-start align-items-center flex-wrap'>
              <div className='skill-name'>Docker</div>
              <div className='skill-name'>Kubernetes</div>
              <div className='skill-name'>Git</div>
              <div className='skill-name'>Jenkins</div>
              <div className='skill-name'>Ansible</div>
              <div className='skill-name'>Terraform</div>
              <div className='skill-name'>Github Workflows</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills