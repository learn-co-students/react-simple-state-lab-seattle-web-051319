import React, { Component } from 'react';

export default class Cell extends Component {

    constructor(color) {
        super(color);
        this.state = {color: this.props.value};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            color: "#333"
        }))
    }

    render () { 
        return (
            <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleClick}></div>
        )
    }

}