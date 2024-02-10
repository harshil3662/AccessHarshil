import React, {useState} from 'react'
import { Link } from "react-router-dom"
import '../Css/Navbar.css'
import { Container,Row, Col,Stack } from 'react-bootstrap'

function Navbar() {

  return (
    <div className="hv-nav">
      <Container className='py-2 px-2' fluid>
        <Row>
          <Col className='d-flex justify-content-center align-items-center'>
            <Link to={"/"}>
              <img id='hv' src='logo3.png' alt='Harshil Vaghani'/>
            </Link>
          </Col>
          <Col className='d-flex justify-content-center align-items-center mx-5'>
            <Container className='d-flex justify-content-end align-items-center' md="auto">
              <Stack direction='horizontal' gap={3} className='tabbar'>
                <div>
                  <Link to={"/"} className={`link-name`}>Home</Link>
                </div>
                <div>
                  <Link to={"/about"} className={`link-name`}>About</Link>
                </div>
                <div>
                  <Link to={"/skills"} className={`link-name`}>Skills</Link>
                </div>
                <div>
                  <Link to={"/projects"} className={`link-name`}>Projects</Link>
                </div>
                <div>
                  <Link to={"/contact"} className={`link-name`}>Contact</Link>
                </div>
              </Stack>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Navbar