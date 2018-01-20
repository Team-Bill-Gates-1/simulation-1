import React, {Component} from 'react';
import logo from '../../logo.png';
import axios from 'axios';

class Bin extends Component {
    constructor() {
        super();
        this.state = {
            bin: {
                id: 'A1',
                name: 'Alyssa',
                price: '$0'
            }
        }

        this.save = this.save.bind(this);
    }

    save() {
        const bodyData = {
            name: this.refs.name.value,
            price: this.refs.price.value
        }

        axios.post(`/api/bin/${this.state.bin.id}`, bodyData)
        .then(res => this.setState({ 
            bin: res.data,
            editMode: false
        }))
    }

    render() {
        return(
            <div>
                <header>
                    <div className="header">
                        <div className="logo-bin"><img src={logo} /></div>
                        <div className="shelf-title-bin">{`Shelf`}</div>
                        <div className="add-to-bin-title">{'Bin'}</div>
                    </div>
                </header>
                <body>
                    <div>
                        <label for="name">Name</label>
                        <input id="name" ref="name" placeholder={this.state.bin.name} />
                        <label for="price">Price</label>
                        <input id="price" ref="price" placeholder={this.state.bin.price} />
                        <button id="add-inventory" onClick={this.save}>+ Add Inventory</button>
                    </div>
                </body>
            </div>
        )
    }
}

export default Bin;