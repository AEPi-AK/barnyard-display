import React, { Component } from 'react'
import './App.css'

import LoadingScreen from './LoadingScreen.js'

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
const POLL_FREQUENCY = 150 // ms
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

function timeout(ms, promise) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject(new Error("timeout"))
    }, ms)
    promise.then(resolve, reject)
  })
}

const componentForPhase = phase => React.createFactory(phaseComponentMap[phase])

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      phaseTime: '5.00',
      timeSincePhaseStart: '2.33234',
      currentPhase: 'GameJoining',
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
    timeout(1000, fetch(`${SERVER_URL}/gamestate`))
    .then(response => response.json())
    .then(gameState => this.setState({...gameState, isLoading: false}))
    .catch(error => {
      this.setState({isLoading: true})
      console.error(error)
    })
  }

  render() {
    return (
      <div className="App">
        <app className="App-phase-container">
          { this.state.isLoading
            ? <LoadingScreen/>
            : componentForPhase(this.state.currentPhase)({...this.state, biomeImages}) }
        </app>
      </div>
    )
  }

}

export default App
