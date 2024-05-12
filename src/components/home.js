import React from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Header from "./header";
import Footer from "./footer";
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>
            <Header />
            <div className="main">
                <Container>
                    <div className="content">
                        <span>Welcome to Crystal Run</span>
                        <h1>Pay your clinician bills online easily and securely</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        </div>
                        <div className="col-md-6">
                            <div className="img-box">
                                <img className="w-100" alt="example paper bill" src="https://cdn.cedar.com/prod/1.0.23776/media/images/organiclogin-provider-paperbill.png" />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="contact-form">
                <Container>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form">
                                <div className="card">
                                    <h3>View your bill online</h3>
                                    <p className="para">All fields are required unless stated otherwise</p>

                                    <Form>
                                        <Form.Group controlId="">
                                            <Form.Label> Bill ID</Form.Label>
                                            <Form.Control type="text" className="input" placeholder="0000 - 0000 - 0000" />
                                        </Form.Group>

                                        <Form.Group controlId="">
                                            <Form.Label> Date of birth (MM/DD/YYYY)</Form.Label>
                                            <Form.Control type="text" name="dob" iclass="input _dob" placeholder="MM / DD / YYYY" />
                                        </Form.Group>

                                        <div class="note">


                                            <Form.Group className="mb-3" id="formGridCheckbox">
                                                <Form.Check type="checkbox" />
                                            </Form.Group>
                                            <div className="ps-3">
                                                <span className="note-title">
                                                    Simplify. Go paperless.
                                                </span>

                                                <span id="icon-placeholder" className="ms-1"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 57 56" aria-hidden="true"><g clip-path="url(#SpotLeaf_svg__a)"><path fill="#C9DBFE" fill-rule="evenodd" d="M25.417 9.706c-4.69 1.058-12.138 2.846-17.567 8.166-5.43 5.335-9.331 14.697-6.28 20.065 3.07 5.352 13.094 6.693 21.92 8.84 8.845 2.164 16.478 5.132 21.811 2.73 5.32-2.397 8.31-10.15 9.898-16.827 1.605-6.678 1.779-12.267.22-16.94-1.541-4.672-4.846-8.414-8.607-9.646-3.777-1.215-8.025.064-11.378 1.138-3.351 1.072-5.313 1.4-10.017 2.474Z" clip-rule="evenodd"></path></g><path stroke="#13126C" fill="#13126C" stroke-width="1" d="M29.44 40.34c-3.096.338-6.967-.025-9.488-1.372-.498.779-1.41 2.128-1.935 2.942-1.247 1.934-2.165 4.016-3.392 5.96-.44.697-1.174 1.488-2.041.955a2.442 2.442 0 0 1-.736-1.038 2.403 2.403 0 0 1-.109-1.261 6.905 6.905 0 0 1 .662-1.689c1.31-2.638 2.575-5.302 3.986-7.889.31-.45.3-1.041-.023-1.481-3.153-4.435-1.848-11.394.638-15.822C21.524 11.59 31.229 9.215 39.4 6.291a58.411 58.411 0 0 0 7.224-3.038c1.064-.55 1.982-1.43 3.159-1.76 1.302-.367 2.738.372 2.488 1.876-.207 1.244-1.089 2.304-1.389 3.562a27.271 27.271 0 0 0-.643 4.298c-.309 4.14.474 8.29-.54 12.357a22.559 22.559 0 0 1-3.883 8.197c-3.872 5.086-10.05 7.868-16.378 8.558h.001Zm-10.32-8.568c1.066-.856 1.836-2.252 2.721-3.32a62.054 62.054 0 0 1 3.19-3.557 40.902 40.902 0 0 1 8.436-7.112c.345-.243.757-.38 1.181-.39 2.202.154 1.39 2.804.367 3.703-1.217 1.07-2.535 2.026-3.742 3.112a59.893 59.893 0 0 0-8.917 10.216c-.912 1.29 1.885 1.82 2.634 1.924 7.607 1.055 15.181-1.811 19.077-8.586a17.845 17.845 0 0 0 2.335-9.083c-.034-3.407-.392-6.963.107-10.355.074-.507-.101-.631-.608-.429-4.08 1.636-8.368 2.727-12.441 4.403-5.693 2.341-12.134 5.444-14.36 11.578-1.01 2.785-1.12 6.732.02 7.897Z"></path><defs><clipPath id="SpotLeaf_svg__a"><path fill="#fff" d="M.5 0h56v56H.5z"></path></clipPath></defs></svg></span>

                                                <p className="mb-0">
                                                    Simplify your life with instant bill notifications and securely manage your medical bills online.
                                                </p>
                                            </div>
                                        </div>
                                        <Link to="/payment" variant="primary" type="submit" className="btn-submit">
                                                View bill
                                        </Link>
                                    </Form>
                                    <div class="other text-center mt-4">
                                        <div class="mb-1">Don't know your Bill ID?</div>
                                        <a class="" href="/find-account/">
                                            Find your account
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text">
                                <p>If you've received a paper bill, you can quickly log in by using the 12-digit<strong> Bill ID </strong>found at the top of your bill.</p>
                            </div>
                        </div>
                    </div>
                </Container>

            </div>
            <Footer />
        </>
    );
}

export default Home