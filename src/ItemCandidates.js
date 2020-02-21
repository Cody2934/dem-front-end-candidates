import React, { Component } from 'react'

export default class ItemCandidates extends Component {
    render() {
        return (
            <div className="thePoke">

                {/* candidates Image */}
                <img className="pokePics" src={this.props.candidates.img}/>

                {/* candidates Born */}
                <p className="pokeInfo">Born: {this.props.candidates.born}</p>

                {/* candidates Running */}
                {/* <p className="pokeInfo">Still Running? {this.props.candidates.running}</p> */}

                {/* candidates Identity */}
                <p className="pokeInfo">Identity: {this.props.candidates.identity}</p>

                {/* candidates Name */}
                <p className="pokeInfo">Name: {this.props.candidates.name}</p>
                
            </div>
        )
    }
}
