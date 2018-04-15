import csm from '../lib/csm'
import rt from '../lib/rt'
import omdb from '../lib/omdb'
import moowee from '../lib/moowee'

const invalidTitle = title => !title || typeof title !== 'string' || title.length === 0

const enableCORS = response => {
  response.set('Access-Control-Allow-Origin', '*')
  response.set('Access-Control-Allow-Methods', 'GET, POST')
}

export const CommonSenseMedia = (request, response) => {
  enableCORS(response)
  const { title } = request.query
  if (invalidTitle(title)) {
    response.status(400).json({
      code: 400,
      error: 'Invalid title'
    })
    return
  }
  csm(title)
    .then(result => {
      response.status(200).json({
        code: 200,
        result
      })
    })
    .catch(error => {
      response.status(500).json({
        code: 500,
        error
      })
    })
}

export const RottenTomatoes = (request, response) => {
  enableCORS(response)
  const { title } = request.query
  if (invalidTitle(title)) {
    response.status(400).json({
      code: 400,
      error: 'Invalid title'
    })
    return
  }
  rt(title)
    .then(result => {
      response.status(200).json({
        code: 200,
        result
      })
    })
    .catch(error => {
      response.status(500).json({
        code: 500,
        error
      })
    })
}

export const OMDb = (request, response) => {
  enableCORS(response)
  const { title } = request.query
  if (invalidTitle(title)) {
    response.status(400).json({
      code: 400,
      error: 'Invalid title'
    })
    return
  }
  omdb(title)
    .then(result => {
      response.status(200).json({
        code: 200,
        result
      })
    })
    .catch(error => {
      response.status(500).json({
        code: 500,
        error
      })
    })
}

export const Moowee = (request, response) => {
  enableCORS(response)
  const { title } = request.query
  if (invalidTitle(title)) {
    response.status(400).json({
      code: 400,
      error: 'Invalid title'
    })
    return
  }
  moowee.search(title)
    .then(result => {
      response.status(200).json({
        code: 200,
        result
      })
    })
    .catch(error => {
      response.status(500).json({
        code: 500,
        error
      })
    })
}

export default {
  CommonSenseMedia,
  RottenTomatoes,
  OMDb,
  Moowee
}
