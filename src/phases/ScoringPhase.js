import React, { Component } from 'react'
import Beast from '../Beast'
import Banner from '../Banner'
import StarAll from '../images/star-all.svg'
import StarBlue from '../images/star-blue.svg'
import StarYellow from '../images/star-yellow.svg'
import StarRed from '../images/star-red.svg'

function playerTotalScore({slot0Score, slot1Score, slot2Score}) {
  return slot0Score + slot1Score + slot2Score
}

class ResultsPanel extends Component {

  render() {
    return (
      <div className="ResultsPanel">
        <div className="ResultsPanel-header">
          <div className="ResultsPanel-playerLabel">
            Player {this.props.playerNum}'s Creation
          </div>
          <div className="ResultsPanel-playerScore">
            {playerTotalScore(this.props.player)}
            <img src={StarAll} alt="star"/>
          </div>
        </div>
        <div className="ResultsPanel-scientific">
          Carnegus mellus
        </div>
        <div className="ResultsPanel-description">
          Okay at finding food. Body is a little too warm. Legs provide mobility.
        </div>
        <div className="ResultsPanel-beast">
          <Beast
            head={this.props.player.slot0}
            body={this.props.player.slot1}
            leg={this.props.player.slot2}
          />
        </div>
        <div className="ResultsPanel-starPanel">
          <div className="ResultsPanel-starPanel-group">
            { [...Array(this.props.player.slot0Score).keys()].map(() => <img src={StarBlue} alt="star"/>) }
          </div>
          <div className="ResultsPanel-starPanel-group">
            { [...Array(this.props.player.slot1Score).keys()].map(() => <img src={StarYellow} alt="star"/>) }
          </div>
          <div className="ResultsPanel-starPanel-group">
            { [...Array(this.props.player.slot2Score).keys()].map(() => <img src={StarRed} alt="star"/>) }
          </div>
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
          {
            !this.props.player1.joined ? '' :
            <ResultsPanel player={this.props.player1} playerNum={1}/>
          }
          {
            !this.props.player2.joined ? '' :
            <ResultsPanel player={this.props.player2} playerNum={2}/>
          }
        </div>
      </div>
    )
  }

}
