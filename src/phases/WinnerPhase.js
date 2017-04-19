import React, { Component } from 'react'
import VoiceLine from '../VoiceLine'

import Banner from '../Banner.js'

export default class WinnerPhase extends Component {

  render() {

    let winText = 'Unknown'
    let voiceLine = 'tie-win'
    if (this.props.winner === 'Player1') {
      winText = 'Player 1 wins!'
      voiceLine = 'player1-win'
    }
    else if (this.props.winner === 'Player2') {
      winText = 'Player 2 wins!'
      voiceLine = 'player2-win'
    } else {
      winText = "It's a Tie!"
      voiceLine = 'tie-win'
    }

    return (
      <div className="WinnerPhase">
        <VoiceLine name={voiceLine} volume={this.props.settings.volume}/>
        <img className="image-full-background" alt={this.props.location} src={this.props.biomeImages[this.props.location]}/>
        <Banner title={winText}/>
        <div className="ScoringPhase-resultsPanels">
        </div>
      </div>
    )
  }

}
