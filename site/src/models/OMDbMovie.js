class OMDbMovie {
  constructor(movieData){
    this.title = movieData.title
    this.year = movieData.year
    this.id = movieData.imdbID
    this.type = movieData.type
    this.poster = movieData.poster
  }
}

export default OMDbMovie