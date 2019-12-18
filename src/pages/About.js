import React, {Component} from 'react';
import '../styles/App.css';
import {MDBAnimation, MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBMask, MDBRow, MDBView} from "mdbreact";

class About extends Component {
    render() {
        return (
            <div id="myPage">
                <MDBView>
                    <MDBMask className="d-flex justify-content-center gradient overflow-auto">
                        <MDBContainer>
                            <MDBRow className="topPad">
                                <MDBAnimation
                                    type="fadeInLeft"
                                    delay=".3s"
                                    className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                                    <MDBCard id="classic-card">
                                        <MDBCardBody className="white-text">
                                            <h1 className="h1-responsive font-weight-bold">
                                                About Me!
                                            </h1>
                                            <hr className="hr-light" />
                                            <h6 className="mb-4 cardInfo" style={{textAlign: 'left'}}>
                                                My name is Christopher Myers and I am currently a sophomore at Northeastern University studying computer science.
                                                <br />
                                                I enjoy reading, programming, playing music, exploring the outdoors and the city, and learning new things.
                                            </h6>
                                        </MDBCardBody>
                                    </MDBCard>

                                </MDBAnimation>


                                <MDBCol md="5">
                                    <img src="northeasternpic.jpg" className="img-fluid" alt="" />
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>
            </div>
        );
    }
}

export default About;
