import React from 'react';
import { Form, Input } from 'reactstrap';
import {FaFacebookSquare } from "react-icons/fa";


function Adddoctor(props) {
    return (
        <div>
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">
                        <h2>Adddoctor</h2>
                        <Form action method="post" role="form" className="php-email-form">
                            <div className="col-md-6 form-group">
                                <Input type="text" name="name" className="form-control" id="name" placeholder="Doctor Name" required />
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>Select Department</option>
                                    <option>Anesthesiologist</option>
                                    <option>Cardiology</option>
                                    <option>Neurosurgeon</option>
                                </Input>
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Instagram" required />
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="twitter" required />
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                              
                                    
                                <input type="email" className="form-control" name="email" id="email" placeholder="facebook" required />
                                
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                
                                <input type ="email" className="form-control" name="email" id="email" placeholder=" LinkedIn" required />
                                
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <Input type="file" name="file" id="exampleFile" />
                            </div>
                            <div className="text-center"><button type="submit">Add</button></div>
                        </Form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Adddoctor;
