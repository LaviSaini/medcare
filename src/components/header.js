import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Toast from 'react-bootstrap/Toast';

const Header = () => {
  const [showA, setShowA] = useState(true);

  const toastClose = () => setShowA(!showA);
  return (
    <>
      {
        showA &&
        <Toast>
          <Container>
            <div className='d-flex'>
              <img src="https://cdn.cedar.com/prod/1.0.23781/media/icons/emergency-symbol-white-and-blue.png" className='covid-img' />
              <div className='content'>
                <strong className='cov-heading'>Support during COVID-19</strong>
                <p>Crystal Run's top priority is to care for our patients. We're here to help you find the best possible billing solution during this difficult time. Contact us at billinginquiries@crystalrunhealthcare.com or<strong> (844) 259-5944.</strong></p>
              </div>
              <div onClick={toastClose} style={{color:'#fff'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
              </div>
            </div>
          </Container>
        </Toast>
      }
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#home"><img src="https://cdn.cedar.com/prod/1.0.23766/media/providers/pine/logo.png" alt="logo" className="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home"><img src="https://cdn.cedar.com/prod/1.0.23766/css/assets/media/icons/chat_bubble_blue.svg" alt="icon" /><span>Chat</span></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header