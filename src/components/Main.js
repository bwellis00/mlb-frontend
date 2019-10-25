import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Leaders from './Leaders'
import PlayerProfile from './PlayerProfile'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Leaders}/>
      <Route exact path='/leaders/:yearid' component={Leaders}/>
      <Route path='/players/:id' component={PlayerProfile}/>  
    </Switch>
  </main>
)

export default Main
