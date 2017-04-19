import React, { Component } from 'react'
import VoiceLine from '../VoiceLine'

import './BiomePickingPhase.css'

import rainforestSquare from '../images/biomes/rainforest-square.jpg'
import arcticSquare from '../images/biomes/arctic-square.jpg'
import desertSquare from '../images/biomes/desert-square.jpg'
import grasslandSquare from '../images/biomes/grassland-square.jpg'
import morganSquare from '../images/biomes/morgan-square.png'

const NUM_SPINS = 10

const locations = {
  'Rainforest': {
    wavName: 'rainforest',
    image: rainforestSquare,
    theta: -360,
  },
  'Arctic': {
    wavName: 'arctic',
    image: arcticSquare,
    theta: -180,
  },
  'Desert': {
    wavName: 'desert',
    image: desertSquare,
    theta: -90,
  },
  'Grassland': {
    wavName: 'grassland',
    image: grasslandSquare,
    theta: 90,
  },
}

class Cube extends Component {

  constructor(props) {
    super(props)
    if (this.props.shouldSpin) {
      this.state = {
        theta: 45,
        mu: 0,
      }
      this.timer = setTimeout(this.spin.bind(this), 500)
    } else {
      this.state = {
        mu: 0,
        theta: locations[this.props.location].theta
      }
    }
  }

  spin() {
    this.setState({
      mu: 0,
      theta: locations[this.props.location].theta + (NUM_SPINS * 360),
    })
  }

  render() {
    const {mu, theta} = this.state
    return (
      <div className="Cube-outer">
        <div className="Cube" style={{transform: `rotateX(${mu}deg) rotateY(${theta}deg)`}}>
          {
            Object.keys(locations).map((location, i) => {
              return (
                <div className={`face face-${i}`} key={i}>
                  <img src={locations[location].image}/>
                </div>
              )
            })
          }
          <div className='face face-morgan'>
            <img src={morganSquare}/>
          </div>
        </div>
      </div>
    )
  }

}

function DONT_REPEAT() {
  this.removeSound()
}

export default class BiomePickingPhase extends Component {

  constructor(props) {
    super(props)
    this.state = {
      shouldPlay: true,
    }
  }

  render() {
    return (
      <div className="BiomePickingPhase">
        <img className="image-full-background" alt={this.props.location} src={this.props.biomeImages[this.props.location]}/>
        <div className="BiomePickingPhase-title">{this.props.currentPhase === 'GameBiomePicking' ? 'Selecting habitat...' : this.props.location}</div>
        {
          this.props.currentPhase === 'GameBiomePicking' ?
          <VoiceLine name='whats-it-gonna-be' volume={this.props.settings.volume}/>
          :
          <VoiceLine name={locations[this.props.location].wavName} volume={this.props.settings.volume}/>
        }
        <Cube {...this.props} shouldSpin={this.props.currentPhase === 'GameBiomePicking'}/>
      </div>
    )
  }

}
