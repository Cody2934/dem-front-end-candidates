// changing params from searching by ID to By Name. Might run into some url problems due to it putting % in the spacing.
// ListCandidates Line #19 has a bad URL

import React, { Component } from 'react'
import ListCandidates from './ListCandidates'
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
        async componentDidMount() {
            await this.loadCandidates();
        window.addEventListener('hashchange', async () => {
            await this.loadCandidates();
        })
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
                    <Route exact path="api/candidates/:candidateId" component={Details} />
                    <Route exact path="/Pick-Me/a" component={PickMe} />
                    <Route component={NoMatch} />
                </Switch>
                <Header />
                <SearchOptions />
                <ListCandidates candidates={candidatesData} />
                <Footer />
                </div>
            </div>
            </Router>
        )
    }
}

