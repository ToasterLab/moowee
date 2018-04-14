import rp from 'request-promise-native'
import cheerio from 'cheerio'

const url = 'https://www.commonsensemedia.org'

const transformTitle = title => title.replace(/[^a-z0-9+]+/gi, '-').toLowerCase()
const determineRating = cheerioObj => {
  const objClass = cheerioObj.attr('class')
  if (!objClass) {
    throw Error('Rating not found')
  }
  for (let i = 0; i < 6; i++) {
    const rating = `content-grid-${i}`
    if (objClass.indexOf(rating) >= 0) {
      return i
    }
  }
}

const fetchHtml = input => new Promise((resolve, reject) => {
  const title = transformTitle(input)
  rp(`${url}/movie-reviews/${title}`)
    .then(htmlResult => {
      resolve(extractData(htmlResult))
    })
    .catch(err => reject(err))
})

const extractData = htmlResult => {
  let $ = cheerio.load(htmlResult)
  return {
    age: $('.field-name-field-review-recommended-age .csm-green-age').text(),
    parentsSay: $('.user-review-statistics.adult .age').text(),
    kidsSay: $('.user-review-statistics.child .age').text(),
    oneLiner: $('.field-name-field-one-liner').text(),
    parentsNeedToKnow: $('.field-name-field-parents-need-to-know').text(),
    inThisMovie: {
      message: {
        rating: determineRating($('#content-grid-item-message .field_content_grid_rating')),
        text: $('#content-grid-item-message .field-name-field-content-grid-rating-text').text()
      },
      violence: {
        rating: determineRating($('#content-grid-item-violence .field_content_grid_rating')),
        text: $('#content-grid-item-violence .field-name-field-content-grid-rating-text').text()
      },
      /* model: {
        rating: determineRating($('#content-grid-item-role_model .field_content_grid_rating')),
        text: $('#content-grid-item-role_model .field-name-field-content-grid-rating-text').text()
      }, */
      sex: {
        rating: determineRating($('#content-grid-item-sex .field_content_grid_rating')),
        text: $('#content-grid-item-sex .field-name-field-content-grid-rating-text').text()
      },
      language: {
        rating: determineRating($('#content-grid-item-language .field_content_grid_rating')),
        text: $('#content-grid-item-language .field-name-field-content-grid-rating-text').text()
      },
      consumerism: {
        rating: determineRating($('#content-grid-item-consumerism .field_content_grid_rating')),
        text: $('#content-grid-item-consumerism .field-name-field-content-grid-rating-text').text()
      },
      drugs: {
        rating: determineRating($('#content-grid-item-drugs .field_content_grid_rating')),
        text: $('#content-grid-item-drugs .field-name-field-content-grid-rating-text').text()
      }
    },
    familyTopics: $('.field-name-field-family-topics').text()
  }
}

export default fetchHtml
