import React from 'react'
import {Container,Badge,Nav,Navbar,NavDropdown } from 'react-bootstrap';


const NavigationBar = ({setCategory}) => {
  return (
    <div>
<Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home"><Badge bg="light text-dark fs-3">NewsMag</Badge></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=> setCategory("technology")} >Technology</Nav.Link>
            <Nav.Link onClick={()=> setCategory("business")} >Business</Nav.Link>
            <Nav.Link onClick={()=> setCategory("health")} >Health</Nav.Link>
            <Nav.Link onClick={()=> setCategory("sports")} >Sports</Nav.Link>
            <Nav.Link onClick={()=> setCategory("entertainment")} >Entertainment</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavigationBar