import React, { Component } from 'react'
import { timeRemaining } from '../Utilities.js'

import Clock from "../images/clock.svg"

export default class InProgressPhase extends Component {

  render() {
    return (
      <div className="InProgressPhase biome-background">
        <img className="image-full-background" alt={this.props.location} src={this.props.biomeImages[this.props.location]}/>
        <div className="Banner">
          <div className="Banner-title">{this.props.location}</div>
          <div className="Banner-time">
            <img src={Clock}/> {timeRemaining(this.props)} remaining
          </div>
        </div>
      </div>
    )
  }

}
