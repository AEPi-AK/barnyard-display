import React, { Component } from 'react'
import './App.css'

import LoadingScreen from './LoadingScreen.js'

import WaitingPhase from './phases/WaitingPhase.js'
import JoiningPhase from './phases/JoiningPhase.js'
import InstructionsPhase from './phases/InstructionsPhase.js'
import BiomeSelectionPhase from './phases/BiomeSelectionPhase.js'
import BiomePickingPhase from './phases/BiomePickingPhase.js'
import InProgressPhase from './phases/InProgressPhase.js'
import TimeUpPhase from './phases/TimeUpPhase.js'
import ScoringPhase from './phases/ScoringPhase.js'
import WinnerPhase from './phases/WinnerPhase.js'

import rainforestImage from './images/biomes/rainforest.jpg'
import arcticImage from './images/biomes/arctic.jpg'
import desertImage from './images/biomes/desert.jpg'
import grasslandImage from './images/biomes/grassland.jpg'

// How frequently we poll the server for changes
const POLL_FREQUENCY = 150 // ms
const SERVER_URL = 'http://barnyard-nuc.local'
// const SERVER_URL = 'http://localhost'

const biomeImages = {
  'Rainforest': rainforestImage,
  'Arctic': arcticImage,
  'Desert': desertImage,
  'Grassland': grasslandImage
}

// String -> Component
const phaseComponentMap = {
  'GameWaiting': React.createFactory(WaitingPhase),
  'GameJoining': React.createFactory(JoiningPhase),
  'GameInstructions': React.createFactory(InstructionsPhase),
  'GameBiomePicking': React.createFactory(BiomePickingPhase),
  'GameBiomeSelection': React.createFactory(BiomePickingPhase),
  'GameInProgress': React.createFactory(InProgressPhase),
  'GameTimeUp': React.createFactory(TimeUpPhase),
  'GameScoring': React.createFactory(ScoringPhase),
  'GameWinner': React.createFactory(WinnerPhase),
}

function timeout(ms, promise) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject(new Error('timeout'))
    }, ms)
    promise.then(resolve, reject)
  })
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      phaseTime: '5.00',
      timeSincePhaseStart: '2.33234',
      currentPhase: 'GameScoring',
      player1: {
        slot0: 'Bison',
        slot1: 'TreeFrog',
        slot2: 'Lizard',
        slot0Score: 3,
        slot1Score: 1,
        slot2Score: 3,
        joined: false,
      },
      player2: {
        slot0: 'Avi',
        slot1: 'TreeFrog',
        slot2: 'Lizard',
        slot0Score: 9,
        slot1Score: 1,
        slot2Score: 1,
        joined: true,
      },
      winner: 'Tie',
      location: 'Arctic',
      settings: {
        volume: 25, // [0-100]
        brightness: 255, // [0-255]
      }
    }
    this.onPollTimer()
    setInterval(this.onPollTimer.bind(this), POLL_FREQUENCY)
  }

  onNewGameState(nextGameState) {
    const currentGameState = this.state
    const lockedStates = ['GameTimeUp', 'GameScoring', 'GameWinner']
    if (lockedStates.includes(currentGameState.currentPhase)) {
      Object.keys(nextGameState)
      .filter(key => key === 'player1' || key === 'player2')
      .forEach(key => delete nextGameState[key])
    }
    this.setState({...nextGameState, isLoading: false})
  }

  onPollTimer() {
    timeout(1000, fetch(`${SERVER_URL}/gamestate`))
    .then(response => response.json())
    .then(gameState => this.onNewGameState(gameState))
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
            : phaseComponentMap[this.state.currentPhase]({...this.state, biomeImages}) }
        </app>
      </div>
    )
  }

}

export default App
