import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
      <NavBar/>
      <News/>
      </div>
    )
  }
}

//97ce06b3b6a14af4a117f6ee05654e46 -> News API key
