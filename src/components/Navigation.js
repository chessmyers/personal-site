import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

import NavButtonHover from '../components/NavHoverButton'

import * as ROUTES from '../constants/routes';
import NavHoverButton from "./NavHoverButton";
import {MDBCard, MDBCardBody} from "mdbreact";

class Navigation extends Component {
    render() {
        return (
             <nav className="navBar">
                 <Link to={ROUTES.HOME}>
                     <NavHoverButton text="Home"/>
                 </Link>
                 <Link to={ROUTES.ABOUT}>
                     <NavButtonHover text="About" className="topBorder"/>
                 </Link>
                 <Link to={ROUTES.PROJECTS}>
                     <NavButtonHover text="Projects"/>
                 </Link>
                 {/*<Link to={ROUTES.INTERESTS}>*/}
                     {/*<NavButtonHover text="Interests"/>*/}
                 {/*</Link>*/}
             </nav>
        );
    }
}

export default Navigation;
