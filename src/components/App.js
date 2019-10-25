import React from 'react'
import Header from './Header'
import Main from './Main'
import { BrowserRouter } from "react-router-dom";
import '../App.css';

const App = () => (
  
  <BrowserRouter>
    <Header />
    <Main />
  </BrowserRouter>
)

export default App
