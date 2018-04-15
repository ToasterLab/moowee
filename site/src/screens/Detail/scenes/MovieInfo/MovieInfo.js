import React from 'react'
import Rating from 'components/Rating/Rating'
import ItemList from 'components/ItemList/ItemList'
import './MovieInfo.css'

const MovieInfo = ({ rt }) => (
  <div className="movie-info">
    <img src={rt.image} alt={rt.title} />
    <Rating
      className="rating"
      rating={rt.aggregateRating}
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
)

export default MovieInfo
