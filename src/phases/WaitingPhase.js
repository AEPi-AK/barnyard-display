import React, { Component } from 'react'
import logo from '../images/buildabeast-logo.png'
import button from '../images/presstoplay.png'
import background from '../images/blueprint-pattern.png'


export default class WaitingPhase extends Component {

  render() {
    return (
      <div className="WaitingPhase">
        <video className="logo-video" autoPlay loop>
          <source src="./GameWaiting-full.m4v" type="video/mp4"/>
        </video>
      </div>
      )
    }
}
