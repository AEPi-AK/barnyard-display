import React, { Component } from 'react'
import Sound from 'react-sound'
import VoiceLine from '../VoiceLine'

export default class TimeUpPhase extends Component {

  constructor(props) {
    super(props)
    this.state = {
      soundName: 'time-bell.mp3',
    }
  }

  render() {
    return (
      <div className="TimeUpPhase biome-background">
        <VoiceLine name={this.state.soundName} volume={this.props.settings.volume} onFinishedPlaying={() => this.setState({soundName: 'times-up'})}/>
        <img className="image-full-background" alt={this.props.location} src={this.props.biomeImages[this.props.location]}/>
        <div className="Jumbotron">
          <div className="Jumbotron-title">Time's up!</div>
        </div>
      </div>
    )
  }
}
