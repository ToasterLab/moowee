import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import ApiManager from 'utils/ApiManager'
import Debounce from 'utils/Debounce'
import qs from 'query-string'
import MovieSuggestion from '../MovieSuggestion/MovieSuggestion'
import './MovieAutoComplete.css'

class MovieAutoComplete extends PureComponent {
  constructor(){
    super()
    this.state = {
      searchTerm: '',
      suggestions: [],
    }
  }
  render(){
    const { searchTerm, suggestions } = this.state
    return (
      <div className="autocomplete">
        <input
          type="text"
          value={searchTerm}
          onChange={this.onChange}
        />
        <div className="suggestions">
          {
            suggestions.map(suggestion => (
              <MovieSuggestion
                key={suggestion.id}
                movie={suggestion}
                viewMovie={this.viewMovie}
              />
            ))
          }
        </div>
      </div>
    )
  }
  viewMovie = movie => {
    const { history } = this.props
    const urlParams = qs.stringify({ title: movie.title })
    history.push(`/movie?${urlParams}`)
  }
  onChange = ({ target: { value: searchTerm } }) => {
    const { onChange } = this.props
    this.setState({ searchTerm })
    if(searchTerm.length > 1){
      Debounce(() => this.getSuggestions(searchTerm), 250)()
    }
    onChange(searchTerm)
  }
  getSuggestions = async (query) => {
    let results = []
    try {
      results = await ApiManager.searchMovies(query)
    } catch (error) {
      console.error(error)
    }
    this.setState({ suggestions: results })
  }
}

export default withRouter(MovieAutoComplete)
