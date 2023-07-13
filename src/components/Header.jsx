/* eslint-disable no-unused-vars */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import brand from '../assets/wiki-dog-brand-sinfondo.png'
import '../css/Header.css'

const Header = () => {
  return (
    <header>
        <figure className='d-flex justify-content-center'>
            <img src={brand} alt="" className='brand'/>
        </figure>
        {/* <Navbar expand="lg" className="header-nav">
            <Container>
                <Navbar.Brand href="#home" className='brand-container'></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className='nav-link'>Home</Nav.Link>
                        <Nav.Link href="#link" className='nav-link'>Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> */}

    </header>
  )
}

export default Header
