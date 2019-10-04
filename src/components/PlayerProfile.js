import React from 'react'
import PlayerBio from './PlayerBio'
import PlayerStats from './PlayerStats'


const PlayerProfile = props => (
  <div>
      <PlayerBio id={props.match.params.id}/>
      <PlayerStats id={props.match.params.id}/>
  </div>
)

export default PlayerProfile
