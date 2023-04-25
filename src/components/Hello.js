import React, { Component } from 'react'

export default class Hello extends Component {
    render() {
        const { value } = this.props;
        const handleClick = (value) => {
            alert(`Hello there ${value}`)
        }
        return (
            <div>
                <input type="button" value="Click" onClick={() => handleClick(value)} />
            </div>
        )
    }
}
