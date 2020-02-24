import React, { Component } from 'react'
import ListCandidates from './ListCandidates'
import Header from './Header.js';
import Footer from './Footer.js';
import './App.css';
import getCandidates from './CandidateApi';

export default class App extends Component {
    state = { candidatesData: [] }
    async loadCandidates() {
        const response = await getCandidates(`https://thawing-everglades-40599.herokuapp.com/`);
        console.log(response)
        const candidatesData = response;
        this.setState({
                candidatesData: candidatesData,
            });
        }
        async componentDidMount() {
            await this.loadCandidates();
        window.addEventListener('hashchange', async () => {
            await this.loadCandidates();
        })
    }
    render() {
        const { candidatesData } = this.state;
        return (
            <div>
                <Header />
                <body>
                    <ListCandidates candidates={candidatesData} />
                </body>
                <Footer />
            </div>
        )
    }
}
