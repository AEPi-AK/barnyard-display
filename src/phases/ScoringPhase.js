import React, { Component } from 'react'
import Beast from '../Beast'
import Banner from '../Banner'
import VoiceLine from '../VoiceLine'
import StarAll from '../images/star-all.svg'
import StarBlue from '../images/star-blue.svg'
import StarYellow from '../images/star-yellow.svg'
import StarRed from '../images/star-red.svg'

function playerTotalScore({slot0Score, slot1Score, slot2Score}) {
  return slot0Score + slot1Score + slot2Score
}

const scientificNames = [
  'Carnegus mellus',
  'Subrius sureshum' ,
  'Alphis E cakus',
  'Alphis epsilupi' ,
  'Splattus plattus',
  'Animalia weirdus',
  'Rushus AEPius'
]

const audioForScientificName = name => name.split(' ').slice(-2)[0].toLowerCase()

const randomName = () => scientificNames[Math.floor(Math.random()*scientificNames.length)];

const partUsed = (player, part) => player.slot0 == part || player.slot1 == part || player.slot2 == part

function nameAnimal(player) {
  let name = ''
  if (partUsed(player, 'Lemur') && partUsed(player, 'Penguin')) {
    name = 'Snakus shakus'
  } else {
    name = randomName()
  }
  return `${name} #${Math.floor(Math.random() *100)}`
}

class ResultsPanel extends Component {

  constructor(props) {
    super(props)
    this.state = {
      playAudio: false,
    }
    setTimeout(() => this.setState({playAudio: true}), this.props.audioDelay)
  }

  render() {

    return (
      <div className="ResultsPanel">
        <div className="ResultsPanel-header">
          {
            this.state.playAudio ?
            <VoiceLine
              name={audioForScientificName(this.props.scientificName)}
              volume={this.props.settings.volume}
              />
            : ''
          }
          <div className="ResultsPanel-playerLabel">
            Player {this.props.playerNum}'s Creation
          </div>
          <div className="ResultsPanel-playerScore">
            {playerTotalScore(this.props.player)}
            <img src={StarAll} alt="star"/>
          </div>
        </div>
        <div className="ResultsPanel-scientific">{this.props.scientificName}</div>
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

  constructor(props) {
    super(props)
    let n1, n2
    while (n1 == n2) {
      n1 = nameAnimal(this.props.player1)
      n2 = nameAnimal(this.props.player2)
    }
    this.state = { n1, n2 }
  }

  render() {
    return (
      <div className="ScoringPhase">
        <img className="image-full-background" alt={this.props.location} src={this.props.biomeImages[this.props.location]}/>
        <Banner title={this.props.location}/>
        <div className="ScoringPhase-resultsPanels">
          {
            !this.props.player1.joined ? '' :
            <ResultsPanel player={this.props.player1} audioDelay={750} scientificName={this.state.n1} playerNum={1} {...this.props}/>
          }
          {
            !this.props.player2.joined ? '' :
            <ResultsPanel player={this.props.player2} audioDelay={3000}  scientificName={this.state.n2} playerNum={2} {...this.props}/>
          }
        </div>
      </div>
    )
  }

}
