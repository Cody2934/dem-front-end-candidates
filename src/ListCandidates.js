import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ItemCandidates from './ItemCandidates';
// import getCandidates from './CandidateApi';
import request from 'superagent';
// import Details from 'Details.js';


// async componentDidMount() {
//     await this.loadCandidates();
// window.addEventListener('hashchange', async () => {
//     await this.loadCandidates();
// })
// }
export default class ListCandidates extends Component {
    state = {
        // searchQuery: this.props.match.params.search,
        candidateSearchArray: []
    }
    
    async componentDidMount() {
        // if(this.props)//.match.params.search) {
            // {
                const data = await request.get(`https://thawing-everglades-40599.herokuapp.com/api/candidates/`)
                // console.log(data.body)
            this.setState({candidateSearchArray: data.body})
        // } else if(!this.props.match.params.search) {
            // const data = await request.get(`https://thawing-everglades-40599.herokuapp.com/api/candidates/candidateId=`)

            // this.setState({candidateSearchArray: data.body.results})
        // }
    }

    // handleChange = (event) => this.setState({ searchQuery: event.target.value });

    // handleSearch = async (e) => {
    //     e.preventDefault();
    //     const data = await request.get(`https://thawing-everglades-40599.herokuapp.com/api/candidates/candidateId=${this.props.match.params.id}`)
    //     this.setState({ 
    //         candidateSearchArray: data.body.results,
    //     });
    //     this.props.history.push(this.state.searchQuery);
    // }

    render() {
        // console.log(this.state.candidateSearchArray)
        // pulling all of the { candidates } from app.js
        const candidates = this.state.candidateSearchArray;
        // console.log(candidates)
        return (
        // map over all the data and for each one, returning an item candidates object'
        <>{this.state.candidateSearchArray.length && <div>
            <ul className="mainDiv">
                { 
                candidates.map(item => 
                <Link to={`/candidates/${item.id}`} key={item.id} >
                <ItemCandidates candidates={item} />
                </Link>)
                }
            </ul>
        </div>}
        </>
        )
    }
}