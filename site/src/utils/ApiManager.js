import axios from 'axios'
import qs from 'query-string'
import OMDbMovie from 'models/OMDbMovie'

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
    return movies.data.result.map(movieData => new OMDbMovie(movieData))
  }
}

export default ApiManager
