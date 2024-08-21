import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './st.css'

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xeqyeaez");

  if (state.succeeded) {
    return (
      <div>
        <center>
          <h1 data-aos="fade-down-right" className='mt-5' style={{ color: "white"}}>
            <b >CONTACT <span style={{ color: "#fcb045" }}>ME</span></b>
          </h1>
         
        </center>

        
      <center>  <a href="" style={{textDecoration:"none",}}><i style={{marginTop:"10%",color: "#fcb045"}} class="fa-solid fa-circle-check fa-3x"></i><h1  style={successMessageStyle}>
        <br />Successfully Submitted</h1></a>
     </center>
      </div>
    );
  }

  return (
    <div>
      <center>
        <h1 data-aos="fade-down-right" data-aos-easing="linear"
          data-aos-duration="1000" className='mt-5' style={{ color: "white" }}>
          <b>CONTACT <span style={{ color: "#fcb045" }}>US</span></b>
        </h1>
        <div className='col-lg-2 col-sm-icons d-flex justify-content-evenly  mt-3'>
            <Link data-aos="flip-up" data-aos-easing="linear"
          data-aos-duration="1000" to={'https://www.instagram.com/hafish__10?igsh=ZnkzcHFyazQ3ZHlm'} style={{ textDecoration:'none',color:'white',boxShadow: ' 2px 10px 8px black'}}className='icon-link'><i class="fa-brands fa-instagram fa-2x "></i></Link>
          <Link data-aos="flip-up" data-aos-easing="linear"
          data-aos-duration="1000" to={'https://github.com/hafishali'} style={{textDecoration:'none',color:'white',boxShadow: ' 2px 10px 8px black',}}className='icon-link'><i class="fa-brands fa-github fa-2x "></i></Link>
          <Link data-aos="flip-up" data-aos-easing="linear"
          data-aos-duration="1000" to={'https://www.linkedin.com/in/hafishali/'} style={{textDecoration:'none',color:'white',boxShadow: ' 2px 10px 8px black',}}className='icon-link'><i class="fa-brands fa-linkedin-in fa-2x "></i></Link>
          <Link data-aos="flip-up" data-aos-easing="linear"
          data-aos-duration="1000" to={"mailto:hafishali4@gmail.com"} style={{textDecoration:'none',color:'white',boxShadow: ' 2px 10px 8px black',}}className='icon-link'><i class="fa-solid fa-2x  fa-envelope"></i></Link>
  
         </div>
      </center>
      <form data-aos="flip-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000" onSubmit={handleSubmit} style={formStyle}>
        <TextField
          id="name"
          label="Your Name"
          InputLabelProps={{
            style: { color: '#1e2622' },
          }}
          type="text"
          name="name"

          fullWidth
          variant="outlined"
          style={inputStyle}
          className='mt-3'
        />
        <ValidationError
          prefix="Name"
          field="text"
          errors={state.errors}
          style={errorMessageStyle}
        />
        <TextField
          id="email"
          label="Email Address"
          InputLabelProps={{
            style: { color: '#1e2622' },
          }}
          type="email"
          name="email"
          fullWidth
          variant="outlined"
          style={inputStyle}
          className='mt-3'
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          style={errorMessageStyle}
        />
        <TextField
          id="message"
          label="Message"
          InputLabelProps={{
            style: { color: '#1e2622' },
          }}
          name="message"
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          style={textareaStyle}
          className='mt-3'
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          style={errorMessageStyle}
        />
        <center>
          <Button
            type="submit"
            disabled={state.submitting}
            variant="contained"
            style={submitButtonStyle}
            className='mt-2'
          >
            Submit
          </Button>
        </center>
      </form>
    </div>
  );
};

// Inline styles
const formStyle = {
  maxWidth: '400px',
  margin: 'auto',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  marginTop: "3%",
  boxShadow: ' 2px 10px 8px black',
  backgroundColor:"#fcb045"
};

const inputStyle = {
  marginBottom: '15px',
  boxShadow: ' 2px 10px 8px black',
  backgroundColor:"#fcb045",
  
};

const textareaStyle = {
  marginBottom: '15px',
  boxShadow: ' 2px 10px 8px black',
  backgroundColor:"#fcb045"
};

const errorMessageStyle = {
  color: 'red',
  marginTop: '5px',
};

const submitButtonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '10px 15px',
  fontSize: '16px',
  borderRadius: '4px',
  cursor: 'pointer',

  backgroundColor:"#1e2622"
};

const successMessageStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  marginTop:"-1%",
 color: "#fcb045"
  
};

export default ContactForm;
