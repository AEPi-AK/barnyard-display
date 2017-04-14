import React, { Component } from 'react'

export default class InProgressPhase extends Component {
  render() { return <div className="Phase-Name">{this.constructor.name}</div> }
}
