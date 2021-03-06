import React, { Component } from 'react'
import VoiceLine from '../VoiceLine'

import AvatarMissing from '../images/avatar-missing.svg'
import AvatarPlayer from '../images/avatar-player.svg'
import AddPlayerInstructions from '../images/add-player-instructions.svg'

export default class JoiningPhase extends Component {

  render() {
    return (
      <div className="JoiningPhase">
        <div className="JoiningPhase-time">Game begins in {Math.round(Number(this.props.phaseTime) - Number(this.props.timeSincePhaseStart))}</div>
        <div className="JoiningPhase-row">
          <div className="JoiningPhase-avatar-bundle">
            {this.props.player1.joined ? <img src={AvatarPlayer} alt="player joined"/> : <img alt="player missing" className="JoiningPhase-AvatarMissing" src={AvatarMissing}/>}
            <div className="JoiningPhase-avatar-title">{this.props.player1.joined ? 'Player 1' : ''}</div>
          </div>
          <div className="JoiningPhase-row-vs">VS</div>
          <div className="JoiningPhase-avatar-bundle">
            {this.props.player2.joined ? <img src={AvatarPlayer} alt="player joined"/> : <img alt="player missing" className="JoiningPhase-AvatarMissing" src={AvatarMissing}/>}
            <div className="JoiningPhase-avatar-title">{this.props.player2.joined ? 'Player 2' : ''}</div>
          </div>
        </div>
        {
          this.props.player1.joined && this.props.player2.joined
          ?
          <VoiceLine name='party' volume={this.props.settings.volume}/>
          :
          <img src={AddPlayerInstructions}/>
        }
        {
          (!this.props.player1.joined || !this.props.player2.joined) ?
          <VoiceLine name='day6' volume={this.props.settings.volume - 10}/> : ''
        }
      </div>
    )
  }

}
