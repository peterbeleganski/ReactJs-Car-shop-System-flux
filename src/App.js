import React, { Component } from 'react'
import Navbar from './components/common/Navbar'
import Routes from './components/common/Routes'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Navbar className='menu' />
        <Routes />
      </div>
    )
  }
}

export default App
