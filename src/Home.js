import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export class Home extends Component {
    render() {
        return (
            <div className="homepage">
                <div className="amsterdam"><Link to="/Amsterdam"> AMSTERDAM</Link></div>
                <div className="paris"><Link to="/Paris"> PARIS</Link></div>
                <div className="london"><Link to="/London"> LONDON</Link></div>
            </div>
        )
    }
}

export default Home
