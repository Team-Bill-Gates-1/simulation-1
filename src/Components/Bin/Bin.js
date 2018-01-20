import React, {Component} from 'react';
import logo from '../../logo.png';
import axios from 'axios';
import './Bin.css'

class Bin extends Component {
    constructor() {
        super();
        this.state = {
            bin: {
                id: 'A1',
                name: 'Alyssa',
                price: '$0',
                img: ''
            },
            editMode: false
        }

        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.save = this.save.bind(this);
        this.delete = this.delete.bind(this);
    }

    componentDidMount(){
        axios.get(`/api/bin/${this.props.match.params.id}`)
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

        axios.put(`/api/bin/${this.props.match.params.id}`, bodyData)
        .then(res => this.setState({ 
            bin: res.data,
            editMode: false
        }))
    }

    delete() {
        axios.delete(`/api/bin/${this.props.match.params.id}`)
        .then(res => {
            this.props.history.push(`/shelf/${this.state.bin.id.split()[0]}`)
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
                    <div className="bin-page">
                        <div className="left-margin"></div>
                        <img className="bin-img" src={this.state.bin.img} alt="Bin Img"/>
                        <div className="bin-content">
                            <p className="input-labels">Name</p>
                            <input className="bin-input" id="name" ref="name" placeholder={this.state.bin.name} disabled={!this.state.editMode} />
                            <p className="input-labels">Price</p>
                            <input className="bin-input" id="price" ref="price" placeholder={this.state.bin.price} disabled={!this.state.editMode} />
                            <div>
                            {this.state.editMode ? (<button className="button" id="save" onClick={this.save}>SAVE</button>) : (<button className="button" id="edit" onClick={this.toggleEditMode}>EDIT</button>)}
                            <button className="button" id="delete" onClick={this.delete}>DELETE</button>
                        </div>  
                        </div>
                        
                    </div>
                </body>
            </div>
        )
    }
}

export default Bin;