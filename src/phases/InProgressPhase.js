import React, { Component } from 'react'

import Clock from "../images/clock.svg"

function timeRemaining({phaseTime, timeSincePhaseStart}) {
  const secondsRemaining = Math.round(Number(phaseTime) - Number(timeSincePhaseStart))
  return secondsRemaining < 10 ? `0:0${secondsRemaining}` : secondsRemaining
}


export default class InProgressPhase extends Component {

  render() {
    return (
      <div className="InProgressPhase biome-background">
        <img className="image-full-background" src={this.props.biomeImages[this.props.location]}/>
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
