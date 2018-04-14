import React, { PureComponent } from 'react'
import './MovieSuggestion.css'

class MovieSuggestion extends PureComponent {
  render() {
    const { movie } = this.props
    return (
      <div className="movie-suggestion" onClick={this.onClick}>
        <img src={movie.poster} alt={movie.title} />
        <div className="movie-info">
          <strong className="movie-title">{movie.title}</strong>
          <span className="movie-year">{movie.year}</span>
        </div>
      </div>
    )
  }
  onClick = () => {
    const { movie, viewMovie } = this.props
    viewMovie(movie)
  }
}

export default MovieSuggestion
