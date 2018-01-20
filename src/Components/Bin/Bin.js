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
            },
            editMode: false
        }

        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.save = this.save.bind(this);
        this.delete = this.delete.bind(this);
    }

    componentDidMount(){
        axios.get('/api/bin/:id')
        .then(res => this.setState({bin: res.data}))
    }

    toggleEditMode() {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    save() {
        const bodyData = {
            name: this.refs.name.value,
            price: this.refs.price.value
        }

        axios.put(`/api/bin/${this.state.bin.id}`, bodyData)
        .then(res => this.setState({ 
            bin: res.data,
            editMode: false
        }))
    }

    delete() {
        axios.delete(`/api/bin/${this.state.bin.id}`)
        .then(res => {
            // route to shelf
        })
    }

    render() {
        return(
            <div>
                <header>
                    <div className="header">
                        <div className="logo-bin"><img src={logo} /></div>
                        <div className="shelf-title-bin">{`Shelf`}</div>
                        <div className="bin-title">{'Bin'}</div>
                    </div>
                </header>
                <body>
                    <div>
                        <img />
                    </div>
                    <div>
                        <label for="name">Name</label>
                        <input id="name" ref="name" placeholder={this.state.bin.name} disabled={!this.state.editMode} />
                        <label for="price">Price</label>
                        <input id="price" ref="price" placeholder={this.state.bin.price} disabled={!this.state.editMode} />
                    </div>
                    <div>
                        {this.state.editMode ? (<button id="save" onClick={this.save}>SAVE</button>) : (<button id="edit" onClick={this.toggleEditMode}>EDIT</button>)}
                        <button id="delete" onClick={this.delete}>DELETE</button>
                    </div>  
                </body>
            </div>
        )
    }
}

export default Bin;