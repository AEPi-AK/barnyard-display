import React, { Component } from 'react'

import HeadVulture from "./images/parts/head-vulture.png"
import BodyFrog from "./images/parts/body-frog.png"
import ButtLemur from "./images/parts/butt-lemur.png"

import './Beast.css'

export default class Beast extends Component {

  render() {
    return (
      <div className="Beast">
        <img className="Beast-head" src={HeadVulture}/>
        <img className="Beast-body" src={BodyFrog}/>
        <img className="Beast-butt" src={ButtLemur}/>
      </div>
    )
  }

}
