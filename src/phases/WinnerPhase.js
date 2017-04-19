import React, { Component } from 'react'
import VoiceLine from '../VoiceLine'
import Banner from '../Banner'
import Beast from '../Beast'

export default class WinnerPhase extends Component {

  render() {

    let winText = 'Unknown'
    let voiceLine = 'tie-win'
    let panel = null
    if (this.props.winner === 'Player1') {
      winText = 'Player 1 wins!'
      voiceLine = 'player1-win'
      panel = (
        <div className="WinnerBeast">
          <Beast
            head={this.props.player1.slot0}
            body={this.props.player1.slot1}
            leg={this.props.player1.slot2}
          />
        </div>
      )
    }
    else if (this.props.winner === 'Player2') {
      winText = 'Player 2 wins!'
      voiceLine = 'player2-win'
      panel = (
        <div className="WinnerBeast">
          <Beast
            head={this.props.player2.slot0}
            body={this.props.player2.slot1}
            leg={this.props.player2.slot2}
          />
        </div>
      )
    } else {
      winText = "It's a Tie!"
      voiceLine = 'tie-win'
      panel = (
        <div className="WinnerBeast-tie">
          <Beast
            head={this.props.player1.slot0}
            body={this.props.player1.slot1}
            leg={this.props.player1.slot2}
          />
          <Beast
            head={this.props.player2.slot0}
            body={this.props.player2.slot1}
            leg={this.props.player2.slot2}
          />
        </div>
      )
    }



    return (
      <div className="WinnerPhase">
        <VoiceLine name={voiceLine} volume={this.props.settings.volume}/>
        <img className="image-full-background" alt={this.props.location} src={this.props.biomeImages[this.props.location]}/>
        <Banner title={winText}/>
        { panel }
      </div>
    )

  }

}
