import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import PlayerProfile from './PlayerProfile'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/players/:id' component={PlayerProfile}/>  
    </Switch>
  </main>
)

export default Main
