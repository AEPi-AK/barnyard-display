import React, { Component } from 'react'

// import AvatarMissing from "../images/avatar-missing.svg"
import AvatarMissing from "../images/avatar-missing-with-instructions.svg"
import AvatarPlayer from "../images/avatar-player.svg"

export default class JoiningPhase extends Component {

  render() {
    return (
      <div className="JoiningPhase">
        <div className="JoiningPhase-time">Game begins in {Math.round(Number(this.props.phaseTime) - Number(this.props.timeSincePhaseStart))}</div>
        <div className="JoiningPhase-row">
          {this.props.player1.joined ? <img src={AvatarPlayer}/> : <img className="JoiningPhase-AvatarMissing" src={AvatarMissing}/>}
          <div className="JoiningPhase-row-vs">VS</div>
          {this.props.player2.joined ? <img src={AvatarPlayer}/> : <img className="JoiningPhase-AvatarMissing" src={AvatarMissing}/>}
        </div>
      </div>
    )
  }

}
