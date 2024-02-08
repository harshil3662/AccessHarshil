import React from 'react'
import { Link } from "react-router-dom"
import '../Css/Home.css'
import { Container,Row, Col, Stack, Button } from 'react-bootstrap'

function Home() {

  return (
    <Container fluid className='ctn'>
      <Row className='ctn-row'>
        <Col className='m-5'>
          <Stack direction='vertical' gap={3} className='m-5'>
            <div className='hv-greet-msg mx-5'>Hello There,<br/>Welcome to My Portfolio</div>
            <div className='hv-position mx-5'>I am in Web Development.</div>
            <div className='mx-5'>
              <Link to={"/about"}>
                <button className='hv-btn'>About Me</button>
              </Link>
            </div>
            <Row md='auto' className='mx-5'>
              <Col>
                <a href='https://www.linkedin.com/in/harshil-vaghani/'>
                  <img id='linkedin' src='linkedin.png' alt='linkedin'/>
                </a>
              </Col>
              <Col>
                <a href='https://github.com/harshil3662'>
                  <img id='github' src='github.png' alt='github'/>
                </a>
              </Col>
            </Row>
          </Stack>
        </Col>
        <Col className='d-flex justify-content-center align-items-center' xs={8} md={6}>
          <Row>
            <img id="avatar" src='avatar.png' alt='avatar'/>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Home