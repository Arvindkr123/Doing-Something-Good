import React, { Component } from 'react'

export default class Hello extends Component {
    constructor() {
        super();
        // this.handleBinding = this.handleBinding.bind(this);
        this.state = {
            name: 'Arvind K'
        }
    }

    // handleBinding =()=> {
    //     this.setState({name : 'Arvind Kumar'})
    // }
    handleBinding(){
        this.setState({name : 'Arvind Kumar'})
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button type='button' onClick={()=>this.handleBinding()}>Click</button>
            </div>
        )
    }
}
