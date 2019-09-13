import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {color: props.value}
  }

  swapColors = () => this.setState({color: "#333"})

  render() {
    const swapColors = () => this.setState({color: "#333"})
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={swapColors}>
      </div>
    )
  }

}
