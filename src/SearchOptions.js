import React, { Component } from 'react'

export default class SearchOptions extends Component {
    render() {
        return (
            <div>
                <div id="searchStuff">
                    <input type="radio" value="true" name="is-running"></input>
                    <label for="true">Candidates Still Running</label>
                    <br></br>
                    <input type="radio" value="false" name="is-running"></input>
                    <label for="false">Extinct Candidates</label>
                    <br></br>
                    <label for="identities">Select Candidate Identity</label>
                    <select id="identities">
                        <option value="Millennial">Young Bucks</option>
                        <option value="Egomaniacal Billionaire">Got MONEY</option>
                        <option value="War Criminal">War Hungry</option>
                        <option value="Crazypants">BatShitCrazy</option>
                        <option value="America's Funt">AILF</option>
                        <option value="Anonymous White Man">White Guy</option>
                        <option value="Who??">Random</option>
                        <option value="In It...Until He's Not">Ghost</option>
                        <option value="SOCIALIST">Old Geezers</option>
                        <option value="Boss Of You">Teachers</option>
                        <option value="From the Midwest, and So Can You!">Riveters</option>
                        <option value="Ok, Boomer">Boomers</option>
                        <option value="Definitely a Real Human">Robots</option>
                        <option value="Radical Vegan">Vegans</option>
                        <option value="The One That Got Away">Mr HashTag</option>

                    </select>
                </div>
            </div>
        )
    }
}
