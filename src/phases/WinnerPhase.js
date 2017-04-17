import React, { Component } from 'react'

import Banner from '../Banner.js'

export default class WinnerPhase extends Component {

  render() {

    let winText = 'Unknown'
    if (this.props.winner === 'Player1') {
      winText = 'Player 1 wins!'
    }
    else if (this.props.winner === 'Player 2') {
      winText = 'Player 2 wins!'
    } else {
      winText = "It's a Tie!"
    }

    return (
      <div className="WinnerPhase">
        <img className="image-full-background" alt={this.props.location} src={this.props.biomeImages[this.props.location]}/>
        <Banner title={winText}/>
        <div className="ScoringPhase-resultsPanels">
        </div>
      </div>
    )
  }

}
