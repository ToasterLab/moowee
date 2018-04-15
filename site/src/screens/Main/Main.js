import React, { Component } from 'react'
import MovieAutoComplete from './components/MovieAutoComplete/MovieAutoComplete'
import './Main.css'

class MainScreen extends Component {
  constructor () {
    super()
    this.state = {
      searchQuery: ''
    }
    this.movies = ['Shrek', 'The Incredibles', 'The Prestige', 'The King\'s Speech', 'Zootopia']
  }
  render () {
    return (
      <div className="main-screen">
        <h1 className="title">MOOWEE</h1>
        <MovieAutoComplete
          onChange={this.handleQueryChange}
        />
      </div>
    )
  }
  handleQueryChange = (query) => this.setState({ searchQuery: query })
}

export default MainScreen
