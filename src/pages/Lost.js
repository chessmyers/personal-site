import React, {Component} from 'react';

import * as ROUTES from "../constants/routes";
import {Link} from "react-router-dom";
import {MDBAnimation, MDBCard, MDBCardBody, MDBContainer, MDBMask, MDBRow, MDBView} from "mdbreact";

class Lost extends Component {
    render() {
        return (
            <div id="myPage">
                <MDBView>
                    <MDBMask className="d-flex justify-content-center align-items-center gradient">
                        <MDBContainer>
                            <MDBRow>
                                <MDBAnimation
                                    type="fadeInRight"
                                    delay=".3s"
                                    className="white-text text-center text-md-left col-md-12 mt-xl-5 mb-5">
                                    <MDBCard id="classic-card">
                                        <MDBCardBody className="white-text">
                                            <h1 className="h1-responsive font-weight-bold">
                                                Hey there!
                                            </h1>
                                            <hr className="hr-light" />
                                            <h6 className="mb-4 cardInfo">
                                                You might be lost, but feel free to use any of those buttons on the left to get back
                                                to a page on the site. I've also provided a link for you
                                                <Link to={ROUTES.HOME}> here</Link> if that better suits you.
                                            </h6>
                                        </MDBCardBody>
                                    </MDBCard>

                                </MDBAnimation>


                            </MDBRow>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>
            </div>
        );
    }
}

export default Lost;
