import axios from 'axios'

const request = axios.create({
  baseURL: 'https://us-central1-general-192213.cloudfunctions.net'
})

class ApiManager {
  static searchMovies = async query => {
    let movies = []
    try {
      movies = await request.get(`/OMDb?title=${query}`)
    } catch (err) {
      console.error(err)
    }
    if (movies.hasOwnProperty('data') && movies.data.hasOwnProperty('result') &&
       Array.isArray(movies.data.result)) {
      return movies.data.result
    }
    return []
  }
  static getRTInfo = async movieTitle => {
    let movie = {}
    try {
      movie = await request.get(`/RottenTomatoes?title=${movieTitle}`)
    } catch (err) {
      console.error(err)
    }
    if (movie.hasOwnProperty('data') && movie.data.hasOwnProperty('result')) {
      return movie.data.result
    }
    return {}
  }
  static getCSMInfo = async movieTitle => {
    let movie = {}
    try {
      movie = await request.get(`/CommonSenseMedia?title=${movieTitle}`)
    } catch (err) {
      console.error(err)
    }
    if (movie.hasOwnProperty('data') && movie.data.hasOwnProperty('result')) {
      return movie.data.result
    }
    return {}
  }
}

export default ApiManager
