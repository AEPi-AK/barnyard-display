import React, { Component } from 'react'
import { timeRemaining } from '../Utilities.js'
import Sound from 'react-sound'

import Beast from '../Beast'
import Banner from '../Banner'
import Clock from '../images/clock.svg'

export default class InProgressPhase extends Component {

  // onLoading={this.handleSongLoading}
  // onPlaying={this.handleSongPlaying}
  // onFinishedPlaying={this.handleSongFinishedPlaying}

  constructor(props) {
    super(props)
    this.state = {
      playCorrectTileSound: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    let playCorrectTileSound = false
    if (this.props.player1.slot0 !== 'HeadErr' && nextProps.player1.slot0 === 'HeadErr') {
      console.log('playCorrectTileSound = true')
      playCorrectTileSound = true
    }
    else if (nextProps.player1.slot0 !== 'HeadErr') {
      console.log('playCorrectTileSound = false')
      playCorrectTileSound = false
    }
    this.setState({playCorrectTileSound})
  }

  render() {
    return (
      <div className="InProgressPhase biome-background">
        <Sound
          url='./audio/inprogress.mp3'
          volume={this.props.settings.volume}
          playStatus={Sound.status.PLAYING}
          playFromPosition={0 /* in milliseconds */}
        />
        <Sound
          url='./audio/tile-placed-correct.wav'
          volume={this.props.settings.volume}
          playStatus={this.state.playCorrectTileSound ? Sound.status.PLAYING : Sound.status.STOPPED}
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
