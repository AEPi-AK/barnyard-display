import React, { Component } from 'react'

const locationDescriptors = {
  Rainforest: ["Tall trees", "Plant life", "Moisture"],
  Desert: ["Very hot", "Dry air", "No water"],
  Arctic: ["Cold", "Icy", "Wet"],
  Grasslands: ["Wide open spaces", "Grassy plains", "Some water"]
}

export default class BiomeSelectionPhase extends Component {

  render() {
    return (
      <div className="BiomeSelectionPhase biome-background">
        <img className="image-full-background" src={this.props.biomeImages[this.props.location]}/>
        <div className="Jumbotron">
          <div className="Jumbotron-title">{this.props.location}</div>
          {locationDescriptors[this.props.location].map(descriptor => {
            return <div className="biome-descriptors" key={descriptor}>{descriptor}</div>
          })}
        </div>
      </div>
    )
  }

}
