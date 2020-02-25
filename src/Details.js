import React, { Component } from 'react';
import { getCandidatesById } from './CandidateApi.js'
import ItemCandidates from './ItemCandidates.js';

export default class Details extends Component {
    state = { candidate: {} }
    async componentDidMount() {
        const data = await getCandidatesById(this.props.match.params.candidateId);
        // console.log(data)
        if (data) {
        this.setState({ candidate: data[0] })
        }
    }

    render() {
        const { candidate } = this.state;
        // console.log(this.state)
        return (
            <div>
                <br></br>
                <h5>IS THIS THE NEXT POTUS?</h5>
                {candidate && <ItemCandidates candidates={ candidate } />}
            </div>
      );
    }
}
