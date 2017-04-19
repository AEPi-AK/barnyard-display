import React, { Component } from 'react'
import logo from '../images/buildabeast-logo.png'
import button from '../images/presstoplay.png'
import background from '../images/blueprint-pattern.png'

import BinAnimals from '../images/bin-animals.png'


export default class WaitingPhase extends Component {

  render() {

    const allSlotsEmpty = this.props.player1.slot0 === 'NoHead' &&
    this.props.player1.slot1 === 'NoBody' &&
    this.props.player1.slot2 === 'NoLeg' &&
    this.props.player2.slot1 === 'NoBody' &&
    this.props.player2.slot2 === 'NoLeg' &&
    this.props.player2.slot2 === 'NoLeg'

    return (
      <div className="WaitingPhase">
        {
          allSlotsEmpty ?
          <video className="logo-video" autoPlay loop>
            <source src="./GameWaiting-full.m4v" type="video/mp4"/>
          </video>
          :
          <div className="Jumbotron">
            <div className="Nag-container">
              <img src={BinAnimals}/>
              <div className="Nag-text">Please place all tiles back in the bin. <strong>Thank you!</strong></div>
            </div>
          </div>
        }
      </div>
      )
    }
}
