import React, { Component } from 'react'
import head from "../images/instruction-head.png"
import body from "../images/instruction-body.png"
import tail from "../images/instruction-tail.png"
import background from "../images/blueprint-pattern.png"

export default class InstructionsPhase extends Component {
  render() {
    return (
      <div className="instructions-phase">
        <img className='image-full-background' src={background}/>
        <div className="instructions-container">
          <div className="instructions">In a few moments, you will be shown a <span className="important-instructions">habitat</span>.</div>
          <div className="instructions">Your job is to build an animal that can <span className="important-instructions">survive</span> in it.</div>
        </div>
        <div className="instruction-images-container">
          <img className="instruction-image" src={head}/>
          <img className="instruction-image" src={body}/>
          <img className="instruction-image" src={tail}/>
        </div>
        <div className="instructions-container">
          <div className="instructions">Each body part may <span className="important-instructions">help</span> or <span className="important-instructions">hurt</span> your animal</div>
          <div className="instructions">in its habitat.</div>
        </div>
      </div>
    )
  }
}
