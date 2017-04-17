import React, { Component } from 'react'


export default class BiomeSelectionPhase extends Component {
  constructor(props) {
    super(props)
    this.locationText = {
      "rainforest": ["Tall trees", "Plant life", "Moisture"],
      "desert": ["Very hot", "Dry air", "No water"],
      "arctic": ["Cold", "Icy", "Wet"],
      "grasslands": ["Wide open spaces", "Grassy plains", "Some water"]
    }
  }
  render() {
    return (
      <div className="biome-selection-phase biome-background">
        <img className='image-full-background' src={this.props.biomeImages[this.props.location]}/>
        <div className="biome-info-container">
          <div className="biome-name">{this.props.location}</div>
        </div>
      </div>
    )
  }
}
