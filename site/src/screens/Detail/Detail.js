import React, { Component } from 'react'
import qs from 'query-string'
import ApiManager from 'utils/ApiManager'
import ItemList from './components/ItemList/ItemList'
import Rating from './components/Rating/Rating'
import Actors from './components/Actors/Actors'
import './Detail.css'

class DetailScreen extends Component {
  constructor(){
    super()
    this.state = {
      rt: {
        actors: [],
        author: [],
        director: [],
        genre: [],
        aggregateRating: {},
      }
    }
  }
  componentDidMount(){
    const queryString = this.props.location.search
    const { title } = qs.parse(queryString)
    this.setState({ movie: {
      ...this.state.movie,
      title
    }})
    this.fetchMovie(title)
  }
  render(){
    const { rt } = this.state
    return (
      <div className="detail-screen">
        <div className="rotten-tomatoes">
          <h1>{rt.title}</h1>
          <img src={rt.image} alt={rt.title} />
          <Rating
            className="rating"
            rating={rt.aggregateRating}
          />
          <Actors
            actors={rt.actors}
          />
          <ItemList
            className="genres"
            label="Genres: "
            items={rt.genre.map(genre => ({ name: genre }))}
          />
          <ItemList
            className="authors"
            label="Written By: "
            items={rt.author}
          />
          <ItemList
            className="directors"
            label="Directed By: "
            items={rt.director}
          />
          <ItemList
            className="production-company"
            label="Produced By: "
            items={rt.productionCompany ? [ { name: rt.productionCompany } ] : []}
          />
        </div>
      </div>
    )
  }
  fetchMovie = async title => {
    let rt = {}
    try {
      rt = await ApiManager.getRTInfo(title)
    } catch(error){
      console.error(error)
    }
    console.log(rt)
    this.setState({ rt })
  }
}

export default DetailScreen
