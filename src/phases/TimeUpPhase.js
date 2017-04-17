import React, { Component } from 'react'

export default class TimeUpPhase extends Component {

  render() {
    return (
      <div className="TimeUpPhase biome-background">
        <img className="image-full-background" alt={this.props.location} src={this.props.biomeImages[this.props.location]}/>
        <div className="Jumbotron">
          <div className="Jumbotron-title">Time's up!</div>
        </div>
      </div>
    )
  }
}
