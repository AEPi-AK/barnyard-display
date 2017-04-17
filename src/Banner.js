import React, { Component } from 'react'

import './Banner.css'

export default class Banner extends Component {

  render() {

    return (
      <div className="Banner">
        <div className="Banner-title">{this.props.title}</div>
        {this.props.children}
      </div>
    )
  }

}
