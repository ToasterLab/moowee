import omdb from './omdb'
import csm from './csm'
import rt from './rt'

const toSlug = (title) => title.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-')

const search = async (title) => new Promise((resolve, reject) => {
  omdb(title)
    .then((omdbResults) => {
      const promises = omdbResults.map(omdbResult => {
        const movieTitle = omdbResult.title
        return Promise.all([
          Promise.resolve(omdbResult),
          new Promise((resolve) => csm(movieTitle).then(resolve).catch(resolve)),
          new Promise((resolve) => rt(movieTitle).then(resolve).catch(resolve))
        ])
      })
      Promise.all(promises)
        .then(results => {
          const response = results.map(([omdbResult, csmResult, rtResult]) => {
            return {
              omdb: omdbResult,
              csm: csmResult,
              rt: rtResult
            }
          })
          resolve(response)
        })
        .catch(reject)
    })
    .catch(reject)
})

export default {
  search
}
