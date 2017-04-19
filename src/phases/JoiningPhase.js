import React, { Component } from 'react'
import VoiceLine from '../VoiceLine'

import AvatarMissing from '../images/avatar-missing.svg'
import AvatarPlayer from '../images/avatar-player.svg'
import AddPlayerInstructions from '../images/add-player-instructions.svg'

export default class JoiningPhase extends Component {

  render() {
    return (
      <div className="JoiningPhase">
        <VoiceLine name='day6' volume={this.props.settings.volume}/>
        <div className="JoiningPhase-time">Game begins in {Math.round(Number(this.props.phaseTime) - Number(this.props.timeSincePhaseStart))}</div>
        <div className="JoiningPhase-row">
          {this.props.player1.joined ? <img src={AvatarPlayer} alt="player joined"/> : <img alt="player missing" className="JoiningPhase-AvatarMissing" src={AvatarMissing}/>}
          <div className="JoiningPhase-row-vs">VS</div>
          {this.props.player2.joined ? <img src={AvatarPlayer} alt="player joined"/> : <img alt="player missing" className="JoiningPhase-AvatarMissing" src={AvatarMissing}/>}
        </div>
        <img src={AddPlayerInstructions}/>
      </div>
    )
  }

}
