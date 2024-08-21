import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import me2 from '../images/Picsart_23-12-08_19-52-38-418.png'
import { Link } from 'react-router-dom'
import './ContactForm'


function About() {
  return (
    <div>  <Container >
      <Row className=" mt-5">

        <Col data-aos="flip-right" data-aos-easing="linear"
          data-aos-duration="800" md={7}>
          <h1 style={{ fontFamily: "'Philosopher', sans-serif", fontSize: "60px", fontWeight: "700", marginTop: "-3%", color: "white" }}>About <span style={{ color: "#fcb045" }}> Me</span></h1>
          <h3 style={{ fontFamily: "font-family: 'Jost', sans-serif;", color: "white" }}> MERN Stack Developer<span style={{ color: "#fcb045" }}> !</span></h3>
          <p style={{ fontFamily: "font-family: 'Jost', sans-serif;", color: "white", marginTop: "4%" }}><b>Crafting innovative digital solutions with the MEARN stack, I'm <span style={{ color: "#fcb045" }}>Hafish Ali N </span> – a developer driven by passion and a thirst for continuous growth. Building tomorrow's possibilities through code and creativity.</b></p>
          <Row className='mt-5'>

            <Col className='mt-3' md={6}>
              <p style={{ color: "white", fontFamily: "font-family: 'Jost', sans-serif;" }}>Email : hafishali4@gmail.com </p>
              <hr style={{ height: '1px', border: 'none', backgroundColor: '#fcb045' }} />
              <p style={{ color: "white", fontFamily: "font-family: 'Jost', sans-serif;" }}>Phone :+91 62826 75362 </p>
              <hr style={{ height: '1px', border: 'none', backgroundColor: '#fcb045' }} />
              <p style={{ color: "white", fontFamily: "font-family: 'Jost', sans-serif;" }}>Degree : BCA(Bachelor Of Computer Applications) </p>
              <hr style={{ height: '1px', border: 'none', backgroundColor: '#fcb045' }} />
              <Link to={'https://drive.google.com/file/d/16YUf-1ekgz8xOMBk38lig6F2FGH7h4nf/view?usp=drivesdk '} target='_blank' download> <Button style={{ backgroundColor: "#fcb045", borderRadius: "20px", marginTop: "4%", borderColor: "#fcb045", fontFamily: "font-family: 'Jost', sans-serif;", fontWeight: "500" }} >Download CV</Button>{' '}</Link>
            </Col>

            <Col className='mt-3' md={6}>
              <p style={{ color: "white", fontFamily: "font-family: 'Jost', sans-serif;" }}>Date Of Birth : 08 March 2002 </p>
              <hr style={{ height: '1px', border: 'none', backgroundColor: '#fcb045' }} />
              <p style={{ color: "white", fontFamily: "font-family: 'Jost', sans-serif;" }}>Place : Kerala, India</p>
              <hr style={{ height: '1px', border: 'none', backgroundColor: '#fcb045' }} />
              <p style={{ color: "white", fontFamily: "font-family: 'Jost', sans-serif;" }}>Languages : English, Malayalam </p>
              <hr style={{ height: '1px', border: 'none', backgroundColor: '#fcb045' }} />

            </Col>

          </Row>
        </Col>

        <Col md={5}>
          {/* <img data-aos="fade-down" data-aos-easing="linear"
            data-aos-duration="800" src={me2} style={{ width: "100%", marginTop: "-30%" }} alt="" /> */}

        </Col>
      </Row>
      <div data-aos="zoom-in-right" data-aos-duration="1000" className='skill_container mt-5'>
        <div className="bar-container">
          <h3 style={{ color: "white" }}> <b>HTML</b></h3>
          <span className='spann' style={{ color: "white" }}>88%</span>
          <div className="base-bar"></div>
          <div className="base-bar html-bar"></div>
        </div>
        <div className="bar-container">
          <h3 style={{ color: "white" }}> <b>CSS & BOOTSTRAP</b></h3>
          <span className='spann' style={{ color: "white" }}>85%</span>
          <div className="base-bar"></div>
          <div className="base-bar css-bar"></div>
        </div>
        <div className="bar-container">
          <h3 style={{ color: "white" }}> <b>JAVASCRIPT</b></h3>
          <span className='spann' style={{ color: "white" }}>73%</span>
          <div className="base-bar"></div>
          <div className="base-bar js-bar"></div>
        </div>
        {/* <div className="bar-container">
              <h3 style={{color:"white"}}> <b>ANGULAR/TYPESCRIPT</b></h3>
              <span  className='spann' style={{color:"white"}}>68%</span>
              <div className="base-bar"></div>
              <div className="base-bar at-bar"></div>
            </div> */}
        <div className="bar-container">
          <h3 style={{ color: "white" }}> <b>NODE.JS/EXPRESS.JS</b></h3>
          <span className='spann' style={{ color: "white" }}>68%</span>
          <div className="base-bar"></div>
          <div className="base-bar ne-bar"></div>
        </div>
        <div className="bar-container">
          <h3 style={{ color: "white" }}> <b>MONGODB</b></h3>
          <span className='spann' style={{ color: "white" }}>65%</span>
          <div className="base-bar"></div>
          <div className="base-bar mdb-bar"></div>
        </div>
        <div className="bar-container">
          <h3 style={{ color: "white" }}> <b>REACT</b></h3>
          <span className='spann' style={{ color: "white" }}>70%</span>
          <div className="base-bar"></div>
          <div className="base-bar react-bar"></div>
        </div>
        <div className="bar-container">
          <h3 style={{ color: "white" }}> <b>REACT BOOTSTRAP</b></h3>
          <span className='spann' style={{ color: "white" }}>70%</span>
          <div className="base-bar"></div>
          <div className="base-bar rb-bar"></div>
        </div>

        <div>





        </div>


      </div>
      <Row>
        <h2 className='mt-5 text-center' style={{ fontFamily: "'Philosopher', sans-serif", fontSize: "50px", fontWeight: "700", marginTop: "-3%", color: "#fcb045" }}>Education</h2>
        <Col data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" md={6}>

          <div className='mt-4' style={{
            alignItems: "center", justifyContent: "center", backgroundColor: "white", padding: "20px", width: "100%", height: "70%", boxShadow: '2px 10px 8px black',
          }}>
            <p><i class="fa-solid fa-calendar-week"></i> 2023 Jul - 2024 Jan</p>
            <h4><b>MERN Stack </b></h4>
            <p style={{ color: "#fcb045" }}>Luminar TechnoLab Kochi</p>
            <ul style={{ fontFamily: "font-family: 'Jost', sans-serif;,", fontSize: "15px" }}>

              <li>Worked in the environment of Mongodb, node.js and its framework express.js.</li>
              <li>Take in the method of API service calls.</li>
              <li>Made a grasp on Netlify.com, vercel, Git, GitHub and Render to deploy websites.</li>
              <li>Made a good understanding of React environment and done projects.</li>
              <li>Performed presentation on MERN  projects.</li>

            </ul>

          </div></Col>
        <Col data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" md={6}>
          <div className='mt-4' style={{
            alignItems: "center", justifyContent: "center", backgroundColor: "white", padding: "20px", width: "100%", height: "70%", marginBottom: "20%", boxShadow: ' 2px 10px 8px black',
            padding: '20px',
          }}>
            <p><i class="fa-solid fa-calendar-week"></i> 2020-2023</p>
            <h4><b>Bachelor of Computer Application</b></h4>
            <p style={{ color: "#fcb045" }}>Najath Arts & Science College,Palakkad</p>
            <ul style={{ fontFamily: "font-family: 'Jost', sans-serif;,", fontSize: "15px", textAlign: "justify" }}>
              <li>I have done my Bachelors of computer application  from Najath Arts & Science College under Calicut University. During these three years of education, I have done a major project, mini projects and seminars in different areas of computer science.</li>
            </ul>

          </div></Col>
      </Row>
      <div >
        <h2 className='mt-5 text-center' style={{ fontFamily: "'Philosopher', sans-serif", fontSize: "50px", fontWeight: "700", marginTop: "-3%", color: "#fcb045" }}>Experience</h2>
        <div className='d-flex justify-content-center'  >
        <div className='w-50  ' data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" md={6}>

          <div className='mt-4' style={{
            alignItems: "center", justifyContent: "center", backgroundColor: "white", padding: "20px", width: "100%", height: "auto", boxShadow: '2px 10px 8px black',
          }}>
            <p><i class="fa-solid fa-calendar-week"></i> 2024 Feb -2024 May</p>
            <h4><b>MERN Stack Developer Intern </b></h4>
            <p style={{ color: "#fcb045" }}>Luminar Technohub Kochi</p>
            <ul style={{ fontFamily: "font-family: 'Jost', sans-serif;,", fontSize: "15px" }}>

              <li>Participated in client meetings to gather and understand their requirements.</li>
              <li>Translated client requirements into technical specifications and actionable tasks.</li>
              <li>Developed and maintained web applications using the MERN stack (MongoDB, Express.js, React, Node.js).</li>
              <li>Implemented RESTful APIs to facilitate communication between the front-end and back-end</li>
              <li>Used React for building dynamic and responsive user interfaces.</li>
              <li>Debugged and resolved technical issues across the entire stack, ensuring smooth application functionality.</li>


            </ul>

          </div></div>
        </div>
        

      </div>




    </Container>


    </div>
  )
}

export default About