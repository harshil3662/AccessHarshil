import React from 'react'
import { Link } from "react-router-dom"
import '../Css/Home.css'
import { Container,Row, Col, Stack, Button } from 'react-bootstrap'

function Home() {

  return (
    <Container fluid>
      <Row className='m-5'>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
          <Row className='hv-home-col1-div1 m-5'>Hello! It's great to meet you.</Row>
          <Row className='hv-home-col1-div2 m-5'>I'm here to innovate web development
            turning ideas into innovative reality and creative solutions.
          </Row>
          <div className='m-5'>
            <Link to={"/about"}>
              <button className='hv-btn'>About Me</button>
            </Link>
          </div>
          <div className='links m-5'>
            <div>
              <a href='https://github.com/harshil3662'>
                <img id='github' src='github.png' alt='github'/>
              </a>
            </div>
            <div>
              <a href='https://www.linkedin.com/in/harshil-vaghani/'>
                <img id='linkedin' src='linkedin.png' alt='linkedin'/>
              </a>
            </div>
            <div>
              <a href='https://www.instagram.com/_harshilvaghani_/'>
                <img id='github' src='instagram.png' alt='github'/>
              </a>
            </div>
          </div>
        </Col>
        <Col xs={1} className='d-flex justify-content-center align-items-center'>
          <div className='vertical-line'></div>
        </Col>
        <Col xs={12} sm={12} md={5} lg={5} xl={5} xxl={5} className='d-flex justify-content-center align-items-center'>
          <Row className='circle'>
            <img id="avatar" className='img-fluid' src='avatar.png' alt='avatar'/>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Home