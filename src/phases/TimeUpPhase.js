import React, { Component } from 'react'
import Sound from 'react-sound'

export default class TimeUpPhase extends Component {

  render() {
    return (
      <div className="TimeUpPhase biome-background">
        <Sound
          url='./audio/times-up.mp3'
          volume={this.props.settings.volume}
          playStatus={Sound.status.PLAYING}
        />
        <img className="image-full-background" alt={this.props.location} src={this.props.biomeImages[this.props.location]}/>
        <div className="Jumbotron">
          <div className="Jumbotron-title">Time's up!</div>
        </div>
      </div>
    )
  }
}
