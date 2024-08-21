import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import me1 from '../images/Picsart_23-12-08_19-52-38-418.png'
import './st.css'
function Home() {
  return (
    <div >
      <Container >
      <Row className=" mt-5">
      <Col data-aos="fade-down-right"  data-aos-easing="linear"
          data-aos-duration="800" md={6}><h3 style={{marginTop:"19%"}}> <b style={{fontFamily: "font-family: 'Jost', sans-serif;",color:"white"}} >Hello, It's Me</b></h3><br />
      <h1 data-aos="flip-up" data-aos-easing="linear"
          data-aos-duration="800" style={{fontFamily:"'Philosopher', sans-serif",fontSize:"60px",fontWeight:"700" ,marginTop:"-3%",color:"white"}}>Faheema PS</h1><br />
      <h3 style={{marginTop:"-3%"}}> <b style={{fontFamily: "font-family: 'Jost', sans-serif;",color:"white"}} >And I'm a  <span style={{color:"#fcb045"}}>MERN Stack Developer</span></b></h3><br />
      <p style={{fontFamily: "font-family: 'Jost', sans-serif;",color:"white",marginTop:"-4%"}}><b>I'm a passionate and smart working individual who is always looking to improve my skills and learn new technologies.</b></p>
      <div className='col-lg-3 col-sm-12 icons d-flex justify-content-evenly ms-3 mt-4'>
            <Link  data-aos="flip-up" data-aos-easing="linear"
          data-aos-duration="800"  to={'https://www.instagram.com/hafish__10?igsh=ZnkzcHFyazQ3ZHlm'} style={{ textDecoration:'none',color:'white',}}className='icon-link'><i class="fa-brands fa-instagram fa-2x me-4 ms-4"></i></Link>
          <Link data-aos="flip-up" data-aos-easing="linear"
          data-aos-duration="800" to={'https://github.com/hafishali'} style={{textDecoration:'none',color:'white'}}className='icon-link'><i class="fa-brands fa-github fa-2x me-4 "></i></Link>
          <Link data-aos="flip-up" data-aos-easing="linear"
          data-aos-duration="800" to={'https://www.linkedin.com/in/hafishali/'} style={{textDecoration:'none',color:'white'}}className='icon-link'><i class="fa-brands fa-linkedin-in fa-2x me-4"></i></Link>
          <Link data-aos="flip-up" data-aos-easing="linear"
          data-aos-duration="800" to={'mailto:hafishali4@gmail.com'} style={{textDecoration:'none',color:'white'}}className='icon-link'><i class="fa-solid fa-2x me-4 fa-envelope"></i></Link>
  
         </div>
      </Col>
      <Col  md={6}>
        {/* <img  data-aos="fade-down"  data-aos-easing="linear"
          data-aos-duration="800"  style={{width:"100%",marginTop:"-35%"}} src={me1} alt="" /> */}

      </Col>

      </Row>
      </Container>
    </div>
  )
}

export default Home