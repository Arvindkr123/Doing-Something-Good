import React, { Component } from 'react'

export default class Hello extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Arvind K',
            age : 22
        }
    }
    render() {
        const { name, age } = this.state;
        return (
            <>
                <h1>{name}</h1>
                <h1>{age}</h1>
            </>
        )
    }
}
