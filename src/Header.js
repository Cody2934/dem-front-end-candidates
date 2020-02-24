import React, { Component } from 'react'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import SearchOptions from './SearchOptions.js';
import Details from './Details.js';
import PickMe from './PickMe.js';


export default class Header extends Component {
    render() {
        return (
            <Router>
            <div>
                <h1>Choose Your Candidate</h1>
                <Link to="/">Back to the Motherland</Link>
                <Link to="/Pick-Me">Run for President</Link>
                <SearchOptions />
                    <Switch>
                        <Route exact path="api/candidates/:candidateId" component={Details} />
                        <Route exact path="/Pick-Me/a" component={PickMe} />
                    </Switch>
            </div>
            </Router>
        )
    }
}
