import React, { Component } from 'react'
import './App.css'

import WaitingPhase from './phases/WaitingPhase.js'
import JoiningPhase from './phases/JoiningPhase.js'
import InstructionsPhase from './phases/InstructionsPhase.js'
import BiomeSelectionPhase from './phases/BiomeSelectionPhase.js'
import InProgressPhase from './phases/InProgressPhase.js'
import TimeUpPhase from './phases/TimeUpPhase.js'
import ScoringPhase from './phases/ScoringPhase.js'
import WinnerPhase from './phases/WinnerPhase.js'

import rainforestImage from "./images/biomes/rainforest.jpg"
import arcticImage from "./images/biomes/arctic.jpg"
import desertImage from "./images/biomes/desert.jpg"
import grasslandsImage from "./images/biomes/grasslands.jpg"

// How frequently we poll the server for changes
const POLL_FREQUENCY = 50 // ms
const SERVER_URL = 'http://barnyard-nuc.local'

const biomeImages = {
  "Rainforest": rainforestImage,
  "Arctic": arcticImage,
  "Desert": desertImage,
  "Grassland": grasslandsImage
}

// String -> Component
const phaseComponentMap = {
  "GameWaiting": WaitingPhase,
  "GameJoining": JoiningPhase,
  "GameInstructions": InstructionsPhase,
  "GameBiomePicking": BiomeSelectionPhase,
  "GameBiomeSelection": BiomeSelectionPhase,
  "GameInProgress": InProgressPhase,
  "GameTimeUp": TimeUpPhase,
  "GameScoring": ScoringPhase,
  "GameWinner": WinnerPhase,
}

const componentForPhase = phase => React.createFactory(phaseComponentMap[phase])

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      didInitialLoad: false,
      phaseTime: '5.00',
      timeSincePhaseStart: '2.33234',
      currentPhase: 'GameInProgress',
      player1: {
        slot0: 'Bison',
        slot1: 'TreeFrog',
        slot2: 'Lizard',
        slot0Score: 0,
        slot1Score: 0,
        slot2Score: 0,
        joined: false,
      },
      player2: {
        slot0: 'Vulture',
        slot1: 'Penguin',
        slot2: 'Emu',
        slot0Score: 0,
        slot1Score: 0,
        slot2Score: 0,
        joined: false,
      },
      location: 'Desert',
      settings: {
        volume: 25, // [0-100]
        brightness: 255, // [0-255]
      }
    }
    this.onPollTimer()
    setInterval(this.onPollTimer.bind(this), POLL_FREQUENCY)
  }

  onPollTimer() {
    fetch(`${SERVER_URL}/gamestate`)
    .then(response => response.json())
    .then(gameState => this.setState({...gameState, didInitialLoad: true}))
    .catch(error => console.error(error))
  }

  render() {
    return (
      <div className="App">
        <app className="App-phase-container">
          { !this.state.didInitialLoad
            ? 'Loading...'
            : componentForPhase(this.state.currentPhase)({...this.state, biomeImages}) }
        </app>
      </div>
    )
  }

}

export default App
