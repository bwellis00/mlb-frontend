import React from 'react'
import { Route } from 'react-router-dom'
import Leaders from './Leaders'
import PlayerProfile from './PlayerProfile'

const Main = () => (
  <main>
    
      <Route exact path='/' component={Leaders}/>
      <Route exact path='/leaders/:yearid' component={Leaders}/>
      <Route path='/players/:id' component={PlayerProfile}/>  
    
  </main>
)

export default Main
