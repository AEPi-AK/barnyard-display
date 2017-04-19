import React, { Component } from 'react'
import logo from '../images/buildabeast-logo.png'
import button from '../images/presstoplay.png'
import background from '../images/blueprint-pattern.png'
// import seeThru from 'seethru'


export default class WaitingPhase extends Component {

  componentDidMount() {
    // const transparentVideo = seeThru.create('.logo-video',  {start: 'autoplay'});
  }

  render() {
    return (
      <div className="WaitingPhase">
        {/* <img className='image-full-background' src={background}/> */}
        {/* <img className="logo" src={logo}/> */}
        <video className="logo-video" autoPlay loop>
          <source src="./GameWaiting.m4v" type="video/mp4"/>
        </video>
        {/* <div className="game-text-container">
          <div className="game-text">On the 6th day, God created animals.</div>
          <div className="game-text">Now, it's your turn.</div>
        </div>
        <img className="button-text" src={button}/> */}
      </div>
      )
    }
}
