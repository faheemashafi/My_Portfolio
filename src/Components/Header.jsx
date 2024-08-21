import React, { useState } from 'react';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#382c6b" }} variant="dark">
        <Container>
          <Row className="w-100">
            <Col xs={5} lg={2}>
              {/* <Navbar.Brand as={Link} to="/">
                <i className="fa-solid fa-fingerprint me-3"></i><b>COD<i style={{ color: "#fcb045" }} className="fa-brands fa-internet-explorer"></i>R.</b>
              </Navbar.Brand> */}
            </Col>
            <Col xs={6} lg={2}></Col>
            <Col xs={6} lg={2}></Col>
            <Col xs={6} lg={2}></Col>
            <Col xs={6} lg={1}></Col>
            <Col xs={6} lg={3} className="text-end">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link
                    as={Link}
                    to="/"
                    className={`nav-link ${activeLink === '/' ? 'active' : ''}`}
                    style={{ color: activeLink === '/' ? '#fcb045' : 'white' }}
                    onClick={() => handleLinkClick('/')}
                  ><b>Home</b></Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/about"
                    className={`nav-link ${activeLink === '/about' ? 'active' : ''}`}
                    style={{ color: activeLink === '/about' ? '#fcb045' : 'white' }}
                    onClick={() => handleLinkClick('/about')}
                  ><b>About</b></Nav.Link>
                  {/* <Nav.Link
                    as={Link}
                    to="/service"
                    className={`nav-link ${activeLink === '/service' ? 'active' : ''}`}
                    style={{ color: activeLink === '/service' ? '#fcb045' : 'white' }}
                    onClick={() => handleLinkClick('/service')}
                  ><b>Services</b></Nav.Link> */}
                  <Nav.Link
                    as={Link}
                    to="/portfolio"
                    className={`nav-link ${activeLink === '/portfolio' ? 'active' : ''}`}
                    style={{ color: activeLink === '/portfolio' ? '#fcb045' : 'white' }}
                    onClick={() => handleLinkClick('/portfolio')}
                  ><b>Portfolio</b></Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/contactform"
                    className={`nav-link ${activeLink === '/contactform' ? 'active' : ''}`}
                    style={{ color: activeLink === '/contactform' ? '#fcb045' : 'white' }}
                    onClick={() => handleLinkClick('/contactform')}
                  ><b>Contact</b></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
