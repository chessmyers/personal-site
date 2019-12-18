import React, {Component} from 'react';

import '../styles/App.css';
import {MDBAnimation, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBMask, MDBRow, MDBView} from "mdbreact";

class Navigation extends Component {
    render() {
        return (

            <div id="myPage">
                <MDBView>
                    <MDBMask className="d-flex justify-content-center gradient overflow-auto">
                        <div className="content">
                        <MDBContainer className="py-5">

                            <MDBRow style={{paddingBottom: '50px', marginRight: '50px', marginLeft: '50px'}}>
                                <MDBCard id="classic-card">
                                    <MDBCardBody className="white-text">
                                        <h1 className="h1-responsive font-weight-bold">
                                            Personal Projects
                                        </h1>
                                        <hr className="hr-light" />
                                        <h6>
                                            This is a sampling of some of the past projects I've developed and ones I'm currently working on.
                                            My main interests in development are for web and mobile, as can be seen in these projects.
                                        </h6>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBRow>


                            <MDBRow className="topPad">
                                <MDBAnimation
                                    type="fadeInLeft"
                                    delay=".3s"
                                    className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                                    <MDBCard id="classic-card">
                                        <MDBCardBody className="white-text">
                                            <h1 className="h1-responsive font-weight-bold">
                                                Addy
                                            </h1>
                                            <h6 className="center"><i className="center">May 2019-Present</i></h6>
                                            <hr className="hr-light" />
                                            <h6 className="mb-4 cardInfo">
                                                Addy is a project currently in the works that will act as a large-scale social and academic
                                                interaction and collaboration platform among college students. It includes the capability to
                                                join all current classes through the app and anonymously share messages, posts, and files
                                                among peers.
                                            </h6>
                                            <h6 className="center">
                                                Planned rollout is spring 2020. Developed using <a href="https://facebook.github.io/react-native/"> React Native</a>
                                            </h6>
                                        </MDBCardBody>
                                    </MDBCard>

                                </MDBAnimation>


                                <MDBCol md="5">
                                    <img src="addypic1.png" alt="Addy" className="img-fluid" />
                                </MDBCol>
                            </MDBRow>




                            <MDBRow className="topPad">
                                <MDBAnimation
                                    type="fadeInLeft"
                                    delay=".3s"
                                    className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                                    <MDBCard id="classic-card">
                                        <MDBCardBody className="white-text">
                                            <h1 className="h1-responsive font-weight-bold">
                                                Lit or Lame
                                            </h1>
                                            <h5 className="center"><i>May 2019</i></h5>
                                            <hr className="hr-light" />
                                            <h6 className="mb-4 cardInfo">
                                                Lit or Lame is a social website on which users can rate whether things are lit or lame
                                                and
                                                add comments about why they think so. It's that easy! After making an account and
                                                signing in,
                                                users can also create their own public post, which includes a short text description and
                                                optional image, for others to rate and talk about. After rating a post, users get to see
                                                what
                                                percentage of people thought it was lit vs lame!
                                            </h6>
                                            <h6 className="center">
                                                    Currently launched at <a href="http://www.litorlame.com">www.litorlame.com</a>
                                                <br/>

                                                    Developed using <a href="https://reactjs.org/">React</a>
                                                <br/>
                                                    <b>Source:</b> <br/>
                                                    <a href="https://github.com/chessmyers/lit-or-lame">https://github.com/chessmyers/lit-or-lame</a>
                                            </h6>
                                        </MDBCardBody>
                                    </MDBCard>

                                </MDBAnimation>


                                <MDBCol md="5">
                                    <img src="litorlamepic1.png" alt="Lit or Lame 1" className="img-fluid" />
                                    <img src="litorlamepic2.png" alt="Lit or Lame 2" className="img-fluid" />

                                </MDBCol>
                            </MDBRow>




                            <MDBRow className="topPad">
                                <MDBAnimation
                                    type="fadeInLeft"
                                    delay=".3s"
                                    className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                                    <MDBCard id="classic-card">
                                        <MDBCardBody className="white-text">
                                            <h1 className="h1-responsive font-weight-bold">
                                                GenLab
                                            </h1>
                                            <h5 className="center"><i>December 2018</i></h5>
                                            <hr className="hr-light" />
                                            <h6 className="mb-4 cardInfo">
                                                GenLab is a highly customizable game-theoretical model viewer that can run in any modern
                                                web browser. It can be used to model classic games such as the Prisoner's Dilemma or
                                                Hawk-Dove, as well as completely original games. It allows for input of up to 16
                                                different
                                                strategies, with options for changing network type (2D vs 1D), wrapping, the
                                                neighborhood
                                                type (Moore or Von Neumann), network width, learning method (imitate-the-best, myopic
                                                best response, or probabilistic imitation), and initial percentage of each strategy.
                                            </h6>
                                            <h6 className="center">
                                                Try it out at <a
                                                href="https://chessmyers.github.io/GenLab/">https://chessmyers.github.io/GenLab/ </a>
                                                or check out the source at <a
                                                href="https://github.com/chessmyers/GenLab">https://github.com/chessmyers/GenLab</a>.
                                                Developed using <a href="https://angular.io/">Angular</a>
                                            </h6>
                                        </MDBCardBody>
                                    </MDBCard>

                                </MDBAnimation>


                                <MDBCol md="5">
                                    <img src="genlabpic1.png" alt="GenLab" className="img-fluid" />
                                </MDBCol>
                            </MDBRow>




                            <MDBRow className="topPad">
                                <MDBAnimation
                                    type="fadeInLeft"
                                    delay=".3s"
                                    className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                                    <MDBCard id="classic-card">
                                        <MDBCardBody className="white-text">
                                            <h1 className="h1-responsive font-weight-bold">
                                                The Loyola Hub
                                            </h1>
                                            <h5 className="center"><i>May-October 2017</i></h5>
                                            <hr className="hr-light" />
                                            <h6 className="mb-4 cardInfo">
                                                The Loyola Hub is an app created for my high school.
                                                It allows students to access daily announcements, the school calendar,
                                                their grades, a GPA calculator, news articles, and much more.
                                            </h6>
                                            <h6 className="center">
                                                Currently launched. Developed using
                                                <a href="https://ionicframework.com/"> Ionic Framework</a>
                                                <br/>
                                                <b>Source:</b> <br/>
                                                <a href="https://github.com/chessmyers/Loyola-App">https://github.com/chessmyers/Loyola-App</a>
                                            </h6>
                                        </MDBCardBody>
                                    </MDBCard>

                                </MDBAnimation>


                                <MDBCol md="5">
                                    <img src="loyolahub.jpeg" alt="Loyola Hub" className="img-fluid" />
                                </MDBCol>
                            </MDBRow>


                            <MDBRow style={{padding: '50px'}} className="topPad">
                                <MDBCard id="classic-card">
                                    <MDBCardBody className="white-text">
                                        <h1 className="h1-responsive font-weight-bold">
                                            Hackathon Projects
                                        </h1>
                                        <hr className="hr-light" />
                                        <h6>
                                            I've also been lucky enough to participate in a number of hackathons (weekend-long
                                            project-development sprees where sleep sometimes doesn't make an appearance) during my time in
                                            college with varying degrees of success. I enjoy these events because they invariably lead to
                                            meeting new people and conceiving of new ideas.
                                            Here are some of the projects I've created as part of those events.
                                        </h6>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBRow>


                            <MDBRow className="topPad">
                                <MDBAnimation
                                    type="fadeInLeft"
                                    delay=".3s"
                                    className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                                    <MDBCard id="classic-card">
                                        <MDBCardBody className="white-text">
                                            <h1 className="h1-responsive font-weight-bold" >
                                                Loot
                                            </h1>
                                            <h5 className="center"><i>HackBeanpot, February 2019</i></h5>
                                            <hr className="hr-light" />
                                            <h6 className="mb-4 cardInfo">
                                                Loot was born out numerous iterations of an idea that started out as an app for arranging
                                                item exchanges and transactions among college students. After realizing there was no need
                                                to limit the user base in this way, we began thinking about ways we could design an e-commerce
                                                experience that would make it easy to use and promote spontaneous purchases.
                                            </h6>
                                            <br/>
                                            <h6>
                                                Eventually we came up for the idea of an app that shows users products in a continuous
                                                stack of cards which would allow them to swipe in one of three directions to indicate
                                                their feeling about the product. If they swipe left on the product, that indicates they
                                                do not like it. Swiping right indicates they do like the product and want to add it to a
                                                "wish list" they can go back to later. Swiping up on a product adds it to
                                                their shopping cart, which then allows them to easily purchase it, as well as anything else
                                                added to the cart, on the next screen. This system of shopping allows for a continuous
                                                stream of user information and preferences to be collected, analyzed, and used to refine
                                                which products to show to which users.
                                            </h6>
                                            <br/>
                                            <h6>
                                                This project won us the <b>Best UX/UI Design</b> and <b>Best Use of <a href="https://www.moltin.com/">
                                                Moltin API</a></b> awards at this hackathon. We were then able to meet with the Moltin staff
                                                at their office in downtown Boston to describe our app idea to them. There are currently
                                                no plans to continue developing this project, but the experience was extremely valuable.
                                            </h6>
                                            <h6 className="center">
                                                Developed using <a href="https://ionicframework.com/"> Ionic Framework</a> with
                                                <a href="https://firebase.google.com/"> Firebase </a>
                                                and <a href="https://www.moltin.com/">Moltin API </a>on the backend
                                                <br/>
                                                <b>Source:</b> <br/>
                                                <a href="https://github.com/chessmyers/Loot">https://github.com/chessmyers/Loot</a>
                                            </h6>
                                        </MDBCardBody>
                                    </MDBCard>

                                </MDBAnimation>


                                <MDBCol md="5">
                                    <img src="lootpic1.jpg" alt="Loot Picture 1" className="img-fluid" />
                                    <img src="lootpic2.jpg" alt="Loot Picture 2" className="img-fluid" />
                                </MDBCol>
                            </MDBRow>


                            <MDBRow className="topPad">
                                <MDBAnimation
                                    type="fadeInLeft"
                                    delay=".3s"
                                    className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                                    <MDBCard id="classic-card">
                                        <MDBCardBody className="white-text">
                                            <h1 className="h1-responsive font-weight-bold">
                                                The NU Co-op Search
                                            </h1>
                                            <h5 className="center"><i>HuskyHacks, March 2019</i></h5>
                                            <hr className="hr-light" />
                                            <h6 className="mb-4 cardInfo">
                                                The NU Co-op Search (NU pronounced as "new") is a project that
                                                aims to reinvent the way students search for co-ops at Northeastern University. Every semester,
                                                students return from their co-op experiences and complete a form for their advisers that
                                                includes many questions about their overall experience on the co-op. This form is then used
                                                solely within the sphere of the co-op advisers and perhaps for some statistical analysis; but,
                                                for the most part, this valuable information is kept private from NU students searching
                                                for their own co-ops.
                                            </h6>
                                            <br/>
                                            <h6>
                                                The goal of the NU Co-op Search, which in its current state acts more of a proof of concept
                                                than a concrete beginning to the project, aims to be a new place for students to submit
                                                reviews of the co-ops they've worked. As reviews come in, the system uses the IBM machine
                                                learning API to generate an aggregate rating of each company based on a combination of
                                                the word sentiment and numerical ratings from each review. The form also includes questions
                                                about company culture and professionalism that can help prospective employees determine
                                                if the company is a good fit for them.
                                            </h6>
                                            <br/>
                                            <h6 className="center">
                                                This project won <b>3rd place</b> at HuskyHacks 2019. Plans for future development persist,
                                                but require approval and endorsement from the school that haven't been obtained yet.
                                                <br/>
                                                Initial version developed using vanilla Javascript/HTML/CSS
                                                with <a href="https://getuikit.com/">UIKit</a> and
                                                <a href="https://datatables.net/"> DataTables </a>libraries
                                                <br/>
                                                <b>Source:</b> <br/>
                                                <a href="https://github.com/chessmyers/theNUCoopSearch">https://github.com/chessmyers/theNUCoopSearch</a>
                                            </h6>
                                        </MDBCardBody>
                                    </MDBCard>

                                </MDBAnimation>


                                <MDBCol md="5">
                                    <img src="nucoopsearch.png" alt="NU Coop Search 1" className="img-fluid" />
                                    <img src="nucoopsearch2.png" alt="NU Coop Search 2" className="img-fluid" />
                                </MDBCol>
                            </MDBRow>


                            <MDBRow className="topPad">
                                <MDBAnimation
                                    type="fadeInLeft"
                                    delay=".3s"
                                    className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                                    <MDBCard id="classic-card">
                                        <MDBCardBody className="white-text">
                                            <h1 className="h1-responsive font-weight-bold" >
                                                TrashTag
                                            </h1>
                                            <h5 className="center"><i>Hack Dartmouth, April 2019</i></h5>
                                            <hr className="hr-light" />
                                            <h6 className="mb-4 cardInfo">
                                                TrashTag is a website that allows users to plan trash pickups in their community
                                                and get connected with ones planned by other like-minded individuals. We settled on this
                                                idea because we saw it as something that could benefit others (communities and the planet)
                                                and also be an ideal candidate for becoming a mobile app. And we had a catchy name.
                                            </h6>
                                            <br/>
                                            <br/>
                                            <h6>
                                                This project won <b>Best Use of Snapchat API</b> at HackDartmouth 2019.
                                                There are no current plans for future development.
                                            </h6>
                                            <h6 className="center">
                                                Developed using vanilla JavaScript/HTML/CSS with <a href="https://firebase.google.com/">Firebase </a>
                                                backend for storing user and pickup data,
                                                <a href="https://developer.tomtom.com/products/maps-api"> TomTom API</a> for maps, and <a href="https://kit.snapchat.com/">Snap Kit</a> API for login.
                                                <br/>
                                                <b>Source:</b> <br/>
                                                <a href="https://github.com/chessmyers/TrashTag">https://github.com/chessmyers/TrashTag</a>

                                            </h6>
                                        </MDBCardBody>
                                    </MDBCard>

                                </MDBAnimation>


                                <MDBCol md="5">
                                    <img src="trashpic1.png" alt="Trashtag Pic 1" className="img-fluid" />
                                    <img src="trashpic2.png" alt="Trashtag Pic 2" className="img-fluid" />
                                    <img src="trashpic3.png" alt="Trashtag Pic 3" className="img-fluid" />
                                    <img src="trashpic4.png" alt="Trashtag Pic 4" className="img-fluid" />
                                </MDBCol>
                            </MDBRow>

                        </MDBContainer>
                        </div>
                    </MDBMask>
                </MDBView>
            </div>






            //
            // <div className="view">
            //     <h1>Past and current projects!</h1>
            //     <p className="center">This is a sampling of some of the past projects I've developed and ones I'm currently working on.
            //         My main interests in development are for web and mobile, as can be seen in these projects.
            //     </p>
            //     <div className="content">
            //         <div className="item">
            //             <div className="itemContent">
            //                 <h2 style={{color: '#ff4767'}}>Addy</h2>
            //                 <i className="date">May 2019-present</i>
            //                 <p>
            //                     Addy is a project currently in the works that will act as a large-scale social and academic
            //                     interaction and collaboration platform among college students. It includes the capability to
            //                     join all current classes through the app and anonymously share messages, posts, and files
            //                     among peers.
            //                 </p>
            //                 <br/>
            //                 <p>Planned rollout is fall 2019. Developed using
            //                     <a href="https://facebook.github.io/react-native/"> React Native</a></p>
            //             </div>
            //
            //             <div className="itemPic">
            //                 <img src="addypic1.png" alt="Addy" width="100%" height="100%" />
            //             </div>
            //         </div>
            //         <hr/>
            //         <hr/>
            //
            //         <div className="item">
            //             <div className="itemContent">
            //                 <h2 style={{color: '#F6A2A4'}}>Lit or Lame</h2>
            //                 <i className="date">May 2019</i>
            //                 <p>
            //                     Lit or Lame is a social website on which users can rate whether things are lit or lame
            //                     and
            //                     add comments about why they think so. It's that easy! After making an account and
            //                     signing in,
            //                     users can also create their own public post, which includes a short text description and
            //                     optional image, for others to rate and talk about. After rating a post, users get to see
            //                     what
            //                     percentage of people thought it was lit vs lame!
            //                 </p>
            //                 <br/>
            //                 <p>
            //                     Currently launched at <a href="http://www.litorlame.com">www.litorlame.com</a>
            //                 </p>
            //                 <p>
            //                     Developed using <a href="https://reactjs.org/">React</a>
            //                 </p>
            //                 <p>
            //                     <b>Source:</b> <br/>
            //                     <a href="https://github.com/chessmyers/lit-or-lame">https://github.com/chessmyers/lit-or-lame</a>
            //                 </p>
            //             </div>
            //
            //             <div className="itemPic">
            //                 <img src="litorlamepic1.png" alt="Lit or Lame" width="100%" height="60%" />
            //             </div>
            //         </div>
            //
            //         <div className="item">
            //             <div className="itemContent">
            //                 <h2 style={{color: '#ffd6cd'}}>GenLab</h2>
            //                 <i className="date">December 2018</i>
            //
            //                 <p>
            //                     GenLab is a highly customizable game-theoretical model viewer that can run in any modern
            //                     web browser. It can be used to model classic games such as the Prisoner's Dilemma or
            //                     Hawk-Dove, as well as completely original games. It allows for input of up to 16
            //                     different
            //                     strategies, with options for changing network type (2D vs 1D), wrapping, the
            //                     neighborhood
            //                     type (Moore or Von Neumann), network width, learning method (imitate-the-best, myopic
            //                     best response, or probabilistic imitation), and initial percentage of each strategy.
            //                 </p>
            //                 <br/>
            //                 <p>
            //                     Try it out at <a
            //                     href="https://chessmyers.github.io/GenLab/">https://chessmyers.github.io/GenLab/ </a>
            //                     or check out the source at <a
            //                     href="https://github.com/chessmyers/GenLab">https://github.com/chessmyers/GenLab</a>.
            //                     Developed using <a href="https://angular.io/">Angular</a>
            //                 </p>
            //             </div>
            //
            //             <div className="itemPic">
            //                 <img src="genlabpic1.png" alt="GenLab" width="100%" height="60%" />
            //             </div>
            //         </div>
            //
            //         <div className="item">
            //             <div className="itemContent">
            //                 <h2 style={{color: '#1c2674'}}>The Loyola Hub</h2>
            //                 <i className="date">August-October 2017</i>
            //
            //                 <p>
            //                     The Loyola Hub is an app created for my high school.
            //                     It allows students to access daily announcements, the school calendar,
            //                     their grades, a GPA calculator, news articles, and much more.
            //                 </p>
            //                 <br/>
            //                 <p>
            //                     Currently launched. Developed using
            //                     <a href="https://ionicframework.com/"> Ionic Framework</a>
            //                 </p>
            //                 <p>
            //                     <b>Source:</b> <br/>
            //                     <a href="https://github.com/chessmyers/Loyola-App">https://github.com/chessmyers/Loyola-App</a>
            //                 </p>
            //             </div>
            //             <div className="itemPic">
            //                 <img src="loyolahub.jpeg" alt="Loyola Hub" width="100%" height="100%" />
            //             </div>
            //         </div>
            //
            //         <h1 style={{marginTop: '50px'}}>Hackathon Projects</h1>
            //         <p className="center">
            //             I've also been lucky enough to participate in a number of hackathons (weekend-long
            //             project-development sprees where sleep sometimes doesn't make an appearance) during my time in
            //             college with varying degrees of success. I enjoy these events because they invariably lead to
            //             meeting new people and conceiving of new ideas.
            //             Here are some of the projects I've created as part of those events.
            //         </p>
            //
            //         <div className="item">
            //             <div className="itemContent">
            //                 <h2 style={{color: '#be2400'}}>Loot</h2>
            //                 <i>HackBeanpot, February 2019</i>
            //                 <p>
            //                     Loot was born out numerous iterations of an idea that started out as an app for arranging
            //                     item exchanges and transactions among college students. After realizing there was no need
            //                     to limit the user base in this way, we began thinking about ways we could design an e-commerce
            //                     experience that would make it easy to use and promote spontaneous purchases.
            //                 </p>
            //                 <br/>
            //                 <p>
            //                     Eventually we came up for the idea of an app that shows users products in a continuous
            //                     stack of cards which would allow them to swipe in one of three directions to indicate
            //                     their feeling about the product. If they swipe left on the product, that indicates they
            //                     do not like it. Swiping right indicates they do like the product and want to add it to a
            //                     "wish list" they can go back to later. Swiping up on a product adds it to
            //                     their shopping cart, which then allows them to easily purchase it, as well as anything else
            //                     added to the cart, on the next screen. This system of shopping allows for a continuous
            //                     stream of user information and preferences to be collected, analyzed, and used to refine
            //                     which products to show to which users.
            //                 </p>
            //                 <br/>
            //                 <p>
            //                     This project won us the <b>Best UX/UI Design</b> and <b>Best Use of <a href="https://www.moltin.com/">
            //                     Moltin API</a></b> awards at this hackathon. We were then able to meet with the Moltin staff
            //                     at their office in downtown Boston to describe our app idea to them. There are currently
            //                     no plans to continue developing this project, but the experience was extremely valuable.
            //                 </p>
            //             <br/>
            //                 <p>
            //                     Developed using <a href="https://ionicframework.com/"> Ionic Framework</a> with
            //                     <a href="https://firebase.google.com/"> Firebase </a>
            //                     and <a href="https://www.moltin.com/">Moltin API </a>on the backend
            //                 </p>
            //                 <p>
            //                     <b>Source:</b> <br/>
            //                     <a href="https://github.com/chessmyers/Loot">https://github.com/chessmyers/Loot</a>
            //                 </p>
            //             `
            //             </div>
            //             <div className="itemPic">
            //                 <img src="lootpic1.jpg" height="40%" width="100%" alt="Loot Picture 1" />
            //                 <span style={{marginTop: '10px'}}> </span>
            //                 <img src="lootpic2.jpg" height="40%" width="100%" alt="Loot Picture 2" />
            //             </div>
            //         </div>
            //         <div className="item">
            //             <div className="itemContent">
            //                 <h2 style={{color: '#6a808b'}}>The NU Co-op Search</h2>
            //                 <i>HuskyHacks, March 2019</i>
            //                 <p>
            //                     The NU Co-op Search (NU pronounced as "new") is a project that
            //                     aims to reinvent the way students search for co-ops at Northeastern University. Every semester,
            //                     students return from their co-op experiences and complete a form for their advisers that
            //                     includes many questions about their overall experience on the co-op. This form is then used
            //                     solely within the sphere of the co-op advisers and perhaps for some statistical analysis; but,
            //                     for the most part, this valuable information is kept private from NU students searching
            //                     for their own co-ops.
            //                 </p>
            //                 <br/>
            //                 <p>
            //                     The goal of the NU Co-op Search, which in its current state acts more of a proof of concept
            //                     than a concrete beginning to the project, aims to be a new place for students to submit
            //                     reviews of the co-ops they've worked. As reviews come in, the system uses the IBM machine
            //                     learning API to generate an aggregate rating of each company based on a combination of
            //                     the word sentiment and numerical ratings from each review. The form also includes questions
            //                     about company culture and professionalism that can help prospective employees determine
            //                     if the company is a good fit for them.
            //                 </p>
            //                 <br/>
            //                 <p>
            //                     This project won <b>3rd place</b> at HuskyHacks 2019. Plans for future development persist,
            //                     but require approval and endorsement from the school that haven't been obtained yet.
            //                 </p>
            //                 <br/>
            //                 <p>
            //                     Initial version developed using vanilla Javascript/HTML/CSS
            //                     with <a href="https://getuikit.com/">UIKit</a> and
            //                     <a href="https://datatables.net/"> DataTables </a>libraries
            //                 </p>
            //                 <p>
            //                     <b>Source:</b> <br/>
            //                     <a href="https://github.com/chessmyers/theNUCoopSearch">https://github.com/chessmyers/theNUCoopSearch</a>
            //                 </p>
            //             </div>
            //             <div className="itemPic">
            //                 <img src="nucoopsearch.png" height="25%" width="100%" alt="NU Co-op Search" />
            //                 <span style={{marginTop: '50px'}}> </span>
            //                 <img src="nucoopsearch2.png" height="25%" width="100%" alt="NU Co-op Search" />
            //             </div>
            //         </div>
            //         <div className="item">
            //             <div className="itemContent">
            //                 <h2 style={{color: '#0a5e01'}}>TrashTag</h2>
            //                 <i>Hack Dartmouth, April 2019</i>
            //                 <p>
            //                     TrashTag is a website that allows users to plan trash pickups in their community
            //                     and get connected with ones planned by other like-minded individuals. We settled on this
            //                     idea because we saw it as something that could benefit others (communities and the planet)
            //                     and also be an ideal candidate for becoming a mobile app. And we had a catchy name.
            //                 </p>
            //                 <br/>
            //                 <p>
            //                     This project won <b>Best Use of Snapchat API</b> at HackDartmouth 2019.
            //                     There are no current plans for future development.
            //                 </p>
            //                 <br/>
            //                 <p>
            //                     Developed using vanilla JavaScript/HTML/CSS with <a href="https://firebase.google.com/">Firebase </a>
            //                     backend for storing user and pickup data,
            //                     <a href="https://developer.tomtom.com/products/maps-api"> TomTom API</a> for maps, and <a href="https://kit.snapchat.com/">Snap Kit</a> API for login.
            //                 </p>
            //                 <p>
            //                     <b>Source:</b> <br/>
            //                     <a href="https://github.com/chessmyers/TrashTag">https://github.com/chessmyers/TrashTag</a>
            //                 </p>
            //             </div>
            //             <div className="itemPic">
            //                 <img src="trashpic1.png" width="100%" height="25%" alt="TrashTag Pic 1" />
            //                 <span style={{marginTop: '10px'}}> </span>
            //                 <img src="trashpic2.png" width="100%" height="25%" alt="TrashTag Pic 2" />
            //                 <span style={{marginTop: '10px'}}> </span>
            //                 <img src="trashpic3.png" width="100%" height="25%" alt="TrashTag Pic 3" />
            //                 <span style={{marginTop: '10px'}}> </span>
            //                 <img src="trashpic4.png" width="100%" height="25%" alt="TrashTag Pic 4" />
            //                 <span style={{marginTop: '10px'}}> </span>
            //             </div>
            //         </div>
            //
            //
            //     </div>.
            //
            // </div>
        );
    }
}

export default Navigation;
