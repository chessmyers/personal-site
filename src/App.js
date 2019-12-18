import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from "./components/Navigation";
import * as ROUTES from "./constants/routes";
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import InterestsPage from './pages/Interests';
import LostPage from './pages/Lost';
import ProjectsPage from './pages/Projects';
import Footer from "./components/Footer";

class App extends Component {



  render() {

    return (
        <Router>
            <div>
                <Navigation/>
                <Switch>
                    <Route exact path={ROUTES.HOME} component={HomePage} />
                    <Route exact path={ROUTES.PROJECTS} component={ProjectsPage} />
                    <Route exact path={ROUTES.ABOUT} component={AboutPage} />
                    <Route exact path={ROUTES.INTERESTS} component={InterestsPage} />
                    <Route component={LostPage} />
                </Switch>
            </div>
            <Footer/>
        </Router>
    );
  }
}

export default App;
