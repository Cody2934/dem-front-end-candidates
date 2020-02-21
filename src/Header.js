import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import SearchOptions from './SearchOptions.js';


export default class Header extends Component {
    render() {
        return (
            <div>
                <h1>Choose Your Candidate</h1>
                <SearchOptions />
                <a href="">Run For President</a>
            </div>
        )
    }
}
