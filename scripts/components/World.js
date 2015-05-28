'use strict'

import React from 'react'

export default class World extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      world: [87, 111, 114, 108, 100]
        .map(charCode => String.fromCharCode(charCode))
        .join('')  // 'World'
    }
  }
  
  render() {
    return <span>{this.state.world}</span>
  }
}
