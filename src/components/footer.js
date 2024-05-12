import React from "react";
import { Container } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Footer=()=>{
return(
    <>
   <div className="footer">
    <Container>
        <div className="menu d-flex">
        <Navbar.Brand href="#home"><img src="https://cdn.cedar.com/prod/1.0.23766/media/providers/pine/logo.png" alt="logo" className="logo"/></Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#home"><span>About</span></Nav.Link>
            <Nav.Link href="#home"><span>Terms</span></Nav.Link>
            <Nav.Link href="#home"><span>Privacy</span></Nav.Link>
          </Nav>
          <div class="d-flex align-xitems-center">
                    <span>
                        Powered by
                    </span>
                    <a href="https://www.cedar.com/" class="btn-link ms-1 mt-1">
                        <img alt="Cedar" src="https://cdn.cedar.com/prod/1.0.23781/css/assets/media/cedar_no_logo.svg" />
                    </a>
                </div>
        </div>
    </Container>
   </div>
    </>
);
}

export default Footer