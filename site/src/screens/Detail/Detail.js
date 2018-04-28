import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import ApiManager from 'utils/ApiManager'
import MovieInfo from './scenes/MovieInfo/MovieInfo'
import Actors from './scenes/Actors/Actors'
import Reviews from './scenes/Reviews/Reviews'
import ContentRating from './scenes/ContentRating/ContentRating'
import './Detail.css'

class DetailScreen extends Component {
  constructor () {
    super()
    this.state = {
      rt: {
        actors: [],
        author: [],
        director: [],
        genre: [],
        aggregateRating: {},
        review: []
      },
      csm: {
        kidsSay: '',
        age: '',
        parentsSay: ''
      }
    }
  }
  componentDidMount () {
    const { title } = this.props.match.params
    this.setState({ movie: {
      ...this.state.movie,
      title
    } })
    this.fetchMovie(title)
  }
  render () {
    const { rt, csm } = this.state
    const { match: { url: matchUrl } } = this.props
    return (
      <div className="detail-screen">
        <div className="header">
          <NavLink to={`/`}>{'< '}BACK</NavLink>
          <h1 className="movie-title">{rt.title}</h1>
          <div className="tabs">
            <NavLink exact to={`${matchUrl}`} activeClassName="active">INFO</NavLink>
            <NavLink to={`${matchUrl}/actors/`} activeClassName="active">ACTORS</NavLink>
            <NavLink to={`${matchUrl}/reviews/`} activeClassName="active">REVIEWS</NavLink>
            <NavLink to={`${matchUrl}/content-rating/`} activeClassName="active">RATING</NavLink>
          </div>
        </div>
        <div className="content">
          <Route
            exact
            path="/movie/:title/"
            render={props => <MovieInfo {...{ ...props, rt }} />}
          />
          <Route
            exact
            path="/movie/:title/actors"
            render={props => <Actors {...{ ...props, actors: rt.actors }} />}
          />
          <Route
            exact
            path="/movie/:title/reviews"
            render={props => <Reviews {...{ ...props, reviews: rt.review }} />}
          />
          <Route
            exact
            path="/movie/:title/content-rating"
            render={props => <ContentRating {...{ ...props, csm }} />}
          />
        </div>
      </div>
    )
  }
  fetchMovie = async title => {
    let rt = {}
    let csm = {}
    try {
      [rt, csm] = await Promise.all([
        ApiManager.getRTInfo(title),
        ApiManager.getCSMInfo(title)
      ])
    } catch (error) {
      window.alert('Could not fetch movie')
      console.error(error)
    }
    console.log(csm)
    this.setState({ rt, csm })
  }
}

export default DetailScreen
