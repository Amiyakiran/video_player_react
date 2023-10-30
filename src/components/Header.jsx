import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar className="bg-dark">
    <Container>
      <Navbar.Brand href="#home">
      <Link to={'/'} style={{textDecoration:'none', color:'white', fontSize:'30px'}}>
          <i class="fa-sharp fa-solid fa-video fa-beat-fade me-4"style={{color:'orange'}}></i>
        
           Media Player
      </Link>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header