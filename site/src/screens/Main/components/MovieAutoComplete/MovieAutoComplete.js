import React, { PureComponent } from 'react'
import ApiManager from 'utils/ApiManager'
import Debounce from 'utils/Debounce'

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
          <ul>
          {
            suggestions.map(suggestion => (
              <li key={suggestion.id}>{suggestion.title} ({suggestion.year})</li>
            ))
          }
          </ul>
        </div>
      </div>
    )
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

export default MovieAutoComplete
