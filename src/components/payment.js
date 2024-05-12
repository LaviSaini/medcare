import React from "react";
import { Container, Form } from "react-bootstrap";
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const Payment =() =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        
    <>
    <Container fluid>
        <div className="row">
            <div className="col-md-6" style={{height:'570px', background: 'url(https://payment.athena-healthy.com/Logo.png)', backgroundSize: '68%', backgroundPosition:'center', backgroundRepeat: 'no-repeat'}}></div>
            <div className="col-md-6 p-3">
            <div className="payment">
                    <span>Welcome!<br/>
                    Enter your statement code to get started</span>
                    <br/><br/>
                    <div>
                    <Form>
                    <Form.Group controlId="">
                                            <Form.Control type="text" name="clientId" id="clientId" data-mask="AAAA-AAAA-AAA-AAAA" placeholder="XXXX-XXXX-XXX-XXXX" style={{width: '240px', color: '#495057'}}/>
                                        </Form.Group>
                    <routerLink className="link" onClick={handleShow}>Where can I find my code?</routerLink>
                    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Find Your Code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>We'll need your statement code to identify you. You can find it on your statement as shown below:</p>
          <img src="https://payment.athena-healthy.com/assets/images/payment-athena-health.png" alt="" style={{width: '90%'}}></img>
        </Modal.Body>
      </Modal>
                    <br/>
                    <br/>
                    <button type="submit" class="btn" id="submit-btn">Continue</button>
                    <br/>
                    <br/>
                    </Form>
                    </div>
                </div>
            </div>
        </div>
        </Container>

        <Container className="payment-footer">
        <hr />
        <div class="row">
            <div class="col-md-6">
                <p style={{fontSize: '12px'}}>Note: This page should only be accessed by the patient or those authorized by the patient (e.g. guarantor).
                    By continuing, you represent that you are authorized to address the patient's billing matters.</p>
            </div>
            <div class="col-md-6" style={{textAlign: 'right'}}>
                <div>
                    <a href="./Privacy.html">Privacy Policy</a>
		    <a href="./Contactus.html">Contact Us</a>
	            <a href="./Aboutus.html">About Us</a>
                </div>
            </div>
        </div>
    </Container>
    </>
    )
}

export default Payment