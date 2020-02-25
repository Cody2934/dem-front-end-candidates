import React, { Component } from 'react';
import getCandidates from './CandidateApi.js'
import ItemCandidates from './ItemCandidates.js';

export default class Details extends Component {
    state = { candidate: {} }
    async componentDidMount() {
        const data = await getCandidates(this.props.match.params.candidateId);
        if (data.response) {
        this.setState({ candidate: data.response[0] })
        }
    }

    render() {
        const { candidate } = this.state;
        return (
            <div>
                <ItemCandidates candidate={ candidate } />
            </div>
      );
    }
}