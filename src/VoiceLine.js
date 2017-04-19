import React, { Component } from 'react'
import Sound from 'react-sound'

export default class VoiceLine extends Component {

  constructor(props) {
    super(props)
    this.state = {
      shouldPlay: true,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.name != nextProps.name) {
      this.setState({shouldPlay: true})
    }
  }

  onFinishedPlaying() {
    this.setState({shouldPlay: false})
    if (this.props.onFinishedPlaying) {
      this.props.onFinishedPlaying()
    }
  }

  render() {

    return (
      <Sound
        url={this.props.name.includes('.mp3') ? `./audio/${this.props.name}` : `./audio/${this.props.name}.wav`}
        volume={this.props.volume}
        playStatus={this.state.shouldPlay ? Sound.status.PLAYING : Sound.status.STOPPED}
        onFinishedPlaying={this.onFinishedPlaying.bind(this)}/>
    )
  }

}
