import axios from 'axios'
import qs from 'query-string'

const request = axios.create({
  baseURL: 'http://localhost:8000'
})

class ApiManager {
  static searchMovies = async query => {
    const queryString = qs.stringify({ title: query})
    let movies = []
    try {
      movies = await request.get(`/OMDb?${queryString}`)
    } catch (err) {
      console.error(err)
    }
    if(movies.hasOwnProperty('data') && movies.data.hasOwnProperty('result') &&
       Array.isArray(movies.data.result)){
      return movies.data.result
    }
    return []
  }
  static getRTInfo = async movieTitle => {
    const queryString = qs.stringify({ title: movieTitle })
    let movie = {}
    try {
      movie = await request.get(`/RottenTomatoes?${queryString}`)
    } catch (err) {
      console.error(err)
    }
    if(movie.hasOwnProperty('data') && movie.data.hasOwnProperty('result')){
      return movie.data.result
    }
    return {}
  }
}

export default ApiManager
