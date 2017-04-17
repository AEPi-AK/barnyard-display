import React, { Component } from 'react'


const LocationDescriptors = {
  "rainforest": ["Tall trees", "Plant life", "Moisture"],
  "desert": ["Very hot", "Dry air", "No water"],
  "arctic": ["Cold", "Icy", "Wet"],
  "grasslands": ["Wide open spaces", "Grassy plains", "Some water"]
}

export default class BiomeSelectionPhase extends Component {

  render() {
    return (
      <div className="BiomeSelectionPhase biome-background">
        <img className="image-full-background" src={this.props.biomeImages[this.props.location]}/>
        <div className="Jumbotron">
          <div className="Jumbotron-title">{this.props.location}</div>
          {LocationDescriptors[this.props.location].map(descriptor => {
            return <div className="biome-descriptors" key={descriptor}>{descriptor}</div>
          })}
        </div>
      </div>
    )
  }

}
