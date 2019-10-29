import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Leaders from './Leaders'
import PlayerProfile from './PlayerProfile'

const Main = () => (
  <main>
    
      <Route exact path='/'>
        <Redirect to="/leaders/2019" />
      </Route>
      <Route exact path='/leaders/:yearid' component={Leaders}/>
      <Route path='/players/:id' component={PlayerProfile}/>  
    
  </main>
)

export default Main
