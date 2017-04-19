import React, { Component } from 'react'
import { timeRemaining } from '../Utilities.js'
import Sound from 'react-sound'

import Beast from '../Beast'
import Banner from '../Banner'
import Clock from '../images/clock.svg'

export default class InProgressPhase extends Component {

  render() {
    return (
      <div className="InProgressPhase biome-background">
        <Sound
          url='./audio/inprogress.mp3'
          volume={this.props.settings.volume - 40}
          playStatus={Sound.status.PLAYING}
        />
        <img className="image-full-background" alt={this.props.location} src={this.props.biomeImages[this.props.location]}/>
        <Banner title={this.props.location}>
          <div className="Banner-time">
          <img src={Clock}/> {timeRemaining(this.props)} remaining
          </div>
        </Banner>
        <div className="InProgress-beasts">
          {
            !this.props.player1.joined ? '' :
            <div className="ResultsPanel">
              <div className="ResultsPanel-header">
                Player 1's creation
              </div>
              <Beast
                head={this.props.player1.slot0}
                body={this.props.player1.slot1}
                leg={this.props.player1.slot2}
              />
            </div>
          }
          {
            !this.props.player2.joined ? '' :
            <div className="ResultsPanel">
              <div className="ResultsPanel-header">
                Player 2's creation
              </div>
              <Beast
                head={this.props.player2.slot0}
                body={this.props.player2.slot1}
                leg={this.props.player2.slot2}
              />
            </div>
          }
        </div>
      </div>
    )
  }

}
