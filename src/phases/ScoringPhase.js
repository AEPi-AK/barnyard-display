import React, { Component } from 'react'
import Beast from '../Beast'
import Banner from '../Banner'
import Star from '../images/star.svg'

function playerTotalScore({slot0Score, slot1Score, slot2Score}) {
  return slot0Score + slot1Score + slot2Score
}

class ResultsPanel extends Component {

  render() {
    return (
      <div className="ResultsPanel">
        <div className="ResultsPanel-header">
          <div className="ResultsPanel-playerLabel">
            Player {this.props.playerNum}
          </div>
          <div className="ResultsPanel-playerScore">
            {playerTotalScore(this.props.player)}
            <img src={Star} alt="star"/>
          </div>
        </div>
        <div className="ResultsPanel-beast">
          <Beast
            head={this.props.player.slot0}
            body={this.props.player.slot1}
            leg={this.props.player.slot2}
          />
        </div>
        <div className="ResultsPanel-starPanel">
          <img src={Star} alt="star"/>
          <img src={Star} alt="star"/>
          <img src={Star} alt="star"/>
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
        <Banner title={this.props.location}/>
        <div className="ScoringPhase-resultsPanels">
          <ResultsPanel player={this.props.player1} playerNum={1}/>
          <ResultsPanel player={this.props.player2} playerNum={2}/>
        </div>
      </div>
    )
  }

}
