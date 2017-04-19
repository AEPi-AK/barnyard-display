import React, { Component } from 'react'
import { timeRemaining } from '../Utilities.js'
import Sound from 'react-sound'

import Beast from '../Beast'
import Banner from '../Banner'
import Clock from '../images/clock.svg'

export default class InProgressPhase extends Component {

  constructor(props) {
    super(props)
    this.state = {
      playInCorrectTileSound: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    let playInCorrectTileSound = false
    if (this.props.player1.slot0 !== 'HeadErr' && nextProps.player1.slot0 === 'HeadErr') {
      console.log('playInCorrectTileSound = true')
      playInCorrectTileSound = true
    }
    else if (nextProps.player1.slot0 !== 'HeadErr') {
      console.log('playInCorrectTileSound = false')
      playInCorrectTileSound = false
    }
    this.setState({playInCorrectTileSound})
  }

  render() {
    return (
      <div className="InProgressPhase biome-background">
        {/* <Sound
          url='./audio/inprogress.mp3'
          volume={this.props.settings.volume - 20}
          playStatus={Sound.status.PLAYING}
        /> */}
        <Sound
          url='./audio/tile-placed-incorrect.wav'
          volume={this.props.settings.volume}
          playStatus={this.state.playInCorrectTileSound ? Sound.status.PLAYING : Sound.status.STOPPED}
        />
        {/* <Sound
          url='./audio/tile-placed-incorrect.wav'
          volume={this.props.settings.volume}
          playStatus={this.props.player1.slot0 == 'HeadErr' ? Sound.status.PLAYING : Sound.status.STOPPED}
        /> */}

        <img className="image-full-background" alt={this.props.location} src={this.props.biomeImages[this.props.location]}/>
        <Banner title={this.props.location}>
          <div className="Banner-time">
            <img src={Clock}/> {timeRemaining(this.props)} remaining
          </div>
        </Banner>
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

}
