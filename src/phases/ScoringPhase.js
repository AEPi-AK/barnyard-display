import React, { Component } from 'react'

class Stars extends Component {
  render() {
    return(
      <div className="Stars">
        star
      </div>
    )
  }
}

class ResultsPanel extends Component {
  render() {
    return(
      <div className="ResultsPanel-background">
        <div className="ResultsPanel-header">
          <div className="ResultsPanel-playerLabel">
            Player {this.props.playerNum}
	  </div>
	  <div className="ResultsPanel-playerScore">
	    {this.props.score}
	  </div>
	</div>
	<div className="ResultsPanel-imgPanel">
	  <div className="ResultsPanel-img"/>
	</div>
	<div className="ResultsPanel-starPanel">
          <Stars/>
          <Stars/>
          <Stars/>
	</div>
        <div className="ResultsPanel-description">
          Description
        </div>
      </div>
    )
  }
}

export default class ScoringPhase extends Component {
  render() {
    return (
      <div className="ScoringPhase">
        <img className="image-full-background" alt={this.props.location} src={this.props.biomeImages[this.props.location]}/>
	<div className="ScoringPhase-resultsPanels">
	  <ResultsPanel playerNum={1} score={5}/>
	  <ResultsPanel playerNum={2} score={6}/>
	</div>
      </div>
    )
  }
}
