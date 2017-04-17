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

import rainforestImage from "./images/rainforest.jpg"
import arcticImage from "./images/arctic.jpg"
import desertImage from "./images/desert.jpg"
import grasslandsImage from "./images/grasslands.jpg"

// How frequently we poll the server for changes
const POLL_FREQUENCY = 1000 // ms
const SERVER_URL = 'http://barnyard-nuc.local'

const biomeImages = {
  "rainforest": rainforestImage,
  "arctic": arcticImage,
  "desert": desertImage,
  "grasslands": grasslandsImage
}

// String -> Component
const phaseComponentMap = {
  "GameWaiting": WaitingPhase,
  "GameJoining": JoiningPhase,
  "GameInstructions": InstructionsPhase,
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
      currentPhase: 'GameBiomeSelection',
      location: 'desert',
    }
    // this.onPollTimer()
    // setInterval(this.onPollTimer.bind(this), POLL_FREQUENCY)
  }

  onPollTimer() {
    fetch(`${SERVER_URL}/gamestate`)
    .then(response => response.json())
    .then(gameState => this.setState({...gameState}))
    .catch(error => console.error(error))
  }

  render() {
    return (
      <div className="App">
        <app className="App-phase-container">
          { componentForPhase(this.state.currentPhase)({...this.state, biomeImages}) }
        </app>
      </div>
    )
  }

}

export default App
