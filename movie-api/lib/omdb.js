import rp from 'request-promise-native'

const API_KEY = process.env.OMDB_API_KEY
const ENDPOINT = 'http://www.omdbapi.com/'

const fetchJson = movieTitle => new Promise((resolve, reject) => {
  const qs = { apikey: API_KEY, type: 'movie', s: movieTitle }
  rp({ url: ENDPOINT, qs })
    .then(jsonData => {
      const result = JSON.parse(jsonData)
      const { Search, totalResults, Response } = result
      if (Response === 'True') {
        resolve(Search.map(movie => {
          const { Title, Year, imdbID, Type, Poster } = movie
          return {
            title: Title,
            year: Year,
            imdbID,
            type: Type,
            poster: Poster
          }
        }))
      }
      reject(result.Error)
    })
    .catch(reject)
})

export default fetchJson
