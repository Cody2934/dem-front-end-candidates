import React, { Component } from 'react'
import ItemCandidates from './ItemCandidates';
// import { Link } from 'react-router-dom';
// import request from 'superagent';
// import Details from 'Details.js';


export default class ListCandidates extends Component {
    render() {
        // pulling all of the { candidates } from app.js
        const { candidates } = this.props;
        console.log(candidates);
        // map over all the data and for each one, returning an item candidates object'
        const ListCandidates = candidates.map(item =>  
            <ItemCandidates candidates={candidates} />
    )
      return (
        <ul className="mainDiv">
            {ListCandidates}
        </ul>

        )
    }
}