
import React, { Component } from 'react'
import ListCandidates from './ListCandidates.js'
import Header from './Header.js';
import Footer from './Footer.js';
import getCandidates from './CandidateApi';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Details from './Details.js';
import PickMe from './PickMe.js';
import SearchOptions from './SearchOptions.js';
import NoMatch from './NoMatch.js';

import './App.css';



export default class App extends Component {
    state = { candidatesData: [] }
    async loadCandidates() {
        const response = await getCandidates(`https://thawing-everglades-40599.herokuapp.com/`);
        const candidatesData = response;
        this.setState({
                candidatesData: candidatesData,
            });
        }
        
        render() {
        const { candidatesData } = this.state;
        return (
            <Router>
                <div>
                    <Link to="/">Back to the Motherland</Link>
                    <br></br>
                    <Link to="/Pick-Me">Run for President</Link>
                    <div>
                    <Switch>
                        <Route exact path="/" render={(candidatesData) => <ListCandidates candidates={candidatesData} isAuthed={true} />} />
                        <Route path="/candidates/:candidateId" component={Details} />
                        <Route exact path="/Pick-Me/a" component={PickMe} />
                        <Route component={NoMatch} />
                    </Switch>
                    <SearchOptions />
                    <Header />
                    <Footer />
                    </div>
                </div>
            </Router>
        )
    }
}



                    // <Route exact path="api/candidates" component={ListCandidates} candidates={candidatesData} />
                    // <Route path="api/candidates/:candidateId" component={Details} />
                    // <Route exact path="/Pick-Me/a" component={PickMe} />
                    // <Route component={NoMatch} />