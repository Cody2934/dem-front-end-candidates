import React, { Component } from 'react'
import ItemCandidates from './ItemCandidates';

export default class ListCandidates extends Component {
    render() {
        const { candidates } = this.props;
        const ListCandidates = candidates.map(item => { 
            return <ItemCandidates candidates={item} />
    })
      return (
        <ul className="mainDiv">
            {ListCandidates}
        </ul>

        )
    }
}