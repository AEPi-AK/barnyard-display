import React, { Component } from 'react'

import './BiomePickingPhase.css'

import rainforestSquare from '../images/biomes/rainforest-square.jpg'
import arcticSquare from '../images/biomes/arctic-square.jpg'
import desertSquare from '../images/biomes/desert-square.jpg'
import grasslandSquare from '../images/biomes/grassland-square.jpg'
import morganSquare from '../images/biomes/morgan-square.png'

const NUM_SPINS = 10

const locations = {
  'Rainforest': {
    image: rainforestSquare,
    theta: -360,
  },
  'Arctic': {
    image: arcticSquare,
    theta: -180,
  },
  'Desert': {
    image: desertSquare,
    theta: -90,
  },
  'Grassland': {
    image: grasslandSquare,
    theta: 90,
  },
}

class Cube extends Component {

  constructor(props) {
    super(props)
    this.state = {
      theta: 45,
      mu: 0,
    }
    setTimeout(this.startSpin.bind(this), 500)
  }

  startSpin() {
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

export default class BiomePickingPhase extends Component {

  render() {
    return (
      <div className="BiomePickingPhase">
        <img className="image-full-background" alt={this.props.location} src={this.props.biomeImages[this.props.location]}/>
        <div className="BiomePickingPhase-title">Selecting habitat...</div>
        <Cube {...this.props}/>
      </div>
    )
  }

}
