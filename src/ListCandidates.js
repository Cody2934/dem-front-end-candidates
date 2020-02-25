import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ItemCandidates from './ItemCandidates';
// import getCandidates from './CandidateApi';
import request from 'superagent';
// import Details from 'Details.js';


export default class ListCandidates extends Component {
    // state = {
    //     searchQuery: this.props.match.params.search,
    //     candidateSearchArray: []
    // }
    
    //console.log(this.props)
    async componentDidMount() {
        if(this.props)//.match.params.search) {
            {
            const data = await request.get(`https://thawing-everglades-40599.herokuapp.com/api/candidates/7`)

            // !!!!!!!!!!!!!!!NOT SURE IF IT'S DATA.BODY.RESULTS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            this.setState({candidateSearchArray: data.body.results})
        // } else if(!this.props.match.params.search) {
            // const data = await request.get(`https://thawing-everglades-40599.herokuapp.com/api/candidates/candidateId=`)

            // this.setState({candidateSearchArray: data.body.results})
        }
    }

    handleChange = (event) => this.setState({ searchQuery: event.target.value });
    handleSearch = async (e) => {
        e.preventDefault();
        const data = await request.get(`https://thawing-everglades-40599.herokuapp.com/api/candidates/candidateId=${this.props.match.params.search}`)
        this.setState({ 
            candidateSearchArray: data.body.results,
        });
        this.props.history.push(this.state.searchQuery);
    }

    render() {
        // pulling all of the { candidates } from app.js
        const { candidates } = this.props;
        // console.log(candidates)
        return (
        // map over all the data and for each one, returning an item candidates object'
        <div>
            <ul className="mainDiv">
                { 
                candidates.map(item => 
                <Link to={`/api/candidates/${item.name}`} key={item.name} >
                <ItemCandidates candidates={item} />
                </Link>)}
            </ul>
        </div>
        )
    }
}