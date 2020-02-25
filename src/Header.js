import React, { Component } from 'react'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
//import Details from './Details.js';
//import PickMe from './PickMe.js';


export default class Header extends Component {
    render() {
        return (
            <div>
                <Link to="/" id="home">Back to the Motherland</Link>
                <Link to="/Pick-Me" id="president">Run for President</Link>
                <h1>Choose Your Candidate</h1>
            </div>
        )
    }
}
