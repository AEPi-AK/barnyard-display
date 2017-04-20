import React, { Component } from 'react'

import HeadVulture from './images/parts/head-vulture.png'
import HeadWalrus from './images/parts/head-walrus.png'
import HeadBison from './images/parts/head-bison.png'
import HeadToucan from './images/parts/head-toucan.png'
import HeadAvi from './images/parts/head-avi.png'

import BodyPenguin from './images/parts/body-penguin.png'
import BodyCamel from './images/parts/body-camel.png'
import BodyZebra from './images/parts/body-zebra.png'
import BodyTreeFrog from './images/parts/body-treefrog.png'

import LegPolarBear from './images/parts/leg-polarbear.png'
import LegLizard from './images/parts/leg-lizard.png'
import LegEmu from './images/parts/leg-emu.png'
import LegLemur from './images/parts/leg-lemur.png'

import './Beast.css'

const headImages = {
  NoHead: '',
  HeadErr: '',
  Walrus: HeadWalrus,
  Vulture: HeadVulture,
  Bison: HeadBison,
  Toucan: HeadToucan,
  Avi: HeadAvi,
}

const bodyImages = {
  NoBody: '',
  BodyErr : '',
  Penguin: BodyPenguin,
  Camel: BodyCamel,
  Zebra: BodyZebra,
  TreeFrog: BodyTreeFrog,
}

const legImages = {
  NoLeg: '',
  LegErr : '',
  PolarBear: LegPolarBear,
  Lizard: LegLizard,
  Emu: LegEmu,
  Lemur: LegLemur,
}

export default class Beast extends Component {

  render() {
    const { head, body, leg } = this.props
    return (
      <div className="Beast">
        <img className="Beast-head" src={headImages[head]}/>
        <img className="Beast-body" src={bodyImages[body]}/>
        <img className="Beast-leg" src={legImages[leg]}/>
      </div>
    )
  }

}
