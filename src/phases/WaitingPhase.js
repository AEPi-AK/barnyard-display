import React, { Component } from 'react'
import logo from "../images/buildabeast-logo.png"
import button from "../images/presstoplay.png"
import background from "../images/blueprint-pattern.png"

export default class WaitingPhase extends Component {
  render() {
    return (
      <div className="waiting-phase">
        <img className='image-full-background' src={background}/>
        <img className="logo" src={logo}/>
        <div className="game-text-container">
          <div className="game-text">On the 6th day, God created animals.</div>
          <div className="game-text">Now, it's your turn.</div>
        </div>
        <img className="button-text" src={button}/>
      </div>
      )
    }
}
