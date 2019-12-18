import React, {Component} from 'react';

import '../styles/App.css';
import {
    MDBAnimation,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBMask,
    MDBRow,
    MDBView
} from "mdbreact";
import '../styles/Page.css';

class Home extends Component {
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
                                                Hello and Welcome!
                                            </h1>
                                            <hr className="hr-light"/>
                                            <h6 className="mb-4 cardInfo">
                                                This is the personal webpage of Christopher Myers, Northeastern
                                                University class of 2023.<br/>
                                                Here I talk about some of my personal projects and interests! <br/>
                                                <code>This site was also created with React, one of my current
                                                    interests!</code>
                                            </h6>
                                            <div style={{
                                                textAlign: 'center'
                                            }}>
                                                <div style={{width: '100%'}}>
                                                <a href="https://drive.google.com/file/d/1dfDI9pIt8oQiL3vr1gbB0m4Bw1GwVHqd/view?usp=sharing" target="_blank">
                                                    <MDBBtn outline gradient="purple" size="sm">
                                                        Résumé
                                                    </MDBBtn>
                                                </a>
                                                <a href="http://www.github.com/chessmyers" target="_blank">
                                                    <MDBBtn outline gradient="purple" size="sm">
                                                        Github
                                                    </MDBBtn>
                                                </a>
                                                <a href="http://www.linkedin.com/in/c-t-myers/" target="_blank">
                                                    <MDBBtn outline gradient="purple" size="sm">
                                                        LinkedIn
                                                    </MDBBtn>
                                                </a>
                                                </div>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCard>

                                </MDBAnimation>


                                <MDBCol md="5">
                                    <img src="mypic.jpg" className="img-fluid" alt=""/>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>
            </div>
        );
    }
}

export default Home;
