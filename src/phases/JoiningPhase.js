import React, { Component } from 'react'

import AvatarMissing from "../images/avatar-missing.svg"
import AvatarPlayer from "../images/avatar-player.svg"

export default class JoiningPhase extends Component {

  render() {
    return (
      <div className="JoiningPhase">
        <div className="JoiningPhase-time">Game begins in {Math.round(Number(this.props.phaseTime) - Number(this.props.timeSincePhaseStart))}</div>
        <div className="JoiningPhase-row">
          <img src={AvatarPlayer}/>
          <div className="JoiningPhase-row-vs">VS</div>
          <img src={AvatarMissing}/>
        </div>
      </div>
    )
  }

}
