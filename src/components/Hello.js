import React, { Component } from 'react'

export default class Hello extends Component {
    render() {
        const { name, age } = this.props;
        return (
            <div>
                <h1>{name}</h1>
                <h1>{age}</h1>
            </div>
        )
    }
}
