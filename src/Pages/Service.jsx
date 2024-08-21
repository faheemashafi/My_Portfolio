import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Service() {
  return (
    <Container className='mt-5 '>
      {/* First Row */}
      <Row className='justify-content-center'>
        <Col data-aos="flip-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
          className='mt-4 me-4 service-card'
          style={{
            backgroundColor: 'white',
            width: '100%',
            maxWidth: '300px',
            padding: '30px',
            textAlign: 'center',
            margin: '0 5px',
            minHeight: '200px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: ' 2px 10px 8px black'
            
          }}
          md={4}
        >
          <div style={{ flex: 1 }}>
            <center>
              <p><i style={{ color: '#fcb045' }} className="fa-brands fa-3x fa-html5"></i></p>
              <p style={{ color: '#382c6b', fontSize:"20px" }}><b>Frontend</b></p>
              <p style={{ fontFamily: "'Jost', sans-serif", color: 'black' }}>HTML5, CSS, Bootstrap, and JavaScript technologies.</p>
            </center>
          </div>
        </Col>

        <Col  data-aos="flip-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
         
          style={{
            backgroundColor: 'white',
            width: '100%',
            maxWidth: '300px',
            padding: '30px',
            textAlign: 'center',
            margin: '0 5px',
            minHeight: '200px',
            display: 'flex',
            flexDirection: 'column',boxShadow: ' 2px 10px 8px black'

          }}
          className='mt-4 me-4 service-card'
          md={4}
        >
<div style={{ flex: 1 }}>
            <center>
              <p><i style={{ color: '#fcb045' }} className="fa-brands fa-3x fa-react"></i></p>
              <p style={{ color: '#382c6b', fontSize:"20px" }}><b>MERN</b></p>
              <p style={{ fontFamily: "'Jost', sans-serif", color: 'black' }}>React at the frontend, on the server side, Express.js (the framework of Node.js), and MongoDB as the database.</p>
            </center>
          </div>




        
        </Col>

        <Col data-aos="flip-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
          className='mt-4 me-4  service-card'
          style={{
            backgroundColor: 'white',
            width: '100%',
            maxWidth: '300px',
            padding: '30px',
            textAlign: 'center',
            margin: '0 5px',
            minHeight: '200px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: ' 2px 10px 8px black'
          }}
          md={4}
        >
          <div style={{ flex: 1 }}>
            <center>
              <p><i style={{ color: '#fcb045' }} className="fa-solid fa-3x fa-globe"></i></p>
              <p style={{ color: '#382c6b', fontSize:"20px" }}><b>Basic Programming</b></p>
              <p style={{ fontFamily: "'Jost', sans-serif", color: 'black' }}>Basic programming languages such as C & C++.</p>
            </center>
          </div>
        </Col>
      </Row>

      {/* Second Row */}
      <Row className='justify-content-center'>
        <Col data-aos="flip-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
          className='mt-4 me-4 service-card'
          style={{
            backgroundColor: 'white',
            width: '100%',
            maxWidth: '300px',
            padding: '30px',
            textAlign: 'center',
            margin: '0 5px',
            minHeight: '200px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: ' 2px 10px 8px black'
          }}
          md={4}
        >
        <div style={{ flex: 1 }}>
            <center>
              <p><i style={{ color: '#fcb045' }} className="fa-brands fa-angular fa-3x"></i></p>
              <p style={{ color: '#382c6b', fontSize:"20px" }}><b>MEAN Stack</b></p>
              <p style={{ fontFamily: "'Jost', sans-serif", color: 'black' }}>Angular at the frontend, on the server side, Express.js (the framework of Node.js), and MongoDB as the database.</p>
            </center>
          </div>
        </Col>

        <Col data-aos="flip-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
          className='mt-4 me-4 service-card'
          style={{
            backgroundColor: 'white',
            width: '100%',
            maxWidth: '300px',
            padding: '30px',
            textAlign: 'center',
            margin: '0 5px',
            minHeight: '200px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: ' 2px 10px 8px black',
            
          }}
          md={4}
        >
          <div style={{ flex: 1 }}>
            <center>
              <p><i style={{ color: '#fcb045' }} className="fa-brands fa-3x fa-microsoft"></i></p>
              <p style={{ color: '#382c6b', fontSize:"20px" }}><b>Microsoft Office PowerPoint</b></p>
              <p style={{ fontFamily: "'Jost', sans-serif", color: 'black' }}>Microsoft office PowerPoint for Project Presentation.</p>
            </center>
          </div>
        </Col>

        <Col data-aos="flip-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
          className='mt-4 me-4 service-card'
          style={{
            backgroundColor: 'white',
            width: '100%',
            maxWidth: '300px',
            padding: '30px',
            textAlign: 'center',
            margin: '0 5px',
            minHeight: '200px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: ' 2px 10px 8px black'
          }}
          md={4}
        >
          <div  style={{ flex: 1 }}>
            <center>
              <p><i style={{ color: '#fcb045' }} className="fa-brands fa-3x fa-figma"></i></p>
              <p style={{ color: '#382c6b', fontSize:"20px" }}><b>Figma</b></p>
              <p style={{ fontFamily: "'Jost', sans-serif", color: 'black' }}>Figma makes collaborative design a breeze.</p>
            </center>
            
          </div>
        </Col>
      </Row>
      <br />
      <br />
    </Container>
  );
}

export default Service;
