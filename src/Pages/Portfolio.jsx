import React from 'react'
import './Style.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import europass from '../images/europass.png'
import cartify from '../images/Screenshot 2023-12-19 120718.png'
import Proserve from '../images/proserve.jpeg'
import fourthree from '../images/Screenshot (79).png'
import Netflix from '../images/netflix .png'
import Travelgo from '../images/Screenshot (80).png'
import BMI from '../images/BMI (1).png'
import Nomadic from '../images/Screenshot 2023-12-19 120518.png'
import './st.css'

function Portfolio() {
  return (
    <div>
<div className='mt-5'>
   <center><h1 style={{color:"white"}}> <b>Latest <span style={{color:"#fcb045"}}>Projects</span></b></h1></center> 
<Container>
    <Row style={{marginBottom:"2%"}}>   
        <Col md={3}>
<div className='mt-5 me-5'>
<Card data-aos="flip-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='mt-5  ' style={{ width: '18rem',boxShadow: ' 2px 10px 8px black'}}>
          <Card.Img variant="top" style={{ height: '250px' }} className='p-2'  src={europass} />
          <Card.Body>
          <center>  <Card.Title style={{color:"black"}}> <b>EUROPASS</b></Card.Title></center>
            
            <div className='d-flex align-items-center justify-content-center mt-3'>
               <Button  href='https://www.europassinternational.com' target='blank'  variant="dark"> <i class="fa-solid fa-link"></i> Visit</Button>
            </div>
            
          </Card.Body>
        </Card>
</div></Col>
<Col md={3}>
<div className='mt-5 me-5'>
<Card data-aos="flip-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='mt-5  ' style={{ width: '18rem',boxShadow: ' 2px 10px 8px black'}}>
          <Card.Img variant="top" style={{ height: '250px' }} className='p-2'  src={Proserve} />
          <Card.Body>
          <center>  <Card.Title style={{color:"black"}}> <b>PROSERVE</b></Card.Title></center>
            
            <div className='d-flex align-items-center justify-content-center mt-3'>
               <Button href='https://proserve-frontend.vercel.app' target='blank'   variant="dark"> <i class="fa-solid fa-link"></i> Visit</Button>
                  
              

            </div>
            
          </Card.Body>
        </Card>
</div></Col>
<Col md={3}>
<div className='mt-5 me-5'>
<Card data-aos="flip-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='mt-5  ' style={{ width: '18rem',boxShadow: ' 2px 10px 8px black'}}>
          <Card.Img variant="top" style={{ height: '250px' }} className='p-2'  src={cartify} />
          <Card.Body>
          <center>  <Card.Title style={{color:"black"}}> <b>CARTIFY</b></Card.Title></center>
            
            <div className='d-flex align-items-center justify-content-center mt-3'>
           <Button  href='https://cartify-front-end.vercel.app/' target='blank'  variant="dark"> <i class="fa-solid fa-link"></i> Visit</Button>
                    
              

            </div>
            
          </Card.Body>
        </Card>
</div></Col>

<Col md={3}>
<div className='mt-5 me-5'>
<Card data-aos="flip-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  className='mt-5  ' style={{ width: '18rem',boxShadow: ' 2px 10px 8px black'}}>
          <Card.Img variant="top" style={{ height: '250px' }} className='p-2'  src={fourthree} />
          <Card.Body>
          <center>  <Card.Title style={{color:"black"}}> <b>433-CLONE</b></Card.Title></center>
            
            <div className='d-flex align-items-center justify-content-center mt-3'>
               <Button href='https://433-clone.vercel.app/' target='blank'   variant="dark"> <i class="fa-solid fa-link"></i> Visit</Button>
                  
              

            </div>
            
          </Card.Body>
        </Card>
</div></Col>

<Col md={3}>
<div className='mt-5 me-5'>
<Card data-aos="flip-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='mt-5  ' style={{ width: '18rem',boxShadow: ' 2px 10px 8px black'}}>
          <Card.Img variant="top" style={{ height: '250px' }} className='p-2'  src={Netflix} />
          <Card.Body>
          <center>  <Card.Title style={{color:"black"}}> <b>NETFLIX CLONE</b></Card.Title></center>
            
            <div className='d-flex align-items-center justify-content-center mt-3'>
               <Button href='https://netflix-clone-three-iota-30.vercel.app' target='blank'   variant="dark"> <i class="fa-solid fa-link"></i> Visit</Button>
                  
              

            </div>
            
          </Card.Body>
        </Card>
</div></Col>
<Col md={3}>
<div className='mt-5 me-5'>
<Card data-aos="flip-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  className='mt-5  ' style={{ width: '18rem',boxShadow: ' 2px 10px 8px black'}}>
          <Card.Img variant="top" style={{ height: '250px' }} className='p-2'  src={Travelgo} />
          <Card.Body>
          <center>  <Card.Title style={{color:"black"}}> <b> TRAVELGO </b></Card.Title></center>
            
            <div className='d-flex align-items-center justify-content-center mt-3'>
               <Button href='https://travel-omega-wheat.vercel.app' target='blank'   variant="dark"> <i class="fa-solid fa-link"></i> Visit</Button>
               
              

            </div>
            
          </Card.Body>
        </Card>
</div></Col>


</Row></Container>

</div>

    </div>
  )
}

export default Portfolio