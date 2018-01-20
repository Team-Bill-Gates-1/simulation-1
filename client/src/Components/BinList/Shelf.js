import React, {Component} from 'react';
import './Shelf.css';
import {Link} from 'react-router-dom';
import logo from '../../logo.png';

class Shelf extends Component {
    constructor() {
        super();
        this.state = {
            shelfData: [
                { id: 1 }, 
                { id: 2 }, 
                null,
                null, 
                { id: 5 } 
            ]
        }
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