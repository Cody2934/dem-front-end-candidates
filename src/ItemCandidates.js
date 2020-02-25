import React, { Component } from 'react'

export default class ItemCandidates extends Component {
    render() {
        // const thisCandidate = this.props.candidates.findIndex(); 

        return (
            <div className="theCandi">

                {/* candidates Name */}
                <p className="candiInfo"> {this.props.candidates.name}</p>

                {/* candidates Image */}
                <img className="candiPics" src={this.props.candidates.img} alt="person"/>

                {/* candidates Born */}
                <p className="candiInfo">Born: {this.props.candidates.born}</p>

                {/* candidates Running */}
                {/* <p className="candiInfo">Still Running? {this.props.candidates.running}</p>

                {/* candidates Identity */}
                {/* <p className="candiInfo">Identity: {this.props.candidates.identity}</p> */}

                
            </div>
        )
    }
}
