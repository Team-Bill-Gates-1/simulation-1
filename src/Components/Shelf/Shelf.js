import React, {Component} from 'react';
import './Shelf.css';
import {Link} from 'react-router-dom';
import logo from '../../logo.png';
import axios from 'axios';

class Shelf extends Component {
    constructor() {
        super();
        this.state = {
            shelfData: []
        }
    }

    componentDidMount(){
        axios.get(`/api/shelf/${this.props.match.params.id}`)
        .then(res => this.setState({shelfData: res.data}))
    }

    render() {
        const bins = this.state.shelfData.map((bin, index) => (<Link to="/bin/:id"><div key={index} className={bin ? "bin-not-empty" : "bin-empty"}>{bin ? `Bin ${bin.id}` : "+ Add Inventory"}</div></Link>))
        return(
            <div>
                <header>
                    <div className="header">
                        <div className="logo"><img src={logo} /></div>
                        <div className="title">{`Shelf`}</div>
                    </div>
                </header>
                <body>
                    {bins}
                </body>
            </div>
        )
    }
}
export default Shelf;