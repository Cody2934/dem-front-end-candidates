import React, { Component } from 'react'
import request from 'superagent';
export default class PickMe extends Component {
    state = {
        types: [],
        born: 69,
        running: true,
        type: 1,
    };
    componentDidMount = async () => {
        const types = await request.get('https://thawing-everglades-40599.herokuapp.com/api/types');
        this.setState({ types: types.body });
    }
    handleNameChange = (e) => {
        this.setState({ name: e.target.value })
    }
    handleTypeChange = (e) => {
        this.setState({ type: Number(e.target.value) })
    }
    handleBornChange = (e) => {
        this.setState({ born: Number(e.target.value) })
    }
    handleImageChange = (e) => {
        this.setState({ img: e.target.value })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const newCandidate = {
            name: this.state.name,
            running: true,
            img: this.state.img,
            type: this.state.type,
            born: this.state.born
        }
        const dbCandidate = await request.post('https://thawing-everglades-40599.herokuapp.com/api/candidates', newCandidate);
        this.props.history.push('/');
        console.log(dbCandidate)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} id="makePres">
                    !USA Start Your Super PAC USA!
                    <br/>
                    <label>
                        Name: 
                        <input onChange={this.handleNameChange} />
                    </label>
                    <br/>
                    <label>
                        Type: 
                        <select onChange={ this.handleTypeChange }>
                            { this.state.types.map(type => <option value={type.type_id}> 
                            {type.type}
                            </option>)}
                        </select>
                    </label>
                    <br/>
                    <label>
                        Born: 
                        <input type='number' onChange={this.handleYearsChange} />
                    </label>
                    <br/>
                    <label>
                        Image: 
                        <input onChange={this.handleImageChange} />
                    </label>
                    <br/>
                <button>Submit</button>
                </form>
            </div>
        )
    }
}